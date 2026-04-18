'use client'

import { motion } from 'framer-motion'
import { personal, stats } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 bg-zinc-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — Avatar + Stats */}
          <motion.div variants={fadeUp} className="flex flex-col items-center lg:items-start gap-10">
            {/* Avatar */}
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 opacity-70 blur-sm animate-spin-slow" />
              <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black flex items-center justify-center border border-white/10 overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
                {/* Initials */}
                <span className="relative text-5xl font-bold gradient-text select-none">CW</span>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-full shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-zinc-300 font-medium">Open to work</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all group"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3 block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                Turning complex problems into{' '}
                <span className="gradient-text">elegant solutions</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {personal.bio}
            </motion.p>

            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I've contributed to industry-leading products at{' '}
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">SIRCLO</span> and{' '}
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">Daftar Properti</span>,
              working across the full stack — from building real-time chat platforms and data-heavy admin
              dashboards to highly scalable backend services in Go.
            </motion.p>

            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Outside of professional work, I have a background in Physics from the{' '}
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                State University of Jakarta
              </span>
              , which has given me a strong analytical mindset I apply to every engineering challenge.
            </motion.p>

            {/* Quick facts */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                ['Location', 'Jakarta, Indonesia'],
                ['Experience', '4+ Years'],
                ['Specialization', 'Frontend & Full-Stack'],
                ['Education', 'S1 Physics, UNJ'],
              ].map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500 flex-shrink-0" />
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">{key}:</span>
                  <span className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">{value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
              >
                Get in touch
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 glass-card text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-sm font-medium rounded-xl transition-all hover:-translate-y-0.5"
              >
                View LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
