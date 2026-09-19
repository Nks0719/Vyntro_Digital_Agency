import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { ServicesSection } from './components/sections/ServicesSection';
import { GrowthEcosystem } from './components/sections/GrowthEcosystem';
import { AboutSection } from './components/sections/AboutSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { ExperienceStrip } from './components/sections/ExperienceStrip';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { PricingSection } from './components/sections/PricingSection';
import { ConsultationCTA } from './components/sections/ConsultationCTA';
import { LeadFormSection } from './components/sections/LeadFormSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { LegalModal } from './components/modals/LegalModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleOpenConsultation = (serviceOrIntent?: string) => {
    setSelectedService(serviceOrIntent || '');
    setIsConsultationOpen(true);
  };

  const handleOpenLegalModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setLegalModalType(type);
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 font-sans text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* Top Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Dynamic Growth Dashboard */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Hero CTA Consultation')} />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Comprehensive 11 Services Section */}
        <ServicesSection onSelectService={(srv) => handleOpenConsultation(srv)} />

        {/* 4. Featured Core Growth Ecosystem Flywheel */}
        <GrowthEcosystem onOpenConsultation={() => handleOpenConsultation('Complete Digital Growth Ecosystem')} />

        {/* 5. About Vyntro Digital */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation('About Us Inquiry')} />

        {/* 6. Our 5-Step Approach Timeline */}
        <ProcessTimeline onOpenConsultation={() => handleOpenConsultation('Strategy Roadmap Inquiry')} />

        {/* 7. Why Choose Us 8-Benefit Grid */}
        <WhyChooseUs />

        {/* 8. Experience & Credibility Strip */}
        <ExperienceStrip />

        {/* 9. Industries We Serve (10 Verticals) */}
        <IndustriesSection onSelectIndustry={(ind) => handleOpenConsultation(`Industry Strategy: ${ind}`)} />

        {/* 10. Portfolio & Verified Case Studies */}
        <PortfolioSection onOpenConsultation={(caseStudy) => handleOpenConsultation(caseStudy)} />

        {/* 11. Testimonials Carousel */}
        <TestimonialsSection />

        {/* 12. Transparent Pricing Packages */}
        <PricingSection onSelectPlan={(plan) => handleOpenConsultation(`Pricing Plan: ${plan}`)} />

        {/* 13. High-Converting Free Consultation Banner */}
        <ConsultationCTA onOpenConsultation={(intent) => handleOpenConsultation(intent)} />

        {/* 14. Complete 10-Field Lead Generation Form */}
        <LeadFormSection />

        {/* 15. Comprehensive Accordion FAQ */}
        <FAQSection onOpenConsultation={() => handleOpenConsultation('FAQ Direct Question')} />

        {/* 16. Contact Details & Social Profiles */}
        <ContactSection onOpenConsultation={() => handleOpenConsultation('Contact Section Inquiry')} />
      </main>

      {/* Multi-Column Agency Footer */}
      <Footer 
        onOpenLegalModal={handleOpenLegalModal}
        onOpenConsultation={() => handleOpenConsultation('Footer CTA Consultation')}
      />

      {/* Persistent Floating WhatsApp Trigger */}
      <WhatsAppFloat />

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preSelectedService={selectedService}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

export default App;
