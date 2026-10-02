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

function Navbar() {
  const activeId = useActiveSection(sectionIds)

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#home" className="logo">
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
      </nav>
    </header>
  )
}

export default Navbar