import { useState } from 'react'
import useSectionAnimation from '../../lib/useSectionAnimation'
import TechIcon from '../../components/TechIcon/TechIcon'
import styles from './Projects.module.css'

const shot = (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`

const iconFor = (label) => ({
  React: 'react',
  'React.js': 'react',
  'Node.js': 'node',
  Solidity: 'solidity',
  EVM: 'ethereum',
  'ERC-20': 'ethereum',
  'Web3.js': 'network',
  'DAO Tooling': 'network',
}[label] || label.toLowerCase())

const PROJECTS = [
  {
    label: 'DeFi · ICO Platform',
    title: 'NMEICO — Token Presale & Staking',
    desc: 'ICO platform with automated token burn, staking rewards, and a 50/50 purchase lock — half of every buy vests over time while the rest releases instantly. Built-in USDT-denominated MLM referral engine drives organic growth for token launches.',
    stack: ['Solidity', 'React.js', 'Web3.js', 'EVM'],
    result: 'Live Product',
    url: 'https://nmeico.vercel.app/',
  },
  {
    label: 'Web3 · Agency',
    title: 'Chainmint — Web3 Development Agency',
    desc: 'My own agency site for blockchain and Web3 development — smart contracts, DeFi platforms, NFT marketplaces, and crypto-native web apps delivered for clients worldwide.',
    stack: ['React', 'Node.js', 'Solidity', 'Branding'],
    result: 'Live',
    url: 'https://mohsinagency.vercel.app/',
  },
  {
    label: 'DeFi · ICO Template',
    title: 'ICO / Presale + Staking Platform',
    desc: 'White-label "Buy, Stake, Earn" presale platform — reusable ICO infrastructure that can be reskinned and deployed for a new token launch in days, not weeks.',
    stack: ['Solidity', 'React', 'wagmi', 'EVM'],
    result: 'Reusable Template',
    url: 'https://icochainmint.vercel.app/',
  },
  {
    label: 'Crypto · Meme Coin',
    title: 'Meme Coin Launch Template',
    desc: 'A brandable meme-coin landing page — tokenomics, roadmap, and buy-flow sections ready to reskin per client. Deployed live for three separate coin launches from one codebase.',
    stack: ['React', 'Vite', 'Framer Motion'],
    result: '3 Live Deployments',
    url: 'https://mountain-goat-meme-coin.vercel.app/',
  },
  {
    label: 'DAO · Vaults',
    title: 'Doofy Ventures — DAO Vault Platform',
    desc: 'DAO-managed vault platform for pooling and allocating on-chain treasury funds, giving members transparent, governance-controlled access to shared capital.',
    stack: ['Solidity', 'React', 'DAO Tooling', 'EVM'],
    result: 'Live Product',
    url: 'https://dvt-frontend.vercel.app/',
  },
  {
    label: 'DeFi · Trading',
    title: 'GoldX Dashboard',
    desc: 'Investment and trading dashboard for the GoldX ecosystem — portfolio tracking, position management, and market data in one live interface.',
    stack: ['React', 'Web3.js', 'Charting'],
    result: 'Live Product',
    url: 'https://xdashboard-two.vercel.app/',
  },
  {
    label: 'DeFi · Swap',
    title: 'GOLDX — Token Swap',
    desc: 'Token swap interface for GOLDX, an inflation-hedge crypto asset — built for fast, secure on-chain swaps with a wallet-first UX.',
    stack: ['Solidity', 'React', 'wagmi', 'EVM'],
    result: 'Live Product',
    url: 'https://xswap-two.vercel.app/',
  },
  {
    label: 'DeFi · Crowdfunding',
    title: 'FundRize Network — Crypto Crowdfunding',
    desc: 'Wallet-connected crowdfunding platform for launching and backing campaigns on-chain, with secure transaction management from pledge to payout.',
    stack: ['Solidity', 'React', 'Web3.js', 'EVM'],
    result: 'Live Product',
    url: 'https://multicrowdfunding.vercel.app/',
  },
  {
    label: 'DeFi · Staking',
    title: 'StableStake — Stablecoin Staking',
    desc: 'Staking dApp for stablecoin holders — deposit, earn yield, and withdraw through a clean, wallet-connected interface.',
    stack: ['Solidity', 'React', 'EVM'],
    result: 'Live Product',
    url: 'https://stablestake.vercel.app/',
  },
  {
    label: 'DeFi · Staking',
    title: 'StakeUSDT — USDT Staking Platform',
    desc: 'USDT-specific staking platform with lock-up tiers and reward distribution, built for users looking to earn yield on stable holdings.',
    stack: ['Solidity', 'React', 'EVM'],
    result: 'Live Product',
    url: 'https://stakeusdt.vercel.app/',
  },
  {
    label: 'DeFi · Stablecoin',
    title: 'USDBIT — Stablecoin Token',
    desc: 'Stablecoin token project with a live web presence for wallet interaction, balance tracking, and token utility.',
    stack: ['Solidity', 'React', 'ERC-20'],
    result: 'Live Product',
    url: 'https://usdstabletoken.vercel.app/',
  },
  {
    label: 'DeFi · DEX',
    title: 'Multidex — Decentralized Exchange',
    desc: 'Decentralized exchange interface for swapping tokens across pairs with a fast, wallet-connected trading experience.',
    stack: ['Solidity', 'React', 'wagmi', 'EVM'],
    result: 'Live Product',
    url: 'https://multidex.vercel.app/',
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const ref = useSectionAnimation({ itemsSelector: `.${styles.card}`, y: 30, stagger: 0.06 })
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6)
  const setCardPointer = (event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const card = event.currentTarget
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    card.style.setProperty('--pointer-x', `${x * 100}%`)
    card.style.setProperty('--pointer-y', `${y * 100}%`)
    card.style.setProperty('--rotate-x', `${(0.5 - y) * 7.5}deg`)
    card.style.setProperty('--rotate-y', `${(x - 0.5) * 7.5}deg`)
  }
  const resetCardPointer = (event) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }
  return (
    <section className={styles.section} id="projects" ref={ref}>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}><span /> Selected proof / 04</p>
          <h2 className={styles.title}>BUILT, SHIPPED,<br /><span className={styles.muted}>LIVE ON THE WEB.</span></h2>
        </div>
        <p className={styles.intro}>A selection of token, DeFi, DAO, staking, trading, and Web3 product work. Open any build to explore it live.</p>
      </div>
      <div className={styles.grid}>
        {visibleProjects.map((p, index) => (
          <a
            key={p.title}
            className={styles.card}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live project: ${p.title}`}
            onPointerMove={setCardPointer}
            onPointerLeave={resetCardPointer}
          >
            <div className={styles.cardSurface}>
              <div className={styles.preview}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <img
                  src={shot(p.url)}
                  alt={`Screenshot preview of ${p.title}`}
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>
              <div className={styles.body}>
                <div className={styles.cardLabel}>{p.label}</div>
                <div className={styles.cardTitle}>{p.title}</div>
                <div className={styles.cardDesc}>{p.desc}</div>
                <div className={styles.chips}>
                  {p.stack.map(s => (
                    <span key={s} className={styles.chip}>
                      <TechIcon name={iconFor(s)} label={s} />
                      {s}
                    </span>
                  ))}
                </div>
                <div className={styles.footer}>
                  <span className={styles.result}>{p.result}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button type="button" className={styles.showMore} onClick={() => setShowAll(value => !value)}>
        {showAll ? 'Show selected work' : `View all ${PROJECTS.length} projects`} <span>{showAll ? '↑' : '↓'}</span>
      </button>
    </section>
  )
}
