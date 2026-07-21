'use client'

import { motion } from 'motion/react'
import { useRef, useState, ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(168, 85, 247, 0.15)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: opacity * 0.5,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${spotlightColor.replace('0.15', '0.4')}, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      {children}
    </motion.div>
  )
}
