'use client'

import useSectionAnimation from '@/lib/useSectionAnimation'
import styles from './Products.module.css'

const PRODUCTS = [
  {
    label: 'Healthcare · Clinic Operations · Pakistan',
    title: 'Smart Clinic Solution',
    desc: 'Clinics promise appointment times they cannot keep. This system replaces broken time slots with a live token queue — patients only arrive when it is nearly their turn. The waiting room stays empty.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'React Native', 'BullMQ', 'Socket.IO'],
    status: 'live',
    statusLabel: 'Live · v1.0',
    stat: '12min',
    statUnit: 'avg wait time',
    result: 'Live Product',
    href: '/smart-clinic/',
    index: '01',
  },
  {
    label: 'Education · Career Prep · NSCT · Pakistan',
    title: 'SourceAZ',
    desc: 'CS and IT students in Pakistan have no single starting point — no skill benchmark, no structured NSCT prep, no career path guidance. SourceAZ is the free A-Z platform that fixes all of it.',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Vercel'],
    status: 'live',
    statusLabel: 'Live · Free',
    stat: 'Free',
    statUnit: 'always — no paywall',
    result: 'Live Platform',
    href: '/sourceaz/',
    index: '02',
  },
]

export default function Products() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.card}`, y: 30, stagger: 0.08 })

  const setCardPointer = (event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const card = event.currentTarget
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    card.style.setProperty('--pointer-x', `${x * 100}%`)
    card.style.setProperty('--pointer-y', `${y * 100}%`)
    card.style.setProperty('--rotate-x', `${(0.5 - y) * 7.5}deg`)
    card.style.setProperty('--rotate-y', `${(x - 0.5) * 7.5}deg`)
  }

  const resetCardPointer = (event) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <section className={styles.section} id="products" ref={ref}>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}><span /> Original builds / 05</p>
          <h2 className={styles.title}>PROBLEMS I FOUND.<br /><span className={styles.muted}>PRODUCTS I SHIPPED.</span></h2>
        </div>
        <p className={styles.intro}>
          These are not client projects. These are systems I designed and built from scratch — starting from a real problem and ending with a deployed product.
        </p>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <a
            key={p.title}
            className={styles.card}
            href={p.href}
            aria-label={`Read the build: ${p.title}`}
            onPointerMove={setCardPointer}
            onPointerLeave={resetCardPointer}
          >
            <div className={styles.cardSurface}>
              <div className={styles.panel}>
                <div className={styles.panelGrid} />
                <div className={styles.panelStat}>
                  <span className={styles.statVal}>{p.stat}</span>
                  <span className={styles.statUnit}>{p.statUnit}</span>
                </div>
                <span className={`${styles.panelBadge} ${p.status !== 'live' ? styles.panelBadgeDim : ''}`}>
                  {p.statusLabel}
                </span>
                <span className={styles.panelIndex}>{p.index}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.cardLabel}>{p.label}</div>
                <div className={styles.cardTitle}>{p.title}</div>
                <div className={styles.cardDesc}>{p.desc}</div>
                <div className={styles.chips}>
                  {p.stack.map(s => (
                    <span key={s} className={styles.chip}>{s}</span>
                  ))}
                </div>
                <div className={styles.footer}>
                  <span className={styles.result}>{p.result}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
