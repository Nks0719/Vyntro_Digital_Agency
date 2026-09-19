import React from 'react';
import { 
  ArrowRight, 
  Eye, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { GrowthDashboard } from './GrowthDashboard';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy-950 text-white overflow-hidden flex items-center"
    >
      {/* Background Gradient Mesh & Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Transforming Brands Into Digital Success Stories</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Grow Faster With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Digital Marketing
              </span>{' '}
              That Delivers Results
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help businesses generate leads, increase sales, and build powerful brands through SEO, Social Media Marketing, Performance Ads, Web Development, and AI-Powered Marketing Solutions.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                <span>View Portfolio</span>
              </a>

              {/* Third CTA / WhatsApp */}
              <a
                href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-950/50 border border-emerald-700/60 rounded-xl hover:bg-emerald-900/60 hover:text-emerald-200 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2 text-cyan-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Gorakhpur, UP • Serving Globally</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="tracking-widest uppercase text-slate-400 font-bold">
                Strategy • Creativity • Technology • Growth
              </div>
            </div>

            {/* Quality Commitment bullet tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Long-Term Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Transparent Attribution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dedicated Growth Strategist</span>
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
