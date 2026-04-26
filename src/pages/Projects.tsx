import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Mic, Wrench, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Champions Lifestyle App",
      status: "In Development",
      statusVariant: "outline" as const,
      description:
        "A mobile-first platform for daily challenge tracking, meditation sessions, and community connection.",
      icon: <Smartphone className="w-7 h-7" />,
      cta: null,
    },
    {
      title: "Membership Community",
      status: "Live on Skool",
      statusVariant: "secondary" as const,
      description:
        "An exclusive community for serious practitioners. Accountability, coaching, and peer support.",
      icon: <Users className="w-7 h-7" />,
      cta: { label: "Join on Skool", action: () => window.open("https://skool.com", "_blank") },
    },
    {
      title: "Coaches Corner Podcast",
      status: "Active",
      statusVariant: "secondary" as const,
      description:
        "Weekly episodes on mental toughness, peak performance, and championship mindset with Coach Don.",
      icon: <Mic className="w-7 h-7" />,
      cta: { label: "Listen Now", action: () => navigate("/coaches-corner") },
    },
    {
      title: "Wellness Toolkit",
      status: "Available Now",
      statusVariant: "secondary" as const,
      description:
        "Complete performance toolkit: trackers, supplement protocols, and optimization guides.",
      icon: <Wrench className="w-7 h-7" />,
      cta: { label: "Get the Toolkit", action: () => navigate("/wellness-toolkit") },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Champions Lifestyle Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the ecosystem for the next generation of champions.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <Card
                key={i}
                className="card-gradient p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">{p.icon}</div>
                  <Badge variant={p.statusVariant}>{p.status}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                {p.cta && (
                  <Button className="btn-hero w-fit" onClick={p.cta.action}>
                    {p.cta.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
