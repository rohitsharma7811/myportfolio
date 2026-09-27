"use client";

import { useRef } from "react";
import HeroScene from "@/components/HeroScene";
import { profile } from "@/lib/data";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const splitChars = (word: string) =>
  word.split("").map((ch, i) => (
    <span className="char" key={i} aria-hidden="true">
      {ch}
    </span>
  ));

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(".hero-name .char", {
        yPercent: 115,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.045,
      }).from(
        ".hero-meta > *",
        { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", stagger: 0.12 },
        "-=0.6"
      );
    },
    { scope: root }
  );

  return (
    <section className="hero" id="top" ref={root}>
      <HeroScene />
      <div className="container hero-content">
        <h1 className="hero-name" aria-label={profile.name}>
          <span className="line">{splitChars(profile.firstName)}</span>
          <span className="line">{splitChars(profile.lastName)}</span>
        </h1>
        <div className="hero-meta">
          <div>
            <p className="hero-role">
              {profile.role} at {profile.company}
            </p>
            <p className="hero-intro">{profile.intro}</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#work">
              See my work
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
