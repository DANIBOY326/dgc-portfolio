import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = section.querySelectorAll('.reveal')
    elements.forEach((el, i) => {
      el.style.transitionDelay = el.style.transitionDelay || `${i * 80}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
