import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Pause, 
  Volume2, 
  Share2, 
  Download,
  Heart,
  MessageCircle,
  ExternalLink,
  Mic,
  Video,
  Clock,
  Calendar
} from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoGallery from "@/components/coaches-corner/VideoGallery";
import mentalToughnessThumbnail from "@/assets/mental-toughness-thumbnail.jpg";
import { toast } from "sonner";

const CoachesCorner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");

  const handleVideoPlay = () => {
    toast.info("Opening video player...", {
      description: "Video will play once media files are uploaded."
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!", {
      description: "Share this episode with your network."
    });
  };

  const handleDownload = () => {
    toast.info("Preparing download...", {
      description: "Episode download will be available once media files are uploaded."
    });
  };

  const handleSubscribe = () => {
    toast.success("Subscribe & Listen clicked!", {
      description: "Redirecting to subscription options."
    });
  };

  const handlePlatform = (platform: string) => {
    toast.success(`Opening ${platform}...`, {
      description: "Redirecting to podcast platform."
    });
  };

  const handleEpisodePlay = (episode: string) => {
    toast.info(`Playing ${episode}...`, {
      description: "Audio player will load once media files are available."
    });
  };

  const handleCommunity = (action: string) => {
    toast.info(`Opening ${action}...`, {
      description: "Community features coming soon!"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <Mic className="w-4 h-4 mr-2" />
              Latest Episode
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Coaches Corner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exclusive insights from Coach Don on building mental toughness, 
              peak performance, and championship mindset.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Trailer/Episode Embed */}
            <Card className="card-gradient overflow-hidden mb-8">
              <div className="relative">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover rounded-t-lg"
                    poster={mentalToughnessThumbnail}
                    controls
                  >
                    <source src="/videos/mental-toughness-welcome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Featured Episode
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">Episode 47</Badge>
                  <Badge variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    28 mins
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    Dec 15, 2024
                  </Badge>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">
                  Mental Toughness: The Champions Edge
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In this powerful episode, Coach Don breaks down the psychological strategies 
                  that separate champions from competitors. Learn the mental training techniques 
                  used by elite athletes to perform under pressure and maintain focus when it matters most.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="btn-hero"
                    onClick={handleVideoPlay}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Full Episode
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Audio Player Component */}
            <Card className="card-glass mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-primary" />
                  Audio Player
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="h-12 w-12"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </Button>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold">Mental Toughness: The Champions Edge</h4>
                      <p className="text-sm text-muted-foreground">Coach Don • Episode 47</p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {currentTime} / 28:42
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  
                  <audio 
                    className="w-full"
                    onTimeUpdate={(e) => {
                      const audio = e.target as HTMLAudioElement;
                      const minutes = Math.floor(audio.currentTime / 60);
                      const seconds = Math.floor(audio.currentTime % 60);
                      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
                    }}
                  >
                    <source src="/audio/meditation-track-1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </CardContent>
            </Card>

            {/* Coach Don's Summary Section */}
            <Card className="card-glass">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">CD</span>
                  </div>
                  <div>
                    <CardTitle>Coach Don's Insights</CardTitle>
                    <p className="text-muted-foreground">Key takeaways from this episode</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">The Champion's Mindset</h4>
                    <p className="text-muted-foreground">
                      "True champions don't just train their bodies—they master their minds. 
                      Mental toughness isn't about being emotionless; it's about channeling 
                      emotions into focused action."
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Pressure Performance</h4>
                    <p className="text-muted-foreground">
                      "The best athletes thrive under pressure because they've trained their 
                      minds to see pressure as privilege. When the stakes are high, that's 
                      when champions rise."
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Daily Practice</h4>
                    <p className="text-muted-foreground">
                      "Mental toughness is built in the small moments—every workout, every 
                      meditation session, every time you choose discipline over comfort. 
                      It's a lifestyle, not a switch you flip on game day."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Gallery Section */}
            <VideoGallery />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Subscribe & Listen CTA */}
            <Card className="card-gradient p-6 mb-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Never Miss an Episode</h3>
                <p className="text-muted-foreground text-sm">
                  Get exclusive coaching insights delivered weekly
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full btn-hero"
                  onClick={handleSubscribe}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Subscribe & Listen
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePlatform("Spotify")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Spotify
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePlatform("Apple Podcasts")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Apple
                  </Button>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Join our community</p>
                <div className="flex justify-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCommunity("Chat")}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCommunity("Share")}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Episodes */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-lg">Recent Episodes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Building Unstoppable Confidence", episode: 46, duration: "32 min" },
                    { title: "The Psychology of Winning", episode: 45, duration: "28 min" },
                    { title: "Overcoming Mental Blocks", episode: 44, duration: "35 min" }
                  ].map((episode, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => handleEpisodePlay(episode.title)}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{episode.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          Episode {episode.episode} • {episode.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachesCorner;