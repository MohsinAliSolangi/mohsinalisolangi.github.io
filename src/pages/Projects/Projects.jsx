import useReveal from '../useReveal'
import styles from './Projects.module.css'

const shot = (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`

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
          <a
            key={p.title}
            className={styles.card}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live project: ${p.title}`}
          >
            <div className={styles.preview}>
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
                {p.stack.map(s => <span key={s} className={styles.chip}>{s}</span>)}
              </div>
              <div className={styles.footer}>
                <span className={styles.result}>{p.result}</span>
                <span className={styles.arrow}>↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
