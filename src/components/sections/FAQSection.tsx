import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqsData } from '../../data/faqs';
import type { FAQItem } from '../../types';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  // Default open the first FAQ
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need To Know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
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
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-600 shrink-0">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our strategists are glad to provide a direct answer without obligation.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
            >
              Ask Our Team
            </button>
            <a
              href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Ask on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
