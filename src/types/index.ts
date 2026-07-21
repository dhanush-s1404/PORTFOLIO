export interface Project {
  title: string
  subtitle: string
  description: string
  longDescription: string
  highlights: { icon: string; text: string }[]
  tech: string[]
  github: string
  live?: string
  featured: boolean
  gradient: string
  stats?: { label: string; value: string }[]
}

export interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

export interface SkillCategory {
  title: string
  icon: string
  color: string
  skills: Skill[]
}

export interface Certification {
  title: string
  issuer: string
  year: string
  icon: string
  category: string
  credentialId?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'education' | 'project' | 'certification' | 'milestone'
  icon: string
}

export interface NavLink {
  label: string
  href: string
  icon?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
