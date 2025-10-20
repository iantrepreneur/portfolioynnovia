import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Code } from "lucide-react";
import type { Application } from "@/data/applications";

interface ApplicationCardProps {
  application: Application;
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const Icon = application.icon;
  
  return (
    <Card className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/50 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="mb-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className={`inline-flex p-4 rounded-2xl ${application.categoryColor} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-8 h-8 ${application.iconColor}`} />
            </div>
            <Badge variant="secondary" className="text-xs">
              {application.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {application.name}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {application.description}
          </p>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Stack technique</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {application.stack.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-foreground">Métriques</span>
            </div>
            <div className="space-y-1">
              {application.metrics.map((metric, index) => (
                <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full rounded-xl font-medium transition-all duration-300"
          variant="default"
        >
          {application.buttonText}
        </Button>
      </div>
    </Card>
  );
};
