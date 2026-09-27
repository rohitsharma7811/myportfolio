"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * The hero scene tells the story of the work:
 * it opens as a flat design canvas (a dot grid with artboard frames, like Figma),
 * then the artboards dissolve and the grid lifts into a living 3D surface.
 * Moving the pointer sends a ripple through the surface.
 */

const COLS = 150;
const ROWS = 84;
const GAP = 0.17;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  attribute float aRand;
  varying float vHeight;
  varying float vX;

  void main() {
    vec3 p = position;
    float wave =
        sin(p.x * 0.42 + uTime * 0.55) * 0.85
      + cos(p.y * 0.55 + uTime * 0.40) * 0.65
      + sin((p.x + p.y) * 0.22 + uTime * 0.30) * 0.55;
    float d = distance(p.xy, uMouse);
    float ripple = exp(-d * d * 0.22) * 1.6 * uMouseStrength;
    p.z += (wave + ripple) * uMorph;

    vHeight = p.z;
    vX = p.x;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = 1.5 + aRand * 1.3 + max(p.z, 0.0) * 0.9 * uMorph;
    gl_PointSize = size * uPixelRatio * (13.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorHi;
  varying float vHeight;
  varying float vX;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.15, r);
    vec3 col = mix(uColorA, uColorB, smoothstep(-11.0, 11.0, vX));
    col = mix(col, uColorHi, smoothstep(1.2, 2.8, vHeight) * 0.6);
    float a = uOpacity * soft * (0.45 + 0.75 * smoothstep(-1.8, 2.2, vHeight));
    gl_FragColor = vec4(col, a);
  }
`;

// Artboard frames on the flat canvas, in grid coordinates.
const ARTBOARDS = [
  { x: -9.2, y: 0.4, w: 5.6, h: 3.6 }, // desktop
  { x: -2.4, y: 1.2, w: 2.1, h: 4.2 }, // mobile
  { x: 1.4, y: 0.2, w: 4.0, h: 3.0 }, // tablet
  { x: 7.0, y: 1.6, w: 2.1, h: 4.2 }, // mobile
];

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // No WebGL: the hero still works without the scene.
    }

    const reduced = prefersReducedMotion();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 15);

    const group = new THREE.Group();
    scene.add(group);

    // --- Dot grid ---
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const rand = new Float32Array(count);
    let i = 0;
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        positions[i * 3] = (x - (COLS - 1) / 2) * GAP;
        positions[i * 3 + 1] = (y - (ROWS - 1) / 2) * GAP;
        positions[i * 3 + 2] = 0;
        rand[i] = Math.random();
        i++;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMorph: { value: reduced ? 1 : 0 },
      uOpacity: { value: reduced ? 1 : 0 },
      uPixelRatio: { value: pixelRatio },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uMouseStrength: { value: 0 },
      uColorA: { value: new THREE.Color("#00d4ff") },
      uColorB: { value: new THREE.Color("#0099cc") },
      uColorHi: { value: new THREE.Color("#e8eef6") },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    group.add(points);

    // --- Artboard frames ---
    const frameMaterial = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0 });
    const frames: THREE.LineLoop[] = ARTBOARDS.map(({ x, y, w, h }) => {
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, y, 0.01),
        new THREE.Vector3(x + w, y, 0.01),
        new THREE.Vector3(x + w, y - h, 0.01),
        new THREE.Vector3(x, y - h, 0.01),
      ]);
      const loop = new THREE.LineLoop(g, frameMaterial);
      group.add(loop);
      return loop;
    });

    // Invisible plane used to find the pointer position on the grid.
    const hitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(COLS * GAP * 1.4, ROWS * GAP * 1.6),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    group.add(hitPlane);

    // --- Sizing ---
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Keep the grid filling the screen on narrow (portrait) viewports.
      camera.position.z = camera.aspect < 1 ? 15 + (1 - camera.aspect) * 9 : 15;
      camera.updateProjectionMatrix();
      if (reduced) renderer.render(scene, camera);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // --- Pointer ripple ---
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const targetMouse = new THREE.Vector2(99, 99);
    let pointerActive = false;
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObject(hitPlane)[0];
      if (hit) {
        const local = group.worldToLocal(hit.point.clone());
        targetMouse.set(local.x, local.y);
        pointerActive = true;
      }
    };
    const onPointerLeave = () => (pointerActive = false);
    if (!reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
    }

    // --- Motion: intro, then scroll ---
    const final = { rotX: -0.98, posY: -1.0 };
    const ctx = gsap.context(() => {
      if (reduced) {
        group.rotation.x = final.rotX;
        group.position.y = final.posY;
        return;
      }
      const intro = gsap.timeline({ delay: 0.15 });
      intro
        .to(uniforms.uOpacity, { value: 1, duration: 1.1, ease: "power2.out" })
        .to(frameMaterial, { opacity: 0.75, duration: 0.6, ease: "power1.out" }, 0.3)
        .addLabel("lift", "+=0.35")
        .to(frameMaterial, { opacity: 0, duration: 0.8, ease: "power1.in" }, "lift")
        .to(uniforms.uMorph, { value: 1, duration: 2.4, ease: "power3.inOut" }, "lift")
        .to(group.rotation, { x: final.rotX, duration: 2.4, ease: "power3.inOut" }, "lift")
        .to(group.position, { y: final.posY, duration: 2.4, ease: "power3.inOut" }, "lift");

      // As the hero scrolls away, the camera glides over the surface and the dots dim.
      gsap
        .timeline({
          scrollTrigger: { trigger: mount, start: "top top", end: "bottom top", scrub: 0.8 },
        })
        .to(camera.position, { y: 2.2, ease: "none" }, 0)
        .to(group.rotation, { z: 0.18, ease: "none" }, 0)
        .to(uniforms.uOpacity, { value: 0.25, ease: "none" }, 0);
    });

    // --- Render loop (paused when the hero is off screen) ---
    let raf = 0;
    let visible = true;
    const timer = new THREE.Timer();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      timer.update();
      uniforms.uTime.value = timer.getElapsed();
      uniforms.uMouse.value.lerp(targetMouse, 0.08);
      const s = uniforms.uMouseStrength;
      s.value += ((pointerActive ? 1 : 0) - s.value) * 0.05;
      frames.forEach((f) => (f.visible = frameMaterial.opacity > 0.01));
      renderer.render(scene, camera);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) timer.update();
    });
    io.observe(mount);
    if (!reduced) tick();
    else renderer.render(scene, camera);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      ctx.revert();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      material.dispose();
      frameMaterial.dispose();
      frames.forEach((f) => f.geometry.dispose());
      hitPlane.geometry.dispose();
      timer.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      ScrollTrigger.refresh();
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" aria-hidden="true" />;
}
