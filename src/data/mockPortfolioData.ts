import { ProjectItem, MetricCardData, ActivityPoint, ExperienceItem, SkillCategory } from '../types/portfolio';

export const METRICS_DATA: MetricCardData[] = [
  { id: '1', title: 'Code Shipped', value: '142k LOC', change: '+24% this quarter', isPositive: true, iconName: 'Code2' },
  { id: '2', title: 'Worktree Commits', value: '1,280', change: '+32% multi-agent', isPositive: true, iconName: 'GitCommit' },
  { id: '3', title: 'Active Production Users', value: '48.5k', change: '+18% MoM', isPositive: true, iconName: 'Eye' },
  { id: '4', title: 'AI Acceleration Ratio', value: '4.8x', change: 'Antigravity+Claude+Codex', isPositive: true, iconName: 'Sparkles' },
];

export const ACTIVITY_DATA: ActivityPoint[] = [
  { month: 'May', commits: 65, prsMerged: 18, aiAssistedScore: 82 },
  { month: 'Jun', commits: 88, prsMerged: 24, aiAssistedScore: 88 },
  { month: 'Jul', commits: 110, prsMerged: 35, aiAssistedScore: 92 },
  { month: 'Aug', commits: 145, prsMerged: 42, aiAssistedScore: 95 },
  { month: 'Sep', commits: 190, prsMerged: 58, aiAssistedScore: 97 },
  { month: 'Oct', commits: 240, prsMerged: 72, aiAssistedScore: 99 },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'triad-engine',
    title: 'AI Triad Orchestrator',
    description: 'Concurrent multi-agent development engine linking Google Antigravity, Anthropic Claude, and OpenAI Codex over Git worktrees.',
    category: 'ai',
    tags: ['React', 'TypeScript', 'Git Worktrees', 'Multi-Agent', 'Tailwind'],
    metrics: { stars: 1240, users: '12k devs', velocity: '4.8x' },
    demoUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'neural-stream',
    title: 'Neural Stream Analytics',
    description: 'Real-time telemetry dashboard visualizing LLM token throughput, latency percentiles, and inference cost optimizations.',
    category: 'fullstack',
    tags: ['Next.js', 'Recharts', 'Tailwind', 'WebSockets', 'Python'],
    metrics: { stars: 850, users: '3.2k teams', velocity: '99.9% uptime' },
    demoUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'cyber-vault',
    title: 'CyberVault Auth Guard',
    description: 'Zero-trust authentication and access management middleware featuring passkeys, biometric MFA, and cryptographic audit trails.',
    category: 'fullstack',
    tags: ['TypeScript', 'Node.js', 'Cryptography', 'Zod', 'PostgreSQL'],
    metrics: { stars: 620, users: '500+ orgs' },
    demoUrl: '#',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'vision-canvas',
    title: 'VisionCanvas Generative UI',
    description: 'Interactive canvas tool allowing users to prompt and visually manipulate dynamic SVG and HTML widgets in real-time.',
    category: 'frontend',
    tags: ['React', 'Canvas API', 'Tailwind CSS', 'Vite'],
    metrics: { stars: 910, users: '8.4k creators' },
    demoUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend & UI',
    skills: [
      { name: 'React / Next.js', level: 96, icon: '⚛️' },
      { name: 'TypeScript', level: 94, icon: '📘' },
      { name: 'Tailwind CSS', level: 98, icon: '🎨' },
      { name: 'Recharts / D3', level: 88, icon: '📊' },
    ],
  },
  {
    name: 'Agentic AI & Orchestration',
    skills: [
      { name: 'Google Antigravity / Gemini', level: 95, icon: '🌌' },
      { name: 'Anthropic Claude Code', level: 95, icon: '🧠' },
      { name: 'OpenAI Codex / GPT', level: 92, icon: '⚡' },
      { name: 'Git Worktrees / Automation', level: 96, icon: '🌿' },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Systems & AI Solutions Architect',
    company: 'Triad Labs',
    period: '2024 - Present',
    description: 'Designed and engineered autonomous multi-agent pipelines accelerating product delivery by over 400%.',
    highlights: [
      'Pioneered isolated git worktree paradigms for concurrent LLM coding.',
      'Reduced regression bugs to under 0.2% via Claude-powered adversarial code review loops.',
      'Integrated real-time visual telemetry and browser-driven QA in Antigravity.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'NextGen Cloud Systems',
    period: '2022 - 2024',
    description: 'Led development of high-throughput cloud dashboards serving millions of daily API interactions.',
    highlights: [
      'Architected distributed micro-frontends with React and TypeScript.',
      'Optimized Recharts and Canvas rendering performance for 100k+ concurrent data points.',
    ],
  },
];
