import { Suspense, lazy, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollTo as smoothScrollTo } from '../../lib/lenis'
import styles from './Hero.module.css'

gsap.registerPlugin(ScrollTrigger)

const ThreeBackground = lazy(() => import('../ThreeBackground/ThreeBackground'))

const KEYWORDS = [
  { w: 'SOLIDITY', top: '10%', left: '44%' },
  { w: 'RUST', top: '18%', left: '64%' },
  { w: 'ZERO EXPLOITS', top: '27%', left: '38%' },
  { w: 'EVM', top: '36%', left: '68%' },
  { w: 'MAINNET', top: '46%', left: '48%' },
  { w: 'SOLANA', top: '56%', left: '32%' },
  { w: '$1M+ RAISED', top: '64%', left: '62%' },
  { w: 'DEFI', top: '73%', left: '42%' },
  { w: 'ANCHOR', top: '13%', left: '28%' },
  { w: 'AUDIT-READY', top: '82%', left: '58%' },
]

export default function Hero() {
  const wordsRef = useRef([])
  const heroRef = useRef(null)
  const bgTextRef = useRef(null)
  const wordCloudRef = useRef(null)
  const canvasWrapRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      wordsRef.current,
      { yPercent: 130, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.15 }
    )

    const ctx = gsap.context(() => {
      const scrollOpts = { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to(bgTextRef.current, { y: 140, ease: 'none', scrollTrigger: scrollOpts })
      gsap.to(wordCloudRef.current, { y: -90, opacity: 0.3, ease: 'none', scrollTrigger: scrollOpts })
      gsap.to(canvasWrapRef.current, { opacity: 0.15, ease: 'none', scrollTrigger: scrollOpts })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.hero} id="hero">
      <div ref={canvasWrapRef} className={styles.canvasWrap}>
        <Suspense fallback={null}>
          <ThreeBackground className={styles.canvas} />
        </Suspense>
      </div>
      <div className={styles.scanline} aria-hidden />
      <div ref={bgTextRef} className={styles.bgText} aria-hidden>WEB3</div>

      <div ref={wordCloudRef} className={styles.wordCloud} aria-hidden>
        {KEYWORDS.map((k) => (
          <span key={k.w} className={styles.floatWord} style={{ top: k.top, left: k.left }}>
            {k.w}
          </span>
        ))}
      </div>

      <div className={styles.statsRight}>
        {[
          { val: '72', sup: '+', label: 'Projects Delivered' },
          { val: '$1M', sup: '+', label: 'Raised for Clients' },
          { val: '3', sup: '+', label: 'Years in Web3' },
        ].map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statVal}>{s.val}<span>{s.sup}</span></div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Blockchain Engineer · CTO at Chainmint · Karachi, PK</p>
        <h1 className={styles.title}>
          <span className={styles.wordMask}>
            <span ref={el => (wordsRef.current[0] = el)} className={styles.kineticWord}>MOHSIN</span>
          </span><br />
          <span className={styles.wordMask}>
            <span ref={el => (wordsRef.current[1] = el)} className={`${styles.kineticWord} ${styles.orange}`}>ALI</span>
          </span><br />
          <span className={styles.wordMask}>
            <span ref={el => (wordsRef.current[2] = el)} className={`${styles.kineticWord} ${styles.thin}`}>SOLANGI</span>
          </span>
        </h1>
        <p className={styles.sub}>
          Solidity · Rust · Solana · EVM<br />
          Token Launch · DeFi · NFT · Smart Contracts
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); smoothScrollTo('#projects') }}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnGhost}
            onClick={e => { e.preventDefault(); smoothScrollTo('#contact') }}>
            Let's Build →
          </a>
        </div>
      </div>
    </section>
  )
}
