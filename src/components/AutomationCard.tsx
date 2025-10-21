import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Automation } from "@/data/automations";
import { motion } from "framer-motion";

interface AutomationCardProps {
  automation: Automation;
}

export const AutomationCard = ({ automation }: AutomationCardProps) => {
  const Icon = automation.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 flex flex-col h-full">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-[2px] rounded-3xl bg-card" />
        </motion.div>

        <div className="relative w-full h-48 overflow-hidden">
          <motion.img 
            src={automation.image} 
            alt={automation.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
        </div>
        <div className="flex flex-col h-full p-8 relative z-10">
          <div className="mb-6 flex-1">
            <div className="flex items-start justify-between mb-4">
              <motion.div 
                className={`inline-flex p-4 rounded-2xl ${automation.categoryColor}`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className={`w-8 h-8 ${automation.iconColor}`} />
              </motion.div>
            <Badge variant="secondary" className="text-xs">
              {automation.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {automation.name}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {automation.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4" />
              <span>{automation.executionsCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{automation.timeEstimate}</span>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full rounded-xl font-medium transition-all duration-300"
          variant="default"
        >
          {automation.buttonText}
        </Button>
      </div>
    </Card>
    </motion.div>
  );
};
