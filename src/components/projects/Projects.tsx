'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { PROJECTS } from '@/lib/constants'
import GlowCard from '@/components/ui/GlowCard'
import { useTilt } from '@/hooks/useTilt'
import {
  Github,
  ExternalLink,
  Star,
  Brain,
  Shield,
  Upload,
  History,
  Code2,
  Zap,
  Palette,
  ArrowUpRight,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={14} />,
  shield: <Shield size={14} />,
  upload: <Upload size={14} />,
  history: <History size={14} />,
  code: <Code2 size={14} />,
  star: <Star size={14} />,
  zap: <Zap size={14} />,
  palette: <Palette size={14} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const { ref, tilt } = useTilt(8)

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      custom={index}
      className="group relative"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <GlowCard
        className="rounded-3xl glass border border-white/5 overflow-hidden"
        glowColor={project.featured ? '#A855F7' : '#D946EF'}
      >
        {/* Gradient top bar */}
        <div
          className={`h-1 bg-gradient-to-r ${project.gradient}`}
        />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                  <Star size={12} className="fill-primary" />
                  Featured Project
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-display font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </h3>
              <p className="text-sm text-zinc-500 mt-1 font-medium">{project.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed mb-5 text-sm sm:text-base">
            {project.description}
          </p>

          {/* Stats */}
          {project.stats && (
            <div className="flex gap-4 sm:gap-6 mb-5">
              {project.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg font-bold font-display text-primary">{stat.value}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-zinc-400"
              >
                <span className="text-primary shrink-0">{iconMap[h.icon]}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-sm font-medium rounded-xl hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={14} />
              Source Code
            </a>
          </div>
        </div>

        {/* AI Code Review premium feature - animated mockup */}
        {project.featured && (
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <div className="rounded-xl bg-surface-1 border border-white/5 p-4 overflow-hidden">
              {/* Fake terminal */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="text-[10px] font-mono text-zinc-600 ml-2">
                  ai-code-review
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px] sm:text-xs">
                <p className="text-zinc-500">
                  <span className="text-emerald-400">$</span> python review.py --file app.py
                </p>
                <p className="text-zinc-400">
                  <span className="text-primary">⚡</span> Analyzing with GPT-4o & Claude...
                </p>
                <p className="text-emerald-400">
                  <span className="text-emerald-400">✓</span> Analysis complete — 0 critical bugs
                </p>
                <p className="text-yellow-400">
                  <span className="text-yellow-400">⚠</span> 2 suggestions for improvement
                </p>
                <p className="text-zinc-500">
                  <span className="text-cyan">📊</span> Quality Score: <span className="text-primary font-bold">92/100</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </GlowCard>
    </motion.article>
  )
}

export default function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="section-padding relative" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            03 — PROJECTS
          </span>
          <h2 id="projects-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            What I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            Projects that showcase my skills in backend development, AI integration, and web technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-10"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
