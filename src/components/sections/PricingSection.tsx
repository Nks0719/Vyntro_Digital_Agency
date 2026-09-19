import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { pricingData } from '../../data/pricing';
import type { PricingTier } from '../../types';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Honest & Clear Retainers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No hidden clauses or surprise fees. Choose the tier that matches your current growth stage, or talk to us for a custom engagement.
          </p>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingData.map((tier: PricingTier) => {
            const isRec = tier.isRecommended;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isRec
                    ? 'bg-navy-950 text-white shadow-2xl border-2 border-blue-500 scale-100 md:scale-[1.03] z-10'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-premium'
                }`}
              >
                {/* Recommended Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Recommended</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${isRec ? 'text-white' : 'text-slate-900'}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <p className={`text-xs mt-2 leading-relaxed ${isRec ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-slate-200/40">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isRec ? 'text-white' : 'text-slate-900'}`}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className={`text-xs font-semibold ${isRec ? 'text-slate-400' : 'text-slate-500'}`}>
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${isRec ? 'text-blue-300' : 'text-slate-500'}`}>
                      What's Included
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isRec ? 'text-blue-400' : 'text-emerald-600'}`} />
                          <span className={isRec ? 'text-slate-200' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectPlan(tier.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isRec
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-glow'
                        : 'bg-slate-900 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customized Plan Callout Note */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need a customized plan?</h4>
              <p className="text-xs text-slate-600">
                Contact us and we'll create a tailored strategy built strictly around your business goals.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Customized Growth Plan')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
          >
            Request Custom Scope
          </button>
        </div>

        {/* Integrity note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No lock-in contracts. Ad spend is managed with complete transparency.</span>
        </div>

      </div>
    </section>
  );
};
