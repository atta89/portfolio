import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personal } from '@/lib/data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900/30 border-t border-zinc-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                CW
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white">Chandra Wijaya</span>
            </a>
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              Software Engineer · Jakarta, Indonesia
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} Chandra Wijaya. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1">
            Built with <Heart size={11} className="text-rose-400" fill="currentColor" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
