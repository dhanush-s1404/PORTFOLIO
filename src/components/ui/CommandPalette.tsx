'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Search, Command, ArrowRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { NAV_LINKS } from '@/lib/constants'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

const allCommands = [
  ...NAV_LINKS.map((link) => ({
    id: link.href,
    label: link.label,
    action: () => {
      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
    },
    category: 'Navigation',
  })),
  {
    id: 'resume',
    label: 'Download Resume',
    action: () => window.open('/resume.pdf', '_blank'),
    category: 'Actions',
  },
  {
    id: 'github',
    label: 'View GitHub Profile',
    action: () => window.open('https://github.com/dhanush-s1404', '_blank'),
    category: 'Links',
  },
  {
    id: 'linkedin',
    label: 'Connect on LinkedIn',
    action: () =>
      window.open('https://linkedin.com/in/dhanush-s-3a03622a2', '_blank'),
    category: 'Links',
  },
  {
    id: 'email',
    label: 'Send Email',
    action: () =>
      window.open('mailto:dhanushdhanush12950@gmail.com', '_blank'),
    category: 'Contact',
  },
]

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = allCommands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      filtered[selectedIndex].action()
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-[9991]"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                <Search size={18} className="text-zinc-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-zinc-500 bg-surface-3 rounded border border-white/5">
                  ESC
                </kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-center text-sm text-zinc-500 py-8">
                    No results found
                  </p>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action()
                        onClose()
                      }}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                        i === selectedIndex
                          ? 'bg-primary/10 text-primary'
                          : 'text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex-1 text-left">{cmd.label}</span>
                      <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-surface-3">
                        {cmd.category}
                      </span>
                      <ArrowRight
                        size={14}
                        className={`transition-opacity ${
                          i === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  ))
                )}
              </div>
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/5 text-[10px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface-3 rounded font-mono">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface-3 rounded font-mono">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface-3 rounded font-mono">esc</kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
