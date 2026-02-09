import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { applications } from '@/data/applications';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';

interface ProjectModalData {
  name: string;
  category: string;
  description: string;
  stack: string[];
  metrics: string[];
  iconColor: string;
  categoryColor: string;
  image: string;
}

export default function ProjetsClients() {
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const DESC_LIMIT = 120;

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
                whileHover={{ scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }}
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
              <Link to="/solutions" className="text-sm font-medium hover:text-primary transition-colors">
                Solutions
              </Link>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
            >
              Portfolio
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projets Clients
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les projets que nous avons réalisés pour nos clients et les résultats obtenus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applications.map((project, index) => {
              const isExpanded = expandedCards.has(project.id);
              const shortDesc = project.description.length > DESC_LIMIT
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
                    {/* Video/Image Thumbnail */}
                    <div
                      className="relative aspect-video cursor-pointer overflow-hidden"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_hsl(217,91%,60%,0.5)]"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-7 h-7 text-primary-foreground ml-1" />
                        </motion.div>
                      </div>
                      <Badge className={`absolute top-4 left-4 ${project.categoryColor} backdrop-blur-sm`}>
                        {project.category}
                      </Badge>
                    </div>

                    {/* Content */}
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

                      {/* Metrics */}
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
          </div>
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
              {/* Video/Image area */}
              <div className="relative aspect-video bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_hsl(217,91%,60%,0.6)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-9 h-9 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Project Info - YouTube-style */}
              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge className={`${selectedProject.categoryColor} mb-3`}>
                      {selectedProject.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground">
                      {selectedProject.name}
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Stack */}
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

                {/* Metrics */}
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
