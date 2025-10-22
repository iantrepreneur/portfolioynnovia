import { motion } from 'framer-motion';
import {
  Bot,
  Shield,
  BarChart3,
  Workflow,
  Code2,
  Puzzle,
  GraduationCap,
  Headphones,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Chatbots IA & Voicebots',
    description: 'Agents conversationnels intelligents disponibles 24/7 pour vos clients',
    color: 'hsl(217, 91%, 60%)',
  },
  {
    icon: Shield,
    title: 'Cybersécurité & IA',
    description: 'Protection avancée contre les menaces grâce au machine learning',
    color: 'hsl(262, 83%, 58%)',
  },
  {
    icon: BarChart3,
    title: 'Analyse de Données',
    description: 'Transformez vos données en insights actionnables avec l\'IA',
    color: 'hsl(189, 94%, 43%)',
  },
  {
    icon: Workflow,
    title: 'Automatisation IA',
    description: 'Automatisez vos processus métier de bout en bout',
    color: 'hsl(322, 89%, 68%)',
  },
  {
    icon: Code2,
    title: 'Développement IA',
    description: 'Solutions IA sur mesure développées pour vos besoins spécifiques',
    color: 'hsl(145, 63%, 42%)',
  },
  {
    icon: Puzzle,
    title: 'Intégration IA',
    description: 'Intégration transparente de l\'IA dans vos systèmes existants',
    color: 'hsl(28, 100%, 54%)',
  },
  {
    icon: GraduationCap,
    title: 'Formation IA',
    description: 'Formez vos équipes à maîtriser les outils d\'intelligence artificielle',
    color: 'hsl(0, 77%, 54%)',
  },
  {
    icon: Headphones,
    title: 'Support IA',
    description: 'Assistance technique et maintenance continue de vos solutions IA',
    color: 'hsl(174, 100%, 39%)',
  },
];

export const ServicesSection = () => {
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
            Découvrez Tout Ce Que Nous Pouvons Faire Pour Vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des services IA complets pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
              }}
              style={{ perspective: 1000 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}40, transparent)`,
                }}
              />

              <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:backdrop-blur-2xl">
                {/* Animated icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
