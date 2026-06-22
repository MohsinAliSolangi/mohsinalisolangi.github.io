import useReveal from '../useReveal'
import styles from './Contact.module.css'

const LINKS = [
  { label: 'Email', value: 'mohsinali.solangi789@gmail.com', href: 'mailto:mohsinali.solangi789@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mohsinalisolangi', href: 'https://www.linkedin.com/in/mohsinalisolangi' },
  { label: 'GitHub', value: 'github.com/MohsinAliSolangi', href: 'https://github.com/MohsinAliSolangi' },
  { label: 'Upwork', value: 'Available for Freelance Projects', href: 'https://www.upwork.com' },
  { label: 'Freelancer', value: 'Available for Freelance Projects', href: 'https://www.freelancer.com' },
]

export default function Contact() {
  const ref = useReveal()
  return (
    <section className={styles.section} id="contact">
      <p className={styles.eyebrow}><span /> Get In Touch</p>
      <h2 className={styles.title}>
        LET'S BUILD<br /><span className={styles.orange}>SOMETHING</span>
      </h2>
      <div
        className={styles.wrap}
        ref={ref}
        style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <p className={styles.desc}>
          Have a token launch, DeFi protocol, NFT project, or full-stack dApp you need shipped? I work with founders, protocols, and agencies. Direct communication, no middlemen, zero security incidents.
        </p>
        <div className={styles.links}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" className={styles.link}>
              <div>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value}</span>
              </div>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
