import React from 'react';
import { 
  Sliders, 
  FileText, 
  Sparkles, 
  BadgePercent, 
  Headphones, 
  Target, 
  Cpu, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Sliders,
      title: 'Customized Marketing Strategies',
      desc: 'No cookie-cutter templates. We build campaign roadmaps strictly aligned with your specific business goals.',
      accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      desc: 'Complete visibility into every rupee spent, actual lead costs, and performance data without vanity metrics.',
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Sparkles,
      title: 'Creative & Data-Driven Approach',
      desc: 'Blending scroll-stopping creative designs with rigorous analytical tracking and continuous audience testing.',
      accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    },
    {
      icon: BadgePercent,
      title: 'Affordable Pricing',
      desc: 'Clear, competitive pricing structures that provide maximum return on investment for small businesses and enterprises.',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      desc: 'Direct communication with seasoned digital marketers who understand your project, not an automated ticketing loop.',
      accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Target,
      title: 'Result-Oriented Campaigns',
      desc: 'Focused on concrete commercial outcomes—inbound inquiries, appointments, walk-ins, and direct revenue.',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      icon: Cpu,
      title: 'Latest AI-Powered Solutions',
      desc: 'Modern marketing automation, AI-assisted creative workflows, and conversational lead capture technologies.',
      accent: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Focus On ROI',
      desc: 'Prioritizing lower cost-per-lead and higher conversion efficiency over meaningless platform vanity statistics.',
      accent: 'text-teal-400 bg-teal-500/10 border-teal-500/20'
    }
  ];

  return (
    <section className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest & Reliable Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Why Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Vyntro Digital
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            We build long-term business partnerships founded on measurable results, open communication, and modern digital craft.
          </p>
        </div>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-navy-900/80 border border-white/[0.07] hover:border-blue-500/40 rounded-3xl p-6 shadow-xl hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group backdrop-blur-xl"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 mb-5 ${item.accent} group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
