import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'DeFi & Token Development Services | Mohsin Ali Solangi',
  description: 'DeFi and token development for staking, vesting, presales, ICO and IDO platforms, swaps, rewards, governance and custom token utility.',
  alternates: { canonical: 'https://mohsinalisolangi.me/services/defi-token-development/' },
  openGraph: {
    title: 'DeFi & Token Development Services',
    description: 'Design and development of secure, understandable DeFi products and token systems.',
    url: 'https://mohsinalisolangi.me/services/defi-token-development/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DeFi and Token Development',
  url: 'https://mohsinalisolangi.me/services/defi-token-development/',
  description: 'DeFi protocol and token system development for staking, vesting, presales, swaps, rewards, governance and custom token utility.',
  provider: { '@id': 'https://mohsinalisolangi.me/#person' },
  areaServed: ['Pakistan', 'Worldwide'],
  serviceType: ['DeFi development', 'Token development', 'ICO development', 'IDO development'],
}

export default function DefiTokenPage() {
  return (
    <SeoLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Services / DeFi & Tokens</p>
          <p className="eyebrow">Staking · Tokens · Protocols</p>
          <h1>DEFI & TOKEN<br /><span>DEVELOPMENT.</span></h1>
          <p className="lede">I design and build DeFi applications and token systems with clear economic rules, controlled permissions, understandable transactions, and practical launch architecture.</p>
          <a className="cta" href="/#contact">Discuss your DeFi product ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-logo.jpg" alt="Mohsin Ali Solangi DeFi developer logo" />
          <p>For staking platforms, token launches, ICO and IDO systems, rewards, vesting, governance, swaps, treasuries, and custom on-chain utility.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Protocol development</p>
          <h2>TOKEN LOGIC<br />WITH A REAL PURPOSE.</h2>
          <div className="grid">
            <article className="card"><h3>Token contracts</h3><p>ERC-20 tokens with supply controls, access roles, minting or burning rules, fees, allowlists, utility, and integrations suited to the product.</p></article>
            <article className="card"><h3>Staking and rewards</h3><p>Fixed or flexible staking, reward schedules, lock periods, pools, claim logic, emergency controls, and transparent user dashboards.</p></article>
            <article className="card"><h3>Vesting and token sales</h3><p>Team and investor vesting, cliffs, linear releases, presales, ICO or IDO workflows, contribution limits, referrals, and claim phases.</p></article>
            <article className="card"><h3>DeFi applications</h3><p>Swap, liquidity, treasury, governance, yield, and custom protocol workflows connected to responsive interfaces and reliable data services.</p></article>
          </div>
          <div className="chips">
            <span className="chip">Solidity</span><span className="chip">Ethereum</span><span className="chip">EVM</span><span className="chip">OpenZeppelin</span><span className="chip">Hardhat</span><span className="chip">React</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Risk-aware engineering</p>
          <h2>DEFINE THE RULES.<br />TEST THE EDGE CASES.</h2>
          <p className="sectionintro">DeFi development starts with permissions, value movement, invariants, upgrade choices, failure states, and economic assumptions. Automated testing and security-minded engineering reduce avoidable risk; high-value production protocols should also receive an independent formal audit.</p>
          <div className="faq">
            <article><h3>Can you create a custom cryptocurrency token?</h3><p>Yes. Token work can include contract development, tests, deployment preparation, vesting, staking, sale mechanics, and dApp integration.</p></article>
            <article><h3>Do you build ICO and IDO platforms?</h3><p>Yes. The scope can include sale rounds, payment assets, caps, allowlists, referrals, vesting, claims, administration, and investor interfaces.</p></article>
            <article><h3>Which networks can a DeFi product support?</h3><p>Ethereum and EVM-compatible networks such as Polygon, BNB Chain, Arbitrum, Base, Optimism, and Avalanche can be evaluated for the product.</p></article>
          </div>
          <div className="related">
            <a href="/services/smart-contract-development/">Smart contracts</a>
            <a href="/services/web3-dapp-development/">Web3 dApps</a>
            <a href="/services/solana-development/">Solana development</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
