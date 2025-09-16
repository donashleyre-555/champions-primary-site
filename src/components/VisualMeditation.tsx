import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Waves } from "lucide-react";

interface VisualMeditationProps {
  currentStep: number;
}

const VisualMeditation = ({ currentStep }: VisualMeditationProps) => {
  const [isActive, setIsActive] = useState(false);
  const [pulseSize, setPulseSize] = useState(1);

  useEffect(() => {
    if (isActive && currentStep >= 3) {
      const interval = setInterval(() => {
        setPulseSize(prev => prev === 1 ? 1.2 : 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isActive, currentStep]);

  const visualElements = {
    1: { color: "bg-primary", icon: Target, description: "Baseline Assessment Focus" },
    2: { color: "bg-secondary", icon: Waves, description: "Audio Calibration" },
    3: { color: "bg-accent", icon: Eye, description: "Open Awareness State" },
    4: { color: "bg-primary", icon: Target, description: "Focused Attention Point" },
    5: { color: "bg-secondary", icon: Target, description: "Action Integration" },
  };

  const currentVisual = visualElements[currentStep as keyof typeof visualElements] || visualElements[1];
  const IconComponent = currentVisual.icon;

  return (
    <Card className="card-glass p-8 text-center">
      <h3 className="text-lg font-semibold mb-4">Visual Focus Point</h3>
      
      <div className="relative w-48 h-48 mx-auto mb-6">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse"></div>
        
        {/* Middle Ring */}
        <div 
          className="absolute inset-4 border border-accent/50 rounded-full transition-transform duration-2000"
          style={{ transform: `scale(${pulseSize})` }}
        ></div>
        
        {/* Inner Focus Point */}
        <div className={`absolute inset-16 ${currentVisual.color} rounded-full shadow-lg animate-glow flex items-center justify-center`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        {/* Breathing Guide Ring */}
        <div className="absolute inset-8 border border-muted/30 rounded-full animate-pulse" style={{ animationDuration: "4s" }}></div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {currentVisual.description}
      </p>

      {currentStep >= 3 && (
        <div className="space-y-2">
          <Button
            variant={isActive ? "secondary" : "default"}
            onClick={() => setIsActive(!isActive)}
            className="w-full"
          >
            {isActive ? "Pause Focus" : "Start Focus"}
          </Button>
          
          {isActive && (
            <div className="text-xs text-muted-foreground animate-fade-in">
              <p>Breathe in for 4 counts, hold for 4, out for 4</p>
              <p>Keep gentle focus on the center point</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default VisualMeditation;