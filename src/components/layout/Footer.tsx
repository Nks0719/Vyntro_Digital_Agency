import React from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from '../common/SocialIcons';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenConsultation }) => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/[0.08] pt-20 pb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/[0.07]">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-glow flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                  Vyntro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">Digital</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 -mt-1">
                  Digital Growth Agency
                </span>
              </div>
            </a>

            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Transforming Brands Into Digital Success Stories. We partner with forward-thinking businesses to engineer measurable, high-ROI marketing funnels.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vyntro Digital on Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#growth-ecosystem" className="hover:text-cyan-300 transition-colors">Growth Flywheel</a>
              </li>
              <li>
                <a href="#approach" className="hover:text-cyan-300 transition-colors">5-Step Process</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Client Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Social Media Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Google Ads / PPC</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Meta Ads (FB & IG)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">AI & GenAI Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Branding & Creatives</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coverage */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Reach Us</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  Gorakhpur, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 text-xs font-semibold">
                  Serving Clients Globally
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919455424089" className="hover:text-white transition-colors">+91 94554 24089</a>
                  <a href="tel:+918858657221" className="hover:text-white transition-colors">+91 88586 57221</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href="mailto:vyntrodigital@gmail.com" className="hover:text-white transition-colors truncate">
                  vyntrodigital@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Vyntro Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => onOpenLegalModal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
