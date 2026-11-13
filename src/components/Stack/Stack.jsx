'use client'

import useSectionAnimation from '@/lib/useSectionAnimation'
import TechIcon from '@/components/TechIcon/TechIcon'
import styles from './Stack.module.css'

const GROUPS = [
  { num: '01', title: 'Languages & Core', desc: 'The foundations for secure on-chain and application logic.', items: [['solidity', 'Solidity'], ['rust', 'Rust'], ['javascript', 'JavaScript'], ['typescript', 'TypeScript']] },
  { num: '02', title: 'Application Stack', desc: 'Production interfaces, APIs, backends, and mobile applications.', items: [['react', 'React.js'], ['nextjs', 'Next.js'], ['node', 'Node.js'], ['express', 'Express.js'], ['react', 'React Native'], ['anchor', 'Anchor']] },
  { num: '03', title: 'Contracts & Testing', desc: 'Tooling for contract development, testing, deployment, and review.', items: [['hardhat', 'Hardhat'], ['foundry', 'Foundry'], ['truffle', 'Truffle'], ['remix', 'Remix IDE'], ['security', 'OpenZeppelin'], ['audit', 'Slither'], ['audit', 'MythX']] },
  { num: '04', title: 'Web3 & Wallets', desc: 'Reliable wallet, contract, and protocol integrations across ecosystems.', items: [['ethers', 'ethers.js'], ['wagmi', 'wagmi'], ['web3', 'Web3.js'], ['solanaweb3', 'Solana Web3.js'], ['reown', 'Reown AppKit'], ['metamask', 'MetaMask'], ['thirdweb', 'Thirdweb']] },
  { num: '05', title: 'Token Standards', desc: 'Fungible, NFT, multi-token, vault, and cross-ecosystem standards.', items: [['token', 'ERC-20'], ['nft', 'ERC-721'], ['token', 'ERC-1155'], ['vault', 'ERC-4626'], ['solana', 'SPL Token'], ['token', 'BEP-20']] },
  { num: '06', title: 'Data & Storage', desc: 'Structured data, application state, and decentralized file storage.', items: [['mongoose', 'Mongoose'], ['database', 'MongoDB'], ['mysql', 'MySQL'], ['postgresql', 'PostgreSQL'], ['supabase', 'Supabase'], ['ipfs', 'IPFS'], ['pinata', 'Pinata']] },
  { num: '07', title: 'RPC & Infrastructure', desc: 'Production-grade chain access, indexing, cloud, and key management.', items: [['infura', 'Infura'], ['alchemy', 'Alchemy'], ['moralis', 'Moralis'], ['aws', 'AWS'], ['security', 'AWS KMS'], ['node', 'APIs & Indexers']] },
  { num: '08', title: 'Networks & Security', desc: 'Multi-chain delivery backed by security-minded engineering.', items: [['ethereum', 'Ethereum / EVM'], ['solana', 'Solana'], ['network', 'Polygon'], ['network', 'BNB Chain'], ['network', 'Arbitrum'], ['network', 'Base'], ['security', 'Contract Security']] },
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
