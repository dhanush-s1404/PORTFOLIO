'use client'

import { useState, useEffect, useCallback } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const currentProgress = (window.scrollY / totalHeight) * 100
    setProgress(Math.min(currentProgress, 100))
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { progress, scrollY }
}
