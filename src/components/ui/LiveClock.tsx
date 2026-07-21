'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin } from 'lucide-react'

export default function LiveClock() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
      setDate(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass border border-white/5 text-xs font-mono">
      <div className="flex items-center gap-1.5 text-zinc-400">
        <Clock size={12} className="text-primary" />
        <span className="text-white tabular-nums">{time}</span>
      </div>
      <div className="w-px h-3 bg-white/10" />
      <div className="flex items-center gap-1.5 text-zinc-400">
        <MapPin size={12} className="text-emerald-400" />
        <span>IST</span>
      </div>
      <div className="w-px h-3 bg-white/10" />
      <span className="text-zinc-500">{date}</span>
    </div>
  )
}
