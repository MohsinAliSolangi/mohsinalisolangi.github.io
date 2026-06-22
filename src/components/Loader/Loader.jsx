import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'

const MESSAGES = [
  'Initializing portfolio...',
  'Loading Web3 modules...',
  'Connecting to chain...',
  'Almost there...',
]

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [fading, setFading] = useState(false)
  const ref = useRef(0)

  useEffect(() => {
    const iv = setInterval(() => {
      ref.current += Math.random() * 2.8 + 0.8
      if (ref.current >= 100) {
        ref.current = 100
        setPct(100)
        clearInterval(iv)
        setTimeout(() => setFading(true), 350)
        setTimeout(() => onDone(), 900)
        return
      }
      setPct(Math.floor(ref.current))
    }, 40)
    return () => clearInterval(iv)
  }, [onDone])

  const msgIndex = Math.min(Math.floor(pct / 26), 3)
  const display = pct < 10 ? `0${pct}` : `${pct}`

  return (
    <div className={`${styles.loader} ${fading ? styles.fading : ''}`}>
      <div className={styles.barWrap}>
        <div className={styles.bar} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.pct}>
        {display}<span>%</span>
      </div>
      <div className={styles.msg}>{MESSAGES[msgIndex]}</div>
    </div>
  )
}
