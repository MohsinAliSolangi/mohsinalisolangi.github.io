import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['About', 'Stack', 'Services', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}>
        M<span>.</span>SOLANGI
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>{l}</button>
          </li>
        ))}
      </ul>

      <a href="mailto:mohsinali.solangi789@gmail.com" className={styles.cta}>Hire Me</a>

      <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span className={menuOpen ? styles.x1 : ''} />
        <span className={menuOpen ? styles.x2 : ''} />
        <span className={menuOpen ? styles.x3 : ''} />
      </button>
    </nav>
  )
}
