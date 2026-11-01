import coinLogo128 from '../../assets/mohsin-coin-logo-128.webp'
import coinLogo256 from '../../assets/mohsin-coin-logo-256.webp'

export default function CoinLogo({ className }) {
  return (
    <img
      className={className}
      src={coinLogo128}
      srcSet={`${coinLogo128} 128w, ${coinLogo256} 256w`}
      sizes="116px"
      alt="Mohsin Ali Solangi blockchain engineer coin logo"
      width="256"
      height="256"
      decoding="async"
    />
  )
}
