import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion.js'

// Returns [ref, isVisible]. isVisible turns true once the element enters the viewport.
export function useReveal({ threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible, threshold, rootMargin])

  return [ref, isVisible]
}