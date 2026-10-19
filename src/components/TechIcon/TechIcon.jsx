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

  if (name === 'node') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z" /><path d="M11 21V11l10 10V11" />
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
