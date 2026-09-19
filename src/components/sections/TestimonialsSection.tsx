import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
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
    <section className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Trusted By Businesses That Value Real Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Hear directly from the organizations and entrepreneurs who partner with Vyntro Digital.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-all">
            
            {/* Quotation Mark Icon */}
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>{current.author}</span>
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {current.role}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-slate-400 px-2">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Grid Preview of all 3 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  currentIndex === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${currentIndex === idx ? 'fill-amber-300 text-amber-300' : 'fill-amber-400 text-amber-400'}`} 
                    />
                  ))}
                </div>
                <h5 className="text-xs font-bold truncate">{item.author}</h5>
                <p className={`text-[11px] truncate ${currentIndex === idx ? 'text-blue-100' : 'text-slate-500'}`}>
                  {item.role}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
