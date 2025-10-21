import { Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import { AutomationCard } from './AutomationCard';
import { ApplicationCard } from './ApplicationCard';
import { automations } from '@/data/automations';
import { applications } from '@/data/applications';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ynnoviaLogo from '@/assets/ynnovia-logo.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCounter } from './animations/AnimatedCounter';
import { ScrollProgress } from './animations/ScrollProgress';
import { TypingText } from './animations/TypingText';
import { AnimatedBackground } from './animations/AnimatedBackground';
import { MagneticButton } from './animations/MagneticButton';
import { useEffect, useState } from 'react';

export const SorareBasicLanding = () => {
  const { scrollY } = useScroll();
  const [isLoading, setIsLoading] = useState(true);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        style={{
          opacity: headerOpacity,
          backdropFilter: useTransform(headerBlur, (v) => `blur(${v}px)`),
        }}
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
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <header className="text-center pt-20 pb-16 max-w-5xl mx-auto relative">
          <AnimatedBackground />
          
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Zap className="w-4 h-4" />
            Automatisations Intelligentes
          </motion.div>
          
          <div className="relative z-10">
            <TypingText
              text="Transformez vos Processus avec l'Automatisation"
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              delay={0.5}
            />
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Découvrez comment Ynnovia optimise les flux de travail avec des automatisations sur mesure, robustes et scalables pour votre entreprise.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <MagneticButton size="lg" className="rounded-xl font-medium gap-2">
              Voir les Démonstrations
              <TrendingUp className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="outline" size="lg" className="rounded-xl font-medium">
              Consultation Gratuite
            </MagneticButton>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/50 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            {[
              { icon: Zap, text: "100% Sans Code" },
              { icon: Users, text: "Intégrations Multiples" },
              { icon: Clock, text: "Support 24/7" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </header>
        
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

        {/* Tabs Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="automations" className="w-full">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TabsList className="inline-flex h-14 items-center justify-center rounded-2xl bg-card/50 backdrop-blur-md p-1.5 border border-border/50 shadow-lg mb-6">
                  <TabsTrigger 
                    value="automations" 
                    className="rounded-xl px-8 py-3 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300"
                  >
                    Automatisations
                  </TabsTrigger>
                  <TabsTrigger 
                    value="applications"
                    className="rounded-xl px-8 py-3 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300"
                  >
                    Applications
                  </TabsTrigger>
                </TabsList>
              </motion.div>
            </div>

            <TabsContent value="automations" className="mt-0">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Nos Automatisations Intelligentes
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Découvrez comment Ynnovia optimise les processus métier avec des automatisations intelligentes et robustes
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {automations.map((automation) => (
                  <AutomationCard key={automation.id} automation={automation} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-0">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Nos Applications Complètes
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Découvrez nos plateformes complètes développées avec les technologies les plus avancées
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {applications.map((application) => (
                  <ApplicationCard key={application.id} application={application} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center pb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-blue-500/10 to-cyan-500/10 rounded-3xl p-12 shadow-sm border border-border/50 max-w-4xl mx-auto overflow-hidden">
            {/* Animated background orb */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Prêt à Automatiser Votre Entreprise ?
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer vos processus
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <MagneticButton size="lg" className="rounded-xl font-medium">
                  Demander une Démo
                </MagneticButton>
                <MagneticButton variant="outline" size="lg" className="rounded-xl font-medium">
                  Consultation Gratuite
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};