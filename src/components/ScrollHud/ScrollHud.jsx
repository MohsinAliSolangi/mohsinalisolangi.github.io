'use client'

import { useEffect, useRef, useState } from 'react'
import { scrollTo as smoothScrollTo } from '@/lib/lenis'
import styles from './ScrollHud.module.css'

const SECTIONS = [
  ['hero', 'Intro'],
  ['about', 'Profile'],
  ['stack', 'Stack'],
  ['services', 'Services'],
  ['projects', 'Work'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
]

export default function ScrollHud() {
  const [active, setActive] = useState(0)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleY(${progress})`
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = SECTIONS.findIndex(([id]) => id === entry.target.id)
        if (index >= 0) setActive(index)
      })
    }, { rootMargin: '-32% 0px -58% 0px', threshold: 0 })

    SECTIONS.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className={styles.hud} aria-label="Page sections">
      <span className={styles.system}>MRS / WEB3</span>
      <div className={styles.track} aria-hidden="true"><span ref={progressRef} /></div>
      <div className={styles.dots}>
        {SECTIONS.map(([id, label], index) => (
          <button
            type="button"
            key={id}
            className={index === active ? styles.active : ''}
            onClick={() => smoothScrollTo(`#${id}`)}
            aria-label={`Go to ${label}`}
            aria-current={index === active ? 'location' : undefined}
          >
            <i />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <span className={styles.count}>{String(active + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}</span>
    </nav>
  )
}
