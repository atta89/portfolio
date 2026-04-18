'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 bg-white dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 block mb-3">
            What I Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build fast, scalable, and beautiful products.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-white/15 transition-all group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-sm bg-white/80" />
                </div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">{category.name}</h3>
                <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-600">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/8 hover:bg-zinc-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/40 cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
        />
      </div>
    </section>
  )
}
