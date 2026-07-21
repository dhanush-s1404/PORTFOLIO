'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode[]
  className?: string
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
}

export default function Marquee({
  children,
  className = '',
  speed = 30,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  const content = [...children, ...children, ...children]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: reverse ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        {...(pauseOnHover ? { whileHover: { animationPlayState: 'paused' } } : {})}
      >
        {content.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
