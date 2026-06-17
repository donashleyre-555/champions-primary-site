import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Flame,
  Shield,
  Handshake,
  Users,
  Dumbbell,
  Trophy,
  CalendarCheck,
  ClipboardCheck,
  Film,
} from "lucide-react";

const WORKBOOK_URL = "https://manus.im/app/kTrk8yaZRxxrB5xi2VOO6L";

const openWorkbook = () =>
  window.open(WORKBOOK_URL, "_blank", "noopener,noreferrer");

type CultureCard = {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  summary: string;
  cta: string;
};

const FOUNDATION: CultureCard[] = [
  {
    number: "01",
    icon: Flame,
    title: "The Champions Manifesto",
    summary:
      "The world doesn't need more content. It needs more champions. Champions are not born — they are built through grit, accountability, and the choices made when no one is watching.",
    cta: "Start With the Manifesto",
  },
  {
    number: "02",
    icon: Shield,
    title: "The Champions Leadership Code",
    summary:
      "Great teams are built by players who live by a code. A Champion Leader leads by example, shows up early, listens to coaching, supports teammates, accepts responsibility, and raises the standard.",
    cta: "Build My Leadership Code",
  },
  {
    number: "03",
    icon: Handshake,
    title: "The Stallions Accountability Contract",
    summary:
      "Championship teams hold each other accountable. Accountability means we care enough to demand the best from each other — on the field, in the classroom, and in life.",
    cta: "Create My Accountability Contract",
  },
  {
    number: "04",
    icon: Users,
    title: "The Brotherhood Standard",
    summary:
      "A football team is more than a roster. It is a brotherhood. Brotherhood means trusting, supporting, protecting, and working for something bigger than yourself.",
    cta: "Set the Brotherhood Standard",
  },
];

const TRAINING: CultureCard[] = [
  {
    number: "05",
    icon: Dumbbell,
    title: "Practice Mental Training System",
    summary:
      "Weeks 1–8. Players learn to treat practice like the game first. Focus areas: practice preparation, mental discipline, habit building, leadership, focus, ownership, and brotherhood.",
    cta: "Train My Practice Focus",
  },
  {
    number: "06",
    icon: Trophy,
    title: "Game Preparation Mindset",
    summary:
      "Weeks 9–12. From practice mastery into game preparation: Game Prep Fundamentals, Film Study & Opponent Prep, Pressure & Mental Toughness, and Championship Mindset & Legacy.",
    cta: "Build My Game-Day Mindset",
  },
];

const DISCIPLINE: CultureCard[] = [
  {
    number: "07",
    icon: CalendarCheck,
    title: "90-Day Discipline Tracker",
    summary:
      "Success is not built in a day. It is built through daily choices. Track Teamwork, Focus, Work Hard, and Get Better with a daily Champion Score.",
    cta: "Track My Daily Choices",
  },
  {
    number: "08",
    icon: ClipboardCheck,
    title: "Champions Habit Scoreboard",
    summary:
      "Champions do not rise to the occasion — they rise to the level of their habits. Score weekly habits: sleep, hydration, teamwork, focus, work hard, get better, recovery, and film study.",
    cta: "Score My Habits",
  },
  {
    number: "09",
    icon: Film,
    title: "Division-1 Game Film Study Worksheet",
    summary:
      "Elite athletes don't just watch film — they study it. What I did well, what to improve, position checklist, three key plays, next-practice focus. Coach Don's rule: \"Don't watch film to prove you're right. Watch film to get better.\"",
    cta: "Study Film Like a Champion",
  },
];

