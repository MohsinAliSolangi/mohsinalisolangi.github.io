import useReveal from '../useReveal'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    label: 'DeFi · Presale',
    title: 'ICO / IDO Launch Platform',
    desc: 'Full token presale platform with tiered pricing, whitelist management, vesting schedules, and referral system. Multiple live deployments across EVM chains.',
    stack: ['Solidity', 'React.js', 'EVM', 'wagmi'],
    result: '$1M+ Raised',
  },
  {
    label: 'NFT · Marketplace',
    title: 'NFT Collection & Marketplace',
    desc: '10,000 PFP collection with on-chain reveal, Dutch auction minting, royalty enforcement, and secondary marketplace with escrow logic.',
    stack: ['ERC-721', 'OpenZeppelin', 'IPFS', 'React'],
    result: 'Production Live',
  },
  {
    label: 'Solana · DeFi',
    title: 'Solana Staking Protocol',
    desc: 'Anchor-based staking vault with dynamic APY, multiple reward tokens, lock-up periods, and fully on-chain reward calculation on Solana mainnet.',
    stack: ['Rust', 'Anchor', 'SPL Token', 'Node.js'],
    result: 'Mainnet Deployed',
  },
  {
    label: 'Hyperliquid · Builder Codes',
    title: 'Hyperliquid Fee Platform',
    desc: 'Custom trading terminal using Hyperliquid Builder Codes to charge transaction fees on perpetuals and spot markets on behalf of builders.',
    stack: ['Hyperliquid', 'Builder Codes', 'React', 'Node.js'],
    result: 'In Development',
  },
  {
    label: 'P2P · Marketplace · Pakistan',
    title: 'DoFix — Home Services',
    desc: 'Pakistan-based P2P home services marketplace. Two React Native apps (customer + provider) with dynamic pricing modelled on InDrive/Yango.',
    stack: ['React Native', 'TypeScript', 'Zustand', 'Node.js'],
    result: 'In Development',
  },
  {
    label: 'DeFi · Liquidity',
    title: 'AMM Liquidity Protocol',
    desc: 'Custom AMM with concentrated liquidity pools, LP token rewards, and fee-sharing mechanism. Deployed across multiple EVM chains with active TVL.',
    stack: ['Solidity', 'ERC-20', 'Hardhat', 'Multi-chain'],
    result: 'TVL $250K+',
  },
]

export default function Projects() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="projects">
      <p className={styles.eyebrow}><span /> Featured Work</p>
      <h2 className={styles.title}>
        PROJECTS I'VE<br /><span className={styles.orange}>SHIPPED</span>
      </h2>
      <div
        className={styles.grid}
        ref={ref}
        style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        {PROJECTS.map(p => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardLabel}>{p.label}</div>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardDesc}>{p.desc}</div>
            <div className={styles.chips}>
              {p.stack.map(s => <span key={s} className={styles.chip}>{s}</span>)}
            </div>
            <div className={styles.footer}>
              <span className={styles.result}>{p.result}</span>
              <span className={styles.arrow}>↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
