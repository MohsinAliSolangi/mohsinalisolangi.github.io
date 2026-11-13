import './globals.css'

const BASE = 'https://mohsinalisolangi.me'

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Mohsin Ali Solangi | Blockchain & Web3 Developer — Karachi, Pakistan',
    template: '%s | Mohsin Ali Solangi',
  },
  description: 'Mohsin Ali Solangi is a blockchain and Web3 developer based in Karachi, Pakistan with 4+ years of experience. He builds smart contracts, DeFi platforms, Web3 dApps, Solana programs, and full-stack products for founders worldwide.',
  keywords: [
    'blockchain developer Pakistan',
    'blockchain developer Karachi',
    'Web3 developer Pakistan',
    'smart contract developer Pakistan',
    'Solidity developer Pakistan',
    'DeFi developer Pakistan',
    'Solana developer Pakistan',
    'hire blockchain developer Pakistan',
    'Mohsin Ali Solangi',
    'blockchain developer Karachi Pakistan',
  ],
  authors: [{ name: 'Mohsin Ali Solangi', url: BASE }],
  creator: 'Mohsin Ali Solangi',
  publisher: 'Mohsin Ali Solangi',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: BASE },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: BASE,
    siteName: 'Mohsin Ali Solangi — Blockchain & Web3 Developer',
    title: 'Mohsin Ali Solangi | Blockchain & Web3 Developer — Karachi, Pakistan',
    description: 'Pakistan-based blockchain developer with 4+ years building smart contracts, DeFi platforms, Web3 dApps, Solana programs, and full-stack products.',
    images: [{
      url: `${BASE}/mohsin-ali-solangi-blockchain-developer.jpg`,
      width: 1200, height: 630,
      alt: 'Mohsin Ali Solangi — Blockchain Developer, Karachi Pakistan',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohsin Ali Solangi | Blockchain & Web3 Developer — Pakistan',
    description: 'Pakistan-based blockchain developer. Smart contracts, DeFi, Solana, Web3 dApps.',
    images: [`${BASE}/mohsin-ali-solangi-blockchain-developer.jpg`],
  },
  verification: {
    google: '',   // add Google Search Console verification code when available
  },
  other: {
    'llms-txt': `${BASE}/llms.txt`,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE}/#person`,
      name: 'Mohsin Ali Solangi',
      alternateName: ['Mohsin Solangi', 'MohsinAliSolangi'],
      url: BASE,
      image: `${BASE}/mohsin-ali-solangi-blockchain-developer.jpg`,
      jobTitle: 'Blockchain Developer & Web3 Solution Designer',
      description: 'Pakistan-based blockchain developer with 4+ years of experience building smart contracts, DeFi platforms, Web3 dApps, Solana programs, and full-stack products. Based in Karachi, available worldwide.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
      areaServed: ['Pakistan', 'Worldwide'],
      knowsAbout: [
        'Blockchain Development', 'Smart Contracts', 'Solidity', 'Rust',
        'DeFi', 'Web3', 'Solana', 'Ethereum', 'EVM', 'Token Development',
        'NFT', 'DAO', 'React.js', 'Node.js', 'TypeScript',
      ],
      sameAs: [
        'https://www.linkedin.com/in/mohsinalisolangi',
        'https://github.com/MohsinAliSolangi',
        'https://www.upwork.com/freelancers/~011ce6368cb2570ed4',
        'https://www.freelancer.com/u/Mohsinalisolang2',
        'https://t.me/mohsinalisolangi',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'mohsinali.solangi789@gmail.com',
        url: `${BASE}/free-blockchain-consultation/`,
        availableLanguage: ['English', 'Urdu'],
      },
      offers: {
        '@type': 'Offer',
        name: 'Free Blockchain Consultation',
        url: `${BASE}/free-blockchain-consultation/`,
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Mohsin Ali Solangi — Blockchain & Web3 Developer',
      description: 'Official portfolio of Mohsin Ali Solangi, blockchain and Web3 developer based in Karachi, Pakistan.',
      publisher: { '@id': `${BASE}/#person` },
      inLanguage: 'en-PK',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE}/#service`,
      name: 'Mohsin Ali Solangi — Blockchain Development Services',
      url: BASE,
      description: 'Blockchain and Web3 development services including smart contracts, DeFi platforms, Solana programs, and Web3 dApps. Based in Karachi, Pakistan. Available worldwide.',
      provider: { '@id': `${BASE}/#person` },
      areaServed: ['Pakistan', 'Worldwide'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Blockchain Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Contract Development', url: `${BASE}/services/smart-contract-development/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web3 dApp Development', url: `${BASE}/services/web3-dapp-development/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DeFi & Token Development', url: `${BASE}/services/defi-token-development/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solana Development', url: `${BASE}/services/solana-development/` } },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
