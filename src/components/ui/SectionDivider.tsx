'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'

export default function SectionDivider() {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className="py-4 flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="w-24 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)',
        }}
      />
    </div>
  )
}
