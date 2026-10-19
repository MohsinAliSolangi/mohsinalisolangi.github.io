export default function SocialIcon({ name, className }) {
  const common = { viewBox: '0 0 24 24', className, 'aria-hidden': true }

  if (name === 'linkedin') return (
    <svg {...common} fill="currentColor">
      <path d="M5.3 7.7H1.8V19h3.5V7.7ZM3.55 2A2.04 2.04 0 1 0 3.5 6.08 2.04 2.04 0 0 0 3.55 2ZM19.2 12.5c0-3.4-1.8-5-4.2-5-1.94 0-2.8 1.06-3.28 1.81V7.7H8.2V19h3.52v-5.59c0-1.48.28-2.92 2.12-2.92 1.8 0 1.83 1.7 1.83 3.02V19h3.53v-6.5Z" />
    </svg>
  )

  if (name === 'github') return (
    <svg {...common} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82c.85 0 1.69.11 2.48.33 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )

  if (name === 'email') return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  )

  if (name === 'freelancer') return (
    <svg {...common} fill="currentColor">
      <path d="m3 5 4.1 13.2L12 13l3.2 3.1L21 5.8l-6.4 3-2-4.8-2.4 5.2L3 5Zm4.7 4.2 2 1.1-1.4 2.9-.6-4Zm5.6 1.5 3.3-1.55-2 3.6-1.3-2.05Z" />
    </svg>
  )

  return (
    <svg {...common} viewBox="0 0 28 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7.5v4.1c0 3.5 2.4 6.2 5.8 6.2 3.1 0 5.1-2 5.1-5.3V7.4" />
      <path d="M10 7.5v4c0 1.7.9 2.7 2.3 2.7 3 0 4.7-3 5.7-6.7M18 12.2c.4 3.5 2.2 5.5 5.2 5.5" />
    </svg>
  )
}
