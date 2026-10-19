import coinLogo from '../../assets/mohsin-coin-logo.jpg'

export default function CoinLogo({ className }) {
  return (
    <img
      className={className}
      src={coinLogo}
      alt="Mohsin Ali Solangi blockchain engineer coin logo"
      width="800"
      height="800"
      decoding="async"
    />
  )
}
