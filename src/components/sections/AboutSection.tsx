import React from 'react';
import { 
  Compass, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Globe, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative, Mission & Vision */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Agency Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              We Turn Digital Challenges Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Growth Opportunities
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
              Vyntro Digital is a modern digital marketing agency focused on helping businesses attract more customers, increase online visibility, and achieve sustainable growth through innovative digital strategies.
            </p>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/[0.08] hover:border-blue-500/40 transition-all backdrop-blur-lg">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3.5 border border-blue-500/20">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  To empower businesses with data-driven digital marketing solutions that generate measurable results and long-term success.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/[0.08] hover:border-indigo-500/40 transition-all backdrop-blur-lg">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3.5 border border-indigo-500/20">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  To become one of India's most trusted and innovative digital marketing agencies by delivering exceptional value and consistent growth for our clients.
                </p>
              </div>

            </div>

            {/* Location & Global Scope Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/[0.08] text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Gorakhpur, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/40 px-4 py-2 rounded-xl border border-emerald-500/30 text-emerald-300">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Serving Clients Globally</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Partner With Vyntro Digital</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Strategy Framework Graphic */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Decorative radiant aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 to-violet-600/30 rounded-3xl blur-2xl"></div>

              <div className="relative bg-navy-900/90 text-white p-7 sm:p-9 rounded-3xl border border-white/[0.1] shadow-2xl backdrop-blur-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-sm">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Vyntro Strategic Framework</h4>
                      <p className="text-[10px] text-slate-400">Engineered For Predictable Growth</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-navy-850/80 border border-white/[0.06] flex items-start gap-3.5">
                    <Layers className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Omnichannel Funnel Integration</h5>
                      <p className="text-[11px] text-slate-400 mt-1">Connecting search discovery, social engagement, and conversion funnels.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-850/80 border border-white/[0.06] flex items-start gap-3.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Performance-First Attribution</h5>
                      <p className="text-[11px] text-slate-400 mt-1">Every marketing rupee is mapped to concrete business metrics.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-850/80 border border-white/[0.06] flex items-start gap-3.5">
                    <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Agile Global Execution</h5>
                      <p className="text-[11px] text-slate-400 mt-1">Combines personal client attention with world-class digital standards.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-center">
                  <p className="text-xs text-blue-200 font-medium italic">
                    "We measure agency success solely by the tangible commercial revenue of our clients."
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
