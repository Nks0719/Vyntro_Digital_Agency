import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Zap
} from 'lucide-react';

export const GrowthDashboard: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'leads' | 'traffic' | 'social' | 'conversions'>('leads');

  const metricDetails = {
    leads: {
      label: 'Verified Leads Pipeline',
      value: 'Multi-Channel Funnel',
      trend: 'Accelerating Inbound',
      subtext: 'High-intent search & social prospects',
      chartPath: 'M0,130 C40,120 70,95 110,85 C150,75 180,90 220,60 C260,35 310,40 360,15 L360,150 L0,150 Z',
      strokePath: 'M0,130 C40,120 70,95 110,85 C150,75 180,90 220,60 C260,35 310,40 360,15',
      points: [
        { x: 110, y: 85, label: 'Meta Funnel Active' },
        { x: 220, y: 60, label: 'Google Search Ads' },
        { x: 360, y: 15, label: 'Continuous Inquiries' }
      ]
    },
    traffic: {
      label: 'Organic Website Traffic',
      value: 'Compounding Search Growth',
      trend: 'Top Keyword Visibility',
      subtext: 'High-volume target intent terms',
      chartPath: 'M0,140 C50,135 90,110 140,100 C190,90 230,65 280,45 C320,30 340,25 360,18 L360,150 L0,150 Z',
      strokePath: 'M0,140 C50,135 90,110 140,100 C190,90 230,65 280,45 C320,30 340,25 360,18',
      points: [
        { x: 140, y: 100, label: 'Technical SEO Fixes' },
        { x: 280, y: 45, label: 'Page 1 Rankings' },
        { x: 360, y: 18, label: 'Sustained Authority' }
      ]
    },
    social: {
      label: 'Social Media Reach & Views',
      value: 'Viral Creative Reels',
      trend: 'Multi-Platform Authority',
      subtext: 'Instagram, LinkedIn & YouTube campaigns',
      chartPath: 'M0,135 C60,125 100,105 150,70 C200,85 240,40 290,30 C330,22 350,18 360,12 L360,150 L0,150 Z',
      strokePath: 'M0,135 C60,125 100,105 150,70 C200,85 240,40 290,30 C330,22 350,18 360,12',
      points: [
        { x: 150, y: 70, label: 'Reels Strategy' },
        { x: 290, y: 30, label: 'Brand Recall Surge' },
        { x: 360, y: 12, label: 'Consistent Community' }
      ]
    },
    conversions: {
      label: 'Conversion Rate Optimization',
      value: 'Engineered Landing Funnels',
      trend: 'Lower Cost Per Acquisition',
      subtext: 'A/B tested hooks & responsive layouts',
      chartPath: 'M0,125 C45,115 90,100 130,75 C180,80 230,50 280,35 C320,25 350,15 360,10 L360,150 L0,150 Z',
      strokePath: 'M0,125 C45,115 90,100 130,75 C180,80 230,50 280,35 C320,25 350,15 360,10',
      points: [
        { x: 130, y: 75, label: 'Fast Landing Page' },
        { x: 280, y: 35, label: 'Lead Magnet Flow' },
        { x: 360, y: 10, label: 'Max Conversion ROI' }
      ]
    }
  };

  const current = metricDetails[activeMetric];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative ambient backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-subtle"></div>

      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs font-semibold text-slate-400 ml-2 tracking-wide flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-cyan-400" />
              Vyntro Growth Engine • Live Analytics
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Performance Optimized
          </span>
        </div>

        {/* Metric Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
          <button
            onClick={() => setActiveMetric('leads')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-start gap-1 ${
              activeMetric === 'leads'
                ? 'bg-blue-600 text-white shadow-glow'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Leads</span>
          </button>

          <button
            onClick={() => setActiveMetric('traffic')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-start gap-1 ${
              activeMetric === 'traffic'
                ? 'bg-blue-600 text-white shadow-glow'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Traffic</span>
          </button>

          <button
            onClick={() => setActiveMetric('social')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-start gap-1 ${
              activeMetric === 'social'
                ? 'bg-blue-600 text-white shadow-glow'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Social</span>
          </button>

          <button
            onClick={() => setActiveMetric('conversions')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-start gap-1 ${
              activeMetric === 'conversions'
                ? 'bg-blue-600 text-white shadow-glow'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Conversion</span>
          </button>
        </div>

        {/* Dynamic Metric Display */}
        <div className="pt-5 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{current.label}</p>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                {current.value}
                <ArrowUpRight className="w-5 h-5 text-emerald-400 shrink-0" />
              </h4>
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/50">
              <Sparkles className="w-3 h-3" />
              <span>{current.trend}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">{current.subtext}</p>
        </div>

        {/* SVG Dynamic Chart Graphic */}
        <div className="relative w-full h-44 bg-slate-950/60 rounded-2xl border border-slate-800/80 p-2 overflow-hidden flex items-end">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-40"></div>
          
          <svg className="w-full h-full overflow-visible" viewBox="0 0 360 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Area Fill */}
            <path
              d={current.chartPath}
              fill="url(#curveGradient)"
              className="transition-all duration-700 ease-out"
            />
            {/* Line Stroke */}
            <path
              d={current.strokePath}
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-700 ease-out drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            />
            {/* Key interactive points */}
            {current.points.map((pt, idx) => (
              <g key={idx} className="transition-all duration-500">
                <circle cx={pt.x} cy={pt.y} r="5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
              </g>
            ))}
          </svg>

          {/* Point Tooltip labels */}
          <div className="absolute top-3 left-4 right-4 flex justify-between text-[10px] text-slate-400 pointer-events-none">
            <span>Stage 1: Launch</span>
            <span>Stage 2: Optimization</span>
            <span className="text-blue-400 font-semibold">Stage 3: Scaled Growth</span>
          </div>
        </div>

        {/* Live Activity Feed strip */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">Ad Creative A/B Tested & Scaled</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="truncate">High-Converting Landing Funnel Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
};
