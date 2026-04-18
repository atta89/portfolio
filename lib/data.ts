export const personal = {
  name: 'Chandra Wijaya',
  role: 'Software Engineer',
  tagline: 'Software Engineer · Full-Stack · React, Next.js & Golang',
  bio: "I'm a Software Engineer with over 4 years of professional experience in web development, specializing in both frontend and backend technologies. I have proficiency in Go (Golang) for building high-performance, scalable backend services, along with extensive experience using React.js and Next.js to develop dynamic, user-friendly platforms. I've consistently delivered strategically aligned, efficient, and maintainable code that enhances platform performance and supports business objectives.",
  location: 'Jakarta, Indonesia',
  email: 'chandraw8999@gmail.com',
  phone: '+62 878 8833 0443',
  linkedin: 'https://www.linkedin.com/in/chandra-w',
  github: 'https://github.com/atta89',
  available: true,
}

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '4+', label: 'Companies' },
  { value: '66%', label: 'Traffic Boost' },
  { value: '2yrs', label: 'at Daftar Properti' },
]

export const skillCategories = [
  {
    name: 'Frontend',
    color: 'from-indigo-500 to-violet-500',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Nuxt.js', 'Tailwind CSS', 'Material-UI', 'Styled-Components', 'Sass', 'Formik'],
  },
  {
    name: 'Backend',
    color: 'from-cyan-500 to-blue-500',
    skills: ['Golang', 'Node.js', 'GraphQL', 'REST API', 'Codegen'],
  },
  {
    name: 'Database',
    color: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB', 'Elasticsearch', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'Tools & DevOps',
    color: 'from-orange-500 to-rose-500',
    skills: ['Git', 'Jenkins', 'Docker', 'Figma', 'VS Code', 'Google Maps API', 'Project Management'],
  },
]

export const projects = [
  {
    title: 'Internal Data Management System',
    description:
      'Enterprise internal system for managing and processing business data at PT. Solusi Aksesindo Pratama, built for reliability and operational efficiency.',
    tech: ['Next.js', 'TypeScript', 'Golang', 'PostgreSQL'],
    demo: '',
    github: '',
    accent: 'from-blue-500 to-indigo-500',
    accentBg: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    title: 'E-Commerce Chat Platform',
    description:
      'Real-time chat platform for e-commerce merchants enabling seamless buyer-seller communication. Boosted flash sale traffic handling capacity by 66% and significantly reduced server costs through code optimization.',
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'Material-UI', 'Sass', 'Codegen'],
    demo: '',
    github: '',
    accent: 'from-violet-500 to-indigo-500',
    accentBg: 'from-violet-500/10 to-indigo-500/10',
  },
  {
    title: 'Admin Dashboard Platform',
    description:
      'Comprehensive multi-tenant admin panel for managing e-commerce operations — orders, analytics, product catalogs — with real-time data and role-based access control.',
    tech: ['React.js', 'TypeScript', 'GraphQL', 'Styled-Components', 'Material-UI'],
    demo: '',
    github: '',
    accent: 'from-cyan-500 to-blue-500',
    accentBg: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    title: 'Daftar Properti Platform',
    description:
      'Full-stack SaaS platform for property and real estate listings with advanced geospatial search. Built with Next.js frontend and high-performance Golang backend, serving data via MongoDB and Elasticsearch.',
    tech: ['Next.js', 'Material-UI', 'Golang', 'MongoDB', 'Elasticsearch'],
    demo: '',
    github: 'https://github.com/atta89/listing-explorer',
    accent: 'from-emerald-500 to-teal-500',
    accentBg: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Freelance Client Websites',
    description:
      'Multiple responsive marketing and business websites for clients in the Jakarta area, focusing on performance, SEO, and pixel-perfect implementation from Figma designs.',
    tech: ['Nuxt.js', 'Vue.js', 'JavaScript', 'CSS3', 'REST API'],
    demo: '',
    github: '',
    accent: 'from-orange-500 to-rose-500',
    accentBg: 'from-orange-500/10 to-rose-500/10',
  },
]

export const experiences = [
  {
    company: 'PT. Solusi Aksesindo Pratama',
    role: 'Software Engineer',
    period: 'Oct 2025 – Present',
    duration: '4 months',
    location: 'Jakarta, Indonesia',
    current: true,
    description: 'Designing, developing, and maintaining an internal data management system.',
    bullets: [
      'Responsible for the full design and development of an internal data management system',
      'Collaborating closely with stakeholders to align technical solutions with business requirements',
    ],
    tech: ['Next.js', 'TypeScript', 'Golang', 'PostgreSQL'],
  },
  {
    company: 'Daftar Properti',
    role: 'Software Engineer',
    period: 'Oct 2023 – Sep 2025',
    duration: '2 years',
    location: 'Surabaya, East Java, Indonesia',
    current: false,
    description:
      'Designed, developed, and maintained a SaaS platform for property and real estate listings with advanced geospatial search.',
    bullets: [
      'Built user interfaces with Next.js and Material-UI for a responsive, seamless user experience',
      'Implemented server-side logic with Golang, focusing on performance and scalability',
      'Managed and queried data with MongoDB and Elasticsearch for fast geospatial property search',
    ],
    tech: ['Next.js', 'Material-UI', 'Golang', 'MongoDB', 'Elasticsearch'],
  },
  {
    company: 'SIRCLO',
    role: 'Associate Software Engineer',
    period: 'Apr 2022 – Aug 2023',
    duration: '1 year 5 months',
    location: 'Tangerang, Indonesia',
    current: false,
    description: 'Developed two core B2B SaaS products: a real-time chat platform and a multi-tenant admin dashboard.',
    bullets: [
      'Increased flash sale traffic handling capacity by 66% through optimized feature development',
      'Reduced server costs by rewriting and refactoring inefficient code into clean architecture',
      'Built and maintained the chat platform using TypeScript, Next.js, and GraphQL',
      'Developed the admin platform using React.js, TypeScript, and Styled-Components',
    ],
    tech: ['TypeScript', 'Next.js', 'React.js', 'GraphQL', 'Material-UI', 'Jenkins'],
    achievements: ['↑ 66% traffic capacity', '↓ Server cost reduction'],
  },
  {
    company: 'Freelance',
    role: 'Frontend Engineer',
    period: 'Sep 2020 – Dec 2021',
    duration: '1 year 4 months',
    location: 'Jakarta, Indonesia',
    current: false,
    description: 'Built attractive, responsive web interfaces for multiple clients across Jakarta.',
    bullets: [
      'Developed client websites using Nuxt.js with a focus on responsive design',
      'Delivered strategically aligned features that met client goals and timelines',
    ],
    tech: ['Nuxt.js', 'Vue.js', 'JavaScript', 'CSS3'],
  },
]

export const education = [
  {
    institution: 'State University of Jakarta',
    degree: 'S1, Physics',
    period: '2016 – 2022',
  },
  {
    institution: 'Alterra Academy',
    degree: 'Frontend Engineering',
    period: 'Dec 2021 – Mar 2022',
  },
  {
    institution: 'Binar Academy',
    degree: 'Android Engineering',
    period: 'Dec 2022 – Apr 2023',
    note: 'Most Progressive Student Award',
  },
]
