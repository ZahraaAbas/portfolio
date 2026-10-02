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
                'Screenshot coming soon'
              )}
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects