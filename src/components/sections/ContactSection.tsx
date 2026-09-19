import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe2, 
  MessageCircle, 
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from '../common/SocialIcons';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background Grids & Ambient Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Strategist Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Let's Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Digital Growth Strategy
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Have a project in mind or want to explore how our performance marketing can scale your customer acquisition? Reach out directly.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Headquarters */}
          <div className="p-6 sm:p-7 rounded-3xl bg-navy-900/80 border border-white/[0.08] hover:border-blue-500/40 hover:shadow-card-hover transition-all backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Location</h3>
            <p className="text-xs text-slate-400 mt-1">Agency Headquarters</p>
            <p className="text-sm font-semibold text-slate-200 mt-3">
              Gorakhpur, Uttar Pradesh, India
            </p>
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <Globe2 className="w-4 h-4 shrink-0" />
              <span>Serving Clients Globally</span>
            </div>
          </div>

          {/* Card 2: Phone Support */}
          <div className="p-6 sm:p-7 rounded-3xl bg-navy-900/80 border border-white/[0.08] hover:border-indigo-500/40 hover:shadow-card-hover transition-all backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-blue-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Phone Support</h3>
            <p className="text-xs text-slate-400 mt-1">Direct Strategist Line</p>
            <div className="mt-3 space-y-1">
              <a 
                href="tel:+919455424089" 
                className="block text-sm font-bold text-white hover:text-cyan-300 transition-colors"
              >
                +91 94554 24089
              </a>
              <a 
                href="tel:+918858657221" 
                className="block text-sm font-bold text-white hover:text-cyan-300 transition-colors"
              >
                +91 88586 57221
              </a>
            </div>
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Mon - Sat: 9 AM - 7 PM IST</span>
            </div>
          </div>

          {/* Card 3: WhatsApp Chat */}
          <div className="p-6 sm:p-7 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-card-hover transition-all backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">WhatsApp Chat</h3>
            <p className="text-xs text-slate-400 mt-1">Fast Response Channel</p>
            <a 
              href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-emerald-300 hover:text-emerald-200 mt-3"
            >
              +91 88586 57221
            </a>
            <div className="mt-5 pt-3 border-t border-emerald-500/20">
              <a
                href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Official Proposals */}
          <div className="p-6 sm:p-7 rounded-3xl bg-navy-900/80 border border-white/[0.08] hover:border-violet-500/40 hover:shadow-card-hover transition-all backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-fuchsia-500/20 border border-violet-500/30 text-violet-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Email Proposals</h3>
            <p className="text-xs text-slate-400 mt-1">Official Inquiries</p>
            <a 
              href="mailto:vyntrodigital@gmail.com"
              className="block text-sm font-bold text-white hover:text-cyan-300 transition-colors mt-3 truncate"
            >
              vyntrodigital@gmail.com
            </a>
            <div className="mt-5 pt-3 border-t border-white/[0.06]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-300 hover:text-white"
              >
                <span>Send Quick Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Social Presence Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Follow Our Digital Growth Journey</h4>
            <p className="text-xs text-slate-400 mt-0.5">Stay connected for marketing insights, campaign tips, and agency updates.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all text-xs font-semibold shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>@vyntrodigital</span>
            </a>

            <a
              href="https://www.facebook.com/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href="https://www.linkedin.com/company/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href="https://www.youtube.com/@vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all shadow-sm"
            >
              <YoutubeIcon className="w-4 h-4 text-red-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
