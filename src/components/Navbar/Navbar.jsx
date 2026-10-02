import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = links.map((link) => link.href.slice(1))
const MOBILE_QUERY = '(max-width: 768px)'

function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector('a')?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    // close the menu if the screen grows to desktop size
    const mobile = window.matchMedia(MOBILE_QUERY)
    const onScreenChange = (event) => {
      if (!event.matches) setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    mobile.addEventListener('change', onScreenChange)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      mobile.removeEventListener('change', onScreenChange)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="navbar">
        <nav className="navbar-inner" aria-label="Main">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="highlight">Zhra</span>
          </a>

          <ul className="nav-links">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive ? 'active' : undefined}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle${isOpen ? ' is-open' : ''}`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </button>
        </nav>
      </header>

      {/* Outside <header> on purpose: its backdrop-filter would trap position: fixed */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${isOpen ? ' is-open' : ''}`}
        aria-label="Mobile"
        inert={!isOpen}
      >
        <ul className="mobile-menu-links">
          {links.map((link, index) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <li key={link.href} style={{ '--i': index }}>
                <a
                  href={link.href}
                  className={isActive ? 'active' : undefined}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-num">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar