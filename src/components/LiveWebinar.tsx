import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLive } from "@/contexts/LiveContext";

const LiveWebinar = () => {
  const { modalOpen, closeLiveModal } = useLive();

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        <Button
          onClick={closeLiveModal}
          variant="destructive"
          size="icon"
          className="absolute top-6 right-6 z-50"
          aria-label="Close live session"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-6xl mb-4">🔴</div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">
              Champions Lifestyle Live Session
            </h3>
            <p className="text-muted-foreground">
              Live stream will appear here when a session is broadcasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveWebinar;
