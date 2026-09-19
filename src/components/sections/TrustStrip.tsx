import React from 'react';
import { 
  Target, 
  BarChart2, 
  Cpu, 
  FileCheck, 
  Globe2,
  Sparkles 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const valuePoints = [
    {
      icon: Target,
      title: 'Result-Oriented Strategies',
      desc: 'Focused directly on high-intent leads and measurable commercial growth.',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: BarChart2,
      title: 'Data-Driven Marketing',
      desc: 'Continuous campaign optimization backed by analytics and conversion metrics.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      desc: 'Leveraging modern generative AI for faster execution and automated workflows.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: FileCheck,
      title: 'Transparent Reporting',
      desc: 'Zero hidden metrics; complete visibility into your ad spend and conversions.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Globe2,
      title: 'Global Client Support',
      desc: 'Seamless collaboration across Indian and international time zones.',
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    }
  ];

  return (
    <section className="relative z-20 bg-navy-900/60 border-y border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered For Predictable Growth</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Helping Businesses Build Stronger Digital Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {valuePoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-navy-850/70 border border-white/[0.06] hover:border-blue-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors mb-4 ${item.color} group-hover:scale-110`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
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
