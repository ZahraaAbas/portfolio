import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useReveal } from '../../hooks/useReveal.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'

const pad = (number) => String(number).padStart(2, '0')

function ProjectPanel({ project, index, total }) {
  const [panelRef, isVisible] = useReveal({ threshold: 0.15 })
  const visualRef = useMagnetic(0.03)

  return (
    <article
      ref={panelRef}
      data-stack-item
      className={`project-panel${isVisible ? ' is-visible' : ''}`}
      style={{ '--i': index, '--accent': index % 2 ? 'var(--cyan)' : 'var(--pink)' }}
    >
      <div className="project-info">
        <span className="project-index">
          {pad(index + 1)} / {pad(total)}
        </span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

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
            <a href={project.github} className="btn-outline project-btn" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="btn-fill project-btn" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>

      <div className="project-visual" ref={visualRef}>
        <div className="project-window">
          <div className="project-window-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="project-window-body">
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} />
            ) : (
              <span className="project-window-title" aria-hidden="true">{project.title}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectPanel