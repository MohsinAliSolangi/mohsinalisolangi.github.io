import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useSectionAnimation({ itemsSelector, y = 40, stagger = 0.08 } = {}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const title = section.querySelector('h2')
      if (title) {
        gsap.fromTo(
          title,
          { clipPath: 'inset(0 0 100% 0)', y: 30 },
          {
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 78%' },
          }
        )
      }

      const items = itemsSelector ? section.querySelectorAll(itemsSelector) : null
      if (items && items.length) {
        gsap.fromTo(
          items,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger,
            scrollTrigger: { trigger: section, start: 'top 70%' },
          }
        )
      }
    }, section)

    return () => ctx.revert()
  }, [itemsSelector, y, stagger])

  return sectionRef
}
