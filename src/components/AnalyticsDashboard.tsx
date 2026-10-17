import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Activity, BarChart3, LineChart as LineChartIcon } from 'lucide-react';
import { ActivityPoint } from '../types/portfolio';

interface AnalyticsDashboardProps {
  data: ActivityPoint[];
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ data }) => {
  const [chartType, setChartType] = useState<'area' | 'bar'>('area');

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4" /> Live Engineering Velocity
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Triad Worktree Activity & AI Acceleration
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Tracking monthly commit cadence, verified PR merges, and AI synthesis efficiency.
              </p>
            </div>

            {/* Toggle chart buttons */}
            <div className="flex items-center p-1 rounded-xl bg-slate-800/80 border border-slate-700/60 self-stretch sm:self-auto">
              <button
                onClick={() => setChartType('area')}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  chartType === 'area'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LineChartIcon className="w-3.5 h-3.5" />
                <span>Area View</span>
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  chartType === 'bar'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Bar View</span>
              </button>
            </div>
          </div>

          {/* Recharts Container */}
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'area' ? (
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorPRs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" tickLine={false} />
                  <YAxis stroke="#64748b" tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#f8fafc',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="commits"
                    name="Worktree Commits"
                    stroke="#6366f1"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorCommits)"
                  />
                  <Area
                    type="monotone"
                    dataKey="prsMerged"
                    name="PRs Merged (Claude-Verified)"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorPRs)"
                  />
                </AreaChart>
              ) : (
                <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" tickLine={false} />
                  <YAxis stroke="#64748b" tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#f8fafc',
                    }}
                  />
                  <Bar dataKey="commits" name="Worktree Commits" fill="#6366f1" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="prsMerged" name="PRs Merged" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
