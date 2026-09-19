import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MessageCircle, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preSelectedService = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preSelectedService || 'Social Media Marketing');
  const [budget, setBudget] = useState('₹20,000 - ₹50,000');
  const [goal, setGoal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService);
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-converting consultation receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Vyntro Digital, I would like to schedule a Free Consultation.\nName: ${fullName || 'Prospective Client'}\nBusiness: ${businessName || 'Business'}\nService: ${service}\nPhone: ${phone || 'Not provided'}`;
    window.open(`https://wa.me/918858657221?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30-Minute Growth Strategy Session</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Get Your Free Consultation
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Let's analyze your current brand visibility and craft an actionable growth roadmap.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Consultation Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-white">{fullName}</span>. A senior growth specialist from Vyntro Digital will review your details and contact you via phone/WhatsApp within 24 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Health"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Google Ads / PPC">Google Ads / PPC</option>
                    <option value="Meta Ads">Meta Ads (FB & IG)</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video & Reels Marketing">Video & Reels Marketing</option>
                    <option value="Branding">Branding & Identity</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="AI & GenAI Marketing">AI & GenAI Marketing</option>
                    <option value="Complete Digital Growth Suite">Complete Digital Growth Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="Under ₹15,000">Under ₹15,000</option>
                    <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
                    <option value="₹60,000 - ₹1,50,000">₹60,000 - ₹1,50,000</option>
                    <option value="₹1,50,000+">₹1,50,000+ / Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  What is your primary goal right now?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need more student admissions, increase hotel room bookings, get more qualified leads..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Confirm Free Consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/60 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Or Chat via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                🔒 We respect your privacy. No spam. Your information is securely handled by Vyntro Digital.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
