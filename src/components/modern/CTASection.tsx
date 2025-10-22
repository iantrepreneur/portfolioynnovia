import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../animations/MagneticButton';
import { useState } from 'react';

export const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(262, 83%, 58%) 100%)',
            'linear-gradient(135deg, hsl(262, 83%, 58%) 0%, hsl(189, 94%, 43%) 100%)',
            'linear-gradient(135deg, hsl(189, 94%, 43%) 0%, hsl(217, 91%, 60%) 100%)',
            'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(262, 83%, 58%) 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Prêt à Libérer le Potentiel de Votre Entreprise ?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Rejoignez les entreprises qui ont déjà transformé leurs processus grâce à l'IA.
              Commencez dès aujourd'hui avec un audit gratuit.
            </p>
          </motion.div>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-2xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email professionnelle"
              required
              className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <MagneticButton
              type="submit"
              size="lg"
              className="rounded-full px-8 py-4 bg-white text-[hsl(217,91%,60%)] hover:bg-white/90 font-semibold shadow-2xl w-full sm:w-auto"
            >
              Obtenir Mon Audit Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </MagneticButton>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-sm"
          >
            ✓ Audit 100% gratuit et sans engagement • ✓ Réponse sous 24h • ✓ Places limitées ce mois-ci
          </motion.p>
        </div>
      </div>
    </section>
  );
};
