'use client'

export default function CoinLogo({ className }) {
  return (
    <img
      className={className}
      src="/assets/mohsin-coin-logo-128.webp"
      srcSet="/assets/mohsin-coin-logo-128.webp 128w, /assets/mohsin-coin-logo-256.webp 256w"
      sizes="116px"
      alt="Mohsin Ali Solangi blockchain engineer coin logo"
      width="256"
      height="256"
      decoding="async"
    />
  )
}
