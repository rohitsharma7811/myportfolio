import { profile, stats, skills } from "@/lib/data";

const chips = skills.flatMap((g) => g.items).slice(0, 8);
const years = stats.find((s) => s.label.includes("year")) ?? stats[0];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 — About</span>
          <h2 className="section-title" id="about-title">
            Who I Am
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-frame">
              <img className="about-photo" src="/rohit-photo.png" alt={profile.name} />
              <div className="img-glow" aria-hidden="true" />
            </div>
            <div className="exp-badge">
              <span className="exp-num">
                {years.value}
                {years.suffix}
              </span>
              <span className="exp-label">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="about-body">
            <h3 className="about-sub">
              Building the future,
              <br />
              one component at a time.
            </h3>
            {profile.about.map((p) => (
              <p className="about-text" key={p}>
                {p}
              </p>
            ))}
            <div className="tag-list">
              {chips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <a className="btn btn-solid" href={profile.cvUrl} download style={{ marginTop: "2rem" }}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
