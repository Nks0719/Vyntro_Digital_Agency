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
  Layers
} from 'lucide-react';
import { servicesData } from '../../data/services';
import type { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
    { id: 'creative', label: 'Creative & Branding' },
    { id: 'tech', label: 'Web & AI Tech' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Stack Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Everything You Need To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Grow Online
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm'
                    : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="relative flex flex-col justify-between bg-navy-900/80 border border-white/[0.08] hover:border-blue-500/50 rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 backdrop-blur-xl"
              >
                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-300 group-hover:text-white group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/[0.05] text-cyan-300 border border-white/[0.08]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* What We Do */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                      What We Do
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06]">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-1.5">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                  {service.startingPrice ? (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400 font-medium">Starting from:</span>
                      <span className="text-sm font-extrabold text-white bg-white/[0.05] px-3 py-1 rounded-xl border border-white/[0.08]">
                        {service.startingPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400 font-medium">Pricing:</span>
                      <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-xl border border-cyan-500/30">
                        Custom Retainer
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/[0.05] hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 border border-white/[0.08] hover:border-transparent transition-all shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Multi-Service Synergy Box */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950/80 via-navy-900 to-indigo-950/80 border border-blue-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs text-cyan-300 font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Custom Omnichannel Strategy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Need a tailored multi-service growth package?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                We unify SEO, Social Media, and Performance Ads into an integrated engine built around your exact commercial goals.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Multi-Service Custom Plan')}
              className="shrink-0 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
            >
              Build Custom Growth Plan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
