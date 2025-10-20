import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Automation } from "@/data/automations";

interface AutomationCardProps {
  automation: Automation;
}

export const AutomationCard = ({ automation }: AutomationCardProps) => {
  const Icon = automation.icon;
  
  return (
    <Card className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-border hover:-translate-y-1 flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="mb-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className={`inline-flex p-4 rounded-2xl ${automation.categoryColor} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-8 h-8 ${automation.iconColor}`} />
            </div>
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
  );
};
