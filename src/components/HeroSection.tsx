import React from 'react';
import { ArrowRight, Code, Sparkles, Activity, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToProjects, onOpenContact }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/50">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-medium mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Built by a 3-AI Engineering Triad</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Architecting the Next Era of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              Autonomous Software
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
            Full-stack engineer & AI systems architect. Delivering robust, high-performance web applications and autonomous agent pipelines with multi-worktree coordination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-base transition-all hover:border-slate-700"
            >
              <span>Collaborate With Me</span>
            </button>
          </div>

          {/* Micro badges */}
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span>Full-Stack TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Live Telemetry & Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Adversarial Code Verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
