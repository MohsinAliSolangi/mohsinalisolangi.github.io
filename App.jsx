import { useState, useEffect } from 'react'
import Nav from './src/components/Nav/Nav.jsx'
import Hero from './src/components/Hero/Hero.jsx'
import Ticker from './src/components/Ticker/Ticker.jsx'
import Stack from './src/components/Stack/Stack.jsx'
import Footer from './src/components/Footer/Footer.jsx'
import Loader from './src/components/Loader/Loader.jsx'
import About from './src/pages/About/About.jsx'
import Services from './src/pages/Services/Services.jsx'
import Projects from './src/pages/Projects/Projects.jsx'
import Contact from './src/pages/Contact/Contact.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Nav />
        <Hero />
        <Ticker />
        <About />
        <Stack />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
