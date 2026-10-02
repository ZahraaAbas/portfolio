import { Fragment } from 'react'
import profilePhoto from '../../assets/zozypic.jpg'
import { skills } from '../../data/skills.js'
import { useReveal } from '../../hooks/useReveal.js'
import { useScrollProgress } from '../../hooks/useScrollProgress.js'
import './About.css'

const statement =
  "I'm a frontend developer passionate about building responsive and user-friendly websites. I enjoy transforming ideas into real projects, exploring new technologies, and continuously improving my skills."

const statementWords = statement.split(' ')

function About() {
  const [sectionRef, isVisible] = useReveal()
  const [statementRef, progress] = useScrollProgress()
  const litCount = Math.round(progress * statementWords.length)

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section about${isVisible ? ' is-visible' : ''}`}
    >
      <div className="about-media">
        <div className="about-photo">
          <img src={profilePhoto} alt="Zhra profile picture" />
        </div>
      </div>

      <div className="about-content">
        <span className="eyebrow about-reveal" style={{ '--i': 0 }}>About me</span>
        <h2 className="about-reveal" style={{ '--i': 1 }}>
          A little about <span className="highlight">my journey</span>
        </h2>

        <p ref={statementRef} className="about-statement about-reveal" style={{ '--i': 2 }}>
          {statementWords.map((word, index) => (
            <Fragment key={index}>
              <span className={index < litCount ? 'is-lit' : undefined}>{word}</span>{' '}
            </Fragment>
          ))}
        </p>

        <p className="about-goal about-reveal" style={{ '--i': 3 }}>
          My goal is to create modern web experiences that are both functional and visually
          engaging.
        </p>

        <ul className="about-skills">
          {skills.map((skill, index) => (
            <li className="about-chip" key={skill} style={{ '--i': index + 4 }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About