import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Free Blockchain Consultation — Hire Blockchain Developer Pakistan | Mohsin Ali Solangi',
  description: 'Book a free consultation with Mohsin Ali Solangi — blockchain developer in Karachi, Pakistan. Smart contracts, DeFi, Solana, Web3 dApps. Available worldwide. No cost, no commitment.',
  keywords: ['hire blockchain developer Pakistan', 'blockchain developer Karachi', 'free blockchain consultation', 'smart contract developer Pakistan', 'Web3 developer Pakistan', 'contact blockchain developer'],
  alternates: { canonical: 'https://mohsinalisolangi.me/free-blockchain-consultation/' },
  openGraph: {
    title: 'Free Blockchain Consultation | Blockchain Developer Karachi, Pakistan',
    description: 'Discuss your Web3 idea, technical blocker or blockchain product with a Pakistan-based developer. Free initial consultation. Available worldwide.',
    url: 'https://mohsinalisolangi.me/free-blockchain-consultation/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-blockchain-developer.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://mohsinalisolangi.me/#person',
      name: 'Mohsin Ali Solangi',
      url: 'https://mohsinalisolangi.me/',
      jobTitle: 'Blockchain Developer, Web3 Solution Designer and Lecturer',
      address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
      email: 'mohsinali.solangi789@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/mohsinalisolangi',
        'https://github.com/MohsinAliSolangi',
        'https://www.upwork.com/freelancers/~011ce6368cb2570ed4',
        'https://t.me/mohsinalisolangi',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://mohsinalisolangi.me/free-blockchain-consultation/#service',
      name: 'Free Blockchain Consultation',
      url: 'https://mohsinalisolangi.me/free-blockchain-consultation/',
      description: 'Free initial consultation for founders and product teams planning or troubleshooting a blockchain or Web3 project. Available from Karachi, Pakistan, working worldwide.',
      provider: { '@id': 'https://mohsinalisolangi.me/#person' },
      areaServed: ['Pakistan', 'Worldwide'],
      serviceType: 'Blockchain and Web3 consultation',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the initial blockchain consultation free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The initial consultation is free and is intended to clarify the project, the main blocker, and the best next step. There is no commitment required.' },
        },
        {
          '@type': 'Question',
          name: 'Who is Mohsin Ali Solangi?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mohsin Ali Solangi is a blockchain and Web3 developer based in Karachi, Pakistan with 4+ years of experience. He builds smart contracts (Solidity), DeFi platforms, Web3 dApps, Solana programs (Rust + Anchor), and full-stack products. Portfolio: https://mohsinalisolangi.me/' },
        },
        {
          '@type': 'Question',
          name: 'Can I hire a blockchain developer in Pakistan?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mohsin Ali Solangi is a blockchain developer based in Karachi, Pakistan available for remote projects worldwide. He offers smart contract development, DeFi platforms, Solana programs, and Web3 dApps. Contact: https://mohsinalisolangi.me/free-blockchain-consultation/' },
        },
        {
          '@type': 'Question',
          name: 'What blockchain services are available after consultation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Smart contract development (Solidity/EVM), Web3 dApp development, DeFi and token platforms, Solana programs (Rust + Anchor), backend integrations, and solution architecture.' },
        },
        {
          '@type': 'Question',
          name: 'How do I contact a blockchain developer in Karachi?',
          acceptedAnswer: { '@type': 'Answer', text: 'You can contact Mohsin Ali Solangi via the free consultation form at https://mohsinalisolangi.me/free-blockchain-consultation/, email at mohsinali.solangi789@gmail.com, or Telegram at @mohsinalisolangi.' },
        },
        {
          '@type': 'Question',
          name: 'Can Mohsin Ali Solangi build an LMS or OBE system for a university in Pakistan?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mohsin Ali Solangi is a lecturer with direct experience in Pakistani university systems. He builds OBE (Outcome Based Education) implementation systems, CLO/PLO tracking systems, LMS platforms, university CMS, and NSCT preparation platforms. Contact: https://mohsinalisolangi.me/free-blockchain-consultation/' },
        },
        {
          '@type': 'Question',
          name: 'Who can build a CLO PLO system for a Pakistani university?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mohsin Ali Solangi builds CLO/PLO tracking and reporting systems for universities and colleges in Pakistan. He also implements OBE frameworks and custom LMS platforms. Based in Karachi. Contact: https://mohsinalisolangi.me/free-blockchain-consultation/' },
        },
      ],
    },
  ],
}

