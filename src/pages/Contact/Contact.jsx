import { useEffect, useRef, useState } from 'react'
import useSectionAnimation from '../../lib/useSectionAnimation'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import CoinLogo from '../../components/CoinLogo/CoinLogo'
import styles from './Contact.module.css'

const LINKS = [
  { icon: 'email', label: 'Email', value: 'mohsinali.solangi789@gmail.com', href: 'mailto:mohsinali.solangi789@gmail.com' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/mohsinalisolangi', href: 'https://www.linkedin.com/in/mohsinalisolangi' },
  { icon: 'github', label: 'GitHub', value: 'github.com/MohsinAliSolangi', href: 'https://github.com/MohsinAliSolangi' },
  { icon: 'upwork', label: 'Upwork', value: 'Available for Freelance Projects', href: 'https://www.upwork.com/freelancers/~011ce6368cb2570ed4' },
  { icon: 'freelancer', label: 'Freelancer', value: 'Available for Freelance Projects', href: 'https://www.freelancer.com/u/Mohsinalisolang2' },
  { icon: 'telegram', label: 'Telegram', value: '@mohsinalisolangi', href: 'https://t.me/mohsinalisolangi' },
  { icon: 'discord', label: 'Discord', value: '@mohsinalisolangi', href: 'https://discord.com/app' },
]

function CoinMark({ large = false }) {
  return (
    <span className={`${styles.coin} ${large ? styles.coinLarge : ''}`} aria-hidden="true">
      <CoinLogo className={styles.coinLogo} />
    </span>
  )
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)
  const openerRef = useRef(null)
  const ref = useSectionAnimation({ itemsSelector: `.${styles.link}`, y: 24, stagger: 0.07 })

  const openDialog = (event) => {
    openerRef.current = event.currentTarget
    setIsOpen(true)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key !== 'Tab') return

      const focusable = modalRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!modalRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      openerRef.current?.focus()
    }
  }, [isOpen])

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <p className={styles.eyebrow}><span /> Your next move / 08</p>
      <h2 className={styles.title}>
        BRING THE PROBLEM.<br /><span className={styles.muted}>I’LL HELP SHAPE THE SOLUTION.</span>
      </h2>
      <div className={styles.wrap}>
        <p className={styles.desc}>
          Start with a free blockchain consultation. Tell me what you’re building, what is blocking you, and what a successful launch looks like. I’ll respond with a clear next step—no agency layers, no vague sales loop.
        </p>
        <button type="button" className={styles.openContact} onClick={openDialog}>
          <span>Book a free consultation</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className={styles.links}>
        {LINKS.map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer" className={styles.link}>
            <span className={styles.linkIcon}><SocialIcon name={l.icon} /></span>
            <div>
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkValue}>{l.value}</span>
            </div>
            <span className={styles.linkArrow}>↗</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        className={styles.walletButton}
        onClick={openDialog}
        aria-label="Open contact options"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <CoinMark />
      </button>

      {isOpen && (
        <div className={styles.modalBackdrop} onClick={event => {
          if (event.target === event.currentTarget) setIsOpen(false)
        }}>
          <section
            ref={modalRef}
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close contact options"
            >
              ×
            </button>
            <CoinMark large />
            <p className={styles.modalEyebrow}>Direct line to Mohsin</p>
            <h2 id="contact-dialog-title" className={styles.modalTitle}>Let’s make the next decision easier.</h2>
            <p className={styles.modalCopy}>Start with a free consultation. Send the idea, challenge, timeline, or a rough brief by email or Telegram. I’ll reply directly with the most useful next step.</p>
            <a className={styles.emailCta} href="mailto:mohsinali.solangi789@gmail.com?subject=Free%20Blockchain%20Consultation">
              Request free consultation <span aria-hidden="true">↗</span>
            </a>
            <div className={styles.modalLinks}>
              {LINKS.filter(link => link.label !== 'Email').map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={link.icon} />{link.label}<span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  )
}
