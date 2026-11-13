'use client'

import { useState } from 'react'
import styles from './Approach.module.css'

const ITEMS = [
  {
    title: '01 / DIAGNOSE THE REAL PROBLEM',
    body: 'We clarify the user, the business goal, and the on-chain requirements. You leave this stage with a practical scope—not a pile of features.',
  },
  {
    title: '02 / DESIGN THE SYSTEM',
    body: 'I map contracts, permissions, data flow, integrations, and failure points. Every meaningful trade-off is explained in plain language.',
  },
  {
    title: '03 / BUILD, TEST & SHIP',
    body: 'I build in visible milestones, test the critical paths, and keep you close to the work. You speak directly with the person designing and engineering the solution.',
  },
]

export default function Approach() {
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section} aria-label="How I work">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>A low-friction path to launch / 05</p>
        <h2>HOW WE TURN<br /><span>COMPLEXITY INTO CLARITY.</span></h2>
      </div>
      <div className={styles.list}>
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.title} className={`${styles.row} ${isOpen ? styles.rowOpen : ''}`}>
              <button
                className={styles.header}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.title}>{item.title}</span>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
              </button>
              <div className={styles.panel} style={{ maxHeight: isOpen ? '180px' : '0px' }}>
                <p className={styles.body}>{item.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
