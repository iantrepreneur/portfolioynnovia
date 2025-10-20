import { Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import { AutomationCard } from './AutomationCard';
import { automations } from '@/data/automations';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';

export const SorareBasicLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={ynnoviaLogo} alt="Ynnovia" className="h-8" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" className="rounded-xl font-medium">
                Voir les Démonstrations
              </Button>
              <Button size="lg" className="rounded-xl font-medium">
                Consultation Gratuite
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <header className="text-center pt-20 pb-16 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Automatisations Intelligentes
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Transformez vos <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">Processus</span>
            <br />avec l'Automatisation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8">
            Découvrez comment Ynnovia optimise les flux de travail avec des automatisations sur mesure, robustes et scalables pour votre entreprise.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-xl font-medium gap-2">
              Voir les Démonstrations
              <TrendingUp className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl font-medium">
              Consultation Gratuite
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">100% Sans Code</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Intégrations Multiples</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Support 24/7</span>
            </div>
          </div>
        </header>
        
        {/* Stats Section */}
        <section className="mb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-3xl bg-card border border-border/50">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Automatisations Créées</div>
              <div className="text-xs text-muted-foreground mt-1">Sur 28 projets terminés</div>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-card border border-border/50">
              <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">2000h</div>
              <div className="text-sm text-muted-foreground">Temps Économisé</div>
              <div className="text-xs text-muted-foreground mt-1">Pour nos clients</div>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-card border border-border/50">
              <div className="inline-flex p-4 rounded-2xl bg-green-500/10 mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
              <div className="text-xs text-muted-foreground mt-1">Projets réussis</div>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-card border border-border/50">
              <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Fiabilité</div>
              <div className="text-xs text-muted-foreground mt-1">Uptime garanti</div>
            </div>
          </div>
        </section>

        {/* Automations Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nos Automatisations Intelligentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment Ynnovia optimise les processus métier avec des automatisations intelligentes et robustes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {automations.map(automation => (
              <AutomationCard key={automation.id} automation={automation} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center pb-24">
          <div className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-cyan-500/10 rounded-3xl p-12 shadow-sm border border-border/50 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à Automatiser Votre Entreprise ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer vos processus
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-xl font-medium">
                Demander une Démo
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl font-medium">
                Consultation Gratuite
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};