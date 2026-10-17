import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsOverview } from './components/MetricsOverview';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsAndTimeline } from './components/SkillsAndTimeline';
import { ContactModal } from './components/ContactModal';
import {
  METRICS_DATA,
  ACTIVITY_DATA,
  PROJECTS_DATA,
  SKILL_CATEGORIES,
  EXPERIENCE_DATA,
} from './data/mockPortfolioData';
import { Heart, Terminal } from 'lucide-react';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-1">
        <HeroSection
          onScrollToProjects={handleScrollToProjects}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <MetricsOverview metrics={METRICS_DATA} />

        <AnalyticsDashboard data={ACTIVITY_DATA} />

        <ProjectsGrid projects={PROJECTS_DATA} />

        <SkillsAndTimeline skills={SKILL_CATEGORIES} experience={EXPERIENCE_DATA} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Built autonomously by Antigravity, Claude, and Codex.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by Git Worktrees & AI Triad Pipeline</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline ml-1" />
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
