import { motion } from 'framer-motion';
import {
  Globe,
  MessageSquare,
  FileText,
  Users,
  Building2,
  Trello,
  Linkedin,
  Zap,
  Workflow,
  Database,
  Mail,
  Headphones,
} from 'lucide-react';

const tools = [
  { name: 'Google Business', icon: Globe, duration: 4.2, delay: 0, x: '10%', y: '20%' },
  { name: 'Slack', icon: MessageSquare, duration: 5.5, delay: 0.5, x: '25%', y: '15%' },
  { name: 'Notion', icon: FileText, duration: 3.8, delay: 1, x: '45%', y: '25%' },
  { name: 'HubSpot', icon: Users, duration: 4.8, delay: 0.3, x: '65%', y: '18%' },
  { name: 'Salesforce', icon: Building2, duration: 5.2, delay: 0.8, x: '82%', y: '22%' },
  { name: 'Trello', icon: Trello, duration: 4.5, delay: 0.2, x: '15%', y: '55%' },
  { name: 'LinkedIn', icon: Linkedin, duration: 3.5, delay: 0.7, x: '32%', y: '60%' },
  { name: 'Zapier', icon: Zap, duration: 4.0, delay: 0.4, x: '50%', y: '65%' },
  { name: 'Make', icon: Workflow, duration: 5.0, delay: 0.9, x: '68%', y: '58%' },
  { name: 'Airtable', icon: Database, duration: 3.3, delay: 0.6, x: '85%', y: '62%' },
  { name: 'Microsoft 365', icon: Mail, duration: 4.7, delay: 0.1, x: '38%', y: '85%' },
  { name: 'Zendesk', icon: Headphones, duration: 5.3, delay: 1.2, x: '60%', y: '88%' },
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
            const randomRotate = Math.random() * 4 - 2; // -2 to +2 degrees
            const randomScale = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
            
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
                    y: [0, -20, 0],
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
                  className="relative"
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
                  <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 min-w-[140px] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.3)]">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center mb-3"
                    >
                      <tool.icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Name */}
                    <p className="text-sm font-semibold text-center text-foreground">
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
