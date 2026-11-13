'use client'

export default function TechIcon({ name, label }) {
  const common = { viewBox: '0 0 32 32', 'aria-hidden': true }

  if (name === 'ethereum' || name === 'solidity') return (
    <svg {...common} fill="none" stroke="currentColor" strokeLinejoin="round">
      <path d="m16 2.5-8.5 14L16 21l8.5-4.5L16 2.5Z" /><path d="m7.5 16.5 8.5 13 8.5-13L16 21l-8.5-4.5Z" />
    </svg>
  )

  if (name === 'solana') return (
    <svg {...common} fill="currentColor">
      <path d="M7 6h19l-4 4H3l4-4ZM10 14h19l-4 4H6l4-4ZM7 22h19l-4 4H3l4-4Z" />
    </svg>
  )

  if (name === 'react') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="2.2" fill="currentColor" /><ellipse cx="16" cy="16" rx="13" ry="5" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
    </svg>
  )

  if (name === 'typescript') return (
    <svg {...common} fill="none">
      <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" />
      <path d="M8 11h11M13.5 11v12M20 14.5c1.2-1 4.6-1.2 4.6.8 0 2.8-5.2 1-5.2 4.4 0 2.3 3.8 2.1 5.5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )

  if (name === 'nextjs') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="16" cy="16" r="13" /><path d="M10 22V10l12 14M21.5 10v8" />
    </svg>
  )

  if (name === 'node') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z" /><path d="M11 21V11l10 10V11" />
    </svg>
  )

  if (name === 'express') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 9h24M4 16h15M4 23h24M21 13l7 7M28 13l-7 7" />
    </svg>
  )

  if (name === 'anchor') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="7" r="3" /><path d="M16 10v17M9 14h14M5 20c1.5 5 5.2 7.5 11 7.5S25.5 25 27 20M5 20l-2 3M27 20l2 3" />
    </svg>
  )

  if (name === 'aws') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M8 22h17a4 4 0 0 0 .5-8A8 8 0 0 0 10 11a5.5 5.5 0 0 0-2 11Z" /><path d="M9 25c4 2.4 10.5 2.8 16-.5M23 24.5l2.5.1-1.3 2" />
    </svg>
  )

  if (name === 'security') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M16 2.5 27 7v8c0 7-4.4 11.7-11 14.5C9.4 26.7 5 22 5 15V7l11-4.5Z" /><path d="m10.5 16 3.5 3.5 7.5-8" />
    </svg>
  )

  if (['hardhat', 'foundry', 'truffle'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 4 10 10-4 4-3-3-10 10-4-4 10-10-3-3 4-4Z" /><path d="m5 18 9 9M4 27h10" />
    </svg>
  )

  if (name === 'remix') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5h11l5 5v17H9V5Z" /><path d="M20 5v6h5M6 10H4v17h15M13 16h8M13 21h8" />
    </svg>
  )

  if (name === 'audit') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="13.5" r="8.5" /><path d="m20 20 7 7M10 13.5l2.3 2.3 5-5" />
    </svg>
  )

  if (['metamask', 'reown'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M4 9.5 16 4l12 5.5v14L16 28 4 23.5v-14Z" /><path d="m4 9.5 12 8 12-8M16 17.5V28M10 14l6-4 6 4" />
    </svg>
  )

  if (['thirdweb', 'ipfs', 'pinata'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="m16 3 12 6.5v13L16 29 4 22.5v-13L16 3Z" /><path d="m4 9.5 12 7 12-7M16 16.5V29" /><circle cx="16" cy="9" r="2" />
    </svg>
  )

  if (['database', 'mongoose', 'mysql', 'postgresql', 'supabase'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="16" cy="7" rx="11" ry="4" /><path d="M5 7v9c0 2.2 4.9 4 11 4s11-1.8 11-4V7M5 16v9c0 2.2 4.9 4 11 4s11-1.8 11-4v-9" />
    </svg>
  )

  if (['infura', 'alchemy', 'moralis'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="7" cy="16" r="3" /><circle cx="25" cy="8" r="3" /><circle cx="25" cy="24" r="3" /><path d="m10 15 12-5.5M10 17l12 5.5M25 11v10" />
    </svg>
  )

  if (['token', 'nft', 'vault'].includes(name)) return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="m16 3 11 6.5v13L16 29 5 22.5v-13L16 3Z" /><circle cx="16" cy="16" r="5" /><path d="M16 11v10M13 14h5.5M13.5 18h5.5" />
    </svg>
  )

  if (name === 'solanaweb3') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M5 7h19l3 4H8L5 7ZM5 14h19l3 4H8l-3-4ZM5 21h19l3 4H8l-3-4Z" />
    </svg>
  )

  if (name === 'network') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="5" r="3" /><circle cx="6" cy="23" r="3" /><circle cx="26" cy="23" r="3" /><path d="m14.5 7.5-7 13M17.5 7.5l7 13M9 23h14" />
    </svg>
  )

  const short = label.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2)
  return (
    <svg {...common}>
      <rect x="3" y="3" width="26" height="26" rx="6" fill="none" stroke="currentColor" />
      <text x="16" y="19.5" textAnchor="middle" fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700">{short}</text>
    </svg>
  )
}
