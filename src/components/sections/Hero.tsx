import React from 'react';
import { 
  ArrowRight, 
  Eye, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GrowthDashboard } from './GrowthDashboard';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-950 text-white overflow-hidden flex items-center"
    >
      {/* Background Glowing Mesh Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      {/* Top Center Radial Light Dome */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[500px] bg-gradient-to-b from-blue-600/25 via-indigo-600/15 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Side Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Trust Pill with Live Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-slate-300">Vyntro Digital</span>
              <span className="text-slate-500">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold">
                Transforming Brands Into Digital Success Stories
              </span>
            </div>

            {/* Main Bold Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12]">
              <span className="text-gradient-white">Grow Faster With</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Digital Marketing
              </span>{' '}
              <span className="text-gradient-white">That Delivers Results</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              We help businesses generate leads, increase sales, and build powerful brands through SEO, Social Media Marketing, Performance Ads, Web Development, and AI-Powered Marketing Solutions.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              
              {/* Primary CTA */}
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.1] rounded-2xl hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-md"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                <span>View Portfolio</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl hover:bg-emerald-900/50 hover:text-emerald-200 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Strategic Trust Statement */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5 text-cyan-300 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06]">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Gorakhpur, UP • Serving Globally</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="tracking-widest uppercase text-slate-400 font-bold text-[11px]">
                Strategy • Creativity • Technology • Growth
              </div>
            </div>

            {/* Value Guarantees */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>No Long-Term Lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Transparent Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dedicated Senior Strategist</span>
              </div>
            </div>

          </div>

          {/* Right Visual Graphic: Modern Analytics Dashboard */}
          <div className="lg:col-span-5 w-full">
            <GrowthDashboard />
          </div>

        </div>
      </div>
    </section>
  );
};
