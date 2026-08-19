import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-head">
        <span className="eyebrow">02 — Skills</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-wrap">
        {skills.map((s) => (
          <span className="skill-pill" key={s}>
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
