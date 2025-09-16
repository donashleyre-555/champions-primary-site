import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, SkipBack, SkipForward } from "lucide-react";

interface AudioPlayerProps {
  currentStep: number;
}

const AudioPlayer = ({ currentStep }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([30]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    { name: "Baseline Frequencies", file: "/audio/meditation-track-1.mp3" },
    { name: "Alpha Waves", file: "/audio/meditation-track-1.mp3" },
    { name: "Theta Gateway", file: "/audio/meditation-track-1.mp3" },
    { name: "Focus Harmonics", file: "/audio/meditation-track-1.mp3" },
    { name: "Action Activation", file: "/audio/meditation-track-1.mp3" },
  ];

  useEffect(() => {
    if (currentStep <= tracks.length) {
      setCurrentTrack(currentStep - 1);
    }
  }, [currentStep]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };

  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const prevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  return (
    <Card className="card-glass p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">Audio Guidance</h3>
      
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-2">Now Playing:</p>
        <p className="font-medium">{tracks[currentTrack]?.name}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevTrack}
          disabled={currentTrack === 0}
        >
          <SkipBack className="w-4 h-4" />
        </Button>
        
        <Button
          size="icon"
          className="w-12 h-12 btn-hero"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextTrack}
          disabled={currentTrack === tracks.length - 1}
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground w-8">
            {volume[0]}%
          </span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.file}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </Card>
  );
};

export default AudioPlayer;