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
    <footer className="bg-navy-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-0.5 shadow-glow flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Vyntro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1">
                  Digital Marketing Agency
                </span>
              </div>
            </a>

            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Transforming Brands Into Digital Success Stories. We partner with forward-thinking businesses to engineer measurable, high-ROI marketing funnels.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vyntro Digital on Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-slate-800 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@vyntrodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/50 hover:bg-slate-800 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#growth-ecosystem" className="hover:text-white transition-colors">Growth Model</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio & Work</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">Industries Served</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Google Ads / PPC</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Meta Ads (FB & IG)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">AI & GenAI Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Branding & Creatives</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Coverage */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Reach Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  Gorakhpur, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-emerald-400 text-xs font-medium">
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
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
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
