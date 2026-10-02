import { skillCategories, allSkills } from '../../data/skills.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Skills.css'

// 4 copies so the marquee loop is seamless on wide screens
const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills]

function handleSpotlight(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}

function Skills() {
  const [sectionRef, isVisible] = useReveal()

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills${isVisible ? ' is-visible' : ''}`}
    >
      <div className="section skills-header">
        <span className="eyebrow skills-reveal" style={{ '--i': 0 }}>Skills</span>
        <h2 className="skills-reveal" style={{ '--i': 1 }}>
          Tools &amp; <span className="highlight">technologies</span>
        </h2>
      </div>

      <div className="skills-marquee" aria-hidden="true">
        <div className="skills-marquee-track">
          {marqueeSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <span className="skills-marquee-item" key={index}>
                <Icon className="skills-marquee-icon" />
                {skill.name}
              </span>
            )
          })}
        </div>
      </div>

      <div className="section skills-grid">
        {skillCategories.map((category, index) => (
          <article
            className="skills-card skills-reveal"
            key={category.title}
            style={{ '--i': index + 2 }}
            onPointerMove={handleSpotlight}
          >
            <header className="skills-card-header">
              <span className="skills-card-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{category.title}</h3>
            </header>

            <ul className="skills-list">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <li className="skills-item" key={skill.name}>
                    <span className="skills-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    {skill.name}
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills