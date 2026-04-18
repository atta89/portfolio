'use client'

import { motion } from 'framer-motion'
import { experiences, education } from '@/lib/data'
import { GraduationCap, Trophy } from 'lucide-react'

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 bg-white dark:bg-zinc-900/30">
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline — 2/3 width */}
          <div className="lg:col-span-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={`${exp.company}-${exp.role}`}
                    variants={fadeLeft}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                      exp.current
                        ? 'bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-500/30'
                        : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600'
                    }`}>
                      <span className="text-[9px] font-bold text-white dark:text-zinc-200">
                        {exp.company.slice(0, 1)}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="glass-card rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-white/15 transition-all group">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                          <p className="text-xs text-zinc-400 dark:text-zinc-600">{exp.duration}</p>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{exp.description}</p>

                      {/* Bullets */}
                      <ul className="space-y-1.5 mb-4">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Achievements */}
                      {exp.achievements && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.achievements.map((ach) => (
                            <span
                              key={ach}
                              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
                            >
                              {ach}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/8"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education — 1/3 width */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap size={18} className="text-indigo-500" />
              Education
            </h3>

            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="glass-card rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-white/15 transition-all"
                >
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm mb-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{edu.institution}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600">{edu.period}</p>
                  {edu.note && (
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
                      <Trophy size={11} />
                      {edu.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
