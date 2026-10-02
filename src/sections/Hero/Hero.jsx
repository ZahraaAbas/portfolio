import profilePhoto from '../../assets/zozypic.jpg'
import './Hero.css'

const highlights = [
  { title: 'Clean Code', text: 'Writing readable, maintainable code following best practices.' },
  { title: 'Design Focused', text: 'Combining functionality with thoughtful, attractive design.' },
  { title: 'Always Growing', text: 'Sharpening my skills through real, hands-on projects.' },
]

function Hero() {
  return (
    <section id="home" className="section">
      <div className="hero">
        <div className="hero-text">
          <span className="eyebrow">Frontend Developer</span>
          <h1>
            Hi, I'm <span className="highlight">Zhra</span> — I build clean digital experiences
          </h1>
          <p>
            I turn ideas into responsive, user-friendly websites with clean code and thoughtful
            design. Explore my work and the projects I've built.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-fill">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={profilePhoto} alt="Zhra profile picture" className="profile-photo" />
        </div>
      </div>

      <div className="highlights">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero