import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './Services.module.css'

const SERVICES = [
  { num: '01', name: 'Smart contract development', desc: 'Custom Solidity contracts for tokens, staking, vesting, governance, presales, and protocol logic—designed around your use case with security considered from day one.', tag: 'Solidity · EVM', href: '/services/smart-contract-development/' },
  { num: '02', name: 'Web3 product & dApp development', desc: 'Complete decentralized application development: wallet connection, on-chain interactions, responsive React interfaces, APIs, and supporting product logic.', tag: 'dApps · Product', href: '/services/web3-dapp-development/' },
  { num: '03', name: 'DeFi & token development', desc: 'DeFi platform and token development for presales, staking, vesting, swaps, token utility, rewards, and other on-chain financial workflows.', tag: 'DeFi · Token launch', href: '/services/defi-token-development/' },
  { num: '04', name: 'Solana program development', desc: 'High-performance Solana programs using Rust and Anchor, integrated with a clear wallet-connected user experience.', tag: 'Rust · Anchor', href: '/services/solana-development/' },
  { num: '05', name: 'Web3 solution architecture', desc: 'Turn a rough blockchain idea into a clear technical plan. I help define scope, map smart contracts and system architecture, and choose a practical path to launch.', tag: 'Architecture · Planning', href: '#contact' },
  { num: '06', name: 'Security-minded blockchain engineering', desc: 'Identify trust boundaries, permissions, private-key risks, and common smart contract vulnerabilities before they become expensive product problems.', tag: 'Security · Review', href: '#contact' },
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
          <a key={s.num} className={styles.row} href={s.href}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.body}>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.desc}>{s.desc}</div>
            </div>
            <div className={styles.tag}>{s.tag}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
