import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLive } from "@/contexts/LiveContext";

const LiveWebinar = () => {
  const [isLive, setIsLive] = useState(false);
  const [platform, setPlatform] = useState<"youtube" | "zoom" | "meet" | null>(null);
  const { modalOpen, setModalOpen } = useLive();

  useEffect(() => {
    // Simulate live status for demonstration
    // In production, you'd check actual live status from your streaming platform
    const checkLiveStatus = () => {
      // For demo purposes, randomly show live status
      const isCurrentlyLive = Math.random() > 0.7; // 30% chance of being live
      setIsLive(isCurrentlyLive);
      if (isCurrentlyLive) {
        setPlatform("youtube");
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isLive) return null;

  const getEmbedContent = (className: string) => {
    if (platform === "youtube") {
      return (
        <div className={`bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <div className="text-6xl mb-4">🔴</div>
            <h3 className="text-2xl font-bold mb-2">Live Stream Active</h3>
            <p className="text-muted-foreground">Champions Lifestyle Training Session</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <section id="live" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Champions Lifestyle Live Session</h2>
              <span className="text-red-500 font-semibold animate-pulse">🔴 Live Now</span>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden">
              {getEmbedContent("w-full h-full")}
            </div>

            <div className="text-center mt-4">
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                🔴 Fullscreen View
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-full h-full max-w-7xl mx-auto p-4">
            <Button
              onClick={() => setModalOpen(false)}
              variant="destructive"
              size="icon"
              className="absolute top-6 right-6 z-50"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="w-full h-full rounded-xl overflow-hidden">
              {getEmbedContent("w-full h-full")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveWebinar;