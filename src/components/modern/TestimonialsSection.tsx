import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials1: Testimonial[] = [
  {
    text: "Grâce à leurs solutions IA, nous économisons +150 heures par mois sur nos tâches répétitives. C'est un changement radical pour notre productivité.",
    author: "Nathalie R.",
    role: "Directrice RH, TechCorp"
  },
  {
    text: "Automatiser.AI a transformé notre gestion des leads. Nous avons doublé notre taux de conversion en seulement 2 mois.",
    author: "Armand G.",
    role: "Directeur Commercial, SalesBoost"
  },
  {
    text: "L'intégration de leur chatbot IA a été rapide et sans accroc. Nos clients adorent la réactivité 24/7.",
    author: "Sophie L.",
    role: "CEO, CustomerFirst"
  },
  {
    text: "ROI de 300% en un trimestre. Les automatisations nous ont permis de nous concentrer sur la croissance.",
    author: "Marc D.",
    role: "Fondateur, StartupLab"
  },
  {
    text: "Une équipe professionnelle et à l'écoute. Ils ont compris nos besoins et livré une solution sur mesure parfaite.",
    author: "Claire M.",
    role: "Directrice Marketing, BrandPro"
  },
  {
    text: "Nous avons automatisé 60% de nos processus administratifs. Le temps gagné est réinvesti dans l'innovation.",
    author: "Thomas B.",
    role: "COO, InnovateCo"
  },
  {
    text: "Le support est exceptionnel. Disponibles, réactifs et toujours de bon conseil pour optimiser nos workflows.",
    author: "Emma F.",
    role: "Chef de Projet, AgileTeam"
  },
  {
    text: "Notre satisfaction client a augmenté de 45% grâce à leurs solutions de support automatisé par IA.",
    author: "Lucas P.",
    role: "Responsable Support, HelpDesk+"
  },
];

const testimonials2: Testimonial[] = [
  {
    text: "80% de nos tâches répétitives ont été supprimées en 2 semaines. Notre productivité a décollé de manière spectaculaire !",
    author: "Marie D.",
    role: "Directrice des Opérations, OptiWork"
  },
  {
    text: "Leur chatbot IA a réduit nos délais de réponse de 70%. Nos clients sont ravis et nos équipes soulagées !",
    author: "Antoine B.",
    role: "CEO, FastResponse"
  },
  {
    text: "L'assistant e-commerce a boosté nos ventes de 25%. Les recommandations personnalisées sont bluffantes.",
    author: "Isabelle C.",
    role: "Responsable E-Commerce, ShopSmart"
  },
  {
    text: "Automatiser.AI a conçu une solution sur mesure pour nos besoins spécifiques. Les résultats ont dépassé toutes nos attentes.",
    author: "Lucas M.",
    role: "Chef de Projet Digital, TechSolutions"
  },
  {
    text: "Implémentation simple et rapide. En moins d'un mois, nos processus internes sont devenus 3x plus efficaces.",
    author: "Camille V.",
    role: "Directrice IT, DataFlow"
  },
  {
    text: "Support réactif et professionnel. Ils nous accompagnent vraiment dans notre transformation digitale.",
    author: "Julien H.",
    role: "Responsable Innovation, FutureTech"
  },
  {
    text: "Nos processus internes sont maintenant 3x plus rapides. L'implémentation de A à Z a été fluide et bien accompagnée.",
    author: "Thierry K.",
    role: "Responsable des Opérations, StreamlineOps"
  },
  {
    text: "La génération automatique de documents nous fait gagner 20 heures par semaine. Un gain de temps incroyable !",
    author: "Patricia N.",
    role: "Directrice Administrative, DocFlow"
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-[400px] mx-4">
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full">
      {/* Étoiles */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Témoignage */}
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        {testimonial.text}
      </p>
      
      {/* Auteur */}
      <p className="text-slate-400 text-xs">
        ➜ {testimonial.author}, {testimonial.role}
      </p>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Nos résultats parlent pour nous
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-400 max-w-3xl mx-auto"
        >
          Des centaines d'entreprises révolutionnent leur performance grâce à nous. 
          Découvrez leurs histoires :
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Gradient gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        
        {/* Gradient droite */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
        
        {/* RANGÉE 1 - Défilement de DROITE vers GAUCHE */}
        <div className="relative mb-8 overflow-hidden">
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
            {/* Dupliquer les témoignages 2x pour effet infini */}
            {[...testimonials1, ...testimonials1].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* RANGÉE 2 - Défilement de GAUCHE vers DROITE */}
        <div className="relative overflow-hidden">
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
            {/* Dupliquer les témoignages 2x pour effet infini */}
            {[...testimonials2, ...testimonials2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
