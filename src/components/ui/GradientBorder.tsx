'use client'

import { ReactNode } from 'react'

interface GradientBorderProps {
  children: ReactNode
  className?: string
  gradient?: string
  borderWidth?: number
  rounded?: string
}

export default function GradientBorder({
  children,
  className = '',
  gradient = 'linear-gradient(135deg, #A855F7, #D946EF, #F43F5E, #22D3EE)',
  borderWidth = 1,
  rounded = '1.5rem',
}: GradientBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        padding: borderWidth,
        borderRadius: rounded,
        background: gradient,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          borderRadius: `calc(${rounded} - ${borderWidth}px)`,
          background: '#111111',
        }}
      >
        {children}
      </div>
    </div>
  )
}
