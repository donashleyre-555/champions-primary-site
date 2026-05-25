import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, BookOpen } from "lucide-react";

const PILLARS = ["Teamwork", "Focus", "Work Hard", "Get Better"];

const PersonalLocker = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            One World. One Standard.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            Build Your Champions Lifestyle Operating System
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-semibold tracking-wide bg-primary/5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Personalized Workbook Card */}
          <Card className="card-glass border-primary/30 p-8 md:p-10 bg-gradient-to-br from-yellow-500/10 via-amber-600/5 to-background flex flex-col">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mb-5">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Personalized Champions Lifestyle Workbook
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              Build your personal Champions Lifestyle plan around Teamwork, Focus, Work Hard, and Get Better.
              Turn the "It's a Choice" mindset into a daily operating system.
            </p>
            <Button
              size="lg"
              className="btn-hero text-base md:text-lg px-6 py-6 h-auto font-bold tracking-wide w-full"
              onClick={() =>
                window.open("https://manus.im/app/kTrk8yaZRxxrB5xi2VOO6L", "_blank", "noopener,noreferrer")
              }
            >
              CREATE MY PERSONALIZED WORKBOOK
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>

          {/* Personal Locker Card */}
          <Card className="card-glass border-primary/30 p-8 md:p-10 bg-gradient-to-br from-yellow-500/10 via-amber-600/5 to-background flex flex-col">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 mb-5">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Your Personal Locker Awaits
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              Full workbook, advanced trackers, SJH drills, visualization library, and the live Champions community —
              available only to members.
            </p>
            <Button
              size="lg"
              className="btn-hero text-base md:text-lg px-6 py-6 h-auto font-bold tracking-wide w-full"
              onClick={() =>
                window.open("https://champions-edge-platform.lovable.app", "_blank", "noopener,noreferrer")
              }
            >
              UNLOCK MY LOCKER
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalLocker;
