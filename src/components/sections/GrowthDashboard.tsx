import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3, 
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

export const GrowthDashboard: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'leads' | 'traffic' | 'social' | 'conversions'>('leads');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const metricDetails = {
    leads: {
      label: 'Verified Inbound Leads Pipeline',
      value: 'High-Intent Inquiries',
      rate: '+184% Scaled Lead Flow',
      badge: 'High Conversion Quality',
      color: 'from-blue-500 to-cyan-400',
      stroke: '#38bdf8',
      chartPath: 'M0,135 C35,125 70,105 110,85 C150,65 190,80 230,55 C270,30 315,35 360,12 L360,160 L0,160 Z',
      strokePath: 'M0,135 C35,125 70,105 110,85 C150,65 190,80 230,55 C270,30 315,35 360,12',
      checkpoints: [
        { x: 110, y: 85, label: 'Meta Ads Launch' },
        { x: 230, y: 55, label: 'Google PPC Scale' },
        { x: 360, y: 12, label: 'Continuous Qualified Leads' }
      ]
    },
    traffic: {
      label: 'Organic Search Authority',
      value: 'Top Google Rankings',
      rate: '+240% Search Impressions',
      badge: 'Sustainable Organic Growth',
      color: 'from-indigo-500 to-blue-400',
      stroke: '#818cf8',
      chartPath: 'M0,145 C45,135 90,115 135,95 C180,75 225,60 270,40 C315,25 340,20 360,10 L360,160 L0,160 Z',
      strokePath: 'M0,145 C45,135 90,115 135,95 C180,75 225,60 270,40 C315,25 340,20 360,10',
      checkpoints: [
        { x: 135, y: 95, label: 'Technical SEO Core' },
        { x: 270, y: 40, label: 'Page 1 Dominance' },
        { x: 360, y: 10, label: 'Authority Compounding' }
      ]
    },
    social: {
      label: 'Multi-Platform Social Reach',
      value: 'Engaged Community & Views',
      rate: '+310% Video & Reels Reach',
      badge: 'Brand Recall Surge',
      color: 'from-violet-500 to-fuchsia-400',
      stroke: '#c084fc',
      chartPath: 'M0,140 C50,130 95,110 145,75 C195,90 240,45 285,32 C325,22 345,16 360,8 L360,160 L0,160 Z',
      strokePath: 'M0,140 C50,130 95,110 145,75 C195,90 240,45 285,32 C325,22 345,16 360,8',
      checkpoints: [
        { x: 145, y: 75, label: 'Viral Reels Engine' },
        { x: 285, y: 32, label: 'Community Growth' },
        { x: 360, y: 8, label: 'Brand Loyalty' }
      ]
    },
    conversions: {
      label: 'Conversion Rate Engineering',
      value: 'Lower Cost Per Acquisition',
      rate: '-42% Acquisition Cost',
      badge: 'Optimized Sales Funnel',
      color: 'from-emerald-500 to-teal-400',
      stroke: '#34d399',
      chartPath: 'M0,130 C40,120 85,100 130,70 C175,80 220,50 270,30 C310,20 340,12 360,6 L360,160 L0,160 Z',
      strokePath: 'M0,130 C40,120 85,100 130,70 C175,80 220,50 270,30 C310,20 340,12 360,6',
      checkpoints: [
        { x: 130, y: 70, label: 'High-Converting Landing' },
        { x: 270, y: 30, label: 'A/B Funnel Win' },
        { x: 360, y: 6, label: 'Max ROAS Multiplier' }
      ]
    }
  };

  const current = metricDetails[activeMetric];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* Radiant ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative bg-navy-900/90 backdrop-blur-2xl border border-white/[0.1] rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
            </div>
            <span className="text-xs font-bold text-slate-300 ml-2 tracking-wide flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Vyntro Live Growth Intelligence
            </span>
          </div>

          {/* Time range pills */}
          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.05]">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-lg transition-colors uppercase ${
                  timeRange === range
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Metric Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
          <button
            onClick={() => setActiveMetric('leads')}
            className={`p-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col gap-1.5 border ${
              activeMetric === 'leads'
                ? 'bg-gradient-to-br from-blue-600/30 to-blue-700/10 border-blue-500/60 text-white shadow-glow-sm'
                : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
            }`}
          >
            <Users className={`w-4 h-4 ${activeMetric === 'leads' ? 'text-blue-400' : 'text-slate-500'}`} />
            <span>Leads</span>
          </button>

          <button
            onClick={() => setActiveMetric('traffic')}
            className={`p-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col gap-1.5 border ${
              activeMetric === 'traffic'
                ? 'bg-gradient-to-br from-indigo-600/30 to-indigo-700/10 border-indigo-500/60 text-white shadow-glow-sm'
                : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
            }`}
          >
            <Globe className={`w-4 h-4 ${activeMetric === 'traffic' ? 'text-indigo-400' : 'text-slate-500'}`} />
            <span>SEO Traffic</span>
          </button>

          <button
            onClick={() => setActiveMetric('social')}
            className={`p-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col gap-1.5 border ${
              activeMetric === 'social'
                ? 'bg-gradient-to-br from-violet-600/30 to-violet-700/10 border-violet-500/60 text-white shadow-glow-sm'
                : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
            }`}
          >
            <TrendingUp className={`w-4 h-4 ${activeMetric === 'social' ? 'text-violet-400' : 'text-slate-500'}`} />
            <span>Social Reach</span>
          </button>

          <button
            onClick={() => setActiveMetric('conversions')}
            className={`p-3 rounded-2xl text-xs font-bold transition-all text-left flex flex-col gap-1.5 border ${
              activeMetric === 'conversions'
                ? 'bg-gradient-to-br from-emerald-600/30 to-emerald-700/10 border-emerald-500/60 text-white shadow-glow-sm'
                : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
            }`}
          >
            <BarChart3 className={`w-4 h-4 ${activeMetric === 'conversions' ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>Conversion</span>
          </button>
        </div>

        {/* Current Metric Highlight */}
        <div className="pt-5 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {current.label}
              </p>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                <span>{current.value}</span>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 shrink-0" />
              </h4>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.rate}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Glowing Chart */}
        <div className="relative w-full h-44 bg-navy-950/80 rounded-2xl border border-white/[0.06] p-2 overflow-hidden flex items-end">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 360 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glowArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={current.stroke} stopOpacity="0.4" />
                <stop offset="100%" stopColor={current.stroke} stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area */}
            <path
              d={current.chartPath}
              fill="url(#glowArea)"
              className="transition-all duration-700 ease-out"
            />

            {/* Stroke Line */}
            <path
              d={current.strokePath}
              fill="none"
              stroke={current.stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-700 ease-out drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
            />

            {/* Glowing checkpoints */}
            {current.checkpoints.map((pt, idx) => (
              <g key={idx} className="transition-all duration-500">
                <circle cx={pt.x} cy={pt.y} r="6" fill="#030712" stroke={current.stroke} strokeWidth="3" />
                <circle cx={pt.x} cy={pt.y} r="2" fill="#ffffff" />
              </g>
            ))}
          </svg>

          {/* Point labels */}
          <div className="absolute top-2.5 left-4 right-4 flex justify-between text-[10px] font-semibold text-slate-400 pointer-events-none">
            <span>Setup & Audit</span>
            <span>Channel Scale</span>
            <span className="text-cyan-300 font-bold">Compounding Growth</span>
          </div>
        </div>

        {/* Live Event Activity Feed */}
        <div className="mt-4 pt-3 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="truncate">High-ROAS Ad Copy Validated</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">Live Lead Attribution Active</span>
          </div>
        </div>

      </div>
    </div>
  );
};
