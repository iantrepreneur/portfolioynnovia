import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

// Real logos with official colors - organized in circular layout around cloud
const tools = [
  // Circle positions (12 logos around the cloud)
  { 
    name: 'Google Business', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    duration: 5.5, 
    delay: 0, 
    angle: 0, // 12 o'clock
    radius: 280,
    xFloat: 6,
  },
  { 
    name: 'Slack', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    duration: 5.8, 
    delay: 0.1, 
    angle: 30, // 1 o'clock
    radius: 280,
    xFloat: -7,
  },
  { 
    name: 'Notion', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    duration: 5.3, 
    delay: 0.2, 
    angle: 60, // 2 o'clock
    radius: 280,
    xFloat: 5,
  },
  { 
    name: 'HubSpot', 
    logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
    duration: 4.9, 
    delay: 0.3, 
    angle: 90, // 3 o'clock
    radius: 280,
    xFloat: 7,
  },
  { 
    name: 'Salesforce', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    duration: 6.5, 
    delay: 0.4, 
    angle: 120, // 4 o'clock
    radius: 280,
    xFloat: -6,
  },
  { 
    name: 'Trello', 
    logo: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
    duration: 5.0, 
    delay: 0.5, 
    angle: 150, // 5 o'clock
    radius: 280,
    xFloat: 8,
  },
  { 
    name: 'LinkedIn', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    duration: 4.8, 
    delay: 0.6, 
    angle: 180, // 6 o'clock
    radius: 280,
    xFloat: -5,
  },
  { 
    name: 'Zapier', 
    logo: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
    duration: 5.7, 
    delay: 0.7, 
    angle: 210, // 7 o'clock
    radius: 280,
    xFloat: 6,
  },
  { 
    name: 'Make', 
    logo: 'https://www.vectorlogo.zone/logos/make/make-icon.svg',
    duration: 5.0, 
    delay: 0.8, 
    angle: 240, // 8 o'clock
    radius: 280,
    xFloat: -8,
  },
  { 
    name: 'Airtable', 
    logo: 'https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg',
    duration: 6.0, 
    delay: 0.9, 
    angle: 270, // 9 o'clock
    radius: 280,
    xFloat: 5,
  },
  { 
    name: 'Microsoft 365', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    duration: 6.3, 
    delay: 1.0, 
    angle: 300, // 10 o'clock
    radius: 280,
    xFloat: -6,
  },
  { 
    name: 'Zendesk', 
    logo: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg',
    duration: 6.2, 
    delay: 1.1, 
    angle: 330, // 11 o'clock
    radius: 280,
    xFloat: 7,
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

        {/* Floating logos cloud with circular layout */}
        <div className="relative h-[700px] max-w-5xl mx-auto flex items-center justify-center">
          {/* Central cloud icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-20"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-12 shadow-2xl">
              <Cloud className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
            
            {/* Upload arrow */}
            <motion.div
              animate={{
                y: [-10, -20, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 left-1/2 -translate-x-1/2"
            >
              <div className="text-green-400">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Circular logos */}
          {tools.map((tool, index) => {
            // Calculate position based on angle and radius
            const angleRad = (tool.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * tool.radius;
            const y = Math.sin(angleRad) * tool.radius;
            
            const randomRotate = Math.random() * 2 - 1;
            const randomScale = 0.95 + Math.random() * 0.1;
            
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: randomScale }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="absolute group cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  zIndex: Math.floor(Math.random() * 10),
                }}
              >
                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    x: [0, tool.xFloat, 0],
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
