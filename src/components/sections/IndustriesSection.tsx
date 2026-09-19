import React from 'react';
import { 
  GraduationCap, 
  Hotel, 
  Utensils, 
  Activity, 
  Building2, 
  Sun, 
  ShoppingBag, 
  ShoppingCart, 
  UserCheck, 
  Rocket,
  ArrowRight,
  Layers
} from 'lucide-react';
import { industriesData } from '../../data/industries';
import type { IndustryItem } from '../../types';

interface IndustriesSectionProps {
  onSelectIndustry: (industryTitle: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Hotel': return Hotel;
      case 'Utensils': return Utensils;
      case 'Activity': return Activity;
      case 'Building2': return Building2;
      case 'Sun': return Sun;
      case 'ShoppingBag': return ShoppingBag;
      case 'ShoppingCart': return ShoppingCart;
      case 'UserCheck': return UserCheck;
      case 'Rocket': return Rocket;
      default: return Building2;
    }
  };

  return (
    <section id="industries" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background Grids & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Specialized Sector Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Digital Growth Solutions For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Every Industry
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Every market operates with unique audience triggers and conversion dynamics. We tailor our marketing funnels to your sector's exact commercial realities.
          </p>
        </div>

        {/* 10-Card Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {industriesData.map((item: IndustryItem) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-navy-900/80 border border-white/[0.07] hover:border-cyan-400/50 hover:bg-navy-850/80 transition-all duration-300 shadow-xl hover:shadow-card-hover group hover:-translate-y-1 backdrop-blur-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-cyan-500/20 border border-blue-500/30 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => onSelectIndustry(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Grow This Sector</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
