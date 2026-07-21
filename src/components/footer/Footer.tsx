'use client'

import { motion } from 'motion/react'
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import LiveClock from '@/components/ui/LiveClock'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative px-4 sm:px-6 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl gradient-text mb-3">
              DS<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-white/5 text-zinc-400 hover:text-primary hover:border-primary/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-white/5 text-zinc-400 hover:text-primary hover:border-primary/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="p-2.5 rounded-xl glass border border-white/5 text-zinc-400 hover:text-primary hover:border-primary/20 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.email}
                className="block text-sm text-zinc-500 hover:text-primary transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-sm text-zinc-500">
                {PERSONAL_INFO.phone}
              </p>
              <p className="text-sm text-zinc-500">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Live clock */}
        <div className="flex justify-center mb-6">
          <LiveClock />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            and Next.js
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass border border-white/5 text-zinc-400 hover:text-primary hover:border-primary/20 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
