import useSectionAnimation from '../../lib/useSectionAnimation'
import styles from './About.module.css'

const TAGS = [
  'Smart contracts', 'Solidity', 'Rust', 'Ethereum', 'Solana', 'EVM',
  'DeFi', 'dApps', 'Security', 'Solution design', 'Teaching',
]

const METRICS = [
  { num: '4', sup: '+', desc: 'Years building in Web3' },
  { num: '12', sup: '', desc: 'Live builds showcased' },
  { num: '01', sup: '', desc: 'Builder from idea to launch' },
  { num: '∞', sup: '', desc: 'Curiosity for hard problems' },
]

export default function About() {
  const ref = useSectionAnimation({ itemsSelector: `.${styles.body} p, .${styles.tag}, .${styles.metricBox}` })
  return (
    <section className={styles.section} id="about" ref={ref}>
      <p className={styles.eyebrow}><span /> The person behind the code / 01</p>
      <h2 className={styles.title}>
        NOT JUST A DEVELOPER.<br /><span className={styles.muted}>A THINKING PARTNER.</span>
      </h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.body}>
            <p>I’m Mohsin Ali Solangi—a blockchain developer with 4+ years of experience turning ambitious Web3 ideas into products people can actually use.</p>
            <p>My value starts before the code. I question assumptions, map the system, explain the trade-offs, and then build the smart contracts, backend, and interface around the right solution.</p>
            <p>Teaching has made me a clearer engineer. Cybersecurity has made me a more careful one. Together, those skills help founders move from “we have an idea” to “we have a product” with less confusion and fewer avoidable risks.</p>
          </div>
          <div className={styles.tags}>
            {TAGS.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.metricsGrid}>
          {METRICS.map(m => (
            <div key={m.desc} className={styles.metricBox}>
              <div className={styles.metricNum}>{m.num}<span>{m.sup}</span></div>
              <div className={styles.metricDesc}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
