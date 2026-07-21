'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { CERTIFICATIONS } from '@/lib/constants'
import GlowCard from '@/components/ui/GlowCard'
import { CheckCircle2, ExternalLink } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Certifications() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            05 — CERTIFICATIONS
          </span>
          <h2
            id="certifications-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4"
          >
            Verified{' '}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            Professional certifications that validate my expertise and continuous learning.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={index + 1}
            >
              <GlowCard
                className="p-5 sm:p-6 rounded-2xl glass border border-white/5 h-full group"
                glowColor="#D946EF"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl shrink-0 p-2.5 rounded-xl bg-primary/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {cert.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mt-1">{cert.issuer}</p>
                      </div>
                      <span className="shrink-0 inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/10">
                        {cert.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-[11px] text-zinc-500 font-medium">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={6}
          className="text-center mt-10 p-5 rounded-2xl glass border border-primary/10"
        >
          <p className="text-sm text-zinc-400">
            Always learning, always growing — currently exploring{' '}
            <strong className="text-primary">Generative AI</strong> and{' '}
            <strong className="text-primary">Cloud Computing</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
