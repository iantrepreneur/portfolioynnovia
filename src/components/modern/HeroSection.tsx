import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../animations/MagneticButton';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#1a1f3a] to-background">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(217, 91%, 60%) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(262, 83%, 58%) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsl(189, 94%, 43%) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(217, 91%, 60%) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Intelligence Artificielle sur Mesure</span>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Transformez votre entreprise grâce à{' '}
            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(262,83%,58%)] to-[hsl(189,94%,43%)] bg-clip-text text-transparent animate-pulse">
              l'Intelligence Artificielle
            </span>
            <br />
            en seulement 30 jours
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Grâce à nos <span className="text-primary font-semibold">solutions IA</span> sur mesure,{' '}
            <span className="text-primary font-semibold">dites adieu aux tâches répétitives</span> et concentrez-vous sur ce qui{' '}
            <span className="text-primary font-semibold">booste votre croissance</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <MagneticButton
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-[0_0_40px_hsl(217,91%,60%,0.4)] hover:shadow-[0_0_60px_hsl(217,91%,60%,0.6)] transition-shadow"
            >
              Réservez votre Audit Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/10"
            >
              Voir nos Solutions
            </MagneticButton>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground mb-6">Ils ont automatisé. Et maintenant, ils dominent leur marché:</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['OpenAI', 'Stripe', 'Microsoft', 'AWS', 'Mistral', 'Anthropic'].map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-muted-foreground font-semibold text-lg"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
