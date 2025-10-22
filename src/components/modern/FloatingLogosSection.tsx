import { motion } from 'framer-motion';

// Real logos with official colors
const tools = [
  // Zone centrale (5-6 logos plus rapprochés)
  { 
    name: 'HubSpot', 
    logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
    duration: 5.2, 
    delay: 0.3, 
    x: '42%', 
    y: '35%',
    xFloat: -8,
  },
  { 
    name: 'Slack', 
    logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    duration: 4.8, 
    delay: 0.5, 
    x: '50%', 
    y: '42%',
    xFloat: 6,
  },
  { 
    name: 'Notion', 
    logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg',
    duration: 5.5, 
    delay: 0.7, 
    x: '58%', 
    y: '38%',
    xFloat: -5,
  },
  { 
    name: 'Salesforce', 
    logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
    duration: 4.5, 
    delay: 0.4, 
    x: '48%', 
    y: '52%',
    xFloat: 7,
  },
  { 
    name: 'Trello', 
    logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
    duration: 5.8, 
    delay: 0.6, 
    x: '38%', 
    y: '48%',
    xFloat: -6,
  },
  
  // Zone médiane (4 logos autour)
  { 
    name: 'Google Business', 
    logo: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
    duration: 6.2, 
    delay: 0.2, 
    x: '25%', 
    y: '28%',
    xFloat: 9,
  },
  { 
    name: 'LinkedIn', 
    logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
    duration: 5.0, 
    delay: 0.8, 
    x: '70%', 
    y: '30%',
    xFloat: -7,
  },
  { 
    name: 'Zapier', 
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
    duration: 4.7, 
    delay: 0.5, 
    x: '28%', 
    y: '58%',
    xFloat: 8,
  },
  { 
    name: 'Airtable', 
    logo: 'https://cdn.worldvectorlogo.com/logos/airtable.svg',
    duration: 5.3, 
    delay: 0.9, 
    x: '68%', 
    y: '56%',
    xFloat: -9,
  },
  
  // Zone périphérique (2-3 logos externes)
  { 
    name: 'Make', 
    logo: 'https://www.vectorlogo.zone/logos/make/make-icon.svg',
    duration: 6.5, 
    delay: 0.4, 
    x: '15%', 
    y: '42%',
    xFloat: 10,
  },
  { 
    name: 'Microsoft 365', 
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
    duration: 6.0, 
    delay: 0.6, 
    x: '78%', 
    y: '45%',
    xFloat: -10,
  },
  { 
    name: 'Zendesk', 
    logo: 'https://cdn.worldvectorlogo.com/logos/zendesk.svg',
    duration: 5.7, 
    delay: 1.0, 
    x: '48%', 
    y: '22%',
    xFloat: 5,
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
                    y: [0, -15, 0], // Reduced amplitude
                    x: [0, tool.xFloat, 0], // Natural horizontal movement
                    rotate: [randomRotate, -randomRotate, randomRotate],
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

                  {/* Card with glassmorphism */}
                  <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-xl p-4 min-w-[120px] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.3)] shadow-lg">
                    {/* Logo */}
                    <div className="flex justify-center mb-2">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Name */}
                    <p className="text-xs font-semibold text-center text-gray-800">
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
