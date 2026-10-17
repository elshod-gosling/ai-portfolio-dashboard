import React from 'react';
import { Code2, GitCommit, Eye, Sparkles, TrendingUp } from 'lucide-react';
import { MetricCardData } from '../types/portfolio';

interface MetricsOverviewProps {
  metrics: MetricCardData[];
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'GitCommit':
        return <GitCommit className="w-5 h-5 text-emerald-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {item.title}
                </span>
                <div className="p-2 rounded-xl bg-slate-800/70 border border-slate-700/50 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {item.value}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
