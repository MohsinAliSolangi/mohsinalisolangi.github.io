import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Smart Contract Development Services | Solidity Developer',
  description: 'Custom Solidity smart contract development for tokens, staking, vesting, presales, governance, swaps and EVM protocols by Mohsin Ali Solangi.',
  alternates: { canonical: 'https://mohsinalisolangi.me/services/smart-contract-development/' },
  openGraph: {
    title: 'Smart Contract Development Services | Mohsin Ali Solangi',
    description: 'Security-minded Solidity contracts and EVM integrations for Web3 products.',
    url: 'https://mohsinalisolangi.me/services/smart-contract-development/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Contract Development',
  url: 'https://mohsinalisolangi.me/services/smart-contract-development/',
  description: 'Custom Solidity smart contract development and EVM integration for tokens, staking, vesting, presales, governance, swaps and protocol logic.',
  provider: { '@id': 'https://mohsinalisolangi.me/#person' },
  areaServed: ['Pakistan', 'Worldwide'],
  serviceType: 'Solidity smart contract development',
}

export default function SmartContractPage() {
  return (
    <SeoLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Services / Smart Contracts</p>
          <p className="eyebrow">Solidity · Ethereum · EVM</p>
          <h1>SMART CONTRACT<br /><span>DEVELOPMENT.</span></h1>
          <p className="lede">Custom Solidity smart contracts designed around your product—not copied from a generic template. I build on-chain logic and connect it to a usable Web3 application.</p>
          <a className="cta" href="/#contact">Discuss your smart contract ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-logo.jpg" alt="Mohsin Ali Solangi blockchain engineer logo" />
          <p>For founders and teams building tokens, staking, vesting, presales, governance, swaps, referrals, and custom protocols.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">What I build</p>
          <h2>CONTRACTS WITH<br />CLEAR PRODUCT PURPOSE.</h2>
          <div className="grid">
            <article className="card"><h3>Token smart contracts</h3><p>ERC-20, ERC-721, ERC-1155, supply controls, permissions, fees, burn logic, token utility, and distribution mechanics.</p></article>
            <article className="card"><h3>Staking and vesting</h3><p>Reward calculations, lock periods, claim schedules, configurable pools, team vesting, and transparent user balances.</p></article>
            <article className="card"><h3>Presale and launch systems</h3><p>Token purchase flows, allocation rules, release schedules, referral logic, contribution limits, and wallet integration.</p></article>
            <article className="card"><h3>Protocol logic</h3><p>Governance, treasury, swaps, vaults, DAO permissions, custom business rules, and interactions between contracts.</p></article>
          </div>
          <div className="chips">
            <span className="chip">Solidity</span><span className="chip">OpenZeppelin</span><span className="chip">Ethereum</span><span className="chip">Polygon</span><span className="chip">BNB Chain</span><span className="chip">Arbitrum</span><span className="chip">Base</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Engineering approach</p>
          <h2>SECURITY CONSIDERED<br />BEFORE DEPLOYMENT.</h2>
          <p className="sectionintro">The work begins with roles, trust boundaries, state transitions, failure cases, upgrade expectations, and integration requirements. Development includes contract-level testing and clear frontend integration paths. For high-value production protocols, an independent third-party audit is recommended.</p>
          <div className="faq">
            <article><h3>Can existing smart contracts be extended?</h3><p>Yes, when the architecture and permissions allow it. I first review the current contracts, deployment model, and upgrade path before recommending changes.</p></article>
            <article><h3>Can you integrate the contract into a dApp?</h3><p>Yes. Contract integration can include wallet connection, transactions, read states, event handling, error feedback, and responsive React interfaces.</p></article>
          </div>
          <div className="related">
            <a href="/services/web3-dapp-development/">Web3 dApps</a>
            <a href="/services/defi-token-development/">DeFi & tokens</a>
            <a href="/blockchain-developer-pakistan/">Blockchain developer Pakistan</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
