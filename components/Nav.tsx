"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" aria-label={`${profile.name}, back to top`}>
          RS<span>.</span>
        </a>
        <nav aria-label="Main">
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li>
              <a className="btn btn-ghost" href="#contact">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
