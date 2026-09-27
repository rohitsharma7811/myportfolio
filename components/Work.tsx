import { projects } from "@/lib/data";

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <h2 className="section-title" id="work-title">
          Selected work
        </h2>
        <ul className="work-list">
          {projects.map((p) => (
            <li className="work-item" key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div>
                  <h3 className="work-name">{p.name}</h3>
                  <span className="work-domain">{domain(p.url)}</span>
                </div>
                <div className="work-meta">
                  <p className="work-summary">{p.summary}</p>
                  {p.tags.length > 0 && (
                    <ul className="work-tags" aria-label="Built with">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="work-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 13L13 5M13 5H6.5M13 5V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
