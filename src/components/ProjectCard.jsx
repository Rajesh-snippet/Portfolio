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
  const { title, date, status, description, tags, stats, theme } = project

  return (
    <article className="project-card">
      <div className="project-thumb">
        {theme === 'agro' ? <AgroThumb stats={stats} /> : <ResearchThumb stats={stats} />}
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
      </div>
    </article>
  )
}
