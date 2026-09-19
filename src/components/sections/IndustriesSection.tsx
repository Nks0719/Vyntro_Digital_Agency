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
  ArrowRight
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
    <section id="industries" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Digital Growth Solutions For Every Industry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Every market operates with unique audience triggers and conversion dynamics. We tailor our marketing funnels to your sector's exact commercial realities.
          </p>
        </div>

        {/* 10-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industriesData.map((item: IndustryItem) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-premium group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-3.5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block mb-1.5">
                    {item.tag}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <button
                    onClick={() => onSelectIndustry(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
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
