import { motion } from 'framer-motion';
import { Clock, Video } from 'lucide-react';
import Cal from "@calcom/embed-react";

export const BookingSection = () => {
  // Cal.com is embedded via the official React component (@calcom/embed-react)


  return (
    <section id="booking-section" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discutons de votre projet IA ensemble !
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Imaginez une entreprise où chaque minute est productive et où vos processus 
            travaillent pour vous. Réservez un <span className="text-white font-semibold">
            audit gratuit et sans engagement</span> pour découvrir comment nous pouvons{' '}
            <span className="text-white font-semibold">transformer votre entreprise 
            en seulement 30 jours</span>.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-full">
              <p className="text-blue-400 text-sm font-medium mb-2">Malick</p>
              <h3 className="text-3xl font-bold text-white mb-6">Appel de 30 minutes</h3>
              
              {/* Duration */}
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">30 min</span>
              </div>
              
              {/* Conference info */}
              <div className="flex items-start gap-3 mb-6">
                <Video className="w-5 h-5 text-slate-400 mt-1" />
                <p className="text-slate-400 text-sm">
                  Informations sur la conférence en ligne fournies à la confirmation.
                </p>
              </div>
              
              {/* Explanatory text */}
              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Afin de garder un standard de qualité élevé et à fort rendement pour 
                  votre entreprise, nous sélectionnons minutieusement les dossiers et 
                  n'acceptons <span className="text-white font-semibold">que 2 clients 
                  par mois</span>.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Cela nous permet de vous apporter rapidement des résultats et la{' '}
                  <span className="text-white font-semibold">garantie de faire décoller 
                  votre entreprise</span> en un temps record.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full rotate-12 shadow-lg z-10">
              Cal.com
            </div>
            
            {/* Cal.com Inline Embed */}
            <div 
              className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
              style={{ minHeight: '600px' }}
            >
              <Cal
                calLink="iantrepreneur-qjqmc6/30min"
                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "auto" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
