"use client";

import { useRef } from "react";
import HeroScene from "@/components/HeroScene";
import { profile, stats } from "@/lib/data";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const splitChars = (word: string) =>
  word.split("").map((ch, i) => (
    <span className="char" key={i} aria-hidden="true">
      {ch}
    </span>
  ));

function AccentRole({ role, accentWord }: { role: string; accentWord: string }) {
  const idx = role.indexOf(accentWord);
  if (idx === -1) return <>{role}</>;
  return (
    <>
      {role.slice(0, idx)}
      <em className="accent">{accentWord}</em>
      {role.slice(idx + accentWord.length)}
    </>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(".hero-badge", { opacity: 0, y: -12, duration: 0.6, ease: "power3.out" })
        .from(".hero-greeting", { opacity: 0, y: 12, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .from(".hero-name .char", { yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.045 }, "-=0.2")
        .from(".hero-role-line", { opacity: 0, y: 16, duration: 0.7, ease: "power3.out" }, "-=0.6")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".hero-actions > *", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out", stagger: 0.1 }, "-=0.55")
        .from(".hero-stats", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .from(".scroll-hint", { opacity: 0, duration: 0.6 }, "-=0.3");

      gsap.utils.toArray<HTMLElement>(".hero-stat-num[data-to]").forEach((el) => {
        const to = Number(el.dataset.to);
        const counter = { v: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          v: to,
          duration: 1.6,
          delay: 1.3,
          ease: "power2.out",
          onUpdate: () => (el.textContent = String(Math.round(counter.v))),
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" id="top" ref={root}>
      <HeroScene />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>Available for new projects</span>
        </div>
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name" aria-label={profile.name}>
          <span className="line">{splitChars(profile.firstName)}</span>
          <span className="line">{splitChars(profile.lastName)}</span>
        </h1>
        <p className="hero-role-line">
          <AccentRole role={profile.role} accentWord="Frontend" />
        </p>
        <p className="hero-desc">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#work">
            View my work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Let&apos;s talk
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-row">
                <span className="hero-stat-num" data-to={s.value}>
                  {s.value}
                </span>
                <span className="hero-stat-plus">{s.suffix}</span>
              </div>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-hint">
        <span className="scroll-hint-label">Scroll</span>
        <span className="scroll-hint-line" aria-hidden="true" />
      </div>
    </section>
  );
}
