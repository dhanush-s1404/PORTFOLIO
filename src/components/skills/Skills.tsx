'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { SKILL_CATEGORIES } from '@/lib/constants'
import GlowCard from '@/components/ui/GlowCard'
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Brain,
  Lightbulb,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={20} />,
  layers: <Layers size={20} />,
  database: <Database size={20} />,
  wrench: <Wrench size={20} />,
  brain: <Brain size={20} />,
  lightbulb: <Lightbulb size={20} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="section-padding relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/2 via-transparent to-accent/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            02 — SKILLS
          </span>
          <h2 id="skills-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            Technical{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            Technologies and tools I wield to build efficient applications.
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={catIndex + 1}
            >
              <GlowCard
                className="p-6 rounded-2xl glass border border-white/5 h-full group"
                glowColor={category.color}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${category.color}15`,
                      color: category.color,
                    }}
                  >
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                    <p className="text-[10px] text-zinc-500">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills with levels */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: catIndex * 0.1 + 0.5,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}80, ${category.color})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={8}
          className="mt-12 p-6 rounded-2xl glass border border-white/5"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { value: '6+', label: 'Languages', color: 'text-primary' },
              { value: '5+', label: 'Frameworks', color: 'text-accent' },
              { value: '3', label: 'Databases', color: 'text-emerald' },
              { value: '5+', label: 'Dev Tools', color: 'text-cyan' },
              { value: '4+', label: 'AI Skills', color: 'text-yellow' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-2xl sm:text-3xl font-bold font-display ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[11px] text-zinc-500 mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
