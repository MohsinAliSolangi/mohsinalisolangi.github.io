import { useState, useEffect, useRef } from 'react'
import CoinLogo from '../CoinLogo/CoinLogo'
import { scrollTo as smoothScrollTo } from '../../lib/lenis'
import styles from './Nav.module.css'

const links = ['About', 'Stack', 'Services', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    smoothScrollTo(`#${id.toLowerCase()}`)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); smoothScrollTo(0) }}>
        <CoinLogo className={styles.logoGlyph} />
        <span className={styles.logoType}>MOHSIN<span>.</span>SOLANGI</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => goTo(l)} className={styles.link}>{l}</button>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={styles.cta}
        onClick={event => { event.preventDefault(); goTo('Contact') }}
      >
        Let's Talk
      </a>

      <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span className={menuOpen ? styles.x1 : ''} />
        <span className={menuOpen ? styles.x2 : ''} />
        <span className={menuOpen ? styles.x3 : ''} />
      </button>
      <span ref={progressRef} className={styles.progress} aria-hidden="true" />
    </nav>
  )
}
