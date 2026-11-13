import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'About Mohsin Ali Solangi | Blockchain Developer Pakistan',
  description: 'Meet Mohsin Ali Solangi, a Pakistan-based blockchain developer, Web3 solution designer, lecturer and cybersecurity enthusiast with 4+ years of experience.',
  alternates: { canonical: 'https://mohsinalisolangi.me/about-mohsin-ali-solangi/' },
  openGraph: {
    title: 'About Mohsin Ali Solangi | Blockchain & Web3 Developer',
    description: 'Pakistan-based blockchain developer, lecturer and Web3 solution designer with 4+ years of experience.',
    url: 'https://mohsinalisolangi.me/about-mohsin-ali-solangi/',
    type: 'profile',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-blockchain-developer.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://mohsinalisolangi.me/about-mohsin-ali-solangi/#profile',
  url: 'https://mohsinalisolangi.me/about-mohsin-ali-solangi/',
  name: 'About Mohsin Ali Solangi',
  dateModified: '2026-11-02',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://mohsinalisolangi.me/#person',
    name: 'Mohsin Ali Solangi',
    alternateName: ['Mohsin Solangi', 'M. Solangi', 'MrS'],
    image: 'https://mohsinalisolangi.me/mohsin-ali-solangi-blockchain-developer.jpg',
    jobTitle: 'Blockchain Developer, Web3 Solution Designer and Lecturer',
    homeLocation: { '@type': 'Country', name: 'Pakistan' },
    description: 'Pakistan-based blockchain developer with 4+ years of experience building smart contracts, dApps, DeFi platforms, token products and Solana programs.',
    sameAs: ['https://www.linkedin.com/in/mohsinalisolangi', 'https://github.com/MohsinAliSolangi', 'https://www.upwork.com/freelancers/~011ce6368cb2570ed4', 'https://www.freelancer.com/u/Mohsinalisolang2', 'https://t.me/mohsinalisolangi'],
  },
}

export default function AboutPage() {
  return (
    <SeoLayout navLinks={[
      { href: '/', label: 'Portfolio' },
      { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#contact', label: 'Contact' },
    ]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / About</p>
          <p className="eyebrow">Developer · Lecturer · Solution Designer</p>
          <h1>ABOUT<br /><span>MOHSIN ALI SOLANGI.</span></h1>
          <p className="lede">I am a Pakistan-based blockchain and Web3 developer with 4+ years of experience turning complex ideas into secure, usable products. I work across smart contracts, backend systems, wallet-connected interfaces, and solution architecture.</p>
          <a className="cta" href="/#contact">Discuss a Web3 project ↗</a>
        </div>
        <aside className="heroaside" style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'20px',padding:'32px 24px'}}>
          <img src="/mohsin-ali-solangi-blockchain-developer.jpg" alt="Mohsin Ali Solangi, blockchain developer in Pakistan" style={{width:'100%',maxWidth:'260px',borderRadius:'130px',aspectRatio:'3/4',objectFit:'cover',objectPosition:'top'}} />
          <p style={{fontSize:'13px'}}>Based in Pakistan. Working remotely with founders, agencies, and product teams worldwide.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">A multidisciplinary Web3 builder</p>
          <h2>ENGINEER BY CRAFT.<br />TEACHER BY NATURE.</h2>
          <p className="sectionintro">My value starts before the code. I clarify the product goal, question assumptions, map permissions and data flows, explain technical trade-offs, and then build the right on-chain and application system.</p>
          <div className="grid">
            <article className="card"><h3>Blockchain engineering</h3><p>Solidity smart contracts, Rust and Anchor programs, Ethereum and EVM networks, Solana, DeFi protocols, staking, token launches, swaps, DAO systems, and wallet integrations.</p></article>
            <article className="card"><h3>Solution design</h3><p>Technical discovery, product scope, smart contract architecture, system boundaries, backend integrations, security considerations, and practical launch planning.</p></article>
            <article className="card"><h3>Teaching and communication</h3><p>As a lecturer, I translate difficult concepts into language that founders and teams can use to make decisions. Clients work directly with the person designing and building the solution.</p></article>
            <article className="card"><h3>Security-minded delivery</h3><p>Cybersecurity informs how I think about permissions, trust boundaries, private keys, contract interactions, and common vulnerability patterns. Independent audits remain important for high-value protocols.</p></article>
          </div>
          <div className="chips">
            <span className="chip">Solidity</span><span className="chip">Rust</span><span className="chip">Solana</span><span className="chip">EVM</span><span className="chip">DeFi</span><span className="chip">React.js</span><span className="chip">Node.js</span><span className="chip">AWS KMS</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Evidence</p>
          <h2>EXPERIENCE MADE VISIBLE.</h2>
          <div className="proof">
            <div><strong>4+</strong><span>Years building Web3 products</span></div>
            <div><strong>12</strong><span>Live builds showcased</span></div>
            <div><strong>Global</strong><span>Remote client availability</span></div>
          </div>
          <div className="related">
            <a href="/blockchain-developer-pakistan/">Blockchain developer Pakistan</a>
            <a href="/services/smart-contract-development/">Smart contracts</a>
            <a href="/services/web3-dapp-development/">Web3 dApps</a>
            <a href="/services/solana-development/">Solana</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
