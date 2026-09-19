import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqsData } from '../../data/faqs';
import type { FAQItem } from '../../types';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Everything You Need{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              To Know
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Direct, transparent answers regarding our agency workflow, pricing structures, and deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq: FAQItem, index: number) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                  isOpen
                    ? 'bg-navy-900/90 border-cyan-400/60 shadow-glow-sm'
                    : 'bg-navy-900/60 border-white/[0.07] hover:border-white/[0.15]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3.5">
                    <span className={`text-xs font-mono font-bold shrink-0 ${isOpen ? 'text-cyan-300' : 'text-slate-500'}`}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rotate-180 shadow-sm' : 'bg-white/[0.05] text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/[0.06] animate-fadeIn">
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask Question Card */}
        <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-navy-900/80 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-xl">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-400 mt-1">Our strategists are glad to provide a direct answer without obligation.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-glow-sm"
            >
              Ask Our Team
            </button>
            <a
              href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              title="Ask instantly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
