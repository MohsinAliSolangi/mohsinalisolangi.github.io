import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './Stack.module.css'

const CARDS = [
  { label: 'Smart Contracts', name: 'Solidity', desc: 'ERC-20, ERC-721, ERC-1155, custom protocols. Audit-ready code with OpenZeppelin standards.' },
  { label: 'Solana Programs', name: 'Rust + Anchor', desc: 'Native Solana programs and Anchor framework for high-performance on-chain logic.' },
  { label: 'Blockchain Networks', name: 'EVM Chains', desc: 'Ethereum, Polygon, BSC, Arbitrum, Base, Optimism, Avalanche. Multi-chain native deployments.' },
  { label: 'Token Launches', name: 'ICO / IDO', desc: 'Full presale platforms with vesting, whitelist, referral, tiered pricing. $1M+ raised.' },
  { label: 'Frontend', name: 'React.js', desc: 'dApp frontends with ethers.js, wagmi, RainbowKit. React Native for mobile dApps.' },
  { label: 'Backend + Security', name: 'Node.js + AWS', desc: 'APIs, bots, indexers, blockchain listeners. AWS KMS-secured private key management.' },
]

export default function Stack() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.card}` })
  return (
    <section className={styles.section} id="stack" ref={ref}>
      <p className={styles.eyebrow}><span /> Technical Stack</p>
      <h2 className={styles.title}>
        TOOLS I USE<br /><span className={styles.orange}>TO SHIP</span>
      </h2>
      <div className={styles.grid}>
        {CARDS.map(c => (
          <div key={c.name} className={styles.card}>
            <div className={styles.cardLabel}>{c.label}</div>
            <div className={styles.cardName}>{c.name}</div>
            <div className={styles.cardDesc}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
