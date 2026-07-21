'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useMemo } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import MagneticButton from '@/components/ui/MagneticButton'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import RippleEffect from '@/components/ui/RippleEffect'
import ParticleField from './ParticleField'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 3.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Hero() {
  const { displayText } = useTypingEffect(PERSONAL_INFO.roles, 80, 40, 2000)
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg opacity-40" />

      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Particles */}
      <ParticleField />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-rose/5 blur-[80px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-32 left-16 w-3 h-3 rounded-full bg-primary/30 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-48 right-24 w-2 h-2 rounded-full bg-accent/40 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-48 left-32 w-2.5 h-2.5 rounded-full bg-cyan/30 hidden lg:block"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-16 w-16 h-16 border border-primary/10 rounded-xl hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-12 h-12 border border-accent/10 rounded-full hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-block mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-primary/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm font-medium text-primary-light">Open to opportunities</span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <MapPin size={10} />
              {PERSONAL_INFO.location.split(',')[0]}
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-2">
            <span className="gradient-text">Dhanush S</span>
          </h1>
        </motion.div>

        {/* Typing role */}
        <motion.div variants={item} className="h-12 sm:h-14 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-zinc-400 font-medium">
            {'< '}
            <span className="text-primary-light">{displayText}</span>
            <span className="inline-block w-[3px] h-7 bg-primary ml-0.5 animate-pulse align-middle rounded-full" />
            {' />'}
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-8 sm:gap-12 mb-12"
        >
          {[
            { value: PERSONAL_INFO.stats.projects, suffix: '+', label: 'Projects', color: 'text-primary' },
            { value: PERSONAL_INFO.stats.languages, suffix: '+', label: 'Technologies', color: 'text-cyan' },
            { value: PERSONAL_INFO.stats.certifications, suffix: '+', label: 'Certifications', color: 'text-accent' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-2xl sm:text-3xl font-bold font-display ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] text-zinc-500 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold font-display text-emerald">
              {PERSONAL_INFO.stats.cgpa}
            </p>
            <p className="text-[11px] text-zinc-500 mt-1 font-medium uppercase tracking-wider">
              CGPA
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <RippleEffect className="rounded-2xl" color="rgba(255,255,255,0.2)">
            <MagneticButton
              href={PERSONAL_INFO.resumeUrl}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              <Download size={18} />
              Download Resume
            </MagneticButton>
          </RippleEffect>
          <RippleEffect className="rounded-2xl" color="rgba(168, 85, 247, 0.2)">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              Let&apos;s Connect
              <ArrowRight size={18} />
            </MagneticButton>
          </RippleEffect>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          {[
            { icon: <Github size={20} />, href: SOCIAL_LINKS.github, label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: SOCIAL_LINKS.email, label: 'Email' },
          ].map((social) => (
            <MagneticButton
              key={social.label}
              href={social.href}
              className="p-3.5 rounded-2xl glass border border-white/5 text-zinc-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              {social.icon}
            </MagneticButton>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            className="w-5 h-9 border-2 border-zinc-700 rounded-full flex justify-center"
            animate={{ borderColor: ['rgba(63,63,70,1)', 'rgba(168,85,247,0.4)', 'rgba(63,63,70,1)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2.5 bg-primary rounded-full mt-1.5"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
