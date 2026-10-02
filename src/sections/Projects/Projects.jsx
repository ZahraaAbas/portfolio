import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="projects-header">
        <span className="eyebrow">My work</span>
        <h2>
          Recent <span className="highlight">Projects</span>
        </h2>
        <p>A collection of things I've built while practicing frontend development.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-thumb">
              {project.image ? (
                <img src={project.image} alt={`${project.title} screenshot`} />
              ) : (
                <span className="project-thumb-title" aria-hidden="true">{project.title}</span>
              )}
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.features?.length > 0 && (
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt aria-hidden="true" /> Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects