import { contact, socials } from '../../data/socials.js'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div>
        <span className="eyebrow">Get in touch</span>
        <h2>
          Let's <span className="highlight">Connect</span>
        </h2>
        <p>Have a question or want to work together? Fill out the form or reach out directly.</p>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon" aria-hidden="true">✉</div>
            <div className="info-text">
              <strong>Email</strong>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" aria-hidden="true">📍</div>
            <div className="info-text">
              <strong>Location</strong>
              <span>{contact.location}</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" aria-hidden="true">🔗</div>
            <div className="info-text">
              <strong>Social</strong>
              <span>
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: set action to a form service (e.g. Formspree) so messages are delivered */}
      <form className="contact-form" action="" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@email.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message..." rows="5" required />

        <button type="submit" className="btn-fill">Send Message</button>
      </form>
    </section>
  )
}

export default Contact