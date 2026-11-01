import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait480 from '../../assets/mohsin-portrait-halftone-480.webp'
import portrait640 from '../../assets/mohsin-portrait-halftone-640.webp'
import portrait900 from '../../assets/mohsin-portrait-halftone-900.webp'
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
  { name: 'telegram', label: 'Telegram', href: 'https://t.me/mohsinalisolangi' },
  { name: 'discord', label: 'Discord: @mohsinalisolangi', href: 'https://discord.com/app' },
  { name: 'email', label: 'Email', href: 'mailto:mohsinali.solangi789@gmail.com' },
]

export default function Hero() {
  const heroRef = useRef(null)
  const revealRef = useRef([])
  const portraitRef = useRef(null)
  const portraitImageRef = useRef(null)
  const dotsRef = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduceMotion) return

      gsap.fromTo(
        revealRef.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out', stagger: 0.1, delay: 0.15 }
      )

      const portraitExit = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: () => `+=${Math.max(320, window.innerHeight * 0.58)}`,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      })

      portraitExit
        .fromTo(portraitRef.current,
          { clipPath: 'inset(0 0 0% 0)', opacity: 1 },
          { clipPath: 'inset(0 0 16% 0)', opacity: 0, ease: 'power2.in' }
        )
        .fromTo(portraitImageRef.current,
          { scale: 1, yPercent: 0, filter: 'grayscale(1) contrast(1.1) brightness(.96)' },
          { scale: 0.94, yPercent: -3, filter: 'grayscale(1) contrast(1.7) brightness(.58)', ease: 'power2.in' },
          0
        )

      gsap.to(portraitRef.current, {
        y: 70,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      gsap.to(dotsRef.current, {
        x: index => DOTS[index].x * 1.35,
        y: index => DOTS[index].y * 1.35,
        scale: index => 0.08 + (index % 3) * 0.05,
        opacity: 0,
        rotation: index => (index % 2 ? 1 : -1) * (35 + (index % 5) * 12),
        ease: 'power2.in',
        stagger: { each: 0.002, from: 'center' },
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: () => `+=${Math.max(320, window.innerHeight * 0.58)}`,
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
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
          <span className={styles.photoIndex}>HALFTONE / 001</span>
          <img
            ref={portraitImageRef}
            src={portrait640}
            srcSet={`${portrait480} 480w, ${portrait640} 640w, ${portrait900} 900w`}
            sizes="(max-width: 760px) 84vw, (max-width: 1100px) 45vw, 585px"
            width="640"
            height="879"
            fetchPriority="high"
            alt="Mohsin Ali Solangi, blockchain developer and lecturer"
            className={styles.portrait}
          />
          <span className={styles.imageCaption}>A human perspective on Web3</span>
        </div>
      </div>

      <div className={styles.statusRow}>
        <span className={styles.status}><i /> Available for selected Web3 projects</span>
        <span className={styles.chain}>PK / WORKING WORLDWIDE</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Mohsin Ali Solangi · Pakistan-based Blockchain & Web3 Developer</p>
        <h1 className={styles.title}>
          <span className={styles.mask}><span ref={el => (revealRef.current[0] = el)}>I DESIGN</span></span>
          <span className={styles.mask}><span ref={el => (revealRef.current[1] = el)} className={styles.chromeText}>WEB3 SYSTEMS</span></span>
          <span className={styles.mask}><span ref={el => (revealRef.current[2] = el)} className={styles.outline}>THAT MAKE SENSE.</span></span>
        </h1>
        <p className={styles.sub}>
          I help founders in Pakistan and worldwide turn complex blockchain ideas into secure, usable products—from Solidity smart contracts and Solana programs to complete DeFi platforms and live dApps.
        </p>
        <div className={styles.actionRow}>
          <div className={styles.actions}>
            <a href="/free-blockchain-consultation/" className={styles.primary}>
              Free blockchain consultation <span>↗</span>
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
