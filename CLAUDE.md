# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server (after build)
```

No test suite is configured.

## Architecture

Single-page portfolio built with Next.js 14 App Router. All content lives on one route (`/`), composed of sequential section components.

**Data flow:** All portfolio content (personal info, skills, projects, experience, education) is statically defined in `lib/data.ts`. Components import and render this data. There is no CMS or database.

**Contact form:** `components/Contact.tsx` submits to `app/api/contact/route.ts`, which sends email via nodemailer. Requires env vars:
- `GMAIL_USER` — Gmail address
- `GMAIL_APP_PASSWORD` — Gmail app-specific password

**Theming:** Dark/light mode via `next-themes`. Theme is toggled by adding/removing the `dark` class on `<html>`. All components use Tailwind `dark:` variants.

**Animations:** All section components use Framer Motion with viewport-triggered fade-in/stagger. Components are `'use client'` to support this.

**Tailwind safelist:** `tailwind.config.ts` safelists gradient color classes (indigo, cyan, emerald, orange, blue, violet) because they are assembled dynamically from `lib/data.ts` strings and would otherwise be purged.

## Updating Content

To update portfolio content, edit `lib/data.ts` — it exports `personal`, `stats`, `skillCategories`, `projects`, `experiences`, and `education` objects used across all components.

When adding a new project gradient color not already in `tailwind.config.ts`, add its classes to the safelist.
