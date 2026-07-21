'use client'

import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  duration?: number
  triggerOnView?: boolean
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export default function TextScramble({
  text,
  className = '',
  duration = 1500,
  triggerOnView = true,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text.split('').map(() => ' '))
  const [hasTriggered, setHasTriggered] = useState(!triggerOnView)
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!triggerOnView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerOnView, hasTriggered])

  useEffect(() => {
    if (!hasTriggered) return

    const chars = text.split('')
    const frameChars = chars.map(() => '')
    let frame = 0
    const totalFrames = Math.ceil(duration / (1000 / 60))
    const queue: { char: string; index: number; resolve: () => void }[] = []

    chars.forEach((char, i) => {
      const delay = Math.floor((i / chars.length) * (totalFrames * 0.6))
      for (let f = 0; f < delay; f++) {
        queue.push({ char: CHARS[Math.floor(Math.random() * CHARS.length)], index: i, resolve: () => {} })
      }
      queue.push({ char, index: i, resolve: () => {} })
    })

    let qi = 0
    const step = () => {
      const progress = frame / totalFrames
      const charsPerFrame = Math.max(1, Math.ceil(queue.length / totalFrames))

      for (let c = 0; c < charsPerFrame && qi < queue.length; c++, qi++) {
        const item = queue[qi]
        frameChars[item.index] = item.char
      }

      setDisplay([...frameChars])
      frame++

      if (qi < queue.length) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        setDisplay(chars)
      }
    }

    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [hasTriggered, text, duration])

  return (
    <span ref={ref} className={className}>
      {display.join('')}
    </span>
  )
}
