'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.note}>
          <span className={styles.status}><span /> Open to meaningful Web3 work</span>
          <p>Strategy, architecture, code, and clear communication—from one thinking partner.</p>
        </div>
        <a className={styles.contactLink} href="/free-blockchain-consultation/">
          Free consultation <span aria-hidden="true">↗</span>
        </a>
      </div>
      <nav className={styles.siteLinks} aria-label="Blockchain services and profile pages">
        <a href="/about-mohsin-ali-solangi/">About Mohsin</a>
        <a href="/blockchain-developer-pakistan/">Blockchain Developer Pakistan</a>
        <a href="/services/smart-contract-development/">Smart Contracts</a>
        <a href="/services/web3-dapp-development/">Web3 dApps</a>
        <a href="/services/defi-token-development/">DeFi & Tokens</a>
        <a href="/services/solana-development/">Solana Development</a>
        <a href="/free-blockchain-consultation/">Free Consultation</a>
        <a href="https://t.me/mohsinalisolangi">Telegram</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className={styles.wordmark} href="#hero" aria-label="Mohsin Solangi — back to top">
        MOHSIN<br /><span>SOLANGI</span>
      </a>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Mohsin Ali Solangi</span>
        <span>BLOCKCHAIN · PRODUCT · SECURITY</span>
        <a href="#hero">Back to top ↑</a>
      </div>
    </footer>
  )
}
