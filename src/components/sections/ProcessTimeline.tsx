import React, { useState } from 'react';
import { 
  Search, 
  Map, 
  Play, 
  BarChart, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2
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
        'Definition of primary KPIs (Leads, ROAS, Bookings, CPA)'
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
        'High-converting funnel blueprint & offer crafting',
        'Creative content calendar and visual design guidelines',
        'Budget optimization matrix for maximum ROI'
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
        'Implementing automated AI chatbots & nurturing flows',
        'Continuous brand authority & compounding organic rank'
      ]
    }
  ];

  return (
    <section id="approach" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Systematic Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Proven 5-Step Growth Approach
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don't believe in guesswork. Every marketing initiative at Vyntro Digital follows a structured, data-tested engineering process.
          </p>
        </div>

        {/* Horizontal Navigation on Desktop / Tabs on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 border-blue-400 text-white shadow-glow'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold tracking-tight">
                  {step.title}
                </h4>
                <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                  {step.short}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">
                  {steps[activeStep].number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-0.5">
                    {steps[activeStep].tagline}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all self-start lg:self-center"
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
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-750 flex items-start gap-3"
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
