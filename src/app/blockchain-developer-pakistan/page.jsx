import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Blockchain Developer in Pakistan — Karachi | Mohsin Ali Solangi',
  description: 'Mohsin Ali Solangi is a blockchain developer based in Karachi, Pakistan. 4+ years building smart contracts, DeFi platforms, Web3 dApps, Solana programs for clients worldwide. Available for hire.',
  keywords: ['blockchain developer Pakistan', 'blockchain developer Karachi', 'smart contract developer Pakistan', 'Web3 developer Karachi', 'Solidity developer Pakistan', 'hire blockchain developer Pakistan', 'DeFi developer Pakistan', 'Solana developer Pakistan'],
  alternates: { canonical: 'https://mohsinalisolangi.me/blockchain-developer-pakistan/' },
  openGraph: {
    title: 'Blockchain Developer in Karachi, Pakistan | Mohsin Ali Solangi',
    description: 'Mohsin Ali Solangi — blockchain and Web3 developer based in Karachi, Pakistan. Smart contracts, DeFi, Solana, dApps. Available worldwide.',
    url: 'https://mohsinalisolangi.me/blockchain-developer-pakistan/',
    type: 'profile',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-blockchain-developer.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Blockchain Development Services in Pakistan',
  url: 'https://mohsinalisolangi.me/blockchain-developer-pakistan/',
  description: 'Blockchain and Web3 development services for smart contracts, dApps, DeFi platforms, tokens and Solana programs.',
  provider: { '@id': 'https://mohsinalisolangi.me/#person' },
  areaServed: [{ '@type': 'Country', name: 'Pakistan' }, { '@type': 'Place', name: 'Worldwide' }],
  serviceType: ['Blockchain development', 'Web3 development', 'Smart contract development', 'dApp development', 'DeFi development', 'Solana development'],
}

export default function BlockchainDeveloperPakistanPage() {
  return (
    <SeoLayout navLinks={[
      { href: '/about-mohsin-ali-solangi/', label: 'About' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/#contact', label: 'Contact' },
    ]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Blockchain Developer Pakistan</p>
          <p className="eyebrow">Pakistan-based · Available worldwide</p>
          <h1>BLOCKCHAIN<br /><span>DEVELOPER IN PAKISTAN.</span></h1>
          <p className="lede">Mohsin Ali Solangi helps founders and product teams design and build Solidity smart contracts, Web3 dApps, DeFi platforms, token systems, and Solana programs—from technical discovery to deployment.</p>
          <a className="cta" href="/#contact">Hire Mohsin for a project ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-blockchain-developer.jpg" alt="Mohsin Ali Solangi, Pakistan-based blockchain developer" />
          <p>4+ years of blockchain development experience with 12 live builds showcased across DeFi, token, DAO, staking, swap, and crowdfunding products.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Blockchain services</p>
          <h2>ONE TECHNICAL PARTNER.<br />FROM IDEA TO LAUNCH.</h2>
          <p className="sectionintro">Instead of separating architecture, smart contracts, backend integration, and frontend delivery across multiple vendors, I can help shape the system and build its connected parts.</p>
          <div className="grid">
            <article className="card"><h3>Solidity smart contract developer</h3><p>ERC-20, ERC-721, staking, vesting, governance, presale, referral, swap, and custom protocol contracts for Ethereum and EVM-compatible chains.</p></article>
            <article className="card"><h3>Web3 dApp developer</h3><p>Wallet connection, contract reads and writes, transaction states, React interfaces, Node.js APIs, indexers, and clear user journeys.</p></article>
            <article className="card"><h3>DeFi and token developer</h3><p>Staking platforms, token launches, ICO and IDO systems, decentralized exchanges, rewards, token utility, and treasury workflows.</p></article>
            <article className="card"><h3>Solana developer</h3><p>Rust and Anchor programs designed around product requirements, account models, permissions, and wallet-connected interfaces.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Why work directly</p>
          <h2>CLEAR THINKING.<br />DIRECT COMMUNICATION.</h2>
          <div className="proof">
            <div><strong>4+</strong><span>Years of Web3 experience</span></div>
            <div><strong>12</strong><span>Portfolio builds</span></div>
            <div><strong>1:1</strong><span>Direct builder communication</span></div>
          </div>
          <div className="faq">
            <article><h3>Can I hire Mohsin from outside Pakistan?</h3><p>Yes. Mohsin works remotely with international founders, agencies, and product teams while remaining based in Pakistan.</p></article>
            <article><h3>Which blockchain networks are supported?</h3><p>Ethereum and EVM networks including Polygon, BNB Chain, Arbitrum, Base, Optimism, and Avalanche, plus Solana.</p></article>
            <article><h3>Does every project receive a formal security audit?</h3><p>Security-minded engineering is part of design and development. For high-value production protocols, a separate independent formal audit is recommended before launch.</p></article>
          </div>
          <div className="related">
            <a href="/services/smart-contract-development/">Smart contract development</a>
            <a href="/services/web3-dapp-development/">dApp development</a>
            <a href="/services/defi-token-development/">DeFi development</a>
            <a href="/services/solana-development/">Solana development</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
