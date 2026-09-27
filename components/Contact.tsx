"use client";

import { useState, type FormEvent } from "react";
import { profile, web3formsAccessKey } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3formsAccessKey);
    formData.append("subject", `New message from ${formData.get("name")} via portfolio`);

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
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 className="contact-title" id="contact-title">
          Have a design that needs building?
        </h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-details">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <span>{profile.location}</span>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          <a href={profile.cvUrl} download>
            Download CV (PDF)
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>

          {/* honeypot field to cut down on spam bots, hidden from real users */}
          <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex={-1} autoComplete="off" />

          <button className="contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success" role="status">
              Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status contact-status-error" role="alert">
              Something went wrong sending that. Please email me directly at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </form>

        <footer className="footer">
          <span>© {year} {profile.name}</span>
          <span>Built with Next.js, three.js and GSAP</span>
        </footer>
      </div>
    </section>
  );
}
