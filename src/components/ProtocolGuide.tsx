import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Volume2, Eye, Brain, Zap, CheckCircle } from "lucide-react";

const ProtocolGuide = () => {
  const quickGuide = [
    {
      title: "What you need",
      icon: <Target className="w-5 h-5" />,
      content: "Headphones for binaural only, quiet seat, timer, water, Daily Log (Focus 1-5, Calm 1-5, Win Y/N)"
    },
    {
      title: "Pick the right track",
      icon: <Volume2 className="w-5 h-5" />,
      tracks: [
        { type: "Calm/Center", track: "Resonant Breath 0.1Hz", duration: "5-10 min", note: "≈10-sec cycles" },
        { type: "Sustained Focus", track: "Binaural ~10Hz", duration: "5-15 min", note: "headphones, low volume" },
        { type: "Idea Spark", track: "40Hz isochronic 2min", duration: "→ 8min silent", note: "transition tool" },
        { type: "Wind-Down/Sleep", track: "Binaural 2-4Hz", duration: "5-10 min", note: "headphones required" }
      ]
    }
  ];

  const runSheet = [
    { step: 1, title: "Baseline", duration: "30-60s", action: "Sit tall. Rate Focus & Calm (1-5)" },
    { step: 2, title: "Volume check", duration: "15s", action: "Keep it low" },
    { step: 3, title: "Open awareness", duration: "2-3 min", action: "Notice body/breath/sounds; don't 'fix'" },
    { step: 4, title: "One focus", duration: "5-10 min", action: "Focus Dot or Spiral with smooth breathing" },
    { step: 5, title: "Tiny task", duration: "2-3 min", action: "One micro-step toward your #1 goal" },
    { step: 6, title: "Log", duration: "1-2 min", action: "Focus/Calm, Win Y/N, one proof line" }
  ];

  const clearhatCards = [
    {
      title: "Binaural",
      subtitle: "Two close tones → slow envelope",
      points: ["Headphones on, low volume", "5-10 min with Dot/Spiral", "Stop if it distracts", "Log Focus/Calm/Win"]
    },
    {
      title: "Standing Waves",
      subtitle: "Resonant-cavity analogy", 
      points: ["Upright, still posture", "Relax jaw/eyes", "Smooth breath", "Short, steady focus intervals"]
    },
    {
      title: "Interference/Hologram",
      subtitle: "Pribram/Bohm framing",
      points: ["2-3 min open-awareness", "5-10 min single focus", "One proof line to 'read out' pattern"]
    },
    {
      title: "Conceptual Torus",
      subtitle: "Bentov metaphor",
      points: ["Start wide (one-line goal)", "Return to center (tiny task)", "Finish wide (reflection)", "Repeat gently"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Guide */}
      <Card className="card-glass p-6 border-primary/20">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Quick Protocol Guide
        </h3>
        
        <div className="space-y-4">
          {quickGuide.map((section, index) => (
            <div key={index} className="bg-secondary/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-primary">{section.icon}</div>
                <h4 className="font-semibold text-primary">{section.title}</h4>
              </div>
              {section.content && (
                <p className="text-sm text-primary/80">{section.content}</p>
              )}
              {section.tracks && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  {section.tracks.map((track, idx) => (
                    <div key={idx} className="bg-secondary/20 p-2 rounded text-xs">
                      <div className="font-medium text-primary">{track.type}</div>
                      <div className="text-primary/70">{track.track}</div>
                      <div className="text-primary/60">{track.duration} • {track.note}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Run Sheet */}
      <Card className="card-glass p-6 border-primary/20">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          Run Sheet (10-20 minutes)
        </h3>
        
        <div className="space-y-3">
          {runSheet.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-3 bg-secondary/10 rounded-lg">
              <Badge variant="outline" className="text-primary border-primary/30">
                {item.step}
              </Badge>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-primary">{item.title}</h4>
                  <span className="text-xs text-primary/60">({item.duration})</span>
                </div>
                <p className="text-sm text-primary/80">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-accent/10 rounded-lg">
          <p className="text-xs text-primary/70">
            <strong>Optional:</strong> 40Hz primer (2 min) before step 4; 0.1Hz cool-down (2 min) after
          </p>
        </div>
      </Card>

      {/* CLEARHAT Cards */}
      <Card className="card-glass p-6 border-primary/20">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          CLEARHAT Cards (Theory Summary)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clearhatCards.map((card, index) => (
            <div key={index} className="bg-secondary/10 p-4 rounded-lg">
              <div className="mb-3">
                <h4 className="font-bold text-primary">{card.title}</h4>
                <p className="text-xs text-primary/70">{card.subtitle}</p>
              </div>
              <ul className="space-y-1">
                {card.points.map((point, idx) => (
                  <li key={idx} className="text-xs text-primary/80 flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-primary/60 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Safety */}
      <Card className="card-glass p-6 border-primary/20">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6" />
          Safety & Measurement
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Safety Guidelines</h4>
            <ul className="text-sm text-primary/80 space-y-1">
              <li>• Low volume always</li>
              <li>• Stop if dizzy or uncomfortable</li>
              <li>• Consult clinician if seizure/tinnitus history</li>
              <li>• Never use while driving</li>
            </ul>
          </div>
          
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Tracking</h4>
            <ul className="text-sm text-primary/80 space-y-1">
              <li>• Keep consistent time-of-day</li>
              <li>• Compare weekly averages</li>
              <li>• Track Focus, Calm, % Wins</li>
              <li>• Audio helps = keep it, doesn't = go silent</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProtocolGuide;