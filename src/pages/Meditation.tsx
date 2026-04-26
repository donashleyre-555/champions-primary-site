import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sunrise, Target, Moon, Sparkles, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const Meditation = () => {
  const navigate = useNavigate();

  const practices = [
    {
      title: "Morning Activation",
      duration: "10 min",
      description:
        "Start your day with intention. Binaural alpha waves + breath work to prime your mind for peak performance.",
      icon: <Sunrise className="w-7 h-7" />,
    },
    {
      title: "Pre-Game Focus",
      duration: "15 min",
      description:
        "Lock in before competition. Visualization + gamma wave protocol used by elite athletes.",
      icon: <Target className="w-7 h-7" />,
    },
    {
      title: "Evening Recovery",
      duration: "20 min",
      description:
        "Reset and restore. Theta-delta sleep prep + gratitude reflection to close the day strong.",
      icon: <Moon className="w-7 h-7" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Bentov-Gateway Protocol
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Champions Meditation Practice
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Science-based protocols for mental clarity, focus, and recovery.
          </p>
        </div>
      </section>

      {/* Practice Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {practices.map((p, i) => (
              <Card
                key={i}
                className="card-gradient p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-5 text-primary">
                  {p.icon}
                </div>
                <Badge variant="outline" className="mb-3">
                  {p.duration}
                </Badge>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bentov-Gateway Protocol */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <Card className="card-glass max-w-4xl mx-auto p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              The Bentov-Gateway Protocol
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Champions Lifestyle uses the Bentov-Gateway framework — a science-backed approach
              combining breath, sound frequency, and visualization to train your nervous system
              for peak performance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">Ages 14–Adult</Badge>
              <Badge variant="outline">15–20 minutes daily</Badge>
              <Badge variant="secondary">Science-Based</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Ready to Train Your Mind?
          </h2>
          <Button
            size="lg"
            className="btn-hero text-lg px-8 py-6 h-auto"
            onClick={() => navigate("/audio-hub")}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Your Practice
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Meditation;
