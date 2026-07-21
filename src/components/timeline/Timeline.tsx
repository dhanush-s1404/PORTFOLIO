'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { TIMELINE } from '@/lib/constants'
import {
  GraduationCap,
  Award,
  Code2,
  Brain,
  Rocket,
  Star,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  'graduation-cap': <GraduationCap size={16} />,
  award: <Award size={16} />,
  code: <Code2 size={16} />,
  brain: <Brain size={16} />,
  rocket: <Rocket size={16} />,
}

const typeColors: Record<string, string> = {
  education: '#A855F7',
  project: '#D946EF',
  certification: '#22D3EE',
  milestone: '#34D399',
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Timeline() {
  const { ref, isInView } = useInView()

  return (
    <section id="timeline" className="section-padding relative" aria-labelledby="timeline-heading">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            04 — JOURNEY
          </span>
          <h2 id="timeline-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            My{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            A chronological journey through my education, projects, and milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-cyan/30 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {TIMELINE.map((event, index) => {
              const color = typeColors[event.type] || '#A855F7'
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={index + 1}
                  className={`relative flex flex-col sm:flex-row ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } items-start gap-4 sm:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className={`inline-block sm:${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="inline-block px-2.5 py-0.5 text-[10px] font-mono rounded-full mb-2"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        {event.year}
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors">
                      <h3 className="font-semibold text-sm sm:text-base mb-1.5">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                    style={{
                      backgroundColor: `${color}20`,
                      border: `2px solid ${color}40`,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>

                  {/* Mobile dot */}
                  <div className="sm:hidden absolute left-4 top-0 w-4 h-4 rounded-full z-10"
                    style={{
                      backgroundColor: `${color}30`,
                      border: `2px solid ${color}60`,
                    }}
                  />

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
