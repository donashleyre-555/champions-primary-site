import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const VideoSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoPath: string, title: string) => {
    // For now, show a message that video will open in modal
    setPlayingVideo(videoPath);
    toast.info(`Opening "${title}" video player...`, {
      description: "Video functionality will be available once media files are uploaded."
    });
  };

  const handleDownload = (videoPath: string, title: string) => {
    toast.info(`Downloading "${title}"...`, {
      description: "Download will be available once video files are uploaded."
    });
  };

  const handleExternalLink = (title: string) => {
    toast.info(`Opening external link for "${title}"...`, {
      description: "External streaming links will be configured soon."
    });
  };

  const handleCompletePackageDownload = () => {
    toast.success("Preparing complete training package...", {
      description: "Your download will begin shortly. Check your downloads folder."
    });
  };

  const videos = [
    {
      title: "Meditation Protocol Demo",
      description: "Complete demonstration of the 5-step Champions Lifestyle meditation protocol",
      thumbnail: "/images/cl-logo-watermark.png",
      videoPath: "/videos/meditation-demo.mp4",
      duration: "12:34"
    },
    {
      title: "Bentov-Gateway Overview",
      description: "Scientific background and theory behind the consciousness development protocol",
      thumbnail: "/images/cl-logo-watermark.png", 
      videoPath: "/videos/protocol-overview.mp4",
      duration: "8:45"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Video Training Library
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Watch comprehensive video guides demonstrating the Champions Lifestyle protocol and its scientific foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="card-glass border-primary/20 overflow-hidden">
              <div className="relative group">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url("${video.thumbnail}")` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="btn-hero rounded-full w-16 h-16"
                      onClick={() => handleVideoPlay(video.videoPath, video.title)}
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-primary text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{video.title}</h3>
                <p className="text-primary/80 text-sm mb-4">{video.description}</p>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => handleVideoPlay(video.videoPath, video.title)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(video.videoPath, video.title)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleExternalLink(video.title)}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="card-glass p-6 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Download Complete Training Package</h3>
            <p className="text-primary/80 text-sm mb-4">
              Get the full Champions Lifestyle training package including step-by-step PDF guide, 
              audio tracks, and visual meditation aids.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={handleCompletePackageDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Package
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;