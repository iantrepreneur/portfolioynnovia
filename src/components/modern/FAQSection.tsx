import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Combien de temps faut-il pour implémenter une solution IA ?',
    answer: 'Le délai varie selon la complexité du projet, mais nous garantissons des résultats tangibles en 30 jours. Pour des projets standards (chatbot, automatisation simple), comptez 2-4 semaines. Pour des solutions plus complexes (analyse prédictive, IA custom), comptez 4-8 semaines.',
  },
  {
    question: 'Quels sont les coûts d\'une solution IA sur mesure ?',
    answer: 'Les coûts dépendent de vos besoins spécifiques et de la complexité de votre projet. Nous proposons des solutions allant des automatisations simples aux plateformes IA complètes. Chaque projet inclut un audit gratuit pour établir un devis précis adapté à votre budget.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons un chiffrement de niveau bancaire (AES-256), hébergeons vos données en Europe (RGPD compliant), et appliquons les meilleures pratiques de cybersécurité. Vos données restent votre propriété et ne sont jamais partagées avec des tiers.',
  },
  {
    question: 'Ai-je besoin de compétences techniques pour utiliser vos solutions ?',
    answer: 'Non, nos solutions sont conçues pour être intuitives et accessibles à tous. Nous fournissons une formation complète à vos équipes et un support continu. L\'interface est simple, et l\'IA fait le travail complexe pour vous.',
  },
  {
    question: 'Puis-je intégrer l\'IA à mes outils existants ?',
    answer: 'Oui, c\'est notre spécialité ! Nous intégrons l\'IA à plus de 100 outils populaires : CRM (Salesforce, HubSpot), communication (Slack, Teams), gestion de projet (Notion, Trello), et bien d\'autres. Si vous utilisez un outil spécifique, nous créons l\'intégration sur mesure.',
  },
  {
    question: 'Quel est votre taux de réussite ?',
    answer: 'Nous affichons un taux de satisfaction client de 98% et un ROI moyen de 300% la première année. 95% de nos clients économisent plus de 20h/semaine grâce à nos automatisations IA. Nous offrons une garantie de résultats mesurables.',
  },
  {
    question: 'Proposez-vous un support après la mise en ligne ?',
    answer: 'Oui, tous nos projets incluent 3 mois de support gratuit après le déploiement. Ensuite, vous pouvez choisir un plan de maintenance mensuel incluant : support prioritaire, mises à jour, optimisations continues et nouvelles fonctionnalités.',
  },
  {
    question: 'Comment se passe l\'audit gratuit ?',
    answer: 'L\'audit dure environ 1h en visioconférence. Nous analysons vos processus actuels, identifions les opportunités d\'automatisation, et estimons le ROI potentiel. Vous recevez ensuite un rapport détaillé avec nos recommandations et un plan d\'action personnalisé.',
  },
  {
    question: 'Travaillez-vous avec des petites entreprises ?',
    answer: 'Absolument ! Nous avons des solutions adaptées à toutes les tailles d\'entreprises, de la startup au grand groupe. Nous proposons également des paiements échelonnés pour faciliter l\'accès aux solutions d\'IA.',
  },
  {
    question: 'Quelle est la différence entre vos solutions et ChatGPT ?',
    answer: 'ChatGPT est un outil généraliste. Nos solutions sont spécifiquement entraînées sur VOS données, intégrées à VOS outils, et optimisées pour VOS processus métier. Nous créons des IA personnalisées qui connaissent votre entreprise et automatisent vos tâches spécifiques.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir sur nos solutions IA
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-left hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
