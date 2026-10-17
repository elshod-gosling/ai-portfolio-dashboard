import React from 'react';
import { Briefcase, Cpu, CheckCircle2 } from 'lucide-react';
import { SkillCategory, ExperienceItem } from '../types/portfolio';

interface SkillsAndTimelineProps {
  skills: SkillCategory[];
  experience: ExperienceItem[];
}

export const SkillsAndTimeline: React.FC<SkillsAndTimelineProps> = ({ skills, experience }) => {
  return (
    <section className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Column */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Cpu className="w-4 h-4" /> Capabilities & Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
              Technical Stack & AI Tooling
            </h2>

            <div className="space-y-8">
              {skills.map((category) => (
                <div key={category.name} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                  <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                    <span>{category.name}</span>
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-1.5">
                          <span className="flex items-center gap-2">
                            <span>{skill.icon}</span>
                            <span>{skill.name}</span>
                          </span>
                          <span className="font-mono text-indigo-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Briefcase className="w-4 h-4" /> Career Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
              Experience & Systems Built
            </h2>

            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className="text-xs font-mono text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-800/40 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-400 mb-3">{item.company}</div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

                  <ul className="space-y-2">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
