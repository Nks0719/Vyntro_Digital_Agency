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
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative, Mission & Vision */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We Turn Digital Challenges Into{' '}
              <span className="text-gradient">Growth Opportunities</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Vyntro Digital is a modern digital marketing agency focused on helping businesses attract more customers, increase online visibility, and achieve sustainable growth through innovative digital strategies.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Mission Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  To empower businesses with data-driven digital marketing solutions that generate measurable results and long-term success.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  To become one of India's most trusted and innovative digital marketing agencies by delivering exceptional value and consistent growth for our clients.
                </p>
              </div>
            </div>

            {/* Location & Global Reach Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Gorakhpur, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>Serving Clients Globally</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                <span>Partner With Vyntro Digital</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Strategy Graphic */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background gradient decorative card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-navy-950 text-white p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Vyntro Strategic Framework</h4>
                      <p className="text-[10px] text-slate-400">Holistic Digital Execution</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Omni-Channel Architecture</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">Connecting organic presence, paid intent, and direct funnels.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Performance-First Mindset</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">Every rupee of marketing spend tied to measurable KPIs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">Global Agility & Local Roots</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">Combining local client dedication with international marketing standards.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-900/30 border border-blue-700/40 text-center">
                  <p className="text-xs text-blue-200 font-medium">
                    "We measure our success solely through the tangible business growth of our clients."
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
