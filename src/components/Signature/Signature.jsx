'use client'

import useSectionAnimation from '@/lib/useSectionAnimation'
import NetworkGlyph from '@/components/NetworkGlyph/NetworkGlyph'
import styles from './Signature.module.css'

const PRINCIPLES = [
  { num: '01', title: 'Understand first', text: 'Find the real user, risk, and business goal before defining the build.' },
  { num: '02', title: 'Design for trust', text: 'Make permissions, trade-offs, and failure points clear from the start.' },
  { num: '03', title: 'Ship what matters', text: 'Build the smallest complete system that creates meaningful value.' },
]

export default function Signature() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.principle}`, y: 22, stagger: 0.08 })

  return (
    <section ref={ref} className={styles.section} aria-labelledby="principle-heading">
      <div className={styles.topline}>
        <p>My operating principle / 04</p>
        <span>Problem → System → Product</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.statement}>
          <p className={styles.kicker}>A better way to build Web3</p>
          <h2 id="principle-heading">
            CLARITY<br />BEFORE <span>COMPLEXITY.</span>
          </h2>
          <p className={styles.copy}>
            The strongest products are not the ones with the most features. They solve the right problem, earn trust, and make difficult technology feel simple.
          </p>
        </div>

        <div className={styles.principles}>
          <NetworkGlyph className={styles.glyph} />
          {PRINCIPLES.map(principle => (
            <article key={principle.num} className={styles.principle}>
              <span className={styles.num}>{principle.num}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
