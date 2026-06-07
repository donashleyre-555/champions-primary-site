import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Trophy, Wrench, Mic, ArrowRight, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Champions Lifestyle App",
      description:
        "Mobile-first platform for daily challenge tracking, meditation sessions, and member community.",
      icon: <Smartphone className="w-7 h-7" />,
      status: "In Progress",
      variant: "outline" as const,
      cta: { label: "Preview", action: () => navigate("/") },
    },
    {
      title: "SJH Stallions Football Program",
      description:
        "Mindset and performance training for the SJH Stallions — building champion athletes on and off the field.",
      icon: <Trophy className="w-7 h-7" />,
      status: "Active",
      variant: "secondary" as const,
      cta: { label: "Learn More", action: () => navigate("/about") },
    },
    {
      title: "Wellness Toolkit",
      description:
        "Complete performance toolkit: trackers, supplement protocols, recovery guides, and habit systems.",
      icon: <Wrench className="w-7 h-7" />,
      status: "Active",
      variant: "secondary" as const,
      cta: { label: "Open Toolkit", action: () => navigate("/wellness-toolkit") },
    },
    {
      title: "Coaches Corner Podcast",
      description:
        "Weekly conversations on mental toughness, peak performance, and championship mindset with Coach Don.",
      icon: <Mic className="w-7 h-7" />,
      status: "Coming Soon",
      variant: "outline" as const,
      cta: { label: "Listen", action: () => navigate("/coaches-corner") },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">Champions Lifestyle</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            SJH Stallions & Champions Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the ecosystem for the next generation of champions — on the field, in the classroom, and in life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <Card key={i} className="card-gradient p-8 flex flex-col hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">{p.icon}</div>
                  <Badge variant={p.variant}>{p.status}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>
                <Button className="btn-hero w-fit" onClick={p.cta.action}>
                  {p.cta.label}<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Want to Collaborate?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Coach Don and the Champions Lifestyle team on athletics, mindset, or community projects.
          </p>
          <Button size="lg" className="btn-hero text-lg px-8 py-6 h-auto" onClick={() => navigate("/contact")}>
            Get In Touch<ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
