import profilePhoto from '../../assets/zozypic.jpg'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import './Hero.css'

const highlights = [
  { title: 'Clean Code', text: 'Writing readable, maintainable code following best practices.' },
  { title: 'Design Focused', text: 'Combining functionality with thoughtful, attractive design.' },
  { title: 'Always Growing', text: 'Sharpening my skills through real, hands-on projects.' },
]

function Hero() {
  const visualRef = useMagnetic(0.04)
  const primaryBtnRef = useMagnetic(0.25)
  const secondaryBtnRef = useMagnetic(0.25)

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-blob hero-blob--pink" />
        <span className="hero-blob hero-blob--cyan" />
      </div>

      <div className="section hero-inner">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow" style={{ '--i': 0 }}>
              Frontend Developer
            </span>

            <h1 className="hero-title">
              <span className="hero-line">
                <span className="hero-line-inner hero-greeting" style={{ '--i': 1 }}>
                  Hi, I'm <span className="highlight">Zhra</span> —
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner" style={{ '--i': 2 }}>I build clean</span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner" style={{ '--i': 3 }}>digital experiences</span>
              </span>
            </h1>

            <p className="hero-intro" style={{ '--i': 4 }}>
              I turn ideas into responsive, user-friendly websites with clean code and thoughtful
              design. Explore my work and the projects I've built.
            </p>

            <div className="hero-actions" style={{ '--i': 5 }}>
              <a ref={primaryBtnRef} href="#projects" className="btn-fill">View Projects</a>
              <a ref={secondaryBtnRef} href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </div>

          <div className="hero-visual" ref={visualRef}>
            <div className="hero-photo">
              <div className="hero-photo-frame">
                <img src={profilePhoto} alt="Zhra profile picture" />
              </div>
            </div>
          </div>
        </div>

        <ul className="hero-highlights">
          {highlights.map((item, index) => (
            <li className="hero-highlight" key={item.title} style={{ '--i': index + 6 }}>
              <span className="hero-highlight-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero