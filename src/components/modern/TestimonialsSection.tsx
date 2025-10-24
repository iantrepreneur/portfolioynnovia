import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials1: Testimonial[] = [
  {
    text: "Grâce à leurs solutions IA, nous économisons +150 heures par mois. C'est un changement radical.",
    author: "Nathalie R.",
    role: "Directrice RH"
  },
  {
    text: "Automatiser.AI a transformé notre gestion des leads. Nous avons doublé notre taux de conversion.",
    author: "Armand G.",
    role: "Directeur des Ventes"
  },
  {
    text: "80% de nos tâches répétitives ont été supprimées en 2 semaines. Notre productivité a décollé !",
    author: "Marie D.",
    role: "Directrice Marketing"
  },
  {
    text: "Leur chatbot IA a réduit nos délais de réponse de 70%. Nos clients sont ravis !",
    author: "Antoine B.",
    role: "CEO"
  },
  {
    text: "L'automatisation de nos processus a généré un ROI de 300% en un trimestre. Impressionnant !",
    author: "Jean M.",
    role: "Directeur Financier"
  },
  {
    text: "Leur assistant e-commerce a boosté nos ventes de 25%. Les recommandations personnalisées fonctionnent parfaitement.",
    author: "Sophie L.",
    role: "Responsable E-Commerce"
  },
  {
    text: "Une transformation digitale réussie grâce à leur expertise. Nos processus sont maintenant ultra-efficaces.",
    author: "Philippe K.",
    role: "Directeur des Opérations"
  },
  {
    text: "L'implémentation a été rapide et sans accroc. Les résultats ont dépassé toutes nos attentes.",
    author: "Caroline T.",
    role: "Responsable Projets"
  },
];

const testimonials2: Testimonial[] = [
  {
    text: "Une solution sur mesure qui répond précisément à nos besoins. Les résultats ont dépassé nos attentes.",
    author: "Lucas M.",
    role: "Chef de Projet"
  },
  {
    text: "L'implémentation a été simple et rapide. Nos processus internes sont maintenant 3x plus efficaces.",
    author: "Thierry L.",
    role: "Responsable des Opérations"
  },
  {
    text: "Automatiser.AI a boosté notre croissance avec des solutions IA sur mesure. En un trimestre, ROI de 300%.",
    author: "Élise P.",
    role: "Directrice Générale"
  },
  {
    text: "Leur expertise en IA nous a permis de moderniser notre infrastructure en un temps record.",
    author: "François D.",
    role: "CTO"
  },
  {
    text: "Le support est réactif et professionnel. Ils nous accompagnent à chaque étape de notre transformation.",
    author: "Isabelle V.",
    role: "Responsable Innovation"
  },
  {
    text: "Nos équipes gagnent un temps précieux grâce à l'automatisation. La formation était excellente.",
    author: "Marc H.",
    role: "Manager"
  },
  {
    text: "Leur système d'analyse prédictive nous a permis d'optimiser notre stock et de réduire les coûts de 40%.",
    author: "Sandrine B.",
    role: "Directrice Logistique"
  },
  {
    text: "Les automatisations mises en place ont révolutionné notre service client. Satisfaction en hausse de 85%.",
    author: "David C.",
    role: "Responsable Relation Client"
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[400px] mx-4">
      <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full shadow-lg">
        {/* Étoiles (5 étoiles dorées) - CENTRÉES */}
        <div className="flex gap-1 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
        
        {/* Témoignage - CENTRÉ */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 text-center">
          {testimonial.text}
        </p>
        
        {/* Auteur - CENTRÉ */}
        <p className="text-slate-400 text-xs text-center">
          ➜ {testimonial.author}, {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-slate-900 relative">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Nos résultats parlent pour nous
        </h2>
        <p className="text-center text-slate-400 max-w-3xl mx-auto">
          Des centaines d'entreprises révolutionnent leur performance grâce à nous. 
          Découvrez leurs histoires :
        </p>
      </div>
      
      {/* Container avec gradients de fade */}
      <div className="relative">
        {/* Gradient gauche pour fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        
        {/* Gradient droit pour fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        {/* RANGÉE 1 - Défilement DROITE vers GAUCHE */}
        <div className="mb-8">
          <motion.div
            className="flex will-change-transform"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Dupliquer les témoignages 2 fois pour effet infini */}
            {[...testimonials1, ...testimonials1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
        
        {/* RANGÉE 2 - Défilement GAUCHE vers DROITE */}
        <div>
          <motion.div
            className="flex will-change-transform"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Dupliquer les témoignages 2 fois pour effet infini */}
            {[...testimonials2, ...testimonials2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
