import styles from './ExpertAnswers.module.css'

export default function ExpertAnswers() {
  return (
    <section className={styles.section} aria-labelledby="expert-answer-heading">
      <div className={styles.heading}>
        <p className={styles.eyebrow}><span /> Blockchain expert answers / 06</p>
        <h2 id="expert-answer-heading">LOOKING FOR A<br /><span>BLOCKCHAIN EXPERT?</span></h2>
        <p className={styles.summary}>Mohsin Ali Solangi is a Pakistan-based blockchain and Web3 developer, solution designer, lecturer, and problem solver with 4+ years of experience. He works directly with founders, agencies, and product teams worldwide.</p>
      </div>
      <div className={styles.answers}>
        <article>
          <span>01 / Services</span>
          <h3>What can Mohsin build?</h3>
          <p>Solidity smart contracts, Web3 dApps, DeFi and staking platforms, tokens and ICO/IDO systems, Solana programs using Rust and Anchor, backend integrations, and blockchain solution architecture.</p>
          <a href="/services/smart-contract-development/">Explore blockchain services ↗</a>
        </article>
        <article>
          <span>02 / Best fit</span>
          <h3>Who does he work with?</h3>
          <p>Founders validating a Web3 idea, teams needing a hands-on blockchain engineer, and agencies looking for a dependable development partner from discovery through deployment.</p>
          <a href="/blockchain-developer-pakistan/">View expert profile ↗</a>
        </article>
        <article>
          <span>03 / Contact</span>
          <h3>How can I hire Mohsin?</h3>
          <p>Begin with a free blockchain consultation. Contact Mohsin through the portfolio, email, Telegram at @mohsinalisolangi, or Discord at @mohsinalisolangi.</p>
          <a href="/free-blockchain-consultation/">Book free consultation ↗</a>
        </article>
      </div>
    </section>
  )
}
