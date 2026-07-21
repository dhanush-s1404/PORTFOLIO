'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 400)
          return 100
        }
        return prev + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Background aurora */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-float-slow" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 text-center"
          >
            {/* Name reveal */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mb-8"
            >
              <span className="text-sm font-mono text-primary tracking-widest uppercase">
                Portfolio
              </span>
            </motion.div>

            {/* Large name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="text-5xl sm:text-7xl md:text-8xl font-display font-bold gradient-text mb-8"
            >
              DHANUSH S
            </motion.h1>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="w-48 sm:w-64 mx-auto"
            >
              <div className="h-[2px] bg-surface-3 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${count}%`,
                    background: 'linear-gradient(90deg, #A855F7, #D946EF, #F43F5E)',
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-xs font-mono text-zinc-600">
                  {String(count).padStart(3, '0')}
                </span>
                <span className="text-xs font-mono text-zinc-600">100</span>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs font-mono text-zinc-500 mt-6 tracking-wider"
            >
              {count < 30
                ? 'Initializing experience...'
                : count < 60
                ? 'Loading components...'
                : count < 90
                ? 'Preparing interface...'
                : 'Almost ready...'}
            </motion.p>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-primary/20" />
          <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-primary/20" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-primary/20" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
