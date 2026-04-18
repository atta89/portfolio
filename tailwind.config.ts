import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in': 'fade-in 0.5s ease forwards',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '200% 200%' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-white': 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'grid-black': 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  safelist: [
    // Gradient classes referenced dynamically in lib/data.ts.
    // Tailwind's scanner cannot detect classes assembled at runtime,
    // so these must be explicitly safelisted to survive the build purge.
    'from-indigo-500', 'to-violet-500',
    'from-cyan-500',   'to-blue-500',
    'from-emerald-500','to-teal-500',
    'from-orange-500', 'to-rose-500',
    'from-blue-500',   'to-indigo-500',
    'from-violet-500',
    // opacity-modified variants used in project accentBg
    'from-blue-500/10',    'to-indigo-500/10',
    'from-violet-500/10',
    'from-cyan-500/10',    'to-blue-500/10',
    'from-emerald-500/10', 'to-teal-500/10',
    'from-orange-500/10',  'to-rose-500/10',
  ],
  plugins: [],
}

export default config
