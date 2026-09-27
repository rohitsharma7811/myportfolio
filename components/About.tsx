"use client";

import { useRef } from "react";
import { profile, stats } from "@/lib/data";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Numbers count up once, when the facts scroll into view.
      gsap.utils.toArray<HTMLElement>(".fact-value [data-to]").forEach((el) => {
        const to = Number(el.dataset.to);
        const counter = { v: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          v: to,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => (el.textContent = String(Math.round(counter.v))),
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="section" id="about" ref={root} aria-labelledby="about-title">
      <div className="container">
        <h2 className="section-title" id="about-title">
          From design file to working website
        </h2>
        <div className="about-grid">
          <ul className="facts">
            {stats.map((s) => (
              <li className="fact" key={s.label}>
                <span className="fact-value">
                  <span data-to={s.value}>{s.value}</span>
                  {s.suffix}
                </span>
                <span className="fact-label">{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="about-copy">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
