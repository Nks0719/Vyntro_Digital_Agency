import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  FileSearch, 
  Calendar, 
  FileText, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface ConsultationCTAProps {
  onOpenConsultation: (intent?: string) => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      
      {/* Dynamic Multi-Tone Radiant Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-navy-900/60 to-navy-950 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-cyan-500/25 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Zero-Risk Growth Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready To Grow Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            Business Online?
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation and discover how digital marketing can help you generate more leads, increase sales, and build a stronger brand.
        </p>

        {/* High-Converting Strategic CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3.5">
          
          <button
            onClick={() => onOpenConsultation('Free Marketing Audit')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
          >
            <FileSearch className="w-4 h-4 text-cyan-200" />
            <span>Get Free Marketing Audit</span>
          </button>

          <button
            onClick={() => onOpenConsultation('Schedule A Consultation')}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] text-slate-200 text-sm font-semibold transition-all backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>Schedule A Consultation</span>
          </button>

          <a
            href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 hover:bg-emerald-900/60 text-emerald-300 text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat On WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenConsultation('Request A Proposal')}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 text-sm font-semibold transition-all"
          >
            <FileText className="w-4 h-4 text-violet-400" />
            <span>Request A Proposal</span>
          </button>

          <button
            onClick={() => onOpenConsultation('Start Growing Today')}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/50 text-cyan-200 text-sm font-bold transition-all"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Start Growing Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

        {/* Small Trust Note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Gorakhpur, UP • Available Globally • 30-Minute Growth Strategy • No Pushy Sales Tactics</span>
        </div>

      </div>
    </section>
  );
};
