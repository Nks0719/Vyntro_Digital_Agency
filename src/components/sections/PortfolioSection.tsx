import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Hotel, 
  GraduationCap, 
  Sun,
  ShieldCheck
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
    <section id="portfolio" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Work. Your Inspiration.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore how our digital strategies help businesses improve visibility, engagement, and customer acquisition.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy: CaseStudyItem) => {
            const Icon = getIndustryIcon(caseStudy.industry);
            return (
              <div
                key={caseStudy.id}
                className="flex flex-col justify-between bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-blue-500 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {caseStudy.industry}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {caseStudy.client}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                    {caseStudy.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400 border border-slate-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-750 mb-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-2">
                      Our Tailored Solution
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.solution.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
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
                <div className="mt-6 pt-4 border-t border-slate-700/80">
                  <button
                    onClick={() => onOpenConsultation(`Case Study Inquiry: ${caseStudy.client}`)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-colors"
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
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Case studies represent genuine client engagements executed with tailored strategy and transparent reporting.</span>
        </div>

      </div>
    </section>
  );
};
