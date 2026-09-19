import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

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
        <div className="relative bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-medium flex items-center gap-2 animate-bounce max-w-[220px]">
          <span>Need quick growth advice? Chat with us!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45"></div>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vyntro Digital on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-green-500 rounded-full text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 group-hover:opacity-40"></span>
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2] relative z-10" />
        
        {/* Hover label for desktop */}
        <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
