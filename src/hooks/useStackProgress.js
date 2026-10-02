import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../utils/motion.js'

// For a list of sticky cards (marked with data-stack-item):
// sets --stack (0 to 1) on each card while the next card slides over it.
export function useStackProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container || prefersReducedMotion()) return

    const items = Array.from(container.querySelectorAll('[data-stack-item]'))
    let frame = 0

    const update = () => {
      frame = 0
      const viewport = window.innerHeight

      items.forEach((item, index) => {
        const next = items[index + 1]
        if (!next || getComputedStyle(item).position !== 'sticky') {
          item.style.setProperty('--stack', '0')
          return
        }

        const nextStickyTop = parseFloat(getComputedStyle(next).top) || 0
        const nextTop = next.getBoundingClientRect().top
        const progress = (viewport - nextTop) / (viewport - nextStickyTop)
        item.style.setProperty('--stack', Math.min(1, Math.max(0, progress)).toFixed(3))
      })
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
  }, [])

  return ref
}