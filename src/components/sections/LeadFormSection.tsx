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
        if (prev.services.length === 1) return prev; // keep at least 1
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

    // Simulate secure client lead submission
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
    <section id="consultation-form" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Client Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Claim Your Free Growth Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Fill out the details below. Our strategy team will review your business requirements and provide an actionable growth blueprint within 24 hours.
          </p>
        </div>

        {/* Lead Form Container */}
        <div className="bg-slate-850 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Your consultation request for <strong className="text-white">{formData.businessName}</strong> has been securely logged. Our senior growth strategist will contact you shortly on <span className="text-blue-400 font-semibold">{formData.phone}</span>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all"
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
                  className="px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs sm:text-sm font-medium transition-colors"
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
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Business / Brand Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Royal Greens Resort"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.businessName && <p className="text-[11px] text-red-400 mt-1">{errors.businessName}</p>}
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 94554 24089"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 3: Website (Optional) & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Website URL <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    {industriesList.map((ind, i) => (
                      <option key={i} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Services Required Multi-select Pills */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Services Required <span className="text-slate-400 font-normal">(Select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((srv, idx) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => toggleService(srv)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 border border-blue-500'
                            : 'bg-slate-900/80 text-slate-400 border border-slate-700 hover:text-slate-200 hover:border-slate-600'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Monthly Budget & Project Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="Under ₹15,000">Under ₹15,000 / month</option>
                    <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000 / month</option>
                    <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000 / month</option>
                    <option value="₹60,000 - ₹1,50,000">₹60,000 - ₹1,50,000 / month</option>
                    <option value="₹1,50,000+ / Custom">₹1,50,000+ / Custom Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2">
                    Primary Project Goal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Generate 50+ inquiries/mo, increase hotel bookings"
                    value={formData.projectGoal}
                    onChange={(e) => setFormData({ ...formData, projectGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Additional Notes or Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little more about your target audience, current roadblocks, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              {/* Submission Button & Trust Tags */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 cursor-pointer"
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
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>24h Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Confidential & Secure</span>
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
