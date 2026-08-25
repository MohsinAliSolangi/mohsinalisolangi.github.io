import { useState } from 'react'
import styles from './Approach.module.css'

const ITEMS = [
  {
    title: 'SECURITY',
    body: 'Every contract is written as if the audit already happened. OpenZeppelin standards, reentrancy guards, access control from line one — not bolted on after a scare.',
  },
  {
    title: 'VELOCITY',
    body: 'Founders don’t have six months. I scope tight, ship in weekly increments, and keep you looking at working code — not a roadmap slide.',
  },
  {
    title: 'SCALE',
    body: 'Built to survive the chain getting busy. Gas-optimised logic, multi-chain deployments, and architecture that doesn’t need a rewrite at 10x traffic.',
  },
]

export default function Approach() {
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section} aria-label="How I work">
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
            <div className={styles.panel} style={{ maxHeight: isOpen ? '200px' : '0px' }}>
              <p className={styles.body}>{item.body}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
