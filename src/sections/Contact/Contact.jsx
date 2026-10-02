import { useEffect, useRef, useState } from 'react'
import { FaCheck, FaRegCopy, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { contact, socials } from '../../data/socials.js'
import { useReveal } from '../../hooks/useReveal.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import './Contact.css'

function Contact() {
  const [sectionRef, isVisible] = useReveal()
  const copyRef = useMagnetic(0.25)
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard not available: the email link still works.
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact${isVisible ? ' is-visible' : ''}`}
    >
      <div className="contact-bg" aria-hidden="true">
        <span className="contact-grid" />
        <span className="contact-glow" />
      </div>

      <div className="section contact-inner">
        <span className="eyebrow contact-reveal" style={{ '--i': 0 }}>Get in touch</span>

        <h2 className="contact-title">
          <span className="contact-line">
            <span className="contact-line-inner" style={{ '--i': 1 }}>Let's</span>
          </span>{' '}
          <span className="contact-line">
            <span className="contact-line-inner highlight" style={{ '--i': 2 }}>Connect</span>
          </span>
        </h2>

        <p className="contact-text contact-reveal" style={{ '--i': 3 }}>
          Have a question or want to work together? Feel free to reach out.
        </p>

        <div className="contact-email-row contact-reveal" style={{ '--i': 4 }}>
          <a href={`mailto:${contact.email}`} className="contact-email">
            {contact.email}
          </a>
          <button
            type="button"
            ref={copyRef}
            className="contact-copy"
            onClick={copyEmail}
            aria-live="polite"
          >
            {copied ? (
              <>
                <FaCheck aria-hidden="true" /> Copied
              </>
            ) : (
              <>
                <FaRegCopy aria-hidden="true" /> Copy
              </>
            )}
          </button>
        </div>

        <ul className="contact-details contact-reveal" style={{ '--i': 5 }}>
          <li className="contact-detail">
            <FaMapMarkerAlt aria-hidden="true" /> {contact.location}
          </li>
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="contact-detail contact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" /> {social.label}
                  <FaArrowRight className="contact-arrow" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Contact