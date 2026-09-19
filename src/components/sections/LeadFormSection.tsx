import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Lock, 
  MessageCircle
} from 'lucide-react';
import type { LeadFormData } from '../../types';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    industry: 'Educational Institutions',
    services: ['Social Media Marketing'],
    budget: '₹15,000 - ₹30,000',
    projectGoal: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const availableServices = [
    'Social Media Marketing',
    'Search Engine Optimization (SEO)',
    'Google Ads / PPC',
    'Meta Ads',
    'Website Development',
    'Content Marketing',
    'Graphic Design',
    'Video & Reels Marketing',
    'Branding',
    'Influencer Marketing',
    'AI & GenAI Marketing'
  ];

  const industriesList = [
    'Educational Institutions',
    'Hotels & Hospitality',
    'Restaurants & Cafes',
    'Healthcare & Clinics',
    'Real Estate',
    'Solar Energy Companies',
    'Retail Businesses',
    'E-commerce Brands',
    'Personal Brands',
    'High-Growth Startups',
    'Other Industry'
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        if (prev.services.length === 1) return prev;
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleWhatsAppShare = () => {
    const text = `Hi Vyntro Digital, I just submitted the lead form on your website!\nName: ${formData.fullName}\nBusiness: ${formData.businessName}\nServices: ${formData.services.join(', ')}\nBudget: ${formData.budget}\nPhone: ${formData.phone}`;
    window.open(`https://wa.me/918858657221?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="consultation-form" className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Radiant Glow Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Client Intake</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Claim Your Free{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Growth Blueprint
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Fill out the details below. Our strategy team will review your business requirements and provide an actionable growth blueprint within 24 hours.
          </p>
        </div>

        {/* Lead Form Glassmorphic Container */}
        <div className="bg-navy-900/90 border border-white/[0.09] rounded-3xl p-7 sm:p-12 shadow-2xl backdrop-blur-2xl">
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Your consultation request for <strong className="text-white">{formData.businessName}</strong> has been securely logged. Our senior growth strategist will contact you shortly on <span className="text-cyan-300 font-bold">{formData.phone}</span>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Us Instantly on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      website: '',
                      industry: 'Educational Institutions',
                      services: ['Social Media Marketing'],
                      budget: '₹15,000 - ₹30,000',
                      projectGoal: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 text-xs sm:text-sm font-medium transition-colors border border-white/[0.08]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Business / Brand Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Greens Resort"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.businessName && <p className="text-[11px] text-red-400 mt-1">{errors.businessName}</p>}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 94554 24089"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/[0.08] focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 3: Website & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Website URL <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border border-white/[0.08] text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    {industriesList.map((ind, i) => (
                      <option key={i} value={ind} className="bg-navy-900">{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Services Pills Multi-select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2.5">
                  Services Required <span className="text-slate-500 font-normal">(Select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((srv, idx) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => toggleService(srv)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm border border-cyan-400/80'
                            : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Monthly Budget & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border border-white/[0.08] text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="Under ₹15,000" className="bg-navy-900">Under ₹15,000 / month</option>
                    <option value="₹15,000 - ₹30,000" className="bg-navy-900">₹15,000 - ₹30,000 / month</option>
                    <option value="₹30,000 - ₹60,000" className="bg-navy-900">₹30,000 - ₹60,000 / month</option>
                    <option value="₹60,000 - ₹1,50,000" className="bg-navy-900">₹60,000 - ₹1,50,000 / month</option>
                    <option value="₹1,50,000+ / Custom" className="bg-navy-900">₹1,50,000+ / Custom Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Primary Project Goal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Generate 50+ student admissions, increase room bookings..."
                    value={formData.projectGoal}
                    onChange={(e) => setFormData({ ...formData, projectGoal: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-navy-850/90 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Additional Notes or Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little more about your target audience, current roadblocks, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-navy-850/90 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                ></textarea>
              </div>

              {/* Submission Button & Trust Tags */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Blueprint...</span>
                  ) : (
                    <>
                      <span>Get My Free Consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>24h Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
