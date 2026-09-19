import React, { useState } from 'react';
import { 
  Share2, 
  Search, 
  Target, 
  Megaphone, 
  FileText, 
  Code, 
  Palette, 
  Video, 
  Sparkles, 
  Users, 
  Cpu, 
  Check, 
  ArrowRight,
  Tag
} from 'lucide-react';
import { servicesData } from '../../data/services';
import type { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Map icon names to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return Share2;
      case 'Search': return Search;
      case 'Target': return Target;
      case 'Megaphone': return Megaphone;
      case 'FileText': return FileText;
      case 'Code': return Code;
      case 'Palette': return Palette;
      case 'Video': return Video;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services (11)' },
    { id: 'performance', label: 'Paid Ads & PPC' },
    { id: 'organic', label: 'SEO & Content' },
    { id: 'creative', label: 'Branding & Creatives' },
    { id: 'tech', label: 'Web & AI Tech' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 relative">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Full-Suite Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need To Grow Online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From strategy to execution, Vyntro Digital provides complete digital marketing solutions designed to increase visibility, generate leads, and grow your business.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Top bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* What We Do */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      What We Do
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-1.5">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                  {service.startingPrice ? (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500 font-medium">Starting from:</span>
                      <span className="text-sm font-extrabold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                        {service.startingPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500 font-medium">Investment:</span>
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                        Custom Strategy Available
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 group-hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom helper callout */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1 text-xs text-cyan-300 font-semibold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>Multi-Service Packaging</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Need a combination of marketing services?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We create unified cross-channel strategies that maximize your budget efficiency.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Multi-Service Growth Plan')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-blue-50 text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            Request Custom Growth Plan
          </button>
        </div>

      </div>
    </section>
  );
};
