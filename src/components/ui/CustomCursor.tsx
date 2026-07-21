'use client'

import { motion } from 'motion/react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const { x, y, isMoving } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, [data-cursor="pointer"]')
      newElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
      observer.disconnect()
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 6,
          y: y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9998]"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isMoving ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  )
}
