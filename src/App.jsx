import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Play,
  X,
  Sparkles,
  Cpu,
  Code2,
  Database,
} from "lucide-react";
import { profile, projects, skillGroups, journey } from "./data";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />

      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">R</span>
          <span>RSB</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["about", "skills", "projects", "journey", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {id}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} />
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>
              Building <span>intelligent</span> systems for the real world.
            </h1>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore projects <ArrowDownRight size={18} />
              </a>
              <a className="button ghost" href={profile.resume}>
                Download resume
              </a>
            </div>

            <div className="hero-meta">
              <span><span className="meta-dot" /> {profile.location}</span>
              <span>AI/ML • GenAI • Software</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="orbital-card">
              <div className="orbital-ring ring-one" />
              <div className="orbital-ring ring-two" />
              <div className="orbital-core">
                <BrainCircuit size={62} strokeWidth={1.2} />
                <span>AI</span>
              </div>
              <div className="floating-chip chip-one"><Cpu size={15} /> ML</div>
              <div className="floating-chip chip-two"><Code2 size={15} /> Build</div>
              <div className="floating-chip chip-three"><Database size={15} /> Data</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <SectionHeading eyebrow="01 / ABOUT" title="Engineer with a builder mindset." />
          <div className="about-grid">
            <div className="about-lead">
              <p>
                I'm <strong>{profile.name}</strong>, an Instrumentation Engineering student focused on
                moving deeper into AI/ML and software engineering.
              </p>
              <p>
                My projects sit at the intersection of machine learning, software, and physical-world
                problems — from agricultural computer vision to voice-controlled systems and LLM workflows.
              </p>
            </div>
            <div className="about-facts">
              <Fact label="Focus" value="AI / ML & GenAI" />
              <Fact label="Engineering" value="Instrumentation" />
              <Fact label="Build style" value="Practical & product-minded" />
              <Fact label="Current stack" value="Python + React + FastAPI" />
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading eyebrow="02 / SKILLS" title="Tools I use to turn ideas into systems." />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects that show what I can build."
            description="Each project is presented as a problem → system → result. Demo videos can be added directly to each project card."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </div>

                <button className="project-video" onClick={() => setActiveProject(project)} aria-label={`Play ${project.title} demo`}>
                  <div className="video-placeholder">
                    <Play size={22} fill="currentColor" />
                    <span>WATCH DEMO</span>
                  </div>
                  <div className="video-grid" />
                </button>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> Source
                    </a>
                    <button onClick={() => setActiveProject(project)}>
                      Demo <ExternalLink size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <SectionHeading eyebrow="04 / JOURNEY" title="From instrumentation to intelligent systems." />
          <div className="timeline">
            {journey.map((item, i) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <div className="eyebrow">05 / CONTACT</div>
              <h2>Let's build something useful.</h2>
              <p>Open to internships, collaborations, AI/ML projects, and software engineering opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Email me
              </a>
              <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built with React.</span>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <span className="eyebrow">{activeProject.category}</span>
                <h3>{activeProject.title}</h3>
              </div>
              <button className="close-button" onClick={() => setActiveProject(null)} aria-label="Close">
                <X />
              </button>
            </div>

            <video className="demo-video" controls playsInline poster="/videos/demo-poster.svg">
              <source src={activeProject.demo} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="modal-bottom">
              <p>{activeProject.description}</p>
              <a href={activeProject.github} target="_blank" rel="noreferrer">
                <Github size={16} /> View source
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div className="fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;