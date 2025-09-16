import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Target, Waves, Brain, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudioPlayer from "@/components/AudioPlayer";
import ProgressTracker from "@/components/ProgressTracker";
import VisualMeditation from "@/components/VisualMeditation";
import SessionTimer from "@/components/SessionTimer";
import DailyLogger from "@/components/DailyLogger";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [sessionActive, setSessionActive] = useState(false);
  
  const steps = [
    {
      id: 1,
      title: "Baseline Assessment",
      duration: "30-60s",
      icon: <Target className="w-5 h-5" />,
      description: "Sit tall. Rate your current Focus & Calm levels (1-5)",
      color: "primary"
    },
    {
      id: 2,
      title: "Audio Setup",
      duration: "15s",
      icon: <Waves className="w-5 h-5" />,
      description: "Select audio track and adjust volume to comfortable low level",
      color: "secondary"
    },
    {
      id: 3,
      title: "Open Awareness",
      duration: "2-3 min",
      icon: <Brain className="w-5 h-5" />,
      description: "Notice body, breath, sounds - don't fix anything",
      color: "accent"
    },
    {
      id: 4,
      title: "Focused Attention",
      duration: "5-10 min",
      icon: <Atom className="w-5 h-5" />,
      description: "Focus on visual target with smooth breathing",
      color: "primary"
    },
    {
      id: 5,
      title: "Micro Action",
      duration: "2-3 min",
      icon: <RotateCcw className="w-5 h-5" />,
      description: "One small step toward your #1 goal",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Champions Lifestyle Meditation Interface */}
      <section id="meditation" className="section-offset py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Process Steps */}
            <div className="lg:col-span-1">
              <Card className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Process Steps</h2>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        currentStep === step.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setCurrentStep(step.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-full ${
                          currentStep === step.id ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Center Column - Main Interface */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Session Timer */}
                <SessionTimer 
                  sessionActive={sessionActive}
                  currentStep={currentStep}
                  onSessionToggle={setSessionActive}
                />

                {/* Visual Meditation */}
                <VisualMeditation currentStep={currentStep} />

                {/* Audio Player */}
                <AudioPlayer currentStep={currentStep} />

                {/* Step Navigation */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep} of {steps.length}
                  </span>
                  <Button
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                    disabled={currentStep === steps.length}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Progress & Logging */}
            <div className="lg:col-span-1 space-y-6">
              <ProgressTracker />
              <DailyLogger />
            </div>
          </div>

          {/* Bottom Section - Theory Cards */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Binaural Beats",
                description: "Two close tones create a slow envelope for brain entrainment",
                icon: <Waves className="w-8 h-8" />
              },
              {
                title: "Standing Waves", 
                description: "Resonant cavity model for meditation states",
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: "Holographic Memory",
                description: "Parts encode the whole - Pribram/Bohm framework",
                icon: <Atom className="w-8 h-8" />
              },
              {
                title: "Torus Model",
                description: "Bentov's universal hologram visualization",
                icon: <RotateCcw className="w-8 h-8" />
              }
            ].map((concept, index) => (
              <Card key={index} className="card-glass p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-primary">
                  {concept.icon}
                </div>
                <h3 className="font-bold mb-2">{concept.title}</h3>
                <p className="text-sm text-muted-foreground">{concept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <Blog />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
