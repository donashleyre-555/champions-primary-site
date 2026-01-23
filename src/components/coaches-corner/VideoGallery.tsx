import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar, Video } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  thumbnail: string;
  videoSrc?: string;
  category: string;
}

const episodes: Episode[] = [
  {
    id: 46,
    title: "Building Unstoppable Confidence",
    description: "Discover the psychological frameworks elite athletes use to build unshakeable confidence that performs under pressure.",
    duration: "32 min",
    date: "Dec 8, 2024",
    thumbnail: "/images/hero-meditation-male.jpg",
    category: "Mindset"
  },
  {
    id: 45,
    title: "The Psychology of Winning",
    description: "Understanding the mental patterns that separate winners from competitors and how to develop a championship mindset.",
    duration: "28 min",
    date: "Dec 1, 2024",
    thumbnail: "/images/hero-meditation.jpg",
    category: "Performance"
  },
  {
    id: 44,
    title: "Overcoming Mental Blocks",
    description: "Practical strategies for breaking through mental barriers and unlocking your full athletic potential.",
    duration: "35 min",
    date: "Nov 24, 2024",
    thumbnail: "/images/course-intro-video.jpg",
    category: "Recovery"
  },
  {
    id: 43,
    title: "Pre-Game Visualization Mastery",
    description: "Learn the exact visualization techniques used by Olympic champions to prepare for peak performance.",
    duration: "25 min",
    date: "Nov 17, 2024",
    thumbnail: "/images/course-advanced-video.jpg",
    category: "Visualization"
  },
  {
    id: 42,
    title: "Managing Competition Anxiety",
    description: "Transform nervous energy into competitive fuel with these proven anxiety management techniques.",
    duration: "30 min",
    date: "Nov 10, 2024",
    thumbnail: "/images/course-stadium-video.jpg",
    category: "Mental Health"
  },
  {
    id: 41,
    title: "The Champion's Daily Routine",
    description: "Structure your day like a champion with morning rituals and habits that build mental toughness.",
    duration: "22 min",
    date: "Nov 3, 2024",
    thumbnail: "/images/hero-meditation-male.jpg",
    category: "Habits"
  }
];

const VideoGallery = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(episodes.map(ep => ep.category))];
  
  const filteredEpisodes = filter === "All" 
    ? episodes 
    : episodes.filter(ep => ep.category === filter);

  return (
    <Card className="card-glass">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Video Library
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={filter === category ? "btn-hero" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="group cursor-pointer"
              onClick={() => setSelectedEpisode(episode)}
            >
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 left-2 bg-primary/90 text-primary-foreground"
                >
                  Ep. {episode.id}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                >
                  {episode.category}
                </Badge>
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {episode.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {episode.description}
              </p>
              
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {episode.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {episode.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedEpisode} onOpenChange={() => setSelectedEpisode(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Badge variant="outline">Episode {selectedEpisode?.id}</Badge>
                {selectedEpisode?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              {selectedEpisode?.videoSrc ? (
                <video 
                  className="w-full h-full rounded-lg" 
                  controls 
                  autoPlay
                  src={selectedEpisode.videoSrc}
                />
              ) : (
                <div className="text-center p-8">
                  <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Video will be available once uploaded
                  </p>
                </div>
              )}
            </div>
            <p className="text-muted-foreground">{selectedEpisode?.description}</p>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default VideoGallery;
