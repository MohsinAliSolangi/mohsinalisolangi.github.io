'use client'

import { lazy, Suspense, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLenis } from '@/lib/lenis'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Ticker from '@/components/Ticker/Ticker'
import Stack from '@/components/Stack/Stack'
import Signature from '@/components/Signature/Signature'
import Approach from '@/components/Approach/Approach'
import Footer from '@/components/Footer/Footer'
import About from '@/sections/About/About'
import Services from '@/sections/Services/Services'
import Projects from '@/sections/Projects/Projects'
import Products from '@/sections/Products/Products'
import Contact from '@/sections/Contact/Contact'
import FAQ from '@/components/FAQ/FAQ'
import ScrollHud from '@/components/ScrollHud/ScrollHud'
import ExpertAnswers from '@/components/ExpertAnswers/ExpertAnswers'

const AmbientCanvas = lazy(() => import('@/components/AmbientCanvas/AmbientCanvas'))

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [enhancementsReady, setEnhancementsReady] = useState(false)

  useEffect(() => {
    const lenis = initLenis()
    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const showEnhancements = () => setEnhancementsReady(true)
    const idleId = 'requestIdleCallback' in window
      ? window.requestIdleCallback(showEnhancements, { timeout: 1400 })
      : window.setTimeout(showEnhancements, 900)

    return () => {
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      else window.clearTimeout(idleId)
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>{enhancementsReady && <AmbientCanvas />}</Suspense>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Nav />
        <ScrollHud />
        <main id="main-content">
          <Hero />
          <Ticker />
          <About />
          <Signature />
          <Stack />
          <Services />
          <Projects />
          <Products />
          <Approach />
          <ExpertAnswers />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
