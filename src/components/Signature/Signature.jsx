import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NetworkGlyph from '../NetworkGlyph/NetworkGlyph'
import styles from './Signature.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Signature() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const glyphRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 0.6,
          pin: true,
        },
      })
      tl.to(bgRef.current, { backgroundColor: '#FF4800', ease: 'none' }, 0)
        .to(glyphRef.current, { color: '#0a0a0a', opacity: 1, scale: 1.12, ease: 'none' }, 0)
        .to(textRef.current, { opacity: 1, y: 0, ease: 'none' }, 0.1)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={bgRef} className={styles.bg}>
        <div ref={glyphRef} className={styles.glyphWrap}>
          <NetworkGlyph className={styles.glyph} glow />
        </div>
        <div ref={textRef} className={styles.content} style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <p className={styles.eyebrow}>The Standard I Hold</p>
          <h2 className={styles.line}>
            ZERO EXPLOITS.<br />ZERO SHORTCUTS.
          </h2>
          <p className={styles.sub}>
            72+ contracts shipped across 10+ chains. $1M+ raised for clients. Not one security incident on record — because every line is written like the audit already found it.
          </p>
        </div>
      </div>
    </section>
  )
}
