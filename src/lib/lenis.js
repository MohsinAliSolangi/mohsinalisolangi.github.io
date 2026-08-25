import Lenis from 'lenis'

let lenis = null

export function initLenis() {
  if (lenis) return lenis
  lenis = new Lenis({ duration: 1.15, smoothWheel: true })
  return lenis
}

export function scrollTo(target, opts) {
  if (lenis) {
    lenis.scrollTo(target, opts)
    return
  }
  if (typeof target === 'string') {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}
