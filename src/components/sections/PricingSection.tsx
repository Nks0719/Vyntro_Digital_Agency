import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Calculator, Zap } from 'lucide-react';
import { pricingData } from '../../data/pricing';
import type { PricingTier } from '../../types';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [budgetEstimate, setBudgetEstimate] = useState<number>(25000);

  const getRecommendedTier = (budget: number) => {
    if (budget < 15000) return 'Starter Plan (₹9,999/mo)';
    if (budget <= 35000) return 'Growth Plan (₹24,999/mo) — Best Fit';
    if (budget <= 75000) return 'Premium Growth Engine (₹49,999/mo)';
    return 'Custom Enterprise Omnichannel Solution';
  };

  return (
    <section id="pricing" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Radiant Background Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honest & Transparent Retainers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Simple & Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            No hidden clauses or surprise fees. Choose the tier that matches your current growth stage, or talk to us for a custom engagement.
          </p>
        </div>

        {/* Interactive Marketing Budget Estimator Helper */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Interactive Growth Budget Estimator
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              Instant Plan Match
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-semibold text-slate-400">
                Your Estimated Monthly Marketing Budget:
              </label>
              <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                ₹{budgetEstimate.toLocaleString('en-IN')} / mo
              </span>
            </div>

            <input
              type="range"
              min={10000}
              max={150000}
              step={5000}
              value={budgetEstimate}
              onChange={(e) => setBudgetEstimate(Number(e.target.value))}
              className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />

            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>₹10,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
              <span>₹1,50,000+</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-300">Recommended Retainer:</span>
              <span className="text-xs sm:text-sm font-bold text-cyan-300">
                {getRecommendedTier(budgetEstimate)}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingData.map((tier: PricingTier) => {
            const isRec = tier.isRecommended;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-2xl ${
                  isRec
                    ? 'bg-gradient-to-b from-blue-950/90 via-navy-900/90 to-navy-900 border-2 border-cyan-400 shadow-glow-lg scale-100 md:scale-[1.03] z-10'
                    : 'bg-navy-900/80 border border-white/[0.08] hover:border-blue-500/40 hover:shadow-card-hover'
                }`}
              >
                {/* Recommended Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recommended</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-white/[0.07]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-xs font-semibold text-slate-400">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      What's Included
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isRec ? 'text-cyan-400' : 'text-emerald-400'}`} />
                          <span className="text-slate-300">
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
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow'
                        : 'bg-white/[0.05] hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 text-white border border-white/[0.08]'
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

        {/* Customized Plan Callout Box */}
        <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-navy-900/80 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left backdrop-blur-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-500/20">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a customized plan?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Contact us and we'll create a tailored strategy built strictly around your business goals.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Scope Strategy')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-glow-sm"
          >
            Request Custom Scope
          </button>
        </div>

        {/* Integrity Footnote */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Zero lock-in contracts. Ad spend is managed with complete transparency.</span>
        </div>

      </div>
    </section>
  );
};
