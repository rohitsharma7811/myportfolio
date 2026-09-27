import { projects } from "@/lib/data";

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 — Work</span>
          <h2 className="section-title" id="work-title">
            Featured Projects
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a className="project-card" href={p.url} target="_blank" rel="noopener noreferrer" key={p.url}>
              <div className={`project-thumb thumb-${i % 4}`}>
                {p.image && <img src={p.image} alt={`${p.name} homepage`} loading="lazy" />}
                <div className="project-overlay">
                  <span className="proj-link">Visit site</span>
                </div>
              </div>
              <div className="project-body">
                {p.tags.length > 0 && (
                  <div className="proj-chips" aria-label="Built with">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
                <h3>{p.name}</h3>
                <span className="work-domain">{domain(p.url)}</span>
                <p>{p.summary}</p>
              </div>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
