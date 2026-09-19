import React, { useState } from 'react';
import { 
  Search, 
  Map, 
  Play, 
  BarChart, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      short: 'Deep Discovery',
      icon: Search,
      tagline: 'Understanding your business, goals, and audience.',
      details: [
        'Comprehensive audit of current digital footprint & website speed',
        'Competitor benchmarking in your target market',
        'Customer persona identification & high-intent search analysis',
        'Definition of primary commercial KPIs (Leads, ROAS, Bookings, CPA)'
      ]
    },
    {
      number: '02',
      title: 'Strategize',
      short: 'Bespoke Blueprint',
      icon: Map,
      tagline: 'Creating customized growth plans.',
      details: [
        'Channel allocation between SEO, Meta Ads, and Google PPC',
        'High-converting funnel blueprint & offer positioning',
        'Creative content calendar and visual design guidelines',
        'Budget optimization matrix for maximum commercial ROI'
      ]
    },
    {
      number: '03',
      title: 'Execute',
      short: 'Precision Launch',
      icon: Play,
      tagline: 'Implementing marketing campaigns with precision.',
      details: [
        'Ad creative production, motion graphics, and persuasive copywriting',
        'Technical on-page SEO rollout and landing page publishing',
        'Tracking pixel, tag manager, and conversion API configuration',
        'Launch of targeted multi-platform campaigns'
      ]
    },
    {
      number: '04',
      title: 'Optimize',
      short: 'Data Calibration',
      icon: BarChart,
      tagline: 'Continuously improving performance through data.',
      details: [
        'A/B testing of hooks, visuals, and landing page headlines',
        'Negative keyword pruning and search query refinement',
        'Audience frequency management and bid adjustments',
        'Transparent weekly/monthly reporting breakdown'
      ]
    },
    {
      number: '05',
      title: 'Scale',
      short: 'Exponential Reach',
      icon: TrendingUp,
      tagline: 'Expanding successful campaigns for greater growth.',
      details: [
        'Increasing ad budgets safely on winning creative funnels',
        'Expanding into adjacent geographic markets or customer segments',
        'Implementing automated AI chatbots & lead nurturing flows',
        'Continuous brand authority & compounding organic rank'
      ]
    }
  ];

  return (
    <section id="approach" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Growth Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Our Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              5-Step Growth Approach
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            We don't believe in guesswork. Every marketing initiative at Vyntro Digital follows a structured, data-tested engineering process.
          </p>
        </div>

        {/* Step Navigation Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 backdrop-blur-lg ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/10 border-cyan-400/80 text-white shadow-glow-sm scale-[1.02]'
                    : 'bg-navy-900/80 border-white/[0.07] text-slate-400 hover:text-white hover:bg-navy-850 hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-black ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                </div>
                <h4 className="text-sm font-bold tracking-tight">
                  {step.title}
                </h4>
                <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>
                  {step.short}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Card */}
        <div className="bg-navy-900/90 border border-white/[0.09] rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.07]">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                {steps[activeStep].number}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {steps[activeStep].tagline}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-glow transition-all self-start lg:self-center"
            >
              <span>Apply This Step To Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Action Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {steps[activeStep].details.map((point, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl bg-navy-850/80 border border-white/[0.05] flex items-start gap-3.5 hover:border-blue-500/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
