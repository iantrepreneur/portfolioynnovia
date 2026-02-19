import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ChevronDown, ChevronUp, Clock, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { applications } from '@/data/applications';
import { automations } from '@/data/automations';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type TabKey = 'plateforme' | 'automatisations';

interface ProjectModalData {
  name: string;
  category: string;
  description: string;
  stack?: string[];
  metrics?: string[];
  features?: string[];
  iconColor: string;
  categoryColor: string;
  image: string;
  youtubeUrl?: string;
}

const categories = ['Toutes', 'Communication', 'Finance', 'Marketing', 'CRM & Marketing', 'Infrastructure', 'Intelligence Artificielle'];

export default function ProjetsClients() {
  const [activeTab, setActiveTab] = useState<TabKey>('plateforme');
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number | string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleExpand = (id: number | string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const DESC_LIMIT = 120;

  const filteredAutomations = selectedCategory === 'Toutes'
    ? automations
    : automations.filter(a => a.category === selectedCategory);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'plateforme', label: 'Plateformes' },
    { key: 'automatisations', label: 'Automatisations' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
            className="text-center mb-10"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
            >
              Portfolio
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projets Clients
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les projets que nous avons réalisés pour nos clients et les résultats obtenus
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted/50 backdrop-blur-sm rounded-xl p-1.5 border border-border/50">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setExpandedCards(new Set());
                    setSelectedCategory('Toutes');
                    setExpandedId(null);
                  }}
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-lg shadow-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Plateformes Tab */}
          {activeTab === 'plateforme' && (
            <motion.div
              key="plateforme"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {applications.map((project, index) => {
                const isExpanded = expandedCards.has(project.id);
                const shortDesc =
                  project.description.length > DESC_LIMIT
                    ? project.description.slice(0, DESC_LIMIT) + '...'
                    : project.description;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(217,91%,60%,0.15)]">
                      <div
                        className="relative aspect-video cursor-pointer overflow-hidden"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <motion.div
                            className={`w-16 h-16 rounded-full backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_hsl(217,91%,60%,0.5)] ${project.youtubeUrl ? 'bg-red-600/90' : 'bg-primary/90'}`}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-7 h-7 text-white ml-1" />
                          </motion.div>
                        </div>
                        <Badge className={`absolute top-4 left-4 ${project.categoryColor} backdrop-blur-sm`}>
                          {project.category}
                        </Badge>
                        {project.youtubeUrl && (
                          <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                            Démo
                          </span>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {isExpanded ? project.description : shortDesc}
                        </p>
                        {project.description.length > DESC_LIMIT && (
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                          >
                            {isExpanded ? (
                              <>Voir moins <ChevronUp className="w-3 h-3" /></>
                            ) : (
                              <>Voir plus <ChevronDown className="w-3 h-3" /></>
                            )}
                          </button>
                        )}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.metrics.map((metric, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Automatisations Tab - Solutions content */}
          {activeTab === 'automatisations' && (
            <motion.div
              key="automatisations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all duration-300"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>

              {/* Solutions Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredAutomations.map((automation, index) => (
                  <motion.div
                    key={automation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.3)] h-full flex flex-col">
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

                      <div className="p-6 flex-1 flex flex-col">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="mb-4"
                        >
                          <automation.icon className={`w-10 h-10 ${automation.iconColor}`} />
                        </motion.div>

                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {automation.name}
                        </h3>

                        <p className="text-muted-foreground mb-4 flex-1">
                          {automation.description}
                        </p>

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

              {/* CTA */}
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
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border/50">
          <DialogTitle className="sr-only">
            {selectedProject?.name || 'Détails du projet'}
          </DialogTitle>
          {selectedProject && (
            <div>
              <div className="relative aspect-video bg-black">
                {selectedProject.youtubeUrl ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeUrl.split('/').pop()?.split('?')[0]}`}
                    title={selectedProject.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_hsl(217,91%,60%,0.6)]">
                        <Play className="w-9 h-9 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <Badge className={`${selectedProject.categoryColor} mb-3`}>
                    {selectedProject.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedProject.name}
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.stack && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Stack technique</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg bg-muted text-muted-foreground font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Fonctionnalités</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg bg-muted text-muted-foreground font-medium border border-border/50"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.metrics && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Résultats</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
