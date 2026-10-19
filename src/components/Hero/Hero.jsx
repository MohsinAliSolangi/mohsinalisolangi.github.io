import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from '../../assets/mohsin-portrait.jpg'
import { scrollTo as smoothScrollTo } from '../../lib/lenis'
import SocialIcon from '../SocialIcon/SocialIcon'
import styles from './Hero.module.css'

gsap.registerPlugin(ScrollTrigger)

const EXPERTISE = ['Smart contracts', 'DeFi systems', 'Solana programs', 'Security thinking']
const DOTS = Array.from({ length: 108 }, (_, index) => ({
  x: (((index * 47) % 19) - 9) * 14,
  y: (((index * 31) % 17) - 8) * 13,
}))

const SOCIALS = [
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohsinalisolangi' },
  { name: 'upwork', label: 'Upwork', href: 'https://www.upwork.com/freelancers/~011ce6368cb2570ed4' },
  { name: 'github', label: 'GitHub', href: 'https://github.com/MohsinAliSolangi' },
  { name: 'freelancer', label: 'Freelancer', href: 'https://www.freelancer.com/u/Mohsinalisolang2' },
  { name: 'email', label: 'Email', href: 'mailto:mohsinali.solangi789@gmail.com' },
]

export default function Hero() {
  const heroRef = useRef(null)
  const revealRef = useRef([])
  const portraitRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out', stagger: 0.1, delay: 0.15 }
      )

      gsap.fromTo(portraitRef.current, { opacity: 0, scale: 0.9, x: 35 }, {
        opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.25, ease: 'power3.out',
      })

      gsap.to(portraitRef.current, {
        y: 70,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      gsap.to(dotsRef.current, {
        x: index => DOTS[index].x,
        y: index => DOTS[index].y,
        scale: index => 0.15 + (index % 3) * 0.08,
        opacity: 0,
        ease: 'power2.in',
        stagger: { each: 0.002, from: 'center' },
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '65% top', scrub: 0.45 },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.hero} id="hero">
      <div className={styles.portraitStage}>
        <div className={styles.dotField} aria-hidden="true">
          {DOTS.map((_, index) => (
            <span key={index} ref={element => (dotsRef.current[index] = element)} />
          ))}
        </div>
        <div ref={portraitRef} className={styles.portraitWrap}>
          <span className={styles.photoIndex}>PORTRAIT / 001</span>
          <img src={portrait} alt="Mohsin Ali Solangi, blockchain developer and lecturer" className={styles.portrait} />
          <span className={styles.imageCaption}>Builder · Educator · Problem solver</span>
        </div>
      </div>

      <div className={styles.statusRow}>
        <span className={styles.status}><i /> Available for selected Web3 projects</span>
        <span className={styles.chain}>PK / WORKING WORLDWIDE</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Mohsin Ali Solangi · Blockchain Developer</p>
        <h1 className={styles.title}>
          <span className={styles.mask}><span ref={el => (revealRef.current[0] = el)}>I DESIGN</span></span>
          <span className={styles.mask}><span ref={el => (revealRef.current[1] = el)} className={styles.chromeText}>WEB3 SYSTEMS</span></span>
          <span className={styles.mask}><span ref={el => (revealRef.current[2] = el)} className={styles.outline}>THAT MAKE SENSE.</span></span>
        </h1>
        <p className={styles.sub}>
          I help founders turn complex blockchain ideas into secure, usable products—from the first architecture decision to a live dApp.
        </p>
        <div className={styles.actionRow}>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary} onClick={event => { event.preventDefault(); smoothScrollTo('#contact') }}>
              Discuss your project <span>↗</span>
            </a>
            <a href="#projects" className={styles.secondary} onClick={event => { event.preventDefault(); smoothScrollTo('#projects') }}>
              See selected work
            </a>
          </div>
          <div className={styles.socials} aria-label="Professional profiles">
            {SOCIALS.map(social => (
              <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={social.label} title={social.label}>
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.expertise}>
        <span className={styles.label}>Core expertise / 01—04</span>
        {EXPERTISE.map((item, index) => <span key={item}>{String(index + 1).padStart(2, '0')} {item}</span>)}
      </div>
    </section>
  )
}
