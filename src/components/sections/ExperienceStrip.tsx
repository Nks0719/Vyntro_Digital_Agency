import React from 'react';
import { 
  Award, 
  Briefcase, 
  Target, 
  Map, 
  Globe2,
  Sparkles 
} from 'lucide-react';

export const ExperienceStrip: React.FC = () => {
  const credentials = [
    {
      icon: Award,
      title: 'Digital Marketing Specialists',
      desc: 'Expertise spanning search algorithms, paid audience bidding, and interactive web technologies.',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Briefcase,
      title: 'Multiple Industries Served',
      desc: 'Tested campaign frameworks across hospitality, higher education, clean solar energy, healthcare, and retail.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Target,
      title: 'Performance Marketing Expertise',
      desc: 'Precision ad architectures on Meta & Google Ads designed to deliver qualified inbound customer leads.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Map,
      title: 'Local & National Campaigns',
      desc: 'From targeted hyper-local footfall marketing in UP/India to expansive multi-state digital launches.',
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    },
    {
      icon: Globe2,
      title: 'Global Service Capability',
      desc: 'Fully equipped infrastructure to deliver creative and analytical marketing services to international clients.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section className="py-20 bg-navy-950 text-white border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Competence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Built On Solid Marketing Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-navy-900/80 border border-white/[0.07] hover:border-cyan-400/40 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border mb-4 transition-transform group-hover:scale-110 ${cred.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
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
