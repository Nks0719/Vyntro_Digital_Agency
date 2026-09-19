import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              {type === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {type === 'terms' && <FileText className="w-5 h-5" />}
              {type === 'disclaimer' && <AlertCircle className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight capitalize">
                {type === 'privacy' && 'Privacy Policy'}
                {type === 'terms' && 'Terms & Conditions'}
                {type === 'disclaimer' && 'Disclaimer'}
              </h3>
              <p className="text-xs text-slate-400">Vyntro Digital • Legal Documentation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto text-slate-300 text-sm leading-relaxed space-y-4">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>Vyntro Digital</strong>, located in Gorakhpur, Uttar Pradesh, India, we are committed to safeguarding the privacy and confidentiality of our clients, prospective leads, and website visitors worldwide.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">1. Information Collection</h4>
              <p>
                We only collect personally identifiable information that you voluntarily submit through our consultation request forms, email communications, direct phone calls, or WhatsApp chats. This includes your name, company name, email address, phone number, and marketing preferences.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">2. How We Use Information</h4>
              <p>
                Your details are strictly utilized to respond to your queries, deliver customized digital marketing proposals, schedule strategy sessions, and execute agreed services. We never sell, rent, or trade your contact information to third-party brokers.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">3. Data Security</h4>
              <p>
                We implement industry-standard administrative, physical, and technical safeguards to prevent unauthorized access or disclosure of client records and campaign data.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Welcome to <strong>Vyntro Digital</strong>. By accessing this website or engaging our services, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">1. Scope of Services</h4>
              <p>
                Vyntro Digital delivers professional marketing services including SEO, Social Media Marketing, Meta Ads, Google Ads, Website Development, Branding, and AI Marketing. Specific project deliverables, payment schedules, and campaign terms are defined in individual client service contracts or invoices.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">2. Intellectual Property</h4>
              <p>
                Upon complete invoice settlement, final deliverables (custom website code, agreed graphics, logos) become the property of the client, excluding proprietary agency workflows, templates, or software licenses.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">3. Client Responsibilities</h4>
              <p>
                Clients agree to furnish necessary project inputs, access tokens, approvals, and ad spend budgets in a timely manner to maintain campaign momentum.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                <strong>Vyntro Digital</strong> provides marketing strategy, campaign execution, and creative services designed to optimize digital presence and lead generation.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">1. Performance Transparency</h4>
              <p>
                While we employ data-driven methodologies and industry best practices, digital marketing outcomes (including search rankings, platform algorithmic changes, and advertising costs per lead) are influenced by external platform dynamics and market competition. We do not guarantee arbitrary numerical rankings or specific financial returns.
              </p>
              <h4 className="text-base font-semibold text-white pt-2">2. Ad Spend & Third-Party Platforms</h4>
              <p>
                Advertising budgets for Meta Ads, Google Ads, and related platforms are disbursed directly to the respective ad networks unless explicitly invoiced through a consolidated management retainer.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800/50 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
