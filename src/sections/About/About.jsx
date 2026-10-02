import profilePhoto from '../../assets/zozypic.jpg'
import { skills } from '../../data/skills.js'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-img">
        <img src={profilePhoto} alt="Zhra profile picture" className="profile-photo" />
      </div>

      <div className="about-text">
        <span className="eyebrow">About me</span>
        <h2>
          A little about <span className="highlight">my journey</span>
        </h2>
        <p>
          I'm a frontend developer passionate about building responsive and user-friendly
          websites. I enjoy transforming ideas into real projects, exploring new technologies,
          and continuously improving my skills.
        </p>
        <p>
          My goal is to create modern web experiences that are both functional and visually
          engaging.
        </p>

        <ul className="skills">
          {skills.map((skill) => (
            <li className="chip" key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About