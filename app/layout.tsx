import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chandra Wijaya — Software Engineer',
  description:
    'Software Engineer with 4+ years of experience building scalable web applications with React.js, Next.js, TypeScript, and Golang. Based in Jakarta, Indonesia.',
  keywords: [
    'Software Engineer',
    'Frontend Developer',
    'Full-Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Golang',
    'Jakarta',
  ],
  authors: [{ name: 'Chandra Wijaya', url: 'https://chandrawijaya.vercel.app' }],
  openGraph: {
    title: 'Chandra Wijaya — Software Engineer',
    description:
      'Software Engineer with 4+ years of experience building scalable web applications with React.js, Next.js, TypeScript, and Golang.',
    type: 'website',
    url: 'https://chandrawijaya.vercel.app',
    siteName: 'Chandra Wijaya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Wijaya — Software Engineer',
    description:
      'Software Engineer with 4+ years of experience building scalable web applications.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
