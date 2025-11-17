import { Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './animations/AnimatedCounter';
import { ScrollProgress } from './animations/ScrollProgress';
import { TypingText } from './animations/TypingText';
import { AnimatedBackground } from './animations/AnimatedBackground';
import { MagneticButton } from './animations/MagneticButton';
import { ParticlesBackground } from './animations/ParticlesBackground';
import { ParallaxSection } from './animations/ParallaxSection';
import { InteractivePortfolio } from './modern/InteractivePortfolio';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const SorareBasicLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-xl font-medium text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Chargement...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <ScrollProgress />
      
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img src={ynnoviaLogo} alt="Ynnovia" className="h-8" />
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="outline" size="lg" className="rounded-xl font-medium">
                Voir les Démonstrations
              </Button>
              <MagneticButton size="lg" className="rounded-xl font-medium">
                Consultation Gratuite
              </MagneticButton>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <ParallaxSection speed={0.3}>
          <header className="text-center pt-20 pb-16 max-w-5xl mx-auto relative">
            <AnimatedBackground />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Automatisation Intelligente IA</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <TypingText 
                  text="Automatisez votre Business"
                  className="bg-gradient-to-r from-[hsl(var(--ai-blue))] via-[hsl(var(--ai-purple))] to-[hsl(var(--ai-pink))] bg-clip-text text-transparent"
                />
                <br />
                <span className="text-foreground">avec l'Intelligence Artificielle</span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Ynnovia développe des <span className="font-semibold text-primary">automatisations intelligentes</span> et des <span className="font-semibold text-primary">applications complètes</span> qui transforment radicalement votre productivité
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <MagneticButton 
                  size="lg" 
                  variant="premium"
                  className="text-base px-8 py-6 h-auto rounded-2xl shadow-[var(--shadow-glow-strong)]"
                  onClick={() => {
                    const portfolioSection = document.getElementById('portfolio');
                    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Découvrir nos Solutions
                </MagneticButton>
                <MagneticButton 
                  size="lg"
                  variant="glass"
                  className="text-base px-8 py-6 h-auto rounded-2xl"
                  onClick={() => window.open('https://cal.com/ynnovia/30min', '_blank')}
                >
                  Consultation Gratuite
                </MagneticButton>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-8 mt-12 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                {['Google', 'HubSpot', 'Slack', 'N8N'].map((partner, i) => (
                  <motion.div
                    key={partner}
                    className="text-muted-foreground/60 font-medium hover:text-foreground transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3 + i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {partner}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </header>
        </ParallaxSection>
        
        {/* Stats Section */}
        <section className="mb-24 max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Zap, value: 150, suffix: '+', label: 'Automatisations Créées', sublabel: 'Sur 28 projets terminés', color: 'text-primary', bg: 'bg-primary/10' },
              { icon: Clock, value: 2000, suffix: 'h', label: 'Temps Économisé', sublabel: 'Pour nos clients', color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: Users, value: 50, suffix: '+', label: 'Clients Satisfaits', sublabel: 'Projets réussis', color: 'text-green-500', bg: 'bg-green-500/10' },
              { icon: TrendingUp, value: 99.9, suffix: '%', label: 'Fiabilité', sublabel: 'Uptime garanti', color: 'text-purple-500', bg: 'bg-purple-500/10' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl ${stat.bg} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Interactive Portfolio Section */}
        <div id="portfolio">
          <InteractivePortfolio />
        </div>

        {/* CTA Section */}
        <ParallaxSection speed={0.4}>
          <section className="py-24 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ai-blue))]/10 to-[hsl(var(--ai-purple))]/10 rounded-3xl" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[hsl(var(--ai-blue))] to-[hsl(var(--ai-purple))] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--ai-blue))] to-[hsl(var(--ai-purple))] bg-clip-text text-transparent">
                  Prêt à Transformer Votre Business ?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Découvrez comment nos solutions d'automatisation IA peuvent révolutionner votre entreprise
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    size="lg"
                    variant="premium"
                    className="text-base px-8 py-6 h-auto rounded-2xl shadow-[var(--shadow-glow-strong)]"
                    onClick={() => window.open('https://cal.com/ynnovia/demo', '_blank')}
                  >
                    Demander une Démo
                  </MagneticButton>
                  <MagneticButton
                    size="lg"
                    variant="glass"
                    className="text-base px-8 py-6 h-auto rounded-2xl"
                    onClick={() => window.open('https://cal.com/ynnovia/30min', '_blank')}
                  >
                    Consultation Gratuite
                  </MagneticButton>
                </div>

                <motion.div
                  className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span>Réponse sous 24h</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </div>
    </div>
  );
};