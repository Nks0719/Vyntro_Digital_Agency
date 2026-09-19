import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  FileSearch, 
  Calendar, 
  FileText, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface ConsultationCTAProps {
  onOpenConsultation: (intent?: string) => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Dynamic gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/80 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Zero-Cost Strategy Session</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready To Grow Your Business Online?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation and discover how digital marketing can help you generate more leads, increase sales, and build a stronger brand.
        </p>

        {/* High-Converting CTA Buttons Grid */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          
          <button
            onClick={() => onOpenConsultation('Free Marketing Audit')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
          >
            <FileSearch className="w-4 h-4" />
            <span>Get Free Marketing Audit</span>
          </button>

          <button
            onClick={() => onOpenConsultation('Schedule A Consultation')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-sm font-semibold transition-all"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>Schedule A Consultation</span>
          </button>

          <a
            href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/60 text-emerald-300 text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat On WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenConsultation('Request A Proposal')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm font-semibold transition-all"
          >
            <FileText className="w-4 h-4 text-violet-400" />
            <span>Request A Proposal</span>
          </button>

          <button
            onClick={() => onOpenConsultation('Start Growing Today')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 text-blue-200 text-sm font-bold transition-all"
          >
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span>Start Growing Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

        {/* Small trust tag */}
        <p className="mt-8 text-xs text-slate-400">
          📍 Gorakhpur, UP • Available Globally • 30-Minute Strategy Session • No Pushy Sales Tactics
        </p>

      </div>
    </section>
  );
};
