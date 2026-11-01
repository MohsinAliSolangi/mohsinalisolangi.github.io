import { useState } from 'react'
import styles from './FAQ.module.css'

export const FAQ_ITEMS = [
  {
    question: 'Who is Mohsin Ali Solangi?',
    answer: 'Mohsin Ali Solangi is a Pakistan-based blockchain developer, Web3 solution designer, lecturer, and problem solver with 4+ years of experience. He builds smart contracts, decentralized applications, DeFi products, token platforms, and Solana programs for clients in Pakistan and worldwide.',
  },
  {
    question: 'What blockchain development services do you provide?',
    answer: 'I provide Solidity smart contract development, Web3 dApp development, DeFi and staking platform development, token and ICO/IDO solutions, Solana program development with Rust and Anchor, backend integrations, and Web3 solution architecture.',
  },
  {
    question: 'Can you build and integrate Solidity smart contracts?',
    answer: 'Yes. I build custom Solidity contracts for ERC-20 tokens, NFTs, staking, vesting, governance, presales, referral systems, swaps, and protocol-specific logic, then integrate them into wallet-connected web applications.',
  },
  {
    question: 'Do you work with Ethereum, EVM chains, and Solana?',
    answer: 'Yes. My work covers Ethereum and EVM-compatible networks including Polygon, BNB Chain, Arbitrum, Base, Optimism, and Avalanche, plus Solana programs developed with Rust and the Anchor framework.',
  },
  {
    question: 'Do you work with international Web3 clients?',
    answer: 'Yes. I am based in Pakistan and work remotely with founders, agencies, and product teams worldwide. Communication is direct with the person designing and building the solution.',
  },
  {
    question: 'Can you help improve smart contract security?',
    answer: 'I apply security-minded engineering by reviewing permissions, trust boundaries, contract interactions, key management, and common vulnerability patterns during design and development. For high-value production protocols, an independent formal audit is still recommended before launch.',
  },
  {
    question: 'Do you offer a free blockchain consultation?',
    answer: 'Yes. Founders, agencies, and product teams can request a free initial consultation to discuss the idea, current blocker, technical direction, and a practical next step. You can contact me through the website, email, Telegram, or Discord.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.heading}>
        <p className={styles.eyebrow}><span /> Blockchain development FAQ / 07</p>
        <h2 id="faq-heading">QUESTIONS CLIENTS<br /><span>AND SEARCH ENGINES ASK.</span></h2>
        <p className={styles.intro}>Clear answers about my blockchain, smart contract, Web3, DeFi, and Solana development services.</p>
      </div>

      <div className={styles.list}>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = open === index
          return (
            <article key={item.question} className={styles.item}>
              <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
              </button>
              <div className={styles.answer} style={{ maxHeight: isOpen ? '260px' : '0px' }}>
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
