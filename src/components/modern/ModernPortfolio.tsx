import { ScrollProgress } from '../animations/ScrollProgress';
import { HeroSection } from './HeroSection';
import { ResultsSection } from './ResultsSection';
import { ServicesSection } from './ServicesSection';
import { FloatingLogosSection } from './FloatingLogosSection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingSection } from './BookingSection';
import { FAQSection } from './FAQSection';
import { CTASection } from './CTASection';
import { Navbar } from '../Navbar';

export const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <div className="py-24" />
      <ResultsSection />
      <div className="py-24" />
      <div id="solutions">
        <ServicesSection />
      </div>
      <div className="py-24" />
      <div id="integration">
        <FloatingLogosSection />
      </div>
      <div className="py-24" />
      <div id="processus">
        <ProcessSection />
      </div>
      <div className="py-24" />
      <TestimonialsSection />
      <div className="py-24" />
      <BookingSection />
      <div className="py-24" />
      <div id="faq">
        <FAQSection />
      </div>
      <div className="py-24" />
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 Ynnovia. Tous droits réservés.</p>
            <p className="mt-2">Solutions d'Intelligence Artificielle sur Mesure</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
