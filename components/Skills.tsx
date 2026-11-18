import { skills } from "@/lib/data";

const icons = [
  // Frontend Development
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // Core Web
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // CMS & Landing Pages
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>,
  // Design
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <path d="M17.5 10 8 19.5 3 21l1.5-5L14 6" />
  </svg>,
];

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          What I work with
        </h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={s.group}>
              <div className="sk-icon">{icons[i % icons.length]}</div>
              <h3>{s.group}</h3>
              <p>{s.description}</p>
              <p className="sk-impact">{s.impact}</p>
              <ul className="sk-tags" aria-label={`${s.group} tools`}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
