'use client'

import { useCallback, useRef, MouseEvent } from 'react'

interface RippleProps {
  children: React.ReactNode
  className?: string
  color?: string
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function RippleEffect({
  children,
  className = '',
  color = 'rgba(168, 85, 247, 0.3)',
}: RippleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rippleId = useRef(0)

  const createRipple = useCallback((e: MouseEvent) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2

    const rippleEl = document.createElement('span')
    rippleEl.style.cssText = `
      position: absolute;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      transform: scale(0);
      animation: ripple-expand 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 50;
    `
    container.appendChild(rippleEl)
    setTimeout(() => rippleEl.remove(), 600)
  }, [color])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
    >
      {children}
      <style jsx global>{`
        @keyframes ripple-expand {
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
