import useSectionAnimation from '../../lib/useSectionAnimation'
import TechIcon from '../TechIcon/TechIcon'
import styles from './Stack.module.css'

const GROUPS = [
  {
    num: '01', title: 'Languages', desc: 'The foundations for secure on-chain and application logic.',
    items: [['solidity', 'Solidity'], ['rust', 'Rust'], ['javascript', 'JavaScript']],
  },
  {
    num: '02', title: 'Frameworks', desc: 'Production tooling for programs, interfaces, APIs, and mobile.',
    items: [['react', 'React.js'], ['node', 'Node.js'], ['anchor', 'Anchor'], ['react', 'React Native']],
  },
  {
    num: '03', title: 'Web3 Libraries', desc: 'Reliable wallet, contract, and protocol integrations.',
    items: [['ethers', 'ethers.js'], ['wagmi', 'wagmi'], ['web3', 'Web3.js'], ['security', 'OpenZeppelin']],
  },
  {
    num: '04', title: 'Networks', desc: 'Multi-chain products shaped for the network they run on.',
    items: [['ethereum', 'Ethereum / EVM'], ['solana', 'Solana'], ['network', 'Polygon'], ['network', 'BNB Chain'], ['network', 'Arbitrum'], ['network', 'Base']],
  },
  {
    num: '05', title: 'Cloud & Security', desc: 'Infrastructure and safeguards behind dependable products.',
    items: [['aws', 'AWS'], ['security', 'AWS KMS'], ['security', 'Contract Security'], ['node', 'APIs & Indexers']],
  },
  {
    num: '06', title: 'Product Systems', desc: 'The Web3 use cases I can take from architecture to launch.',
    items: [['network', 'DeFi'], ['nft', 'NFTs'], ['ico', 'ICO / IDO'], ['web3', 'dApps']],
  },
]

export default function Stack() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.card}` })
  return (
    <section className={styles.section} id="stack" ref={ref}>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}><span /> Technical range / 02</p>
          <h2 className={styles.title}>THE RIGHT STACK.<br /><span className={styles.muted}>FOR THE REAL PROBLEM.</span></h2>
        </div>
        <p className={styles.intro}>Languages, frameworks, networks, and infrastructure I combine to design complete Web3 systems—not isolated pieces of code.</p>
      </div>

      <div className={styles.grid}>
        {GROUPS.map(group => (
          <article key={group.title} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.num}>{group.num}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
              </div>
            </div>
            <div className={styles.items}>
              {group.items.map(([icon, label]) => (
                <div key={label} className={styles.tech}>
                  <span className={styles.icon}><TechIcon name={icon} label={label} /></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
