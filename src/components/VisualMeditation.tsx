import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Waves, Square } from "lucide-react";

interface VisualMeditationProps {
  currentStep: number;
}

const VisualMeditation = ({ currentStep }: VisualMeditationProps) => {
  const [isActive, setIsActive] = useState(false);
  const [visualMode, setVisualMode] = useState<'dot' | 'spiral' | 'box'>('dot');

  const visualElements = {
    1: { description: "Baseline Assessment - Rate Focus & Calm (1-5)", visual: 'dot' as const },
    2: { description: "Audio Setup - Select track and adjust volume low", visual: 'box' as const },
    3: { description: "Open Awareness - Notice body, breath, sounds", visual: 'spiral' as const },
    4: { description: "Focused Attention - Focus on visual with smooth breathing", visual: 'dot' as const },
    5: { description: "Micro Action - One small step toward your #1 goal", visual: 'box' as const },
  };

  const currentVisual = visualElements[currentStep as keyof typeof visualElements] || visualElements[1];

  useEffect(() => {
    setVisualMode(currentVisual.visual);
  }, [currentStep]);

  const renderVisualElement = () => {
    switch (visualMode) {
      case 'dot':
        return (
          <img 
            src="/images/vis-focus-dot.png" 
            alt="Focus Dot - Concentric golden circles for meditation focus"
            className="w-full h-full object-contain"
          />
        );
      case 'spiral':
        return (
          <img 
            src="/images/vis-spiral.png" 
            alt="Meditation Spiral - Golden spiral for open awareness"
            className="w-full h-full object-contain"
          />
        );
      case 'box':
        return (
          <img 
            src="/images/vis-breath-box.png" 
            alt="Breath Box - Golden square for breathing exercises"
            className="w-full h-full object-contain"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="card-glass p-8 text-center border-primary/20">
      <h3 className="text-lg font-semibold mb-4 text-primary">Visual Focus Point</h3>
      
      <div className="relative w-64 h-64 mx-auto mb-6 bg-black rounded-lg overflow-hidden">
        {renderVisualElement()}
      </div>

      <p className="text-sm text-primary/80 mb-4">
        {currentVisual.description}
      </p>

      <div className="flex justify-center gap-2 mb-4">
        <Button
          variant={visualMode === 'dot' ? "default" : "outline"}
          size="sm"
          onClick={() => setVisualMode('dot')}
        >
          <Target className="w-4 h-4 mr-1" />
          Dot
        </Button>
        <Button
          variant={visualMode === 'spiral' ? "default" : "outline"}
          size="sm"
          onClick={() => setVisualMode('spiral')}
        >
          <Eye className="w-4 h-4 mr-1" />
          Spiral
        </Button>
        <Button
          variant={visualMode === 'box' ? "default" : "outline"}
          size="sm"
          onClick={() => setVisualMode('box')}
        >
          <Square className="w-4 h-4 mr-1" />
          Box
        </Button>
      </div>

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
            <div className="text-xs text-primary/70 animate-fade-in bg-secondary/20 p-3 rounded-lg">
              <p className="mb-1">💫 Breathe in for 4 counts, hold for 4, out for 4</p>
              <p>🎯 Keep gentle focus on the center point</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default VisualMeditation;