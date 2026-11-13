import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Solana Development Services | Rust & Anchor Developer',
  description: 'Solana development services using Rust and Anchor for on-chain programs, SPL tokens, wallet-connected dApps, testing and integrations.',
  alternates: { canonical: 'https://mohsinalisolangi.me/services/solana-development/' },
  openGraph: {
    title: 'Solana Development Services | Mohsin Ali Solangi',
    description: 'Rust and Anchor programs connected to responsive Solana applications.',
    url: 'https://mohsinalisolangi.me/services/solana-development/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Solana Development Services',
  url: 'https://mohsinalisolangi.me/services/solana-development/',
  description: 'Solana program and dApp development using Rust, Anchor, SPL tokens and wallet integrations.',
  provider: { '@id': 'https://mohsinalisolangi.me/#person' },
  areaServed: ['Pakistan', 'Worldwide'],
  serviceType: ['Solana development', 'Rust development', 'Anchor program development'],
}

export default function SolanaPage() {
  return (
    <SeoLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Services / Solana</p>
          <p className="eyebrow">Rust · Anchor · SPL</p>
          <h1>SOLANA<br /><span>DEVELOPMENT.</span></h1>
          <p className="lede">I build Solana programs and wallet-connected applications with account models, instructions, permissions, testing, and user flows designed around the product.</p>
          <a className="cta" href="/#contact">Plan a Solana build ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-logo.jpg" alt="Mohsin Ali Solangi Solana developer logo" />
          <p>Solana programs, SPL token workflows, PDAs, wallet integrations, transaction experiences, and React or Node.js services for new and existing products.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Solana engineering</p>
          <h2>FAST CHAINS STILL NEED<br />CAREFUL SYSTEM DESIGN.</h2>
          <div className="grid">
            <article className="card"><h3>Rust and Anchor programs</h3><p>Program instructions, account structures, PDAs, constraints, authority models, custom errors, events, and upgrade planning.</p></article>
            <article className="card"><h3>SPL token systems</h3><p>Token creation and transfer workflows, associated token accounts, mint authorities, distribution, vesting, staking, and custom utility.</p></article>
            <article className="card"><h3>Solana dApp integration</h3><p>Wallet adapters, transaction building, simulation, confirmation states, account reads, RPC handling, and responsive React interfaces.</p></article>
            <article className="card"><h3>Testing and integration</h3><p>Local validator workflows, program tests, TypeScript clients, Node.js services, deployment preparation, and existing program integration.</p></article>
          </div>
          <div className="chips">
            <span className="chip">Solana</span><span className="chip">Rust</span><span className="chip">Anchor</span><span className="chip">SPL Tokens</span><span className="chip">TypeScript</span><span className="chip">React</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Delivery approach</p>
          <h2>FROM ACCOUNT MODEL<br />TO USER ACTION.</h2>
          <p className="sectionintro">A reliable Solana product connects on-chain rules to clear frontend behavior. Before implementation, I map state, ownership, signing requirements, rent and compute considerations, expected failures, and the transaction path users will actually experience.</p>
          <div className="faq">
            <article><h3>Can you build both the program and frontend?</h3><p>Yes. A project can cover the Rust or Anchor program, TypeScript client, wallet connection, React interface, Node.js services, and deployment preparation.</p></article>
            <article><h3>Can you integrate an existing Solana program?</h3><p>Yes. Integration can begin from an IDL, program address, requirements, and test environment, followed by account reads, instruction building, and user flows.</p></article>
            <article><h3>Is Solana suitable for every Web3 product?</h3><p>No single network fits every system. Product requirements, users, liquidity, performance, ecosystem dependencies, and operational tradeoffs should guide the choice.</p></article>
          </div>
          <div className="related">
            <a href="/services/smart-contract-development/">EVM smart contracts</a>
            <a href="/services/web3-dapp-development/">Web3 dApps</a>
            <a href="/services/defi-token-development/">DeFi & tokens</a>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
