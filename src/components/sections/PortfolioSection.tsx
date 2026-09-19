import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Hotel, 
  GraduationCap, 
  Sun,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudies';
import type { CaseStudyItem } from '../../types';

interface PortfolioSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const getIndustryIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'hospitality': return Hotel;
      case 'education': return GraduationCap;
      case 'solar energy': return Sun;
      default: return Briefcase;
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Client Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Our Work.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Your Inspiration.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Explore how our digital strategies help businesses improve visibility, engagement, and customer acquisition.
          </p>
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy: CaseStudyItem) => {
            const Icon = getIndustryIcon(caseStudy.industry);
            return (
              <div
                key={caseStudy.id}
                className="relative flex flex-col justify-between bg-navy-900/85 border border-white/[0.08] hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 backdrop-blur-xl"
              >
                <div>
                  {/* Top Bar with Icon & Industry Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300">
                      {caseStudy.industry}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {caseStudy.client}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                    {caseStudy.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="p-4 rounded-2xl bg-navy-850/80 border border-white/[0.05] mb-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Tailored Solution */}
                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2">
                      Our Tailored Solution
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.solution.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Results */}
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Outcomes</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {caseStudy.results.map((res, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => onOpenConsultation(`Case Study Strategy: ${caseStudy.client}`)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 text-white text-xs sm:text-sm font-bold border border-white/[0.08] hover:border-transparent transition-all"
                  >
                    <span>Request Similar Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Credibility Footnote */}
        <div className="mt-14 text-center text-xs text-slate-400 flex items-center justify-center gap-2 bg-white/[0.02] py-3 px-6 rounded-full border border-white/[0.05] max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Case studies represent genuine client engagements with verified, transparent reporting.</span>
        </div>

      </div>
    </section>
  );
};
