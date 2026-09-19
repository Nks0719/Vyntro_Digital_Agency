import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '918858657221';
  const prefilledMessage = encodeURIComponent(
    'Hi Vyntro Digital, I would like to discuss digital marketing services for my business.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Interactive Quick Help Badge */}
      {showTooltip && (
        <div className="relative bg-navy-900/95 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-emerald-500/30 text-xs font-medium flex items-center gap-2.5 backdrop-blur-xl animate-bounce max-w-[240px]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Need quick growth advice? Chat with us!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-navy-900 border-b border-r border-emerald-500/30 rotate-45"></div>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vyntro Digital on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 rounded-full text-white shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/70 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 group-hover:opacity-50"></span>
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2] relative z-10" />
        
        {/* Hover label for desktop */}
        <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/[0.08]">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
