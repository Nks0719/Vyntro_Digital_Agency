import React from 'react';
import { 
  Award, 
  Briefcase, 
  Target, 
  Map, 
  Globe2 
} from 'lucide-react';

export const ExperienceStrip: React.FC = () => {
  const credentials = [
    {
      icon: Award,
      title: 'Digital Marketing Specialists',
      desc: 'Expertise spanning search algorithms, paid audience bidding, and interactive web technologies.'
    },
    {
      icon: Briefcase,
      title: 'Multiple Industries Served',
      desc: 'Tested campaign frameworks across hospitality, higher education, clean solar energy, healthcare, and retail.'
    },
    {
      icon: Target,
      title: 'Performance Marketing Expertise',
      desc: 'Precision ad architectures on Meta & Google Ads designed to deliver qualified inbound customer leads.'
    },
    {
      icon: Map,
      title: 'Local & National Campaigns',
      desc: 'From targeted hyper-local footfall marketing in UP/India to expansive multi-state digital launches.'
    },
    {
      icon: Globe2,
      title: 'Global Service Capability',
      desc: 'Fully equipped infrastructure to deliver creative and analytical marketing services to international clients.'
    }
  ];

  return (
    <section className="py-16 bg-navy-950 text-white border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Agency Capabilities & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Built On Solid Marketing Competence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
