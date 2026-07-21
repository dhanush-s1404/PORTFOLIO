'use client'

import { motion } from 'motion/react'
import { useMemo } from 'react'

export default function FloatingShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 80 + Math.random() * 200,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}
