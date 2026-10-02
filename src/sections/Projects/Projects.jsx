import { projects } from '../../data/projects.js'
import { useReveal } from '../../hooks/useReveal.js'
import { useStackProgress } from '../../hooks/useStackProgress.js'
import ProjectPanel from './ProjectPanel.jsx'
import './Projects.css'

function Projects() {
  const [headerRef, isHeaderVisible] = useReveal()
  const stackRef = useStackProgress()

  return (
    <section id="projects" className="section projects">
      <div
        ref={headerRef}
        className={`projects-header${isHeaderVisible ? ' is-visible' : ''}`}
      >
        <span className="eyebrow projects-reveal" style={{ '--i': 0 }}>My work</span>
        <h2 className="projects-reveal" style={{ '--i': 1 }}>
          Recent <span className="highlight">Projects</span>
          <sup className="projects-count">{String(projects.length).padStart(2, '0')}</sup>
        </h2>
        <p className="projects-reveal" style={{ '--i': 2 }}>
          A collection of things I've built while practicing frontend development.
        </p>
      </div>

      <div ref={stackRef} className="projects-stack">
        {projects.map((project, index) => (
          <ProjectPanel
            key={project.title}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects