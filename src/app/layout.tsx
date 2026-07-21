import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Dhanush S — Python Developer & Full Stack Engineer',
    template: '%s | Dhanush S',
  },
  description:
    'Portfolio of Dhanush S — Python Developer, Full Stack Engineer, and AI Enthusiast from Erode, India. Building intelligent applications with Python, Flask, React, and AI APIs.',
  keywords: [
    'Dhanush S',
    'Python Developer',
    'Full Stack Developer',
    'AI Developer',
    'React Developer',
    'Flask',
    'Portfolio',
    'Erode',
    'Tamil Nadu',
  ],
  authors: [{ name: 'Dhanush S' }],
  creator: 'Dhanush S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhanush-s.vercel.app',
    siteName: 'Dhanush S Portfolio',
    title: 'Dhanush S — Python Developer & Full Stack Engineer',
    description:
      'Portfolio of Dhanush S — Python Developer, Full Stack Engineer, and AI Enthusiast. Building intelligent applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dhanush S — Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanush S — Python Developer & Full Stack Engineer',
    description:
      'Portfolio of Dhanush S — Python Developer, Full Stack Engineer, and AI Enthusiast.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-[#050505] text-white noise-overlay`}
      >
        {children}
      </body>
    </html>
  )
}
