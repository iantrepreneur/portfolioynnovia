import { motion } from 'framer-motion';
import { Clock, Video } from 'lucide-react';
import { useEffect } from 'react';

export const BookingSection = () => {
  useEffect(() => {
    let cancelled = false;

    const mount = async () => {
      // Ensure Cal command-queue shim exists before the script loads
      if (!(window as any).Cal) {
        (window as any).Cal = function (...args: any[]) {
          ((window as any).Cal.q = (window as any).Cal.q || []).push(args);
        };
      }

      const ensureAssets = () =>
        new Promise<void>((resolve) => {
          let pending = 0;
          const done = () => {
            pending--;
            if (pending <= 0) resolve();
          };

          // JS
          const existingScript = document.querySelector('script[data-cal="true"]') as HTMLScriptElement | null;
          if (!existingScript) {
            pending++;
            const script = document.createElement('script');
            script.src = 'https://app.cal.com/embed/embed.js';
            script.async = true;
            script.dataset.cal = 'true';
            script.onload = done;
            script.onerror = done;
            document.head.appendChild(script);
          }

          // CSS
          const existingCss = document.querySelector('link[data-cal-css="true"]') as HTMLLinkElement | null;
          if (!existingCss) {
            pending++;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://app.cal.com/embed/embed.css';
            link.setAttribute('data-cal-css', 'true');
            link.onload = done;
            link.onerror = done;
            document.head.appendChild(link);
          }

          if (pending === 0) resolve();
        });

      await ensureAssets();
      if (cancelled) return;

      const Cal = (window as any).Cal;
      try {
        const options = {
          elementOrSelector: "#cal-inline",
          calLink: "iantrepreneur-qjqmc6",
          config: { theme: "dark" },
        } as const;

        if (typeof Cal === "function") {
          // Function-style API
          Cal("init", { origin: "https://cal.com" });
          Cal("inline", options);
        } else if (Cal?.inline) {
          // Object-style API
          Cal.inline(options);
        } else {
          console.error("Cal.com embed not available on window.Cal");
        }
      } catch (e) {
        console.error("Cal.com inline init error", e);
      }
    };

    mount();

    return () => {
      cancelled = true;
      const container = document.getElementById("cal-inline");
      if (container) container.innerHTML = "";
    };
  }, []);

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
              <div
                id="cal-inline"
                data-cal-link="iantrepreneur-qjqmc6"
                style={{ width: "100%", minHeight: "600px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
