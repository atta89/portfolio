# Chandra Wijaya — Portfolio

Personal portfolio website for Chandra Wijaya, a Software Engineer specializing in React.js, Next.js, TypeScript, and Golang. Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

**Live site:** [chandrawijaya.dev](https://chandrawijaya.dev)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes (dark/light mode)
- **Contact:** Nodemailer via Gmail SMTP

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the root:

```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password
```

These are required for the contact form to send emails. Generate an app password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Updating Content

All portfolio content is in [`lib/data.ts`](lib/data.ts). Edit the exported objects to update personal info, skills, projects, work experience, and education — no other files need changing.

## Project Structure

```
app/
  api/contact/route.ts   # Contact form email endpoint
  layout.tsx             # Root layout + metadata
  page.tsx               # Home page
components/              # One component per section (Hero, About, Skills, etc.)
lib/data.ts              # All static content
public/favicon.ico       # Site favicon
```

## License

MIT
