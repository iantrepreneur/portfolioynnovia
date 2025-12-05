import { motion } from 'framer-motion';
import { MessageSquare, FileText, TrendingUp, Zap } from 'lucide-react';

const results = [
  {
    icon: MessageSquare,
    title: 'Assistant IA Conversationnel',
    description: '10 000+ conversations gérées automatiquement par mois avec un taux de satisfaction de 94%',
    badge: 'IA Conversationnelle',
    color: 'hsl(217, 91%, 60%)',
  },
  {
    icon: FileText,
    title: 'Gestion Documentaire IA',
    description: 'Classement, extraction et recherche automatisés dans tous vos documents',
    badge: 'Documents IA',
    color: 'hsl(262, 83%, 58%)',
  },
  {
    icon: TrendingUp,
    title: 'Analyse Prédictive',
    description: 'Augmentation de 300% de la précision des prévisions de ventes',
    badge: 'Analytics IA',
    color: 'hsl(189, 94%, 43%)',
  },
  {
    icon: Zap,
    title: 'Automatisation Complète',
    description: '2000h de travail économisées par mois grâce à l\'automatisation intelligente',
    badge: 'Automatisation',
    color: 'hsl(322, 89%, 68%)',
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Intégrez l'IA dans vos processus métiers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions IA qui transforment réellement les entreprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${result.color}, transparent)`,
                  filter: 'blur(20px)',
                }}
              />
              
              <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-xl mb-4"
                  style={{ backgroundColor: `${result.color}20` }}
                >
                  <result.icon className="w-8 h-8" style={{ color: result.color }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{result.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {result.description}
                </p>

                {/* Badge */}
                <div
                  className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${result.color}20`,
                    color: result.color,
                  }}
                >
                  {result.badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
