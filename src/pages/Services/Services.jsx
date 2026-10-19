import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './Services.module.css'

const SERVICES = [
  { num: '01', name: 'Smart contract development', desc: 'Custom contracts for tokens, staking, vesting, governance, and protocol logic — designed around your use case, with security considered from day one.', tag: 'Solidity · EVM' },
  { num: '02', name: 'Web3 product & dApp development', desc: 'A complete user-facing product: wallet connection, on-chain interactions, responsive interface, and the supporting app logic.', tag: 'dApps · Product' },
  { num: '03', name: 'DeFi & token launch solutions', desc: 'Build the mechanics behind your launch or protocol, from presale and token utility to staking and other DeFi features.', tag: 'DeFi · Token launch' },
  { num: '04', name: 'Solana program development', desc: 'On-chain programs for Solana using Rust and Anchor, shaped to fit your product requirements and user experience.', tag: 'Rust · Anchor' },
  { num: '05', name: 'Web3 solution design', desc: 'Turn a rough idea into a clear technical plan. I help define scope, map the architecture, and choose a practical path to launch.', tag: 'Architecture · Planning' },
  { num: '06', name: 'Security-minded engineering', desc: 'Think through trust boundaries, permissions, and common contract risks early — before they become expensive product problems.', tag: 'Security · Review' },
]

export default function Services() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.row}`, y: 30, stagger: 0.06 })
  return (
    <section className={styles.section} id="services" ref={ref}>
      <p className={styles.eyebrow}><span /> Ways we can work together / 03</p>
      <h2 className={styles.title}>
        FROM UNCLEAR IDEA<br /><span className={styles.muted}>TO WORKING PRODUCT.</span>
      </h2>
      <div className={styles.list}>
        {SERVICES.map(s => (
          <div key={s.num} className={styles.row}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.body}>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.desc}>{s.desc}</div>
            </div>
            <div className={styles.tag}>{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
