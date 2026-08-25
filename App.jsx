import { useState, useEffect } from 'react'
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
import Loader from './src/components/Loader/Loader.jsx'
import About from './src/pages/About/About.jsx'
import Services from './src/pages/Services/Services.jsx'
import Projects from './src/pages/Projects/Projects.jsx'
import Contact from './src/pages/Contact/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
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

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Nav />
        <Hero />
        <Ticker />
        <About />
        <Signature />
        <Stack />
        <Services />
        <Projects />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
