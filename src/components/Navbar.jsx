const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="nav-brand">
          <span className="dot" />
          RSB
        </a>
        <nav>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
