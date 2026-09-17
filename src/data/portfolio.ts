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
    name: 'BHARATHRAJA S',
    initials: 'B',
    role: 'Engineering Student',
    email: 'bharathraja1113@gmail.com',
    github: 'https://github.com/bharathraja-ux',
    linkedin: 'https://www.linkedin.com/in/bharathraja-s-757261384',
    location: 'Chennai, India',
    resume: 'resume.pdf',
    bio: 'I am an Engineering student who enjoys turning complex problems into practical, reliable software. My interests sit at the intersection of product engineering, backend systems, and thoughtful user experiences.',
  },
  education: {
    school: 'Sri Sairam Engineering College, Chennai',
    degree: 'B.Tech in Information Technology',
    duration: '2025 — 2029',
    details: 'Building a strong foundation in software development, systems, and information technology.',
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
      title: 'CropSense',
      eyebrow: 'PROJECT 01 / CropSense',
      description: "CropSense is an installable Progressive Web App that lets a farmer photograph a crop leaf and get back, in seconds, a disease diagnosis, a visual explanation of that diagnosis, organic and chemical treatment options, and a weather-adjusted forecast of how much yield they stand to lose if the disease goes untreated. It's built for smallholder farmers and agribusinesses working in low-connectivity rural areas, with full offline support and localization in English, Tamil, and Hindi so the tool is usable in the fields where it's needed, not just at a desk.",
      problem: "Smallholder farmers routinely lose yield to leaf diseases that are treatable if caught early — but accurate diagnosis usually requires an agricultural extension officer or a lab test, neither of which is fast, cheap, or accessible in rural areas. Even when a farmer suspects a problem, they're left without a clear next step: which treatment to use, at what dosage, and how urgent the situation actually is given the week's weather. Existing tools either assume reliable internet access or stop at \"here's a disease name,\" leaving the harder question — what do I do now, and what's it going to cost me — unanswered.",
      solution: "CropSense turns a leaf photo into a full decision: a Python FastAPI microservice runs the image through a CNN-based classifier and generates a Grad-CAM heatmap so the diagnosis is visually explainable rather than a black box, not just a label. That result is combined server-side with live OpenWeatherMap data to run a yield-impact model — factoring in disease severity, humidity, rainfall, and temperature — that projects loss percentage both untreated and treated, so the farmer can see what a treatment is actually worth. The app then surfaces matched organic and chemical treatment plans with dosage, application steps, and safety/pre-harvest-interval guidance.Because the target users often have patchy connectivity, the frontend is offline-first: scans queue in IndexedDB and auto-sync once a connection returns, and every screen has an explicit offline state rather than a spinner or a broken layout. On the backend, the architecture was designed to evolve — starting as a PyTorch prototype with a local-storage fallback for zero-downtime demos, then hardened into a production path using ONNX Runtime for lightweight cross-platform inference, an out-of-distribution filter to reject non-leaf images, confidence calibration that flags low-confidence results for agronomist review, and S3-compatible object storage with image optimization so uploads don't erode storage or bandwidth on rural connections.",
      stack: ['React+vite+Tailwind-CSS', 'TypeScript', 'Node.js+Express', 'PostgreSQL', 'Python+FastAPI+uvicorn'],
      highlights: ['Responsive frontend', 'REST API architecture', 'Thoughtful data modeling'],
      accent: '#3b82f6',
      github: 'https://github.com/username',
      demo: '#contact',
    },

  ] as Project[],
} as const
