import React from 'react';
import { 
  Target, 
  BarChart2, 
  Cpu, 
  FileCheck, 
  Globe2 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const valuePoints = [
    {
      icon: Target,
      title: 'Result-Oriented Strategies',
      desc: 'Focused directly on high-intent leads and measurable business growth.'
    },
    {
      icon: BarChart2,
      title: 'Data-Driven Marketing',
      desc: 'Continuous campaign optimization backed by analytics and audience signals.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      desc: 'Leveraging modern generative AI for faster execution and automated workflows.'
    },
    {
      icon: FileCheck,
      title: 'Transparent Reporting',
      desc: 'Zero hidden metrics; complete visibility into your ad spend and conversions.'
    },
    {
      icon: Globe2,
      title: 'Global Client Support',
      desc: 'Seamless collaboration across Indian and international time zones.'
    }
  ];

  return (
    <section className="relative z-20 bg-slate-900 border-y border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-blue-400">
            Engineered For Consistent Performance
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Helping Businesses Build Stronger Digital Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {valuePoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-slate-800 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
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
