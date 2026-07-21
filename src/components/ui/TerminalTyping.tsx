'use client'

import { useState, useEffect, useRef } from 'react'

interface TerminalLine {
  command: string
  output: string
  delay?: number
}

interface TerminalTypingProps {
  lines: TerminalLine[]
  className?: string
  typingSpeed?: number
}

export default function TerminalTyping({
  lines,
  className = '',
  typingSpeed = 40,
}: TerminalTypingProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayLines, setDisplayLines] = useState<
    { command: string; output: string; typingCommand: boolean }[]
  >([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (currentLine >= lines.length) return

    const line = lines[currentLine]

    if (currentChar < line.command.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((p) => p + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setDisplayLines((prev) => [
        ...prev,
        { command: line.command, output: line.output, typingCommand: false },
      ])
      setCurrentLine((p) => p + 1)
      setCurrentChar(0)
    }, line.delay || 300)
    return () => clearTimeout(timeout)
  }, [currentLine, currentChar, lines, typingSpeed])

  const currentTyping = currentLine < lines.length ? lines[currentLine].command.slice(0, currentChar) : ''

  return (
    <div className={`font-mono text-xs sm:text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="text-[10px] text-zinc-600 ml-1">terminal</span>
      </div>
      <div className="space-y-2 min-h-[120px]">
        {displayLines.map((line, i) => (
          <div key={i}>
            <p>
              <span className="text-emerald-400">$</span>{' '}
              <span className="text-zinc-300">{line.command}</span>
            </p>
            <p className="text-zinc-500 pl-3">{line.output}</p>
          </div>
        ))}
        {currentLine < lines.length && (
          <p>
            <span className="text-emerald-400">$</span>{' '}
            <span className="text-zinc-300">{currentTyping}</span>
            <span
              className={`inline-block w-[7px] h-[14px] bg-primary ml-0.5 align-middle rounded-sm ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </p>
        )}
      </div>
    </div>
  )
}
