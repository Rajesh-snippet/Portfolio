import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <span className="eyebrow">03 — Projects</span>
        <span className="projects-badge" style={{ display: 'block', width: 'fit-content', marginTop: 14 }}>
          My Projects
        </span>
        <h2 className="section-title">Check out my work</h2>
        <p className="section-sub">Here goes some of my projects.</p>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}
