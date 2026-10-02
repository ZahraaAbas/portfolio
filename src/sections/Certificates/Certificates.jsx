import { TbCertificate, TbArrowUpRight } from 'react-icons/tb'
import { certificates } from '../../data/certificates.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Certificates.css'

function Certificates() {
  const [sectionRef, isVisible] = useReveal({ threshold: 0.15 })

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className={`section certificates${isVisible ? ' is-visible' : ''}`}
    >
      <div className="certificates-header">
        <span className="eyebrow certificates-reveal" style={{ '--i': 0 }}>Learning</span>
        <h2 className="certificates-reveal" style={{ '--i': 1 }}>
          Courses &amp; <span className="highlight">certificates</span>
        </h2>
      </div>

      <ul className="certificates-list">
        {certificates.map((certificate, index) => {
          const meta = [certificate.issuer, certificate.date].filter(Boolean).join(' · ')
          const hasSide = certificate.status || certificate.link

          return (
            <li
              key={certificate.title}
              className="certificate certificates-reveal"
              style={{ '--i': index + 2 }}
            >
              <span className="certificate-icon" aria-hidden="true">
                <TbCertificate />
              </span>

              <div className="certificate-body">
                <h3 className="certificate-title">{certificate.title}</h3>
                {meta && <p className="certificate-meta">{meta}</p>}
                {certificate.description && (
                  <p className="certificate-description">{certificate.description}</p>
                )}
              </div>

              {hasSide && (
                <div className="certificate-side">
                  {certificate.status && (
                    <span className="certificate-status">{certificate.status}</span>
                  )}
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      className="certificate-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View credential <TbArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Certificates
