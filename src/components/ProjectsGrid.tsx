import React, { useState } from 'react';
import { ExternalLink, Github, Star, Sparkles, Filter } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types/portfolio';

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI & Agents', value: 'ai' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Frontend & UI', value: 'frontend' },
  ];

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-section" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4" /> Selected Works
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Software & Autonomous Systems
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            <Filter className="w-4 h-4 text-slate-500 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase bg-slate-800 text-slate-300 border border-slate-700/60">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {item.demoUrl && (
                      <a
                        href={item.demoUrl}
                        className="p-1.5 rounded-lg bg-indigo-950/60 text-indigo-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics Footer */}
                {item.metrics && (
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                    {item.metrics.stars && (
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.metrics.stars.toLocaleString()} stars</span>
                      </div>
                    )}
                    {item.metrics.users && <span>{item.metrics.users}</span>}
                    {item.metrics.velocity && (
                      <span className="text-emerald-400">{item.metrics.velocity}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
