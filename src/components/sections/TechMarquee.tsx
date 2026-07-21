'use client'

import { motion } from 'motion/react'
import { Code2, Database, Globe, Wrench, Brain, Layers, Cpu, GitBranch } from 'lucide-react'

const techItems = [
  { name: 'Python', icon: <Code2 size={14} />, color: '#3572A5' },
  { name: 'React', icon: <Layers size={14} />, color: '#61DAFB' },
  { name: 'Flask', icon: <Globe size={14} />, color: '#A855F7' },
  { name: 'JavaScript', icon: <Code2 size={14} />, color: '#F7DF1E' },
  { name: 'SQL', icon: <Database size={14} />, color: '#34D399' },
  { name: 'Git', icon: <GitBranch size={14} />, color: '#F43F5E' },
  { name: 'REST APIs', icon: <Globe size={14} />, color: '#D946EF' },
  { name: 'OpenAI', icon: <Brain size={14} />, color: '#22D3EE' },
  { name: 'Tailwind CSS', icon: <Code2 size={14} />, color: '#06B6D4' },
  { name: 'Node.js', icon: <Cpu size={14} />, color: '#34D399' },
  { name: 'TypeScript', icon: <Code2 size={14} />, color: '#3178C6' },
  { name: 'MongoDB', icon: <Database size={14} />, color: '#34D399' },
  { name: 'MySQL', icon: <Database size={14} />, color: '#4479A1' },
  { name: 'VS Code', icon: <Wrench size={14} />, color: '#A855F7' },
]

function TechPill({ item }: { item: typeof techItems[0] }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 hover:border-white/10 transition-all cursor-default group select-none">
      <span className="transition-colors group-hover:scale-110 transition-transform duration-200" style={{ color: item.color }}>
        {item.icon}
      </span>
      <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

export default function TechMarquee() {
  const doubled = [...techItems, ...techItems, ...techItems]

  return (
    <section className="py-12 overflow-hidden relative" aria-label="Technology stack ticker">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((item, i) => (
          <TechPill key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </section>
  )
}
