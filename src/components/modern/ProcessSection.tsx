import { motion } from 'framer-motion';
import { Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Lightbulb,
    title: 'Analyse & Stratégie',
    description: 'Nous analysons vos processus et identifions les opportunités d\'automatisation grâce à l\'IA. Audit complet et stratégie personnalisée.',
    color: 'hsl(217, 91%, 60%)',
  },
  {
    number: '2',
    icon: Rocket,
    title: 'Développement & Intégration',
    description: 'Notre équipe développe et intègre les solutions IA sur mesure dans votre environnement existant. Tests rigoureux et formation incluse.',
    color: 'hsl(262, 83%, 58%)',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Déploiement & Optimisation',
    description: 'Mise en production progressive avec support continu. Optimisation basée sur les données et amélioration continue des performances.',
    color: 'hsl(189, 94%, 43%)',
  },
];

export const ProcessSection = () => {
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
            Votre Succès en 3 Étapes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une méthodologie éprouvée pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${step.color}30, transparent)`,
                  filter: 'blur(40px)',
                }}
              />

              <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                {/* Giant number with gradient and glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="absolute -top-6 -right-6 text-9xl font-bold opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, transparent)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: `drop-shadow(0 0 30px ${step.color})`,
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-2xl mb-6 relative z-10"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon className="w-10 h-10" style={{ color: step.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
