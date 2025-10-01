import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, SkipBack, SkipForward, Headphones } from "lucide-react";

interface AudioPlayerProps {
  currentStep: number;
}

const AudioPlayer = ({ currentStep }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([30]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    { name: "Binaural Alpha 10Hz", file: "/audio/binaural-alpha-10hz.mp3", description: "10min sustained focus (headphones required)" },
    { name: "Box Breath 4-4-4-4 (10min)", file: "/audio/box-breath-4-4-4-4-10min.mp3", description: "10min structured breathing pattern" },
    { name: "Box Breath 4-4-4-4 (20min)", file: "/audio/box-breath-4-4-4-4-20min.mp3", description: "20min structured breathing pattern" },
    { name: "Isochronic Gamma 40Hz (10min)", file: "/audio/isochronic-gamma-40hz.mp3", description: "10min cognitive enhancement" },
    { name: "Isochronic Gamma 40Hz (20min)", file: "/audio/isochronic-gamma-40hz-20min.mp3", description: "20min cognitive enhancement" },
    { name: "Resonant Breath 0.1Hz", file: "/audio/resonant-breath-01hz.mp3", description: "10min calming cycles" },
    { name: "Theta-Delta Sleep (10min)", file: "/audio/theta-delta-sleep.mp3", description: "10min sleep preparation" },
    { name: "Theta-Delta Sleep (20min)", file: "/audio/theta-delta-sleep-20min.mp3", description: "20min deep sleep preparation" },
    { name: "Cellular Renewal Healing", file: "/audio/cellular-renewal-healing-30min.mp3", description: "30min deep healing & cellular regeneration" },
    { name: "Champions 417Hz Reset", file: "/audio/champions-417hz-reset.mp3", description: "Frequency healing reset session" },
    { name: "Champions Pre-Game Background", file: "/audio/champions-pregame-background.mp3", description: "Preparation music for focus" },
    { name: "Quantum Field Reboot", file: "/audio/quantum-field-reboot-30min.mp3", description: "30min quantum energy reset" },
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
        audioRef.current.play().catch(() => {
          // Handle case where audio file doesn't exist
          console.warn('Audio file not found or unable to play');
        });
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
    <Card className="card-glass p-6 border-primary/20">
      <h3 className="text-lg font-semibold mb-4 text-center text-primary flex items-center justify-center gap-2">
        <Headphones className="w-5 h-5" />
        Audio Tracks
      </h3>
      
      <div className="text-center mb-4 bg-secondary/20 p-4 rounded-lg">
        <p className="text-sm text-primary/70 mb-1">Now Playing:</p>
        <p className="font-medium text-primary">{tracks[currentTrack]?.name}</p>
        <p className="text-xs text-primary/60 mt-1">{tracks[currentTrack]?.description}</p>
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
          <Volume2 className="w-4 h-4 text-primary/50" />
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-primary/70 w-8">
            {volume[0]}%
          </span>
        </div>
        <p className="text-xs text-primary/60 text-center">
          💡 Keep volume low for binaural effectiveness • 🎧 Headphones required for binaural tracks
        </p>
      </div>

      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.file}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        preload="metadata"
      />
    </Card>
  );
};

export default AudioPlayer;