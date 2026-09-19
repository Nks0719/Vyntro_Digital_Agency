import React, { useState } from 'react';
import { 
  Search, 
  Share2, 
  Target, 
  Code, 
  Cpu, 
  ArrowRight, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';

interface GrowthEcosystemProps {
  onOpenConsultation: () => void;
}

export const GrowthEcosystem: React.FC<GrowthEcosystemProps> = ({ onOpenConsultation }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      short: 'SEO Authority',
      icon: Search,
      role: 'Captures high-intent prospects searching for immediate answers and commercial solutions.',
      synergy: 'Feeds high-converting organic search queries directly to optimized landing pages.'
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      short: 'Social Engagement',
      icon: Share2,
      role: 'Builds brand loyalty, organic trust, and viral community interaction across Meta & YouTube.',
      synergy: 'Creates warm custom audiences for retargeting through performance advertising.'
    },
    {
      id: 'ads',
      title: 'Performance Ads (Meta & Google)',
      short: 'Paid Acceleration',
      icon: Target,
      role: 'Rapidly scales lead flow and client bookings through laser-focused paid campaigns.',
      synergy: 'Validates top-performing copy and hooks that inform SEO and website architecture.'
    },
    {
      id: 'web',
      title: 'Web Development & CRO',
      short: 'Conversion Engine',
      icon: Code,
      role: 'Translates incoming traffic into qualified leads with fast, responsive, UX-optimized pages.',
      synergy: 'Serves as the high-converting destination for all organic, social, and paid streams.'
    },
    {
      id: 'ai',
      title: 'AI & GenAI Marketing',
      short: 'AI Intelligence',
      icon: Cpu,
      role: 'Automates nurturing, accelerates content creation, and powers 24/7 lead capture bots.',
      synergy: 'Multiplies team productivity and lowers cost per acquisition across all channels.'
    }
  ];

  const currentPillar = pillars[selectedPillar];

  return (
    <section id="growth-ecosystem" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Integrated Growth Flywheel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            One Agency. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">Complete Digital Growth.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Siloed marketing produces fragmented results. We unite SEO, Social Media, Performance Ads, Web Development, and AI into a synchronized engine where each channel amplifies the other.
          </p>
        </div>

        {/* Interactive Ecosystem Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Pillar Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-glow'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {pillar.short}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
              
              {/* Top Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Ecosystem Component 0{selectedPillar + 1} of 05
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {currentPillar.short}
                </span>
              </div>

              {/* Title & Core Role */}
              <div className="pt-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {currentPillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentPillar.role}
                </p>

                {/* Synergy Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/40 border border-blue-800/40 mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>How It Synergizes In The Growth Engine</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentPillar.synergy}
                  </p>
                </div>
              </div>

              {/* Connected Ecosystem Formula */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-blue-400 border border-slate-700">SEO</span>
                  <span className="text-slate-500">+</span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-indigo-400 border border-slate-700">Social Media</span>
                  <span className="text-slate-500">+</span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 border border-slate-700">Paid Ads</span>
                  <span className="text-slate-500">+</span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-violet-400 border border-slate-700">Web Dev</span>
                  <span className="text-slate-500">+</span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700">AI Tech</span>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-glow transition-all"
                  >
                    <span>Deploy This Ecosystem For Your Brand</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