export default function FreeConsultationPage() {
  return (
    <SeoLayout navLinks={[
      { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
      { href: '/about-mohsin-ali-solangi/', label: 'About' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#contact', label: 'Contact' },
    ]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="shell hero">
        <div>
          <p className="crumbs"><a href="/">Home</a> / Free Blockchain Consultation</p>
          <p className="eyebrow">No-cost initial conversation · Pakistan & worldwide</p>
          <h1>FREE BLOCKCHAIN<br /><span>CONSULTATION.</span></h1>
          <p className="lede">Bring your Web3 idea, current technical blocker, architecture question, or existing product. Mohsin Ali Solangi will help clarify the problem and identify a practical next step.</p>
          <a className="cta" href="mailto:mohsinali.solangi789@gmail.com?subject=Free%20Blockchain%20Consultation">Request by email ↗</a>
        </div>
        <aside className="heroaside">
          <img src="/mohsin-ali-solangi-blockchain-developer.jpg" alt="Mohsin Ali Solangi, blockchain and Web3 consultant in Pakistan" width="1024" height="1024" />
          <p>Direct conversation with the developer and solution designer who can help scope and build the system.</p>
        </aside>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">What we can discuss</p>
          <h2>START WITH THE<br />RIGHT QUESTION.</h2>
          <div className="grid">
            <article className="card"><h3>New product idea</h3><p>Clarify the user, blockchain fit, MVP scope, smart-contract boundaries, network choice, integrations, risks, and a realistic path to launch.</p></article>
            <article className="card"><h3>Smart contracts and security</h3><p>Discuss Solidity logic, permissions, upgrade choices, tests, key management, trust boundaries, deployment, and when an independent audit is needed.</p></article>
            <article className="card"><h3>DeFi, tokens and Solana</h3><p>Review staking, vesting, presales, token utility, ICO or IDO platforms, swaps, Rust and Anchor programs, and wallet-connected applications.</p></article>
            <article className="card"><h3>Existing technical blocker</h3><p>Share the architecture, code context, broken workflow, integration issue, or delivery challenge so the next useful investigation can be identified.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Contact Mohsin directly</p>
          <h2>ONE MESSAGE.<br />MULTIPLE CHANNELS.</h2>
          <p className="sectionintro">Include what you are building, the current stage, the main blocker, and the outcome you need. Never share private keys, seed phrases, or production secrets.</p>
          <div className="related">
            <a href="mailto:mohsinali.solangi789@gmail.com?subject=Free%20Blockchain%20Consultation">Email Mohsin</a>
            <a href="https://t.me/mohsinalisolangi" target="_blank" rel="noopener noreferrer">Telegram @mohsinalisolangi</a>
            <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer">Discord @mohsinalisolangi</a>
            <a href="https://www.linkedin.com/in/mohsinalisolangi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~011ce6368cb2570ed4" target="_blank" rel="noopener noreferrer">Upwork</a>
          </div>
          <div className="faq">
            <article><h3>Is the initial blockchain consultation free?</h3><p>Yes. The initial consultation is free and is intended to clarify the project, blocker, and best next step.</p></article>
            <article><h3>Can international clients request a consultation?</h3><p>Yes. Mohsin is based in Pakistan and works remotely with founders, agencies, and product teams worldwide.</p></article>
            <article><h3>What services are available after consultation?</h3><p>Smart contract development, Web3 dApps, DeFi and token platforms, Solana programs, backend integrations, solution architecture, and security-minded engineering.</p></article>
          </div>
        </div>
      </section>
    </SeoLayout>
  )
}
