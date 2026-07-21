'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export function useTypingEffect(
  words: string[],
  typingSpeed: number = 80,
  deletingSpeed: number = 40,
  pauseDuration: number = 2000
) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
        timeoutRef.current = setTimeout(tick, typingSpeed)
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1))
        timeoutRef.current = setTimeout(tick, deletingSpeed)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        timeoutRef.current = setTimeout(tick, typingSpeed)
      }
    }
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, typingSpeed)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [tick, typingSpeed])

  return { displayText, isDeleting, wordIndex }
}
