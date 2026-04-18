'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personal } from '@/lib/data'

type FormState = { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'loading' | 'success' | 'error'
type FormErrors = Partial<Record<keyof FormState, string>>

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [apiError, setApiError] = useState('')

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim())    e.name    = 'Name is required.'
    if (!form.email.trim())   e.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    setApiError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-400 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-white/8 transition-all text-sm'

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 bg-zinc-50 dark:bg-[#080808]">
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
            Let's Talk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Have a project in mind or want to chat? I'm always open to new opportunities and
            interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Ready to build something great?
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I'm currently open to full-time roles, freelance projects, and technical collaborations.
                Drop me a message and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: MapPin, label: 'Location', value: personal.location, href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-zinc-300 dark:hover:border-white/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-600">{label}</p>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-wider font-medium mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
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
                    className="w-11 h-11 flex items-center justify-center glass-card rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/20 hover:-translate-y-1 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      Message sent!
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-5 py-2.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          Name <span className="text-indigo-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`${inputClass} ${errors.name ? 'border-red-400 dark:border-red-500' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          Email <span className="text-indigo-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`${inputClass} ${errors.email ? 'border-red-400 dark:border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project collaboration, job opportunity..."
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        Message <span className="text-indigo-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or what you have in mind..."
                        className={`${inputClass} resize-none ${errors.message ? 'border-red-400 dark:border-red-500' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {status === 'error' && apiError && (
                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-sm text-red-600 dark:text-red-400">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
                          <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M7.5 4.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                          <circle cx="7.5" cy="10.5" r="0.75" fill="currentColor"/>
                        </svg>
                        {apiError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 disabled:translate-y-0 transition-all"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          {status === 'error' ? 'Try Again' : 'Send Message'}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
