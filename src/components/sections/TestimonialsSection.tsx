import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-28 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Trusted By Businesses That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Value Real Growth
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Hear directly from the organizations and entrepreneurs who partner with Vyntro Digital.
          </p>
        </div>

        {/* Featured Testimonial Bento Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-navy-900/90 border border-white/[0.09] rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
            
            <div className="flex items-center justify-between mb-6">
              {/* Quotation Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-300 flex items-center justify-center">
                <Quote className="w-6 h-6" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            {/* Author Details & Carousel Controls */}
            <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{current.author}</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {current.role}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-white/[0.08] hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-400 px-2">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 rounded-xl border border-white/[0.08] hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all backdrop-blur-lg ${
                  currentIndex === idx
                    ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/20 border-cyan-400/80 text-white shadow-glow-sm'
                    : 'bg-navy-900/60 border-white/[0.06] text-slate-400 hover:bg-navy-850 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${currentIndex === idx ? 'fill-amber-300 text-amber-300' : 'fill-amber-400/60 text-amber-400/60'}`} 
                    />
                  ))}
                </div>
                <h5 className="text-xs font-bold text-white truncate">{item.author}</h5>
                <p className="text-[11px] text-slate-400 truncate">{item.role}</p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
