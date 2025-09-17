import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Brain, 
  Heart, 
  Zap, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  Circle,
  ArrowRight,
  Trophy,
  Star,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";

const FibonacciChallenge = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [selectedWeek, setSelectedWeek] = useState(1);

  // Tesla 3-6-9 Framework
  const fibonacciSequence = [1, 2, 3, 5, 8, 13];
  
  const weeks = [
    {
      id: 1,
      title: "Foundation Week",
      subtitle: "Building Your Code",
      days: "Days 1-7",
      focus: "Establishing the 3-6-9 Rhythm",
      fibonacci: fibonacciSequence[0], // 1
      color: "from-primary/20 to-primary/10"
    },
    {
      id: 2,
      title: "Momentum Week", 
      subtitle: "Doubling Down",
      days: "Days 8-14",
      focus: "Amplifying Your Actions",
      fibonacci: fibonacciSequence[1], // 2
      color: "from-primary/30 to-primary/15"
    },
    {
      id: 3,
      title: "Integration Week",
      subtitle: "Living the Code",
      days: "Days 15-20",
      focus: "Mastery & Compound Growth",
      fibonacci: fibonacciSequence[2], // 3
      color: "from-primary/40 to-primary/20"
    }
  ];

  const coreCode = {
    intentions: [
      { title: "MIND", description: "Mental clarity and focus", icon: <Brain className="w-6 h-6" /> },
      { title: "BODY", description: "Physical energy and health", icon: <Heart className="w-6 h-6" /> },
      { title: "SPIRIT", description: "Purpose and alignment", icon: <Zap className="w-6 h-6" /> }
    ],
    actions: [
      "Morning intention setting",
      "Physical movement/exercise", 
      "Skill development work",
      "Meaningful connection",
      "Progress documentation",
      "Evening reflection"
    ],
    reflections: [
      "What worked today?",
      "What challenged me?", 
      "What did I learn?",
      "How did I grow?",
      "What am I grateful for?",
      "What pattern do I see?",
      "How can I improve tomorrow?",
      "What breakthrough happened?",
      "What relationship strengthened?"
    ]
  };

  const championsPillars = [
    { title: "TEAMWORK", description: "Together we achieve more", icon: <Target className="w-8 h-8" /> },
    { title: "FOCUS", description: "Laser attention on what matters", icon: <Brain className="w-8 h-8" /> },
    { title: "WORK HARD", description: "Excellence through effort", icon: <TrendingUp className="w-8 h-8" /> },
    { title: "GET BETTER", description: "Continuous improvement daily", icon: <Trophy className="w-8 h-8" /> }
  ];

  const handleDayComplete = (day: number) => {
    if (!completedDays.includes(day)) {
      setCompletedDays([...completedDays, day]);
    }
  };

  const calculateProgress = () => {
    return (completedDays.length / 20) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 overflow-hidden">
        {/* Logo Watermark */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url("/images/cl-logo-watermark.png")' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Star className="w-4 h-4 mr-1" />
              Champions Lifestyle Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Tesla–Fibonacci
              <span className="block text-primary/80">Challenge</span>
            </h1>
            <p className="text-xl text-primary/90 mb-4">
              It's a Choice. Live the Code. Challenge Yourself.
            </p>
            <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
              20 days to master the Tesla 3-6-9 framework using Fibonacci growth. 
              Build the habits that transform champions from dreamers into achievers.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{completedDays.length}/20</div>
                <div className="text-primary/70">Days Complete</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{Math.round(calculateProgress())}%</div>
                <div className="text-primary/70">Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{20 - completedDays.length}</div>
                <div className="text-primary/70">Days Remaining</div>
              </div>
            </div>

            <div className="mt-8">
              <Progress value={calculateProgress()} className="w-full max-w-md mx-auto h-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Champions Lifestyle Core Pillars */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">The Champions Code</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Four pillars that build champions. These aren't suggestions—they're requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {championsPillars.map((pillar, index) => (
              <Card key={index} className="card-glass p-6 text-center border-primary/20 hover:shadow-glow transition-all">
                <div className="flex justify-center mb-4 text-primary">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-primary">{pillar.title}</h3>
                <p className="text-primary/70">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tesla 3-6-9 Framework */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Tesla 3-6-9 Framework</h2>
            <p className="text-primary/80 max-w-3xl mx-auto">
              Nikola Tesla said "If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe." 
              This is that key, applied to champion development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 3 Intentions */}
            <Card className="card-glass p-8 border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Daily Intentions</h3>
                <p className="text-primary/70 text-sm">Mind • Body • Spirit Alignment</p>
              </div>
              
              <div className="space-y-4">
                {coreCode.intentions.map((intention, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                    <div className="text-primary">{intention.icon}</div>
                    <div>
                      <h4 className="font-semibold text-primary">{intention.title}</h4>
                      <p className="text-sm text-primary/70">{intention.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* 6 Actions */}
            <Card className="card-glass p-8 border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">6</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Daily Actions</h3>
                <p className="text-primary/70 text-sm">Structure & Momentum</p>
              </div>
              
              <div className="space-y-3">
                {coreCode.actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded bg-secondary/10">
                    <CheckCircle className="w-5 h-5 text-primary/60" />
                    <span className="text-primary/80">{action}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* 9 Reflections */}
            <Card className="card-glass p-8 border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">9</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Evening Reflections</h3>
                <p className="text-primary/70 text-sm">Completion & Growth</p>
              </div>
              
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {coreCode.reflections.map((reflection, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-primary/70 p-1">
                    <Circle className="w-3 h-3 text-primary/40" />
                    <span>{reflection}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 20-Day Challenge Timeline */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">20-Day Challenge Timeline</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Fibonacci growth in action. Each week builds on the last, creating exponential progress.
            </p>
          </div>

          {/* Week Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-secondary/20 rounded-lg p-1">
              {weeks.map((week) => (
                <Button
                  key={week.id}
                  variant={selectedWeek === week.id ? "default" : "ghost"}
                  onClick={() => setSelectedWeek(week.id)}
                  className="mx-1"
                >
                  Week {week.id}
                </Button>
              ))}
            </div>
          </div>

          {/* Selected Week Details */}
          {weeks.filter(week => week.id === selectedWeek).map((week) => (
            <Card key={week.id} className={`card-glass p-8 mb-8 border-primary/20 bg-gradient-to-r ${week.color}`}>
              <div className="text-center mb-6">
                <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">{week.days}</Badge>
                <h3 className="text-2xl font-bold text-primary mb-2">{week.title}</h3>
                <p className="text-primary/80 text-lg mb-1">{week.subtitle}</p>
                <p className="text-primary/70">{week.focus}</p>
                <div className="mt-4">
                  <span className="text-sm text-primary/60">Fibonacci Level: </span>
                  <span className="text-xl font-bold text-primary">{week.fibonacci}</span>
                </div>
              </div>
            </Card>
          ))}

          {/* Daily Challenge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((day) => {
              const isCompleted = completedDays.includes(day);
              const isCurrent = day === currentDay;
              
              return (
                <Card 
                  key={day}
                  className={`p-4 text-center cursor-pointer transition-all border-2 ${
                    isCompleted 
                      ? "border-primary bg-primary/20 shadow-glow" 
                      : isCurrent
                        ? "border-primary/70 bg-primary/10"
                        : "border-primary/30 hover:border-primary/50"
                  }`}
                  onClick={() => {
                    setCurrentDay(day);
                    if (!isCompleted) handleDayComplete(day);
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8 text-primary" />
                    ) : (
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        isCurrent ? "border-primary bg-primary/20" : "border-primary/50"
                      }`}>
                        <span className="text-sm font-bold text-primary">{day}</span>
                      </div>
                    )}
                    <span className="text-xs text-primary/70">Day {day}</span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="card-glass p-8 max-w-2xl mx-auto border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Challenge?</h3>
              <p className="text-primary/80 mb-6">
                Champions aren't born. They're built. One choice, one day, one action at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calendar className="w-5 h-5" />
                  Start Day 1
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Clock className="w-5 h-5" />
                  Download Planner
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FibonacciChallenge;