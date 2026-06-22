import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, dots = [], animId, t = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      dots = Array.from({ length: 65 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.004

      // Grid
      ctx.strokeStyle = 'rgba(255,72,0,0.055)'
      ctx.lineWidth = 0.5
      const gs = 64
      for (let x = 0; x < W; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      // Dots + connections
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > W) d.vx *= -1
        if (d.y < 0 || d.y > H) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,72,0,0.6)'
        ctx.fill()
      })

      dots.forEach((a, i) => {
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,72,0,${0.13 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      // Scan line
      const scanY = (Math.sin(t) * 0.5 + 0.5) * H
      const grad = ctx.createLinearGradient(0, scanY - 24, 0, scanY + 24)
      grad.addColorStop(0, 'rgba(255,72,0,0)')
      grad.addColorStop(0.5, 'rgba(255,72,0,0.07)')
      grad.addColorStop(1, 'rgba(255,72,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 24, W, 48)

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.bgText} aria-hidden>WEB3</div>

      <div className={styles.statsRight}>
        {[
          { val: '72', sup: '+', label: 'Projects Delivered' },
          { val: '$1M', sup: '+', label: 'Raised for Clients' },
          { val: '3', sup: '+', label: 'Years in Web3' },
        ].map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statVal}>{s.val}<span>{s.sup}</span></div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Blockchain Engineer · CTO at Chainmint · Karachi, PK</p>
        <h1 className={styles.title}>
          MOHSIN<br />
          <span className={styles.orange}>ALI</span><br />
          <span className={styles.thin}>SOLANGI</span>
        </h1>
        <p className={styles.sub}>
          Solidity · Rust · Solana · EVM<br />
          Token Launch · DeFi · NFT · Smart Contracts
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnGhost}
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Let's Build →
          </a>
        </div>
      </div>
    </section>
  )
}
