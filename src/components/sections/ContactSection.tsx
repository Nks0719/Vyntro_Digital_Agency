import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe2, 
  MessageCircle, 
  Clock,
  ArrowRight
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
    <section id="contact" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's Build Your Digital Growth Strategy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have a project in mind or want to explore how our performance marketing can scale your customer acquisition? Reach out directly.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Agency Headquarters */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-premium transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Location</h3>
            <p className="text-xs text-slate-500 mt-1">Agency Headquarters</p>
            <p className="text-sm font-semibold text-slate-800 mt-3">
              Gorakhpur, Uttar Pradesh, India
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <Globe2 className="w-4 h-4 shrink-0" />
              <span>Serving Clients Globally</span>
            </div>
          </div>

          {/* Card 2: Direct Phone Support */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-premium transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Phone Support</h3>
            <p className="text-xs text-slate-500 mt-1">Direct Strategist Line</p>
            <div className="mt-3 space-y-1">
              <a 
                href="tel:+919455424089" 
                className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                +91 94554 24089
              </a>
              <a 
                href="tel:+918858657221" 
                className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                +91 88586 57221
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>Mon - Sat: 9 AM - 7 PM IST</span>
            </div>
          </div>

          {/* Card 3: Instant WhatsApp */}
          <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 hover:border-emerald-500 hover:shadow-premium transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">WhatsApp Chat</h3>
            <p className="text-xs text-slate-500 mt-1">Fast Response Channel</p>
            <a 
              href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-emerald-700 hover:text-emerald-800 mt-3"
            >
              +91 88586 57221
            </a>
            <div className="mt-4 pt-3 border-t border-emerald-100">
              <a
                href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Official Email */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-premium transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Email Proposals</h3>
            <p className="text-xs text-slate-500 mt-1">Official Inquiries</p>
            <a 
              href="mailto:vyntrodigital@gmail.com"
              className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors mt-3 truncate"
            >
              vyntrodigital@gmail.com
            </a>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800"
              >
                <span>Send Quick Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Social Presence Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Follow Our Digital Growth Journey</h4>
            <p className="text-xs text-slate-500 mt-0.5">Stay connected for marketing insights, campaign tips, and agency updates.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-all text-xs font-semibold shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              <span>@vyntrodigital</span>
            </a>

            <a
              href="https://www.facebook.com/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-blue-600" />
            </a>

            <a
              href="https://www.linkedin.com/company/vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-600" />
            </a>

            <a
              href="https://www.youtube.com/@vyntrodigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 transition-all shadow-sm"
            >
              <YoutubeIcon className="w-4 h-4 text-red-600" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
