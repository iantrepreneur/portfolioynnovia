import { motion } from 'framer-motion';

// Real logos with official colors - organized in 3 rows of 4
const tools = [
  // Row 1
  { 
    name: 'Google Business', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    duration: 5.5, 
    delay: 0.2,
  },
  { 
    name: 'Zendesk', 
    logo: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg',
    duration: 6.2, 
    delay: 0.4,
  },
  { 
    name: 'LinkedIn', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    duration: 4.8, 
    delay: 0.6,
  },
  { 
    name: 'Make', 
    logo: 'https://www.vectorlogo.zone/logos/make/make-icon.svg',
    duration: 5.0, 
    delay: 0.3,
  },
  
  // Row 2
  { 
    name: 'Trello', 
    logo: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
    duration: 6.5, 
    delay: 0.5,
  },
  { 
    name: 'Slack', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    duration: 5.8, 
    delay: 0.7,
  },
  { 
    name: 'Salesforce', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    duration: 4.6, 
    delay: 0.4,
  },
  { 
    name: 'Notion', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    duration: 5.3, 
    delay: 0.8,
  },
  
  // Row 3
  { 
    name: 'Airtable', 
    logo: 'https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg',
    duration: 6.0, 
    delay: 0.6,
  },
  { 
    name: 'Zapier', 
    logo: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
    duration: 5.7, 
    delay: 0.5,
  },
  { 
    name: 'HubSpot', 
    logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
    duration: 4.9, 
    delay: 0.7,
  },
  { 
    name: 'Microsoft 365', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    duration: 6.3, 
    delay: 0.9,
  },
];

export const FloatingLogosSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            L'IA Compatible Avec Tous Vos Outils
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos solutions s'intègrent parfaitement à votre écosystème technologique existant
          </p>
        </motion.div>

        {/* Grid layout - 3 rows of 4 logos */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {tools.map((tool, index) => {
              const randomRotate = Math.random() * 2 - 1;
              const xFloat = (Math.random() - 0.5) * 16; // -8 to +8
              
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  {/* Floating animation */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      x: [0, xFloat, 0],
                      rotate: [randomRotate * 0.5, -randomRotate * 0.5, randomRotate * 0.5],
                    }}
                    transition={{
                      duration: tool.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: tool.delay,
                    }}
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.2 },
                    }}
                    className="relative will-change-transform"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle, hsl(217, 91%, 60%), transparent)',
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* Card with dark glassmorphism */}
                    <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] shadow-lg">
                      {/* Logo */}
                      <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-12 h-12 object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <p className="text-xs font-semibold text-center text-slate-200">
                        {tool.name}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
