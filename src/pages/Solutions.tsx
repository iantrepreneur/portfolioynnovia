import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { automations, Automation } from '@/data/automations';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';

const categories = ['Toutes', 'Communication', 'Finance', 'Marketing', 'CRM & Marketing', 'Infrastructure', 'Intelligence Artificielle'];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredAutomations = selectedCategory === 'Toutes' 
    ? automations 
    : automations.filter(a => a.category === selectedCategory);

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
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </Link>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Nos Solutions d'Automatisation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez toutes nos solutions d'intelligence artificielle et d'automatisation 
              pour transformer votre entreprise
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAutomations.map((automation, index) => (
              <motion.div
                key={automation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.3)] h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={automation.image} 
                      alt={automation.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    <Badge className={`absolute top-4 right-4 ${automation.categoryColor}`}>
                      {automation.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <automation.icon className={`w-10 h-10 ${automation.iconColor}`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {automation.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 flex-1">
                      {automation.description}
                    </p>

                    {/* Expandable Details */}
                    {expandedId === automation.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 space-y-3"
                      >
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-primary">Fonctionnalités :</h4>
                          <ul className="space-y-1">
                            {automation.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-semibold text-foreground">Exécutions :</span> {automation.executionsCount}
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Temps :</span> {automation.timeEstimate}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedId(expandedId === automation.id ? null : automation.id)}
                        className="flex-1"
                      >
                        {expandedId === automation.id ? 'Réduire' : 'Détails'}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl p-12 backdrop-blur-xl border border-border/50">
              <h2 className="text-3xl font-bold mb-4">Besoin d'une Solution Sur Mesure ?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nos experts sont là pour créer une automatisation parfaitement adaptée 
                à vos besoins spécifiques
              </p>
              <Link to="/">
                <Button size="lg" className="group">
                  Demander une Démo
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
}
