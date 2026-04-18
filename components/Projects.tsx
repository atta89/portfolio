"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 bg-zinc-50 dark:bg-[#080808]"
    >
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
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            A selection of work from my professional experience — each project
            solving real problems at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/15 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all"
            >
              {/* Top accent gradient bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}
              />

              {/* Card header */}
              <div
                className={`relative p-6 bg-gradient-to-br ${project.accentBg} border-b border-zinc-100 dark:border-white/5`}
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-4xl font-black text-zinc-200 dark:text-white/5 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 pr-10">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-4">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.demo && (
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  </div>
                )}
                {project.demo && project.github && (
                  <span className="w-px h-4 bg-zinc-200 dark:bg-white/10" />
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-4">
            Want to see more? Check out my GitHub for additional projects.
          </p>
          <a
            href="https://github.com/atta89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-sm font-medium rounded-xl transition-all hover:-translate-y-0.5"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
