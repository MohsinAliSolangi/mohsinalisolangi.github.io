import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './Services.module.css'

const SERVICES = [
  { num: '01', name: 'Smart Contract Development', desc: 'Custom ERC-20, ERC-721, ERC-1155 tokens. Staking, vesting, governance, multisig. Audit-ready Solidity with OpenZeppelin standards and zero security incidents on record.', tag: 'Solidity · EVM' },
  { num: '02', name: 'ICO / IDO Launch Platforms', desc: 'Full presale platforms with whitelist, tiered pricing, vesting schedules, and referral systems. End-to-end from smart contract to frontend. $1M+ raised for clients.', tag: 'Token Launch' },
  { num: '03', name: 'DeFi Protocol Development', desc: 'AMMs, liquidity pools, yield farming, staking vaults, flash loans. Secure, gas-optimised, production-grade DeFi for protocols that need to perform at scale.', tag: 'DeFi · Liquidity' },
  { num: '04', name: 'Solana Programs', desc: 'Native Rust programs and Anchor-based protocols for Solana. SPL tokens, NFT programs, on-chain bots, and CPI integrations for Solana mainnet.', tag: 'Rust · Anchor' },
  { num: '05', name: 'NFT Marketplace & Collections', desc: 'ERC-721 / ERC-1155 collections, minting sites, royalty logic, marketplace contracts, Dutch auction, and reveal mechanics at scale.', tag: 'NFT · Web3 UI' },
  { num: '06', name: 'Full-Stack dApp Development', desc: 'End-to-end Web3 applications. React.js frontend, Node.js backend, smart contract integration, wallet connect, and AWS KMS key management.', tag: 'React · Node' },
]

export default function Services() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.row}`, y: 30, stagger: 0.06 })
  return (
    <section className={styles.section} id="services" ref={ref}>
      <p className={styles.eyebrow}><span /> What I Build</p>
      <h2 className={styles.title}>
        SERVICES<br /><span className={styles.orange}>I DELIVER</span>
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
