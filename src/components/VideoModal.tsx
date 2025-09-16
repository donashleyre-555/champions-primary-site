import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

const VideoModal = ({ isOpen, onClose, title, description }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-4 p-0 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background border-2 border-primary/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-gradient">
            {title}
          </DialogTitle>
          {description && (
            <p className="text-lg text-muted-foreground mt-2">{description}</p>
          )}
        </DialogHeader>
        
        <div className="relative aspect-video bg-black/90 mx-6 mb-6 rounded-lg overflow-hidden border border-primary/20">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 via-black/60 to-black/80">
              <div className="text-center">
                <Button
                  size="lg"
                  className="btn-hero mb-4 text-lg px-8 py-6"
                  onClick={handlePlayVideo}
                >
                  <Play className="w-6 h-6 mr-2" />
                  Play Course Overview
                </Button>
                <p className="text-white/80 text-lg">
                  Discover the Bentov-Gateway Protocol
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Learn the science-based approach to focus and consciousness
                </p>
              </div>
            </div>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              poster="/images/course-intro-video.jpg"
            >
              <source src="/videos/protocol-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="p-6 pt-0 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="btn-hero flex-1 sm:flex-none"
            onClick={() => window.open('https://skool.com/champions-lifestyle', '_blank')}
          >
            Join the Skool Course
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-black/80 border-primary text-primary hover:bg-primary hover:text-black backdrop-blur-md flex-1 sm:flex-none"
            onClick={onClose}
          >
            Download Workbook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;