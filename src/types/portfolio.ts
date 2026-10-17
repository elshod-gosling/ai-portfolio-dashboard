export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'frontend' | 'mobile';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  metrics: {
    stars?: number;
    users?: string;
    velocity?: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface MetricCardData {
  id: string;
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  iconName: 'Code2' | 'GitCommit' | 'Eye' | 'Sparkles' | 'Terminal' | 'Cpu';
}

export interface ActivityPoint {
  month: string;
  commits: number;
  prsMerged: number;
  aiAssistedScore: number;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}
