import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroFootballMeditation from "@/assets/hero-football-meditation.jpg";

const Hero = () => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/75 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary" className="animate-glow">
              <Sparkles className="w-3 h-3 mr-1" />
              Ages 14-Adult
            </Badge>
            <Badge variant="outline">Science-Based</Badge>
            <Badge variant="secondary">15-20 Minutes</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient">Champions</span>
            <br />
            <span className="text-foreground">Lifestyle</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-accent mb-6 animate-float">
            "Crack The Code"
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Master your emotions, focus your mind, and manifest your reality using the 
            <span className="text-primary font-semibold"> Bentov-Gateway protocol</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-6"
              onClick={scrollToMeditation}
            >
              <Play className="w-5 h-5 mr-2" />
              Begin Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-black/80 border-primary text-primary hover:bg-primary hover:text-black backdrop-blur-md text-lg px-8 py-6 transition-all duration-300"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
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
    </section>
  );
};

export default Hero;