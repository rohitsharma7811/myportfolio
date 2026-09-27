"use client";

import { useState, type FormEvent } from "react";
import { profile, web3formsAccessKey } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<Status>("idle");
  const hasSocials = Boolean(profile.github || profile.linkedin);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3formsAccessKey);
    if (!formData.get("subject")) {
      formData.set("subject", `New message from ${formData.get("name")} via portfolio`);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 — Contact</span>
          <h2 className="section-title" id="contact-title">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-lead">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create
              something amazing together.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <span className="c-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-item">
                <span className="c-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </div>
              <div className="contact-item">
                <span className="c-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>{profile.location}</span>
              </div>
            </div>

            {hasSocials && (
              <div className="socials">
                {profile.github && (
                  <a className="social" href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {profile.linkedin && (
                  <a className="social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" type="text" placeholder="Your Name" required autoComplete="name" aria-label="Your name" />
              <input name="email" type="email" placeholder="Your Email" required autoComplete="email" aria-label="Your email" />
            </div>
            <input name="subject" type="text" placeholder="Subject" aria-label="Subject" />
            <textarea name="message" placeholder="Your Message" rows={5} required aria-label="Your message" />

            {/* honeypot field to cut down on spam bots, hidden from real users */}
            <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex={-1} autoComplete="off" />

            <button className="btn btn-solid btn-send" type="submit" disabled={status === "sending"}>
              <span>{status === "sending" ? "Sending…" : "Send Message"}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>

            {status === "success" && (
              <p className="contact-status contact-status-success" role="status">
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-status contact-status-error" role="alert">
                Something went wrong sending that. Please email me directly at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </form>
        </div>

        <footer className="footer">
          <div className="footer-inner">
            <span className="footer-logo">
              RS<span className="logo-dot">.</span>
            </span>
            <p className="footer-copy">
              © {year} {profile.name}
            </p>
            <nav className="footer-nav" aria-label="Footer">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}
