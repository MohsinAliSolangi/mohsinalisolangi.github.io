import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Web3 dApp Development Services | Mohsin Ali Solangi',
  description: 'End-to-end Web3 dApp development with React, wallet integration, Solidity contracts, Node.js APIs, indexers and clear transaction experiences.',
  alternates: { canonical: 'https://mohsinalisolangi.me/services/web3-dapp-development/' },
  openGraph: {
    title: 'Web3 dApp Development Services',
    description: 'Wallet-connected decentralized applications built from smart contract to interface.',
    url: 'https://mohsinalisolangi.me/services/web3-dapp-development/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web3 dApp Development',
  url: 'https://mohsinalisolangi.me/services/web3-dapp-development/',
  description: 'End-to-end decentralized application development with smart contracts, wallet integration, React interfaces, APIs and indexers.',
  provider: { '@id': 'https://mohsinalisolangi.me/#person' },
  areaServed: ['Pakistan', 'Worldwide'],
  serviceType: 'Web3 and dApp development',
}

export default function Web3DappPage() {
  return (
    <SeoLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Services / Web3 dApps</p>
          <p className="eyebrow">React · Wallets · Smart contracts</p>
          <h1>WEB3 dAPP<br /><span>DEVELOPMENT.</span></h1>
          <p className="lede">I build complete decentralized applications where smart contracts, wallets, backend services, and interfaces work as one understandable product.</p>
          <a className="cta" href="/#contact">Plan your dApp ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-logo.jpg" alt="Mohsin Ali Solangi Web3 developer logo" />
          <p>Suitable for DeFi dashboards, staking apps, token platforms, DAO tools, NFT products, crowdfunding, swaps, and custom on-chain workflows.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">End-to-end development</p>
          <h2>MORE THAN<br />A WALLET BUTTON.</h2>
          <div className="grid">
            <article className="card"><h3>Product and architecture</h3><p>User journeys, contract boundaries, data requirements, transaction states, permissions, failure handling, and a practical development scope.</p></article>
            <article className="card"><h3>Wallet and contract integration</h3><p>Connection flows, network handling, reads, writes, approvals, signatures, receipts, events, errors, and useful transaction feedback.</p></article>
            <article className="card"><h3>Responsive React interface</h3><p>Clear dashboards and action flows built with React, ethers.js, wagmi, Web3.js, and wallet tooling appropriate to the product.</p></article>
            <article className="card"><h3>Backend and data services</h3><p>Node.js APIs, blockchain listeners, indexers, bots, off-chain data, and secure AWS-based integrations where the system needs them.</p></article>
          </div>
          <div className="chips">
            <span className="chip">React.js</span><span className="chip">Node.js</span><span className="chip">ethers.js</span><span className="chip">wagmi</span><span className="chip">Web3.js</span><span className="chip">AWS</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">User experience</p>
          <h2>MAKE BLOCKCHAIN<br />FEEL SIMPLE.</h2>
          <p className="sectionintro">A strong dApp makes network state, permissions, fees, pending transactions, success, and failure understandable. The goal is not only to connect a contract—it is to help users trust what will happen next.</p>
          <div className="related">
            <a href="/services/smart-contract-development/">Smart contracts</a>
            <a href="/services/defi-token-development/">DeFi & tokens</a>
            <a href="/services/solana-development/">Solana programs</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
