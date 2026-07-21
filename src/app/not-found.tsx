'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-[120px] sm:text-[180px] font-display font-bold gradient-text leading-none">
          404
        </h1>
        <p className="text-xl text-zinc-400 mt-4 mb-8">
          This page has drifted into the void.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  )
}
