import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.note}>
          <span className={styles.status}><span /> Open to meaningful Web3 work</span>
          <p>Strategy, architecture, code, and clear communication—from one thinking partner.</p>
        </div>
        <a className={styles.contactLink} href="mailto:mohsinali.solangi789@gmail.com">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </div>
      <a className={styles.wordmark} href="#hero" aria-label="Mohsin Ali Solangi, back to top">
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
