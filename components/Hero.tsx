'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personal } from '@/lib/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const techBadges = ['React.js', 'Next.js', 'TypeScript', 'Golang', 'GraphQL', 'MongoDB', 'Elasticsearch']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-[#080808]">
        {/* Grid */}
        <div className="absolute inset-0 hero-grid opacity-100" />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-radial from-indigo-500/20 via-violet-500/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-gradient-radial from-violet-500/10 to-transparent blur-3xl" />

        {/* Fade to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-50 dark:from-[#080808] to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16"
      >
        {/* Available pill */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass-card text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
            Available for new opportunities
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <MapPin size={11} className="text-zinc-400" />
            Jakarta, Indonesia
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.05] mb-6"
        >
          Building{' '}
          <span className="gradient-text">exceptional</span>
          <br />
          web experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm{' '}
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">Chandra Wijaya</span>
          , a Software Engineer with{' '}
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">4+ years</span>{' '}
          of experience crafting scalable, user-focused products with React, Next.js, and Golang.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 glass-card text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium rounded-xl hover:-translate-y-0.5 transition-all hover:border-zinc-300 dark:hover:border-white/20"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: Github, href: personal.github, label: 'GitHub' },
            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl glass-card text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/20 transition-all hover:-translate-y-0.5"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-zinc-400 dark:text-zinc-600 mr-1">Tech stack:</span>
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
              className="px-2.5 py-1 text-xs rounded-lg glass-card text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/30 cursor-default transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-zinc-400 dark:text-zinc-600 tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}
