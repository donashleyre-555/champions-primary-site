import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Headphones, Mic, Apple, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";

const featuredEpisodes = [
  {
    title: "Championship Mindset Fundamentals",
    duration: "45 min",
    description: "The core principles that separate champions from everyone else.",
  },
  {
    title: "Pre-Game Mental Protocol",
    duration: "22 min",
    description: "Coach Don's exact pre-competition routine for locking in focus.",
  },
  {
    title: "Recovery & Reset",
    duration: "18 min",
    description: "How to decompress, reflect, and come back stronger after a loss.",
  },
];

const platforms = [
  { name: "Apple Podcasts", icon: Apple, url: "#" },
  { name: "Spotify", icon: Mic, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
];

const AudioHub = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-primary"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                Champions Audio Hub
              </h1>
              <p className="text-muted-foreground text-lg">
                Mindset training, coaching sessions, and performance protocols — on demand.
              </p>
            </div>
          </div>

          {/* Featured Episodes */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Featured Episodes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredEpisodes.map((ep, i) => (
                <Card
                  key={i}
                  className="card-gradient p-6 flex flex-col hover:shadow-xl transition-all duration-300"
                >
                  <Badge variant="secondary" className="w-fit mb-3">
                    {ep.duration}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">{ep.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {ep.description}
                  </p>
                  <Button className="btn-hero w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Play Episode
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Coaches Corner Podcast */}
          <section className="mb-12">
            <Card className="card-gradient p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mic className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                  Coaches Corner Podcast
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                New episodes every week. Subscribe on your favorite platform.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                {platforms.map((p) => (
                  <Button
                    key={p.name}
                    variant="outline"
                    className="btn-glass h-12"
                    onClick={() => window.open(p.url, "_blank", "noopener,noreferrer")}
                  >
                    <p.icon className="w-5 h-5 mr-2" />
                    {p.name}
                  </Button>
                ))}
              </div>

              <Button
                className="btn-hero h-12 px-8"
                onClick={() => navigate("/coaches-corner")}
              >
                <Play className="w-5 h-5 mr-2" />
                Start Listening
              </Button>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AudioHub;
