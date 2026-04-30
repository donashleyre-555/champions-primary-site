import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";

const PersonalLocker = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <Card className="card-glass border-primary/30 p-10 md:p-14 max-w-5xl mx-auto bg-gradient-to-br from-yellow-500/10 via-amber-600/5 to-background text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Your Personal Locker Awaits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Full workbook, advanced trackers, SJH drills, visualization library, and more — available only to members.
          </p>
          <Button
            size="lg"
            className="btn-hero text-base md:text-lg px-8 md:px-10 py-6 h-auto font-bold tracking-wide"
            onClick={() =>
              window.open("https://champions-edge-platform.lovable.app", "_blank", "noopener,noreferrer")
            }
          >
            UNLOCK MY LOCKER
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default PersonalLocker;
