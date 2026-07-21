import { NavLink, Project, SkillCategory, Certification, TimelineEvent } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/dhanush-s1404',
  linkedin: 'https://linkedin.com/in/dhanush-s-3a03622a2',
  email: 'mailto:dhanushdhanush12950@gmail.com',
  phone: 'tel:+916374944704',
}

export const PERSONAL_INFO = {
  name: 'Dhanush S',
  title: 'Python Developer',
  roles: ['Python Developer', 'Backend Developer', 'AI Enthusiast'],
  location: 'Erode, Tamil Nadu, India',
  email: 'dhanushdhanush12950@gmail.com',
  phone: '+91 63749 44704',
  bio: 'Enthusiastic graduate skilled in Python, DSA, and web development. Passionate about building AI-powered applications and applying technical knowledge to solve real-world problems.',
  github: 'https://github.com/dhanush-s1404',
  linkedin: 'https://linkedin.com/in/dhanush-s-3a03622a2',
  resumeUrl: '/resume.pdf',
  stats: {
    projects: 2,
    languages: 6,
    certifications: 4,

  },
}

export const PROJECTS: Project[] = [
  {
    title: 'AI Code Review System',
    subtitle: 'Full-Stack AI Application',
    description:
      'A production-ready web application that automates source code analysis using AI. Detects bugs, security vulnerabilities, and coding standard violations with intelligent fix suggestions.',
    longDescription:
      'Built from the ground up to bridge the gap between manual code review and AI-assisted development. This system integrates dual AI engines — OpenAI GPT and Anthropic Claude — to provide comprehensive code analysis with severity classification, quality scoring, and actionable improvement suggestions. Features a complete authentication system, analysis history tracking, and a robust static analysis fallback.',
    highlights: [
      { icon: 'brain', text: 'OpenAI GPT + Anthropic Claude integration' },
      { icon: 'shield', text: 'Severity classification & quality scores' },
      { icon: 'upload', text: 'File upload & user authentication' },
      { icon: 'history', text: 'Analysis history & fallback static analysis' },
    ],
    tech: ['Python', 'Flask', 'SQLite', 'OpenAI API', 'Anthropic API', 'REST APIs', 'JWT Auth'],
    github: 'https://github.com/dhanush-s1404/AI-Code-Review-System',
    featured: true,
    gradient: 'from-[#A855F7] via-[#D946EF] to-[#F43F5E]',
    stats: [
      { label: 'AI Engines', value: '2' },
      { label: 'Bug Categories', value: '15+' },
      { label: 'Analysis Depth', value: 'Deep' },
    ],
  },
  {
    title: 'Personal Developer Portfolio',
    subtitle: 'Frontend Showcase',
    description:
      'A responsive, modern developer portfolio with dark/light mode, scroll animations, interactive components, and a clean professional aesthetic. Deployed on Vercel.',
    longDescription:
      'Crafted to showcase development skills through an immersive browsing experience. Every interaction is intentional — from smooth scroll animations to glassmorphic UI components. This project demonstrates proficiency in modern frontend technologies and an eye for premium design.',
    highlights: [
      { icon: 'code', text: 'React + Vite + Tailwind CSS' },
      { icon: 'star', text: 'Dark/Light mode with smooth transitions' },
      { icon: 'zap', text: 'Scroll-triggered animations' },
      { icon: 'palette', text: 'Glassmorphism & gradient effects' },
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    github: 'https://github.com/dhanush-s1404/portfolio',
    live: 'https://portfolio-one-beta-68.vercel.app',
    featured: false,
    gradient: 'from-[#A855F7] via-[#22D3EE] to-[#34D399]',
    stats: [
      { label: 'Lighthouse', value: '95+' },
      { label: 'Components', value: '15+' },
      { label: 'Animations', value: '20+' },
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    color: '#A855F7',
    skills: [
      { name: 'Python', level: 90, category: 'Languages' },
      { name: 'JavaScript', level: 65, category: 'Languages' },
      { name: 'C', level: 70, category: 'Languages' },
      { name: 'SQL', level: 80, category: 'Languages' },
      { name: 'PHP', level: 60, category: 'Languages' },
      { name: 'HTML5', level: 75, category: 'Languages' },
      { name: 'CSS3', level: 70, category: 'Languages' },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    color: '#D946EF',
    skills: [
      { name: 'React', level: 80, category: 'Frameworks' },
      { name: 'Flask', level: 85, category: 'Frameworks' },
      { name: 'Tailwind CSS', level: 85, category: 'Frameworks' },
      { name: 'REST APIs', level: 85, category: 'Frameworks' },
      { name: 'Node.js', level: 60, category: 'Frameworks' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    color: '#34D399',
    skills: [
      { name: 'MySQL', level: 80, category: 'Databases' },
      { name: 'SQLite', level: 85, category: 'Databases' },
      { name: 'MongoDB', level: 75, category: 'Databases' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'wrench',
    color: '#22D3EE',
    skills: [
      { name: 'Git', level: 85, category: 'Tools' },
      { name: 'GitHub', level: 85, category: 'Tools' },
      { name: 'VS Code', level: 90, category: 'Tools' },
      { name: 'Tableau', level: 65, category: 'Tools' },
      { name: 'Postman', level: 75, category: 'Tools' },
    ],
  },
  {
    title: 'AI & APIs',
    icon: 'brain',
    color: '#FACC15',
    skills: [
      { name: 'OpenAI API', level: 80, category: 'AI' },
      { name: 'Anthropic API', level: 75, category: 'AI' },
      { name: 'Prompt Engineering', level: 85, category: 'AI' },
      { name: 'AI Integration', level: 80, category: 'AI' },
    ],
  },
  {
    title: 'Concepts',
    icon: 'lightbulb',
    color: '#F43F5E',
    skills: [
      { name: 'DSA', level: 70, category: 'Concepts' },
      { name: 'OOP', level: 85, category: 'Concepts' },
      { name: 'Problem Solving', level: 90, category: 'Concepts' },
      { name: 'System Design', level: 70, category: 'Concepts' },
      { name: 'Clean Code', level: 85, category: 'Concepts' },
    ],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata via Forage',
    year: '2026',
    icon: '🤖',
    category: 'AI & Analytics',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia via Forage',
    year: '2026',
    icon: '📊',
    category: 'Data Analytics',
  },
  {
    title: 'Resume Writing with AI Support Job Simulation',
    issuer: 'Forage',
    year: '2026',
    icon: '📝',
    category: 'Professional Skills',
  },
  {
    title: 'Advance Diploma in Python Programming',
    issuer: 'CSC',
    year: '2023',
    icon: '🐍',
    category: 'Programming',
  },
]

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Started BCA',
    description: 'Began Bachelor of Computer Applications at Hindusthan College of Science and Commerce, Erode.',
    type: 'education',
    icon: 'graduation-cap',
  },
  {
    year: '2023',
    title: 'Python Programming Diploma',
    description: 'Earned Advance Diploma in Python Programming from CSC, building a strong foundation in software development.',
    type: 'certification',
    icon: 'award',
  },
  {
    year: '2024',
    title: 'Deep Dive into Web Development',
    description: 'Mastered React.js, Flask, REST APIs, and database management. Started building full-stack applications.',
    type: 'milestone',
    icon: 'code',
  },
  {
    year: '2025',
    title: 'AI Code Review System',
    description: 'Built a production-ready AI-powered code analysis platform integrating OpenAI GPT and Anthropic Claude APIs.',
    type: 'project',
    icon: 'brain',
  },
  {
    year: '2026',
    title: 'Professional Certifications',
    description: 'Completed multiple job simulations with Tata, Deloitte, and Forage — specializing in GenAI and Data Analytics.',
    type: 'certification',
    icon: 'award',
  },
  {
    year: '2026',
    title: 'BCA Graduation',
    description: 'Expected graduation. Ready to contribute to innovative software teams.',
    type: 'education',
    icon: 'graduation-cap',
  },
]

export const GITHUB_STATS = {
  username: 'dhanush-s1404',
  totalRepos: 15,
  totalStars: 5,
  totalCommits: 200,
  followers: 3,
  following: 5,
  languages: [
    { name: 'Python', percentage: 45, color: '#3572A5' },
    { name: 'JavaScript', percentage: 25, color: '#f1e05a' },
    { name: 'HTML', percentage: 15, color: '#e34c26' },
    { name: 'CSS', percentage: 10, color: '#563d7c' },
    { name: 'Other', percentage: 5, color: '#8b8b8b' },
  ],
  recentRepos: [
    { name: 'AI-Code-Review-System', description: 'AI-powered code analysis platform', stars: 2, language: 'Python' },
    { name: 'portfolio', description: 'Personal developer portfolio', stars: 1, language: 'JavaScript' },
    { name: 'portfolio-next', description: 'Next.js portfolio redesign', stars: 0, language: 'TypeScript' },
  ],
}
