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
      desc: 'No cookie-cutter packages. We build campaign roadmaps strictly aligned with your specific business goals.'
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      desc: 'Complete visibility into every rupee spent, actual lead costs, and performance data without vanity metrics.'
    },
    {
      icon: Sparkles,
      title: 'Creative & Data-Driven Approach',
      desc: 'Blending scroll-stopping creative designs with rigorous analytical tracking and continuous audience testing.'
    },
    {
      icon: BadgePercent,
      title: 'Affordable Pricing',
      desc: 'Clear, competitive pricing structures that provide maximum return on investment for small businesses and enterprises.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      desc: 'Direct communication with seasoned digital marketers who understand your project, not an automated ticketing loop.'
    },
    {
      icon: Target,
      title: 'Result-Oriented Campaigns',
      desc: 'Focused on concrete commercial outcomes—inbound inquiries, appointments, walk-ins, and direct revenue.'
    },
    {
      icon: Cpu,
      title: 'Latest AI-Powered Solutions',
      desc: 'Modern marketing automation, AI-assisted creative workflows, and conversational lead capture technologies.'
    },
    {
      icon: TrendingUp,
      title: 'Focus On ROI',
      desc: 'Prioritizing lower cost-per-lead and higher conversion efficiency over meaningless platform vanity statistics.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest & Reliable Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Why Businesses Choose Vyntro Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We build long-term business partnerships founded on measurable results, open communication, and modern digital craft.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
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
