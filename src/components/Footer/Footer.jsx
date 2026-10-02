import { FaArrowUp, FaEnvelope } from 'react-icons/fa'
import { navLinks } from '../../data/navigation.js'
import { contact, socials } from '../../data/socials.js'
import { useReveal } from '../../hooks/useReveal.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import './Footer.css'

function Footer() {
  const [footerRef, isVisible] = useReveal({ threshold: 0.1 })
  const topButtonRef = useMagnetic(0.3)
  const year = new Date().getFullYear()

  return (
    <footer ref={footerRef} className={`footer${isVisible ? ' is-visible' : ''}`}>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="highlight">Zhra</span>
            </a>
            <span className="footer-role">Frontend Developer</span>
          </div>

          <a ref={topButtonRef} href="#home" className="footer-top-btn">
            Back to top <FaArrowUp aria-hidden="true" />
          </a>
        </div>

        <div className="footer-middle">
          <nav aria-label="Footer">
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer-socials">
            <li>
              <a href={`mailto:${contact.email}`} className="footer-social" aria-label="Email">
                <FaEnvelope aria-hidden="true" />
              </a>
            </li>
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="footer-copy">© {year} Zhra — Designed &amp; built with care.</p>
      </div>

      <div className="footer-wordmark" aria-hidden="true">Zhra</div>
    </footer>
  )
}

export default Footer