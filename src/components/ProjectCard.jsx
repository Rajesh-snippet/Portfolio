function AgroThumb({ stats }) {
  return (
    <div className="mock-terminal agro">
      <div className="mock-head">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span>AgroFarmer — Disease Advisor</span>
      </div>
      <div className="mock-title">Rice Disease Intelligence</div>
      <div className="mock-lines">
        <div className="line">model: yolov8n-cls</div>
        <div className="line">status: ready</div>
      </div>
      <div className="mock-stats">
        {stats.map((s) => (
          <div className="mock-stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResearchThumb({ stats }) {
  return (
    <div className="mock-terminal research">
      <div className="mock-head">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span>ResearchFlow — wire terminal</span>
      </div>
      <div className="mock-title">Multi-Agent Research Pipeline</div>
      <div className="mock-lines">
        <div className="line">agent: researcher → planner → writer</div>
        <div className="line">source: verified, citation-backed</div>
      </div>
      <div className="mock-stats">
        {stats.map((s) => (
          <div className="mock-stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const { title, date, status, description, tags, stats, theme, github } = project

  return (
    <article className="project-card">
      <div className="project-thumb">
  <img
    src={theme === 'agro'
      ? '/assets/agrofarmer.png'
      : '/assets/researchflow.png'
    }
    alt={title}
  />

  {status && <span className="status-badge">{status}</span>}
</div>
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <span className="project-date">{date}</span>
        </div>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((t) => (
            <span className="tag-chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        {github && (
        <a
             className="project-github"
             href={github}
         target="_blank"
          rel="noopener noreferrer"
            >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.11v3.13c0 .3.21.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
</svg>
            </a>
)}
      </div>
    </article>
  )
}