'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export function useTilt(maxTilt: number = 10) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const rafRef = useRef<number>(0)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const rect = ref.current!.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -maxTilt
        const rotateY = ((x - centerX) / centerX) * maxTilt
        setTilt({ rotateX, rotateY })
      })
    },
    [maxTilt]
  )

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove, handleMouseLeave])

  return { ref, tilt }
}
