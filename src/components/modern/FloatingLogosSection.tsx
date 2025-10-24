import { motion } from 'framer-motion';

// Real logos with official colors - organized in 3 rows
const tools = [
  // Top row
  { 
    name: 'Google Business', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    duration: 5.5, 
    delay: 0.2, 
    x: '15%', 
    y: '15%',
    xFloat: 6,
  },
  { 
    name: 'Zendesk', 
    logo: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg',
    duration: 6.2, 
    delay: 0.4, 
    x: '48%', 
    y: '12%',
    xFloat: -5,
  },
  { 
    name: 'LinkedIn', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    duration: 4.8, 
    delay: 0.6, 
    x: '78%', 
    y: '18%',
    xFloat: 7,
  },
  
  // Center row (more dense)
  { 
    name: 'Make', 
    logo: 'https://www.vectorlogo.zone/logos/make/make-icon.svg',
    duration: 5.0, 
    delay: 0.3, 
    x: '8%', 
    y: '48%',
    xFloat: -6,
  },
  { 
    name: 'Trello', 
    logo: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
    duration: 6.5, 
    delay: 0.5, 
    x: '22%', 
    y: '45%',
    xFloat: 8,
  },
  { 
    name: 'Slack', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    duration: 5.8, 
    delay: 0.7, 
    x: '35%', 
    y: '50%',
    xFloat: -7,
  },
  { 
    name: 'Salesforce', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    duration: 4.6, 
    delay: 0.4, 
    x: '50%', 
    y: '46%',
    xFloat: 5,
  },
  { 
    name: 'Notion', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    duration: 5.3, 
    delay: 0.8, 
    x: '65%', 
    y: '52%',
    xFloat: -8,
  },
  { 
    name: 'Airtable', 
    logo: 'https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg',
    duration: 6.0, 
    delay: 0.6, 
    x: '80%', 
    y: '48%',
    xFloat: 6,
  },
  
  // Bottom row
  { 
    name: 'Zapier', 
    logo: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
    duration: 5.7, 
    delay: 0.5, 
    x: '18%', 
    y: '82%',
    xFloat: -5,
  },
  { 
    name: 'HubSpot', 
    logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
    duration: 4.9, 
    delay: 0.7, 
    x: '50%', 
    y: '85%',
    xFloat: 7,
  },
  { 
    name: 'Microsoft 365', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    duration: 6.3, 
    delay: 0.9, 
    x: '75%', 
    y: '80%',
    xFloat: -6,
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

        {/* Floating logos cloud */}
        <div className="relative h-[600px] max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const randomRotate = Math.random() * 2 - 1; // -1 to +1 degrees (reduced)
            const randomScale = 0.95 + Math.random() * 0.1; // 0.95 to 1.05
            
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: randomScale }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="absolute group cursor-pointer"
                style={{
                  left: tool.x,
                  top: tool.y,
                  zIndex: Math.floor(Math.random() * 10),
                }}
              >
                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -12, 0], // Further reduced amplitude
                    x: [0, tool.xFloat, 0], // Natural horizontal movement
                    rotate: [randomRotate * 0.5, -randomRotate * 0.5, randomRotate * 0.5], // Reduced rotation
                  }}
                  transition={{
                    duration: tool.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tool.delay,
                  }}
                  whileHover={{
                    scale: 1.15,
                    zIndex: 50,
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
                  <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 min-w-[140px] hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] shadow-lg">
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
    </section>
  );
};