const CultureCard = ({ card }: { card: CultureCard }) => {
  const Icon = card.icon;
  return (
    <Card className="card-glass border-primary/30 p-6 md:p-7 flex flex-col bg-gradient-to-br from-yellow-500/5 via-background to-background hover:border-primary/60 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center border border-primary/40">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-3xl font-bold text-primary/40 tracking-tight group-hover:text-primary/70 transition-colors">
          {card.number}
        </span>
      </div>
      <h4 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
        {card.title}
      </h4>
      <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base flex-grow">
        {card.summary}
      </p>
      <Button
        variant="outline"
        onClick={openWorkbook}
        className="border-primary/60 text-primary hover:bg-primary hover:text-background font-semibold tracking-wide w-full"
      >
        {card.cta}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Card>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px bg-primary/50 flex-grow max-w-[60px]" />
    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-bold">
      {children}
    </p>
    <div className="h-px bg-primary/50 flex-grow" />
  </div>
);

const CultureCore = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background border-t border-primary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">
            Champions Lifestyle · It's a Choice
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-5 leading-tight">
            The Culture Core of the Champions Lifestyle Workbook
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
            This is where the "It's a Choice" program becomes a standard players
            can live by. The workbook begins with the Manifesto, then builds
            leadership, accountability, brotherhood, practice focus, game
            preparation, discipline tracking, habit scoring, and film study.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Teamwork", "Focus", "Work Hard", "Get Better"].map((p) => (
              <span
                key={p}
                className="px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-semibold tracking-wide bg-primary/5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Culture Foundation */}
        <div className="max-w-6xl mx-auto mb-14">
          <SectionLabel>Culture Foundation</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUNDATION.map((c) => (
              <CultureCard key={c.number} card={c} />
            ))}
          </div>
        </div>

        {/* Training System */}
        <div className="max-w-6xl mx-auto mb-14">
          <SectionLabel>Training System · 12 Weeks</SectionLabel>
          <div className="grid md:grid-cols-2 gap-5">
            {TRAINING.map((c) => (
              <CultureCard key={c.number} card={c} />
            ))}
          </div>
        </div>

        {/* Discipline Tools */}
        <div className="max-w-6xl mx-auto mb-14">
          <SectionLabel>Discipline Tools</SectionLabel>
          <div className="grid md:grid-cols-3 gap-5">
            {DISCIPLINE.map((c) => (
              <CultureCard key={c.number} card={c} />
            ))}
          </div>
        </div>

        {/* Expandable detail accordion (keeps page light) */}
        <div className="max-w-4xl mx-auto mb-14">
          <SectionLabel>What's Inside Each Chapter</SectionLabel>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="manifesto" className="border-primary/20">
              <AccordionTrigger className="text-white hover:text-primary text-left font-semibold">
                The Champions Manifesto — Why We Exist
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 leading-relaxed">
                A signed declaration of the standard. Players commit to grit,
                accountability, and choosing the harder right over the easier
                wrong — every single day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="leadership" className="border-primary/20">
              <AccordionTrigger className="text-white hover:text-primary text-left font-semibold">
                Leadership Code & Accountability Contract
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 leading-relaxed">
                A written code of conduct and a teammate-to-teammate contract.
                This is how a locker room polices itself without a coach in the
                room.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="practice" className="border-primary/20">
              <AccordionTrigger className="text-white hover:text-primary text-left font-semibold">
                Weeks 1–8 · Practice Mental Training
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 leading-relaxed">
                Eight weeks of mental reps: preparation, discipline, habit
                building, leadership, focus, ownership, and brotherhood. Treat
                practice like the game — first.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="game" className="border-primary/20">
              <AccordionTrigger className="text-white hover:text-primary text-left font-semibold">
                Weeks 9–12 · Game Preparation Mindset
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 leading-relaxed">
                Game Prep Fundamentals → Film Study & Opponent Prep → Pressure,
                Adversity & Mental Toughness → Championship Mindset & Legacy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tracker" className="border-primary/20">
              <AccordionTrigger className="text-white hover:text-primary text-left font-semibold">
                90-Day Tracker, Habit Scoreboard & Film Worksheet
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 leading-relaxed">
                The daily and weekly tools that turn the manifesto into measured
                behavior. Score your Champion Score. Score your habits. Study
                film like a D-1 athlete.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Closing CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white font-semibold mb-2">
            Success is always a choice.
          </p>
          <p className="text-gray-300 mb-6">
            Bring every chapter into your personal workbook and start living the
            standard.
          </p>
          <Button
            size="lg"
            onClick={openWorkbook}
            className="btn-hero text-base md:text-lg px-8 py-6 h-auto font-bold tracking-wide"
          >
            CREATE MY PERSONALIZED WORKBOOK
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CultureCore;
