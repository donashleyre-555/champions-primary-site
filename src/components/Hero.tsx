import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroFootballMeditation from "@/assets/hero-football-meditation.jpg";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToChallenges = () => {
    const element = document.getElementById("challenges");
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${heroFootballMeditation}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/champions-logo-trans.png" 
              alt="Champions Lifestyle Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </div>
          
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary" className="animate-glow">
              <Sparkles className="w-3 h-3 mr-1" />
              Ages 14-Adult
            </Badge>
            <Badge variant="outline">Science-Based</Badge>
            <Badge variant="secondary">15-20 Minutes</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">IT'S A CHOICE</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            Build unbreakable discipline. Master your mindset. Become the champion you were meant to be.
          </p>

          <div className="flex flex-col items-center gap-4 mb-12">
            <Button
              size="lg"
              className="btn-hero text-base md:text-lg px-8 md:px-12 py-6 md:py-7 h-auto font-bold tracking-wide max-w-2xl"
              onClick={scrollToChallenges}
            >
              <Play className="w-5 h-5 mr-2" />
              START YOUR FREE 7-DAY TRANSFORMATION
            </Button>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Used by SJH Stallions • Athletes • Students • Leaders
            </p>
          </div>

          <div className="animate-bounce">
            <ArrowDown
              className="w-8 h-8 mx-auto text-primary cursor-pointer hover:text-accent transition-colors"
              onClick={scrollToChallenges}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }}></div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Crack The Code: Bentov-Gateway Protocol"
        description="Learn the science-based approach to mastering focus, emotions, and consciousness"
      />
    </section>
  );
};

export default Hero;