'use client'

import styles from './Ticker.module.css'

const ITEMS = [
  'Solidity', 'Rust', 'Anchor Framework', 'Ethereum', 'Solana',
  'EVM Chains', 'DeFi Protocols', 'NFT Smart Contracts', 'ICO / IDO',
  'React.js', 'Node.js', 'Smart Contract Security', 'dApps',
  'Problem Solving', 'Solution Design', 'Teaching & Mentoring',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.arrow}>↗</span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}
