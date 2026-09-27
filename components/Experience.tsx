"use client";

import { useRef } from "react";
import { experience } from "@/lib/data";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const jobs = gsap.utils.toArray<HTMLElement>(".job");
      if (prefersReducedMotion()) {
        gsap.set(".timeline-progress", { scaleY: 1 });
        jobs.forEach((j) => j.classList.add("is-active"));
        return;
      }
      // The line draws down the timeline as you scroll through the career.
      gsap.to(".timeline-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 70%", scrub: 0.4 },
      });
      jobs.forEach((job) =>
        ScrollTrigger.create({
          trigger: job,
          start: "top 70%",
          onEnter: () => job.classList.add("is-active"),
          onLeaveBack: () => job.classList.remove("is-active"),
        })
      );
    },
    { scope: root }
  );

  return (
    <section className="section" id="experience" ref={root} aria-labelledby="experience-title">
      <div className="container">
        <h2 className="section-title" id="experience-title">
          Thirteen years, eight teams
        </h2>
        <div className="timeline">
          <span className="timeline-track" aria-hidden="true" />
          <span className="timeline-progress" aria-hidden="true" />
          <ol className="timeline-list">
          {experience.map((job) => (
            <li className="job" key={`${job.company}-${job.period}`}>
              <div className="job-period">{job.period}</div>
              <div>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">
                  {job.company}
                  {job.note && <small> ({job.note})</small>}
                </p>
                <ul className="job-points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
