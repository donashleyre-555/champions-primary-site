import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Download,
  Clock,
  Headphones
} from "lucide-react";

const AudioHubPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([30]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sessionTimer, setSessionTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tracks = [
    { 
      name: "Binaural Alpha 10Hz", 
      file: "/audio/binaural-alpha-10hz.mp3", 
      description: "Sustained focus and concentration",
      category: "Focus",
      duration: "10:00",
      requiresHeadphones: true
    },
    { 
      name: "Box Breath 4-4-4-4 (10min)", 
      file: "/audio/box-breath-4-4-4-4-10min.mp3", 
      description: "Structured breathing pattern - 4 counts each phase",
      category: "Breathwork",
      duration: "10:00",
      requiresHeadphones: false
    },
    { 
      name: "Box Breath 4-4-4-4 (20min)", 
      file: "/audio/box-breath-4-4-4-4-20min.mp3", 
      description: "Extended structured breathing pattern",
      category: "Breathwork",
      duration: "20:00",
      requiresHeadphones: false
    },
    { 
      name: "Isochronic Gamma 40Hz (10min)", 
      file: "/audio/isochronic-gamma-40hz.mp3", 
      description: "Cognitive enhancement and idea generation",
      category: "Boost",
      duration: "10:00",
      requiresHeadphones: false
    },
    { 
      name: "Isochronic Gamma 40Hz (20min)", 
      file: "/audio/isochronic-gamma-40hz-20min.mp3", 
      description: "Extended cognitive enhancement session",
      category: "Boost",
      duration: "20:00",
      requiresHeadphones: false
    },
    { 
      name: "Resonant Breath 0.1Hz", 
      file: "/audio/resonant-breath-01hz.mp3", 
      description: "Calming 10-second breath cycles",
      category: "Calm",
      duration: "10:00",
      requiresHeadphones: false
    },
    { 
      name: "Theta-Delta Sleep (10min)", 
      file: "/audio/theta-delta-sleep.mp3", 
      description: "Deep relaxation and sleep preparation",
      category: "Sleep",
      duration: "10:00",
      requiresHeadphones: true
    },
    { 
      name: "Theta-Delta Sleep (20min)", 
      file: "/audio/theta-delta-sleep-20min.mp3", 
      description: "Extended deep sleep preparation",
      category: "Sleep",
      duration: "20:00",
      requiresHeadphones: true
    },
    { 
      name: "Cellular Renewal Healing", 
      file: "/audio/cellular-renewal-healing-30min.mp3", 
      description: "Deep healing and cellular regeneration session",
      category: "Healing",
      duration: "30:00",
      requiresHeadphones: false
    },
    { 
      name: "Champions 417Hz Reset", 
      file: "/audio/champions-417hz-reset.mp3", 
      description: "Frequency healing reset for transformation",
      category: "Healing",
      duration: "25:00",
      requiresHeadphones: true
    },
    { 
      name: "Champions Pre-Game Background", 
      file: "/audio/champions-pregame-background.mp3", 
      description: "Energizing preparation music for peak performance",
      category: "Motivation",
      duration: "5:00",
      requiresHeadphones: false
    },
    { 
      name: "Quantum Field Reboot", 
      file: "/audio/quantum-field-reboot-30min.mp3", 
      description: "30min quantum energy field reset and alignment",
      category: "Healing",
      duration: "30:00",
      requiresHeadphones: false
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [currentTrack]);

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => {
        setSessionTimer(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setTimerActive(false);
      } else {
        audioRef.current.play().catch(() => {
          // Handle case where audio file doesn't exist
          console.warn('Audio file not found or unable to play');
        });
        setTimerActive(true);
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
    const nextIndex = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextIndex);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    setCurrentTime(0);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
  };

  const downloadTrack = () => {
    const track = tracks[currentTrack];
    const link = document.createElement('a');
    link.href = track.file;
    link.download = `${track.name}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Focus: "bg-blue-500/20 text-blue-300",
      Calm: "bg-green-500/20 text-green-300",
      Boost: "bg-yellow-500/20 text-yellow-300",
      Sleep: "bg-purple-500/20 text-purple-300",
      Breathwork: "bg-teal-500/20 text-teal-300",
      Healing: "bg-emerald-500/20 text-emerald-300",
      Motivation: "bg-orange-500/20 text-orange-300",
      Guidance: "bg-amber-500/20 text-amber-300"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300";
  };

  const currentTrackData = tracks[currentTrack];

  return (
    <div className="space-y-6">
      {/* Current Track Display */}
      <Card className="card-glass p-6 border-primary/20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-primary">
                {currentTrackData.name}
              </h3>
              <Badge className={getCategoryColor(currentTrackData.category)}>
                {currentTrackData.category}
              </Badge>
              {currentTrackData.requiresHeadphones && (
                <Headphones className="w-4 h-4 text-primary/60" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {currentTrackData.description}
            </p>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{currentTrackData.duration}</span>
              </div>
              <div className="w-full bg-secondary/20 rounded-full h-1">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-300"
                  style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* Session Timer */}
          <div className="text-right ml-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Clock className="w-4 h-4" />
              <span>Session</span>
            </div>
            <div className="text-lg font-mono text-primary">
              {formatTime(sessionTimer)}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={prevTrack}>
            <SkipBack className="w-4 h-4" />
          </Button>
          
          <Button
            size="icon"
            className="w-14 h-14 btn-hero"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={nextTrack}>
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>

        {/* Secondary Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant={isLooping ? "default" : "ghost"}
              size="sm"
              onClick={toggleLoop}
            >
              <Repeat className="w-4 h-4 mr-1" />
              Loop
            </Button>
            
            <Button variant="ghost" size="sm" onClick={downloadTrack}>
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3 w-32">
            <Volume2 className="w-4 h-4 text-primary/50" />
            <Slider
              value={volume}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-8">
              {volume[0]}%
            </span>
          </div>
        </div>
      </Card>

      {/* Track List */}
      <Card className="card-glass p-4 border-primary/20">
        <h4 className="text-sm font-medium text-primary mb-3">Track Library</h4>
        <div className="grid gap-2">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => setCurrentTrack(index)}
              className={`flex items-center justify-between p-3 rounded-lg text-left transition-colors
                ${index === currentTrack 
                  ? 'bg-primary/20 border border-primary/30' 
                  : 'bg-secondary/10 hover:bg-secondary/20'
                }`}
            >
              <div className="flex items-center gap-3">
                <Badge className={`${getCategoryColor(track.category)} text-xs`}>
                  {track.category}
                </Badge>
                <div>
                  <p className="text-sm font-medium text-primary">
                    {track.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {track.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {track.requiresHeadphones && (
                  <Headphones className="w-3 h-3 text-primary/60" />
                )}
                <span className="text-xs text-muted-foreground">
                  {track.duration}
                </span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <audio
        ref={audioRef}
        src={currentTrackData.file}
        onEnded={() => {
          setIsPlaying(false);
          setTimerActive(false);
          if (!isLooping) {
            nextTrack();
          }
        }}
        onError={() => setIsPlaying(false)}
        preload="metadata"
        loop={isLooping}
      />
    </div>
  );
};

export default AudioHubPlayer;