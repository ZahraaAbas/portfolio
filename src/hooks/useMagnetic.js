import { useEffect, useRef } from 'react'

// Sets --mx / --my (unitless) on the element based on the pointer position,
// so CSS can move or tilt it toward the cursor.
// Disabled on touch devices and when the user prefers reduced motion.
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    const onMove = (event) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      element.style.setProperty('--mx', (x * strength).toFixed(2))
      element.style.setProperty('--my', (y * strength).toFixed(2))
    }

    const onLeave = () => {
      element.style.setProperty('--mx', '0')
      element.style.setProperty('--my', '0')
    }

    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)

    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])

  return ref
}