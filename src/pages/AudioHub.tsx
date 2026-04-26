import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Youtube, Headphones, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@CoachDon-555";

const upcomingEpisodes = [
  {
    title: "The Fibonacci Mind",
    description: "How math, momentum, and mindset converge into a championship framework.",
  },
  {
    title: "Recovery Is a Weapon",
    description: "Why elite performers treat recovery as offense, not maintenance.",
  },
  {
    title: "Championship Identity",
    description: "Becoming the version of you that wins before the game even starts.",
  },
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
                Champions Lifestyle Audio Hub
              </h1>
              <p className="text-muted-foreground text-lg">
                Mindset. Performance. Championship.
              </p>
            </div>
          </div>

          {/* Featured Episode */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Featured Episode</h2>
            </div>

            <Card className="card-gradient overflow-hidden">
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/gwlTx5ljTKI"
                  title="The Choice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-8">
                <Badge variant="secondary" className="mb-3">Featured</Badge>
                <h3 className="text-2xl font-bold mb-2">The Choice</h3>
                <p className="text-muted-foreground">
                  The foundational episode of the Champions Lifestyle "It's a Choice" program.
                </p>
              </div>
            </Card>
          </section>

          {/* Subscribe */}
          <section className="mb-16">
            <Card className="card-gradient p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mic className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                  Subscribe
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Never miss an episode. New drops every week on YouTube.
              </p>
              <Button
                className="btn-hero h-12 px-8"
                onClick={() => window.open(YOUTUBE_CHANNEL, "_blank", "noopener,noreferrer")}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </Button>
            </Card>
          </section>

          {/* More Episodes Coming Soon */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">More Episodes Coming Soon</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEpisodes.map((ep, i) => (
                <Card
                  key={i}
                  className="card-gradient p-6 flex flex-col hover:shadow-xl transition-all duration-300"
                >
                  <Badge variant="outline" className="w-fit mb-3">Coming Soon</Badge>
                  <h3 className="text-lg font-bold mb-2">{ep.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{ep.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AudioHub;
