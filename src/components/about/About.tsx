'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { Code2, Brain, Rocket, Zap, Coffee, MapPin, GraduationCap, Calendar } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import TerminalTyping from '@/components/ui/TerminalTyping'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

const terminalLines = [
  { command: 'whoami', output: 'Dhanush S — Python Developer | Backend Developer' },
  { command: 'cat skills.txt', output: 'Python, React, Flask, REST APIs, SQL, Git, AI Integration' },
  { command: 'echo $PASSION', output: 'Building AI-powered applications that solve real problems' },
  { command: 'grep -r "motto" .', output: '"If it works, make it better."' },
  { command: 'status', output: 'Open to opportunities • Erode, Tamil Nadu, India' },
]

const storyCards = [
  {
    icon: <Code2 size={20} />,
    title: 'Python Developer',
    description:
      'I build efficient applications and automation scripts using Python. From Flask web apps to AI integrations with OpenAI and Anthropic APIs, Python is my go-to language for solving problems.',
    color: '#A855F7',
  },
  {
    icon: <Brain size={20} />,
    title: 'Web Developer',
    description:
      'I create responsive, modern web applications using React, Tailwind CSS, and JavaScript. I focus on clean UI, smooth interactions, and accessible design that works across all devices.',
    color: '#D946EF',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Backend Developer',
    description:
      'I design and build robust server-side systems using Flask, REST APIs, SQL databases, and authentication flows. I prioritize security, scalability, and clean architecture.',
    color: '#22D3EE',
  },
]

const highlights = [
  { icon: <Coffee size={14} />, text: 'Problem Solver' },
  { icon: <Zap size={14} />, text: 'Quick Learner' },
  { icon: <Code2 size={14} />, text: 'Clean Code' },
  { icon: <Brain size={14} />, text: 'AI Enthusiast' },
]

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="section-padding relative" aria-labelledby="about-heading">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4 tracking-wider">
            01 — ABOUT
          </span>
          <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            The Story Behind{' '}
            <span className="gradient-text">the Code</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            Get to know me — my journey, my passion, and what drives me to build.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Info cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            {/* Education card */}
            <motion.div variants={fadeUp} custom={1}>
              <GlowCard className="p-5 rounded-2xl glass border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Education</h3>
                </div>
                <p className="text-sm text-zinc-300 font-medium">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Hindusthan College of Science and Commerce
                </p>
              </GlowCard>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
              <GlowCard className="p-4 rounded-2xl glass border border-white/5 text-center">
                <div className="p-2 rounded-lg bg-emerald-500/10 w-fit mx-auto mb-2">
                  <Calendar size={16} className="text-emerald-400" />
                </div>
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider block">
                  Graduation
                </span>
                <p className="font-bold text-xl mt-1 font-display">2026</p>
              </GlowCard>

            </motion.div>

            {/* Location */}
            <motion.div variants={fadeUp} custom={3}>
              <GlowCard className="p-4 rounded-2xl glass border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10">
                    <MapPin size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                      Location
                    </span>
                    <p className="font-semibold text-sm">Erode, Tamil Nadu, India</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Highlight tags */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 pt-2">
              {highlights.map((h) => (
                <span
                  key={h.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/10"
                >
                  {h.icon}
                  {h.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Story cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3 space-y-5"
          >
            {storyCards.map((card, i) => (
              <motion.div key={card.title} variants={fadeUp} custom={i + 1}>
                <GlowCard
                  className="p-5 sm:p-6 rounded-2xl glass border border-white/5 group"
                  glowColor={card.color}
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className="p-2.5 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${card.color}15`,
                        color: card.color,
                        boxShadow: `0 0 0 0 ${card.color}00`,
                      }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1.5">{card.title}</h4>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}

            {/* Fun fact */}
            <motion.div variants={fadeUp} custom={5}>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-cyan/5 border border-primary/10">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="text-lg mr-2">💡</span>
                  <strong className="text-white not-italic">Fun fact:</strong> I love turning
                  complex problems into elegant backend solutions. My motto — &quot;if it works,
                  make it better.&quot;
                </p>
              </div>
            </motion.div>

            {/* Interactive terminal */}
            <motion.div variants={fadeUp} custom={6}>
              <GlowCard className="p-5 rounded-2xl glass border border-white/5" glowColor="#34D399">
                <TerminalTyping lines={terminalLines} />
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
