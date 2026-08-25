import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './About.module.css'

const TAGS = [
  'Solidity', 'Rust', 'Anchor', 'Ethereum', 'Solana', 'EVM', 'DeFi',
  'NFT', 'ICO/IDO', 'React.js', 'Node.js', 'OpenZeppelin', 'AWS KMS', 'Hyperliquid',
]

const METRICS = [
  { num: '72', sup: '+', desc: 'Projects Delivered' },
  { num: '$1M', sup: '+', desc: 'Raised for Clients' },
  { num: '3', sup: '+', desc: 'Years in Web3' },
  { num: '10', sup: '+', desc: 'Active Chains' },
]

export default function About() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.body} p, .${styles.tag}, .${styles.metricBox}` })
  return (
    <section className={styles.section} id="about" ref={ref}>
      <p className={styles.eyebrow}><span /> Who I Am</p>
      <h2 className={styles.title}>
        BLOCKCHAIN IS<br /><span className={styles.orange}>MY DOMAIN</span>
      </h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.body}>
            <p>Blockchain Engineer and Full-Stack Web3 Developer with 3+ years shipping production-grade decentralised systems. Currently CTO at Chainmint while actively freelancing on Upwork and Freelancer.com.</p>
            <p>I don't just write smart contracts — I architect entire token ecosystems. From ICO/IDO launch platforms to DeFi protocols, NFT marketplaces to on-chain bots. $1M+ raised for clients across 72+ delivered projects with zero security incidents.</p>
            <p>Pursuing M.S. in Information Security at NED University, Karachi. Security-first thinking is baked into everything I build.</p>
          </div>
          <div className={styles.tags}>
            {TAGS.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.metricsGrid}>
          {METRICS.map(m => (
            <div key={m.desc} className={styles.metricBox}>
              <div className={styles.metricNum}>{m.num}<span>{m.sup}</span></div>
              <div className={styles.metricDesc}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
