'use client'

import { useEffect, useRef } from 'react'
import styles from './AmbientCanvas.module.css'

const CONNECTION_DISTANCE = 180
const POINTER_RADIUS = 240

export default function AmbientCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const compact = window.matchMedia('(max-width: 760px)').matches
    if (!canvas || !context || reduceMotion || compact) return

    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let animationFrame
    let previousScroll = window.scrollY
    let scrollImpulse = 0
    let visible = !document.hidden
    const pointer = { x: width * 0.72, y: height * 0.32, active: false }
    let nodes = []

    const makeNodes = () => {
      const count = Math.min(64, Math.max(38, Math.round((width * height) / 26000)))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: ((index * 137.5) % width) + (index % 3) * 13,
        y: ((index * 83.7) % height) + (index % 4) * 11,
        vx: ((index % 7) - 3) * 0.018,
        vy: (((index * 3) % 7) - 3) * 0.014,
        radius: index % 9 === 0 ? 1.65 : index % 4 === 0 ? 1.1 : 0.75,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeNodes()
    }

    const onPointerMove = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }
    const onPointerLeave = () => { pointer.active = false }
    const onScroll = () => {
      const current = window.scrollY
      scrollImpulse += Math.max(-18, Math.min(18, current - previousScroll)) * 0.014
      previousScroll = current
    }
    const onVisibility = () => {
      visible = !document.hidden
      if (visible && !animationFrame) draw()
    }

    const draw = () => {
      if (!visible) {
        animationFrame = undefined
        return
      }

      context.clearRect(0, 0, width, height)
      scrollImpulse *= 0.92

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, POINTER_RADIUS)
        glow.addColorStop(0, 'rgba(184, 132, 78, .11)')
        glow.addColorStop(0.35, 'rgba(184, 132, 78, .045)')
        glow.addColorStop(1, 'rgba(184, 132, 78, 0)')
        context.fillStyle = glow
        context.fillRect(pointer.x - POINTER_RADIUS, pointer.y - POINTER_RADIUS, POINTER_RADIUS * 2, POINTER_RADIUS * 2)
      }

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy - scrollImpulse * 0.16

        if (node.x < -20) node.x = width + 20
        if (node.x > width + 20) node.x = -20
        if (node.y < -20) node.y = height + 20
        if (node.y > height + 20) node.y = -20

        if (pointer.active) {
          const dx = node.x - pointer.x
          const dy = node.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < POINTER_RADIUS && distance > 0) {
            const force = (1 - distance / POINTER_RADIUS) * 0.22
            node.x += (dx / distance) * force
            node.y += (dy / distance) * force
          }
        }
      })

      for (let first = 0; first < nodes.length; first += 1) {
        for (let second = first + 1; second < nodes.length; second += 1) {
          const a = nodes[first]
          const b = nodes[second]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)
          if (distance > CONNECTION_DISTANCE) continue

          const nearPointer = pointer.active && Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) < POINTER_RADIUS
          const alpha = (1 - distance / CONNECTION_DISTANCE) * (nearPointer ? 0.46 : 0.18)
          context.strokeStyle = nearPointer ? `rgba(184, 132, 78, ${alpha})` : `rgba(200, 200, 197, ${alpha})`
          context.lineWidth = nearPointer ? 1 : 0.75
          context.beginPath()
          context.moveTo(a.x, a.y)
          context.lineTo(b.x, b.y)
          context.stroke()
        }
      }

      nodes.forEach((node) => {
        const nearPointer = pointer.active && Math.hypot(node.x - pointer.x, node.y - pointer.y) < POINTER_RADIUS
        context.fillStyle = nearPointer ? 'rgba(224, 169, 108, .88)' : 'rgba(225, 225, 220, .58)'
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fill()
      })

      if (pointer.active) {
        context.strokeStyle = 'rgba(221, 169, 111, .38)'
        context.lineWidth = 0.8
        context.beginPath()
        context.arc(pointer.x, pointer.y, 24, 0, Math.PI * 2)
        context.stroke()
        context.fillStyle = 'rgba(240, 205, 166, .8)'
        context.beginPath()
        context.arc(pointer.x, pointer.y, 1.6, 0, Math.PI * 2)
        context.fill()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
