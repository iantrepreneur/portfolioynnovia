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
import { ThemeToggle } from '../ThemeToggle';
import { motion } from 'framer-motion';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';

export const ModernPortfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="/"
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.img 
                src={ynnoviaLogo} 
                alt="Ynnovia" 
                className="h-12 w-12 object-contain"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              />
              <span className="text-xl font-bold text-foreground">Ynnovia</span>
            </motion.a>
            
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#integration" className="text-sm font-medium hover:text-primary transition-colors">
                Intégration
              </a>
              <a href="#processus" className="text-sm font-medium hover:text-primary transition-colors">
                Processus
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <HeroSection />
      <div className="py-24" /> {/* Increased spacing */}
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
