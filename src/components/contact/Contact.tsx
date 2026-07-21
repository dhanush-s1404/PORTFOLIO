'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import GlowCard from '@/components/ui/GlowCard'
import { Mail, Phone, Linkedin, Github, Send, MessageCircle, ArrowUpRight } from 'lucide-react'
import { useState, FormEvent } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    hoverColor: 'hover:bg-emerald-500',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    hoverColor: 'hover:bg-primary',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'dhanush-s-3a03622a2',
    href: SOCIAL_LINKS.linkedin,
    hoverColor: 'hover:bg-blue-600',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'dhanush-s1404',
    href: SOCIAL_LINKS.github,
    hoverColor: 'hover:bg-purple-600',
  },
]

export default function Contact() {
  const { ref, isInView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative" aria-labelledby="contact-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
      </div>

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
            07 — CONTACT
          </span>
          <h2 id="contact-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg">
            I&apos;m actively seeking internship and job opportunities. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} custom={i + 1}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 group hover:border-primary/20 transition-all"
                >
                  <div className={`p-3 rounded-xl bg-primary/10 text-primary ${item.hoverColor} group-hover:text-white transition-all group-hover:scale-110 group-hover:shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </a>
              </motion.div>
            ))}

            {/* Quick connect */}
            <motion.div variants={fadeUp} custom={5}>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-cyan/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Quick Response</span>
                </div>
                <p className="text-xs text-zinc-400">
                  I typically respond within 24 hours. For urgent matters, call or message on LinkedIn.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={3}
          >
            <GlowCard className="p-6 sm:p-7 rounded-3xl glass border border-white/5" glowColor="#A855F7">
              <h3 className="font-semibold mb-1">Send a Message</h3>
              <p className="text-xs text-zinc-500 mb-5">Fill out the form and I&apos;ll get back to you.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl">✓</span>
                  </motion.div>
                  <p className="font-semibold">Message Sent!</p>
                  <p className="text-sm text-zinc-400 mt-1">I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-zinc-500">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-white/5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-zinc-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-zinc-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-white/5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-zinc-600"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-zinc-500">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-white/5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-zinc-600 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
