'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/ui/Preloader'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/navigation/Navbar'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Projects from '@/components/projects/Projects'
import Timeline from '@/components/timeline/Timeline'
import Certifications from '@/components/certifications/Certifications'
import GitHubStats from '@/components/github/GitHubStats'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import FloatingShapes from '@/components/ui/FloatingShapes'
import CommandPalette from '@/components/ui/CommandPalette'
import SectionDivider from '@/components/ui/SectionDivider'
import BackToTop from '@/components/ui/BackToTop'
import TechMarquee from '@/components/sections/TechMarquee'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCommandPalette, setShowCommandPalette] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowCommandPalette((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      <CustomCursor />
      <ScrollProgress />
      <FloatingShapes />
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
      />
      <main>
        <Navbar />
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <GitHubStats />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
