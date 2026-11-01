import { lazy, Suspense, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLenis } from './src/lib/lenis.js'
import Nav from './src/components/Nav/Nav.jsx'
import Hero from './src/components/Hero/Hero.jsx'
import Ticker from './src/components/Ticker/Ticker.jsx'
import Stack from './src/components/Stack/Stack.jsx'
import Signature from './src/components/Signature/Signature.jsx'
import Approach from './src/components/Approach/Approach.jsx'
import Footer from './src/components/Footer/Footer.jsx'
import About from './src/pages/About/About.jsx'
import Services from './src/pages/Services/Services.jsx'
import Projects from './src/pages/Projects/Projects.jsx'
import Contact from './src/pages/Contact/Contact.jsx'
import FAQ from './src/components/FAQ/FAQ.jsx'
import ScrollHud from './src/components/ScrollHud/ScrollHud.jsx'
import ExpertAnswers from './src/components/ExpertAnswers/ExpertAnswers.jsx'

const AmbientCanvas = lazy(() => import('./src/components/AmbientCanvas/AmbientCanvas.jsx'))

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [enhancementsReady, setEnhancementsReady] = useState(false)
  //Work Done By Mohsin Ali

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
