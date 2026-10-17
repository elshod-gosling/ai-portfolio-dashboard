import React from 'react';
import { Terminal, Github, Sparkles, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Portfolio<span className="text-indigo-400">.ai</span>
            </span>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider">TRIAD COLLABORATIVE</div>
          </div>
        </div>

        {/* AI Agent Status Badges */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono">
          <span className="text-slate-400 flex items-center gap-1 text-[11px]">
            <Layers className="w-3.5 h-3.5 text-slate-400" /> Agents:
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Antigravity
          </span>
          <span className="inline-flex items-center gap-1 text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span> Claude
          </span>
          <span className="inline-flex items-center gap-1 text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Codex
          </span>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/25 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
