import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          What I work with
        </h2>
        <div className="skills-grid">
          {skills.map((g) => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
