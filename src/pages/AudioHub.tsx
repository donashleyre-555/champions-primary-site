import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import AudioHubPlayer from "@/components/AudioHubPlayer";

const AudioHub = () => {
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false); // This will be connected to Supabase
  const [isPaidMember] = useState(false); // This will check Stripe subscription

  // For now, show the demo - in production this would redirect to login/pricing
  if (!isAuthenticated) {
    // return <AuthRequired />;
  }
  
  if (!isPaidMember) {
    // return <PricingRequired />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-primary"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">
                Champions Audio Hub
              </h1>
              <p className="text-muted-foreground">
                Premium binaural beats and guided meditation tracks
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="card-gradient p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Members Only Content
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Access premium audio tracks designed for optimal focus, relaxation, and cognitive enhancement.
              </p>
              <AudioHubPlayer />
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="card-glass p-4">
                <h3 className="font-semibold text-primary mb-2">🎧 Usage Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use headphones for binaural beats</li>
                  <li>• Keep volume at 20-40%</li>
                  <li>• Find a quiet environment</li>
                  <li>• Set session timer for best results</li>
                </ul>
              </Card>

              <Card className="card-glass p-4">
                <h3 className="font-semibold text-primary mb-2">⚡ Track Benefits</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Alpha waves: Enhanced focus</li>
                  <li>• Gamma waves: Cognitive boost</li>
                  <li>• Theta-Delta: Deep relaxation</li>
                  <li>• Resonant breath: Calm centering</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioHub;