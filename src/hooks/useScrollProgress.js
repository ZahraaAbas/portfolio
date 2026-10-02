import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion.js'

// Returns [ref, progress]. progress goes from 0 to 1 while the element scrolls
// from `start` (its top at 85% of the viewport) to `end` (its bottom at 40%).
export function useScrollProgress({ start = 0.85, end = 0.4 } = {}) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0))

  useEffect(() => {
    const element = ref.current
    if (!element || prefersReducedMotion()) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      const total = rect.height + viewport * (start - end)
      const passed = viewport * start - rect.top
      const value = Math.min(1, Math.max(0, passed / total))
      setProgress(Math.round(value * 100) / 100)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [start, end])

  return [ref, progress]
}