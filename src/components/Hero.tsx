import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroFootballMeditation from "@/assets/hero-football-meditation.jpg";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToMeditation = () => {
    const element = document.getElementById("meditation");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-gradient">Champions</span>
            <br />
            <span className="text-foreground">Lifestyle</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-accent mb-8 animate-float">
            "It's a Choice"
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            Calm your body. Focus your mind. Win small, daily.
            <span className="text-primary font-bold block mt-4 text-lg md:text-xl">Proof beats promises. It's a Choice.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="default" 
              className="btn-hero text-base px-6 py-4 h-auto"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="w-4 h-4 mr-2" />
              Crack The Code
            </Button>
            <Button 
              variant="outline" 
              size="default" 
              className="bg-black/80 border-primary text-primary hover:bg-primary hover:text-black backdrop-blur-md text-base px-6 py-4 h-auto transition-all duration-300"
              onClick={scrollToMeditation}
            >
              Start Practice
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="w-8 h-8 mx-auto text-primary cursor-pointer hover:text-accent transition-colors"
              onClick={scrollToMeditation}
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