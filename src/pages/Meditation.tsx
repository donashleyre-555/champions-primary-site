import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, ScanLine, Eye, Brain, Play, Pause, RotateCcw, Flame, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PRESETS = [5, 10, 15, 20];
const STREAK_KEY = "cl_meditation_streak";
const LAST_KEY = "cl_meditation_last";

const Meditation = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(10 * 60);
  const [remaining, setRemaining] = useState(10 * 60);
  const [running, setRunning] = useState(false);
  const [streak, setStreak] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setStreak(parseInt(localStorage.getItem(STREAK_KEY) || "0", 10));
  }, []);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(intervalRef.current!);
          setRunning(false);
          completeSession();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running]);

  const completeSession = () => {
    const today = new Date().toDateString();
    const last = localStorage.getItem(LAST_KEY);
    let next = streak;
    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      next = last === yesterday ? streak + 1 : 1;
      localStorage.setItem(STREAK_KEY, String(next));
      localStorage.setItem(LAST_KEY, today);
      setStreak(next);
    }
    toast.success("Session complete!", {
      description: `Daily streak: ${next} day${next === 1 ? "" : "s"}. It's a Choice.`,
    });
  };

  const pickPreset = (mins: number) => {
    setDuration(mins * 60);
    setRemaining(mins * 60);
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setRemaining(duration);
  };

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const progress = ((duration - remaining) / duration) * 100;

  const practices = [
    {
      title: "Breathwork",
      icon: <Wind className="w-7 h-7" />,
      desc: "Box breathing and physiological sighs. Choose calm under pressure — one breath at a time.",
    },
    {
      title: "Body Scan",
      icon: <ScanLine className="w-7 h-7" />,
      desc: "Travel from crown to heel, releasing tension. Choose awareness over autopilot.",
    },
    {
      title: "Visualization",
      icon: <Eye className="w-7 h-7" />,
      desc: "See the play before you make it. Champions rehearse the win in their mind first.",
    },
    {
      title: "Mindfulness",
      icon: <Brain className="w-7 h-7" />,
      desc: "Anchor in the present. Choose focus — small daily wins compound into championships.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">It's a Choice</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Champions Meditation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calm your body. Focus your mind. Win small, daily.
          </p>
        </div>
      </section>

      {/* Timer */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="card-glass max-w-2xl mx-auto p-8 md:p-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {PRESETS.map((m) => (
                <Button
                  key={m}
                  variant={duration === m * 60 ? "default" : "outline"}
                  onClick={() => pickPreset(m)}
                  className={duration === m * 60 ? "btn-hero" : ""}
                >
                  {m} min
                </Button>
              ))}
            </div>

            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeDasharray={`${(progress * 283) / 100} 283`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-gradient tabular-nums">
                  {mm}:{ss}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Button size="lg" className="btn-hero" onClick={() => setRunning((r) => !r)}>
                {running ? <><Pause className="w-5 h-5 mr-2" />Pause</> : <><Play className="w-5 h-5 mr-2" />Start</>}
              </Button>
              <Button size="lg" variant="outline" onClick={reset}>
                <RotateCcw className="w-5 h-5 mr-2" />Reset
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Four Daily Practices</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {practices.map((p, i) => (
              <Card key={i} className="card-gradient p-6 text-center hover:-translate-y-1 transition-all">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 text-primary">{p.icon}</div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Streak */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-glass max-w-3xl mx-auto p-10 text-center">
            <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gradient mb-2">Daily Streak</h2>
            <p className="text-6xl font-bold text-primary mb-2 tabular-nums">{streak}</p>
            <p className="text-muted-foreground">
              {streak === 0
                ? "Complete your first session today. It's a Choice."
                : `${streak} day${streak === 1 ? "" : "s"} of choosing yourself. Keep the chain alive.`}
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Train Deeper with Binaural Audio</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlock the full Champions Audio Hub — binaural beats, guided sessions, and the Bentov-Gateway protocol.
          </p>
          <Button size="lg" className="btn-hero text-lg px-8 py-6 h-auto" onClick={() => navigate("/audio-hub")}>
            <Headphones className="w-5 h-5 mr-2" />Open Audio Hub
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Meditation;
