export type Project = {
  title: string
  eyebrow: string
  description: string
  problem: string
  solution: string
  stack: string[]
  highlights: string[]
  accent: string
  github: string
  demo: string
}

export const portfolio = {
  personal: {
    name: 'BHARATHRAJA',
    initials: 'S',
    role: 'Engineering Student',
    email: 'bharathraja1113@gmail.com',
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    location: 'Chennai, India',
    resume: '/resume.pdf',
    bio: 'I am an Engineering student who enjoys turning complex problems into practical, reliable software. My interests sit at the intersection of product engineering, backend systems, and thoughtful user experiences.',
  },
  education: {
    school: 'Sri Sairam Engineering College, Chennai',
    degree: 'B.Tech / B.TECH. in Information Technology',
    duration: '2025 — 2029',
    details: 'Add your coursework, academic interests, certifications, or GPA here when ready.',
  },
  coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  skills: [
    { name: 'TypeScript', category: 'Programming', icon: 'TS' },
    { name: 'Python', category: 'Programming', icon: 'PY' },
    { name: 'JavaScript', category: 'Programming', icon: 'JS' },
    { name: 'React', category: 'Frontend', icon: 'RE' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'TW' },
    { name: 'Node.js', category: 'Backend', icon: 'NO' },
    { name: 'REST APIs', category: 'Backend', icon: 'API' },
    { name: 'PostgreSQL', category: 'Databases', icon: 'PG' },
    { name: 'Git', category: 'Tools', icon: 'GI' },
    { name: 'Docker', category: 'Tools', icon: 'DO' },
  ],
  projects: [
    {
      title: 'Your featured project',
      eyebrow: 'PROJECT 01 / CASE STUDY',
      description: 'A concise description of the product, the people it serves, and the experience you created.',
      problem: 'Describe the specific user or engineering problem this project addresses.',
      solution: 'Explain the product approach and the technical choices that made the solution useful.',
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      highlights: ['Responsive frontend', 'REST API architecture', 'Thoughtful data modeling'],
      accent: '#3b82f6',
      github: 'https://github.com/username',
      demo: '#contact',
    },
    
  ] as Project[],
} as const
