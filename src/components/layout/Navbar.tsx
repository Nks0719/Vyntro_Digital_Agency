import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Growth Model', href: '#growth-ecosystem' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-slate-800/80' 
          : 'bg-navy-950/70 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-0.5 shadow-glow flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Vyntro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-black">Digital</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1">
                Digital Growth Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden xl:inline">+91 88586 57221</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              Consult
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-glow"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+919455424089"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/918858657221?text=Hi%20Vyntro%20Digital%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
