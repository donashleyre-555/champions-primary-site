import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, CheckCircle2, ClipboardList } from "lucide-react";

type TableSection = {
  kind: "table";
  title: string;
  columns: string[];
  rows: string[][];
};

type ListSection = {
  kind: "list";
  title: string;
  items: string[];
};

type Section = TableSection | ListSection;

type WeeklyPlan = {
  id: string;
  tab: string;
  delivered: string;
  title: string;
  confirmed: string;
  assumption: string;
  sections: Section[];
};

const PLANS: WeeklyPlan[] = [
  {
    id: "jul-20",
    tab: "Jul 20–24",
    delivered: "Mon, Jul 20 · 8:12 AM PT",
    title: "Stallions Weekly Coaching Plan: July 20–24",
    confirmed:
      "Coach Don is JV Head Coach and Varsity Running Backs Coach; Rob Frith is Head Coach.",
    assumption:
      "This is a preseason-development week. No opponent, practice schedule, roster, injuries, or depth chart updates were provided.",
    sections: [
      {
        kind: "table",
        title: "Top 3 Priorities",
        columns: ["Priority", "Next step", "Responsible", "Target"],
        rows: [
          ["Establish JV standards", "Set expectations for attendance, effort, communication, and accountability", "Coach Don", "Monday"],
          ["Build dependable varsity RB play", "Evaluate technique, assignments, protection, ball security, and conditioning", "Coach Don", "Monday–Thursday"],
          ["Identify development needs", "Record one strength and one correction for every JV leader and varsity RB", "Coach Don / position staff", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "JV Leadership & Operations",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Weekly team direction", "Give players three measurable goals for the week", "Coach Don", "Monday"],
          ["Practice organization", "Confirm periods, staff responsibilities, equipment, and transitions", "Coach Don / JV staff", "Before each practice"],
          ["Leadership development", "Identify players consistently modeling effort, communication, and composure", "Coach Don", "Wednesday"],
          ["Accountability", "Address attendance, lateness, academics, and behavior privately and consistently", "Coach Don / applicable staff", "Daily"],
          ["Staff review", "Conduct a brief practice-quality and personnel review", "Coach Don / JV staff", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Varsity Running Backs",
        columns: ["Area", "Next step", "Responsible", "Target"],
        rows: [
          ["Technique", "Grade stance, first two steps, pad level, cuts, finish, and blocking leverage", "Coach Don", "Monday–Wednesday"],
          ["Assignments", "Test formation recognition, run tracks, motion, checks, and play responsibility", "Coach Don", "Tuesday"],
          ["Protection", "Review identification, scan rules, strike timing, leverage, and finish", "Coach Don", "Wednesday"],
          ["Ball security", "Use pressure, traffic, exchange, and finish drills; correct every loose carry", "Coach Don / RBs", "Daily"],
          ["Rotation", "Draft an evidence-based rotation from execution, reliability, conditioning, and special-teams value", "Coach Don; confirm with Rob", "Thursday"],
          ["Film", "Give each back one correction and one repeatable strength", "Coach Don", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Individual Player Development",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Player goals", "Assign one technical and one behavioral goal per priority player", "Coach Don", "Tuesday"],
          ["Short coaching conversations", "Deliver direct 60-second feedback after practice", "Coach Don", "Tuesday–Thursday"],
          ["Recognition", "Publicly recognize improvement; correct mistakes privately when possible", "Coach Don / staff", "Daily"],
          ["Weekly grading", "Use simple grades: assignment, technique, effort, finish, and accountability", "Coach Don", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Champions Lifestyle Mental Focus",
        columns: ["Day", "Standard", "Application", "Responsible"],
        rows: [
          ["Monday", "Teamwork", "\u201cMy responsibility affects all 11.\u201d", "Coach Don"],
          ["Tuesday", "Focus", "Win the next assignment, rep, and correction", "Coach Don"],
          ["Wednesday", "Work Hard", "Maintain technique when tired", "Coach Don"],
          ["Thursday", "Get Better", "Correct one repeated mistake and verify improvement", "Coach Don"],
          ["Friday", "It's a Choice", "Review wins, ownership, and next-week commitments", "Coach Don / players"],
        ],
      },
      {
        kind: "table",
        title: "Parent, Staff & Administration Follow-ups",
        columns: ["Follow-up", "Next step", "Responsible", "Target"],
        rows: [
          ["Coaching staff", "Confirm expectations, personnel concerns, and role boundaries", "Coach Don / Rob Frith", "Monday"],
          ["Parents", "Communicate only confirmed logistics, standards, and approved team information", "Coach Don / designated staff", "As needed"],
          ["Administration", "Verify unresolved clearance, transportation, facility, equipment, or eligibility items", "Coach Don / school staff", "Wednesday"],
          ["Documentation", "Record material parent, medical, discipline, and eligibility communications", "Coach Don", "Same day"],
        ],
      },
      {
        kind: "list",
        title: "Decisions Requiring Confirmation",
        items: [
          "Rob Frith: varsity RB evaluation criteria and rotation authority.",
          "Coach Don and Rob: whether any JV player should receive varsity evaluation.",
          "Coach Don: JV captains or temporary leadership-group process.",
          "Coach Don and staff: attendance and discipline escalation procedure.",
          "Coach Don and Rob: approved parent-communication channel and spokesperson.",
          "Athletic staff: unresolved eligibility, clearance, injury, equipment, or scheduling restrictions.",
        ],
      },
      {
        kind: "list",
        title: "Friday Success Checklist",
        items: [
          "JV players know the standards and weekly objectives.",
          "Every varsity RB received specific feedback.",
          "Protection and ball-security errors were recorded and corrected.",
          "A preliminary RB rotation is supported by practice evidence.",
          "Parent and administrative issues are documented.",
          "Unresolved decisions are assigned to Coach Don, Rob, or school staff.",
          "Players leave knowing exactly how to get better next week.",
        ],
      },
    ],
  },
  {
    id: "jul-27",
    tab: "Jul 27–31",
    delivered: "Mon, Jul 27 · 8:32 AM PT",
    title: "Stallions Weekly Coaching Plan: July 27–31",
    confirmed:
      "Coach Don is JV Head Coach/JV OC and Varsity Running Backs Coach; Rob Frith is Head Coach.",
    assumption:
      "This remains a preseason installation and evaluation week. No confirmed opponent, schedule, injuries, roster movement, or depth-chart changes were provided.",
    sections: [
      {
        kind: "table",
        title: "Top 3 Priorities",
        columns: ["Priority", "Next step", "Responsible", "Target"],
        rows: [
          ["Move JV from learning to execution", "Define the week's required formations, plays, situations, and communication standards", "Coach Don / JV staff", "Monday"],
          ["Establish RB readiness levels", "Grade each varsity back on assignment, protection, ball security, technique, and conditioning", "Coach Don", "Thursday"],
          ["Develop player-led accountability", "Assign selected JV leaders responsibility for tempo, communication, and practice finish", "Coach Don", "Tuesday–Friday"],
        ],
      },
      {
        kind: "table",
        title: "JV Leadership & Team Operations",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Offensive installation", "Identify \u201cmust-own\u201d plays and eliminate unnecessary volume", "Coach Don / JV offense", "Monday"],
          ["Practice tempo", "Set time limits for huddle, alignment, substitution, and transitions", "JV staff / players", "Daily"],
          ["Situational football", "Rehearse backed-up, red-zone, short-yardage, two-minute, and four-minute situations", "Coach Don / coordinators", "Tuesday–Thursday"],
          ["Leadership council", "Meet briefly with emerging leaders about effort, communication, and teammate accountability", "Coach Don", "Wednesday"],
          ["Personnel evaluation", "Separate players into ready now, developing, and needs intervention", "Coach Don / JV staff", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Varsity Running Backs",
        columns: ["Area", "Next step", "Responsible", "Target"],
        rows: [
          ["Technique", "Grade stance, mesh, track, pad level, cut discipline, finish, and blocking leverage", "Coach Don", "Monday–Wednesday"],
          ["Assignments", "Conduct rapid formation, motion, run-track, route, and adjustment checks", "Coach Don / RBs", "Tuesday"],
          ["Protections", "Test identification and scan responsibility before adding physical execution", "Coach Don", "Wednesday"],
          ["Ball security", "Use daily five-point pressure, exchange, traffic, and finish drills", "Coach Don / RBs", "Daily"],
          ["Rotation", "Rank backs by trust: assignment first, ball security second, production third", "Coach Don; review with Rob", "Thursday"],
          ["Situational roles", "Identify preliminary short-yardage, third-down, two-minute, and four-minute options", "Coach Don / Rob", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Individual Player Development",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Correction tracking", "Give each priority player one repeated error to eliminate", "Coach Don / position coaches", "Monday"],
          ["Competitive response", "Watch how players respond after mistakes, fatigue, and reduced repetitions", "Coaching staff", "Daily"],
          ["Development reps", "Reserve targeted repetitions for players close to becoming dependable contributors", "Position coaches", "Wednesday–Thursday"],
          ["Weekly evidence", "Record one measurable improvement and one next-week priority per evaluated player", "Coach Don / staff", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Champions Lifestyle Mental Focus",
        columns: ["Day", "Standard", "Message and application", "Responsible"],
        rows: [
          ["Monday", "Teamwork", "\u201cDo your job so all 11 can succeed.\u201d", "Coach Don"],
          ["Tuesday", "Focus", "Formation, assignment, alignment\u2014then execute", "Coach Don"],
          ["Wednesday", "Work Hard", "Technique must survive fatigue", "Coach Don"],
          ["Thursday", "Get Better", "Correct the mistake that keeps repeating", "Coach Don"],
          ["Friday", "It's a Choice", "Own the week honestly: no excuses, only evidence", "Coach Don / players"],
        ],
      },
      {
        kind: "table",
        title: "Parent, Staff & Administration Follow-ups",
        columns: ["Follow-up", "Next step", "Responsible", "Target"],
        rows: [
          ["JV staff", "Confirm installation priorities, personnel concerns, and coaching responsibilities", "Coach Don / JV staff", "Monday"],
          ["Varsity alignment", "Review RB development, rotation, and role questions with Rob", "Coach Don / Rob Frith", "Thursday"],
          ["Parents", "Send only approved logistical or team-standard information; document significant exchanges", "Designated team contact", "As needed"],
          ["Administration", "Resolve outstanding eligibility, clearance, equipment, facility, or transportation items", "Coach Don / athletic staff", "Wednesday"],
          ["Player welfare", "Route medical or injury concerns to qualified athletic personnel immediately", "Coaches / athletic trainer", "Same day"],
        ],
      },
      {
        kind: "list",
        title: "Unresolved Decisions",
        items: [
          "Coach Don: Which JV plays and situations must be game-ready before expanding the install?",
          "Coach Don and Rob: What earns a varsity RB first-team or situational repetitions?",
          "Coach Don and Rob: Are any JV players ready for varsity evaluation?",
          "JV staff: Who controls substitutions, sideline communication, and personnel tracking?",
          "Coach Don: Will JV leadership remain informal or become a named leadership council?",
          "Athletic staff: Are any clearance, eligibility, equipment, facility, or transportation issues unresolved?",
        ],
      },
      {
        kind: "list",
        title: "Friday Success Checklist",
        items: [
          "JV offense can execute its core package without repeated alignment errors.",
          "Situational responsibilities have been introduced and tested.",
          "Every varsity RB has a current five-category grade.",
          "Ball-security and protection mistakes are trending downward.",
          "Preliminary RB roles are supported by practice evidence.",
          "JV leaders are improving team tempo and communication.",
          "Parent, staff, and administrative follow-ups are documented.",
          "Next week's install is based on mastery\u2014not unnecessary volume.",
        ],
      },
    ],
  },
  {
    id: "aug-03",
    tab: "Aug 3–7",
    delivered: "Mon, Aug 3 · 8:04 AM PT",
    title: "Stallions Weekly Coaching Plan: August 3–7",
    confirmed:
      "Coach Don is JV Head Coach/JV OC and Varsity Running Backs Coach; Rob Frith is Head Coach.",
    assumption:
      "This is a preseason game-readiness week. No opponent, scrimmage, roster, injury, practice-time, or depth-chart updates were provided.",
    sections: [
      {
        kind: "table",
        title: "Top 3 Priorities",
        columns: ["Priority", "Next step", "Responsible", "Target"],
        rows: [
          ["Establish JV game readiness", "Run the core offense with substitutions, down-and-distance and sideline communication", "Coach Don / JV staff", "Thursday"],
          ["Finalize RB trust order", "Separate dependable every-down backs from developmental and situational players", "Coach Don; review with Rob", "Friday"],
          ["Eliminate preventable errors", "Track turnovers, missed assignments, penalties and poor transitions every practice", "Entire staff", "Daily"],
        ],
      },
      {
        kind: "table",
        title: "JV Leadership & Team Operations",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Core offense", "Select the formations, runs, passes and protections that must work under pressure", "Coach Don / JV offense", "Monday"],
          ["Operational rehearsal", "Practice pregame, warm-up, captains, substitutions, halftime and postgame procedures", "Coach Don / JV staff", "Tuesday"],
          ["Situational execution", "Script third down, red zone, backed-up, two-minute and four-minute periods", "Coordinators", "Wednesday–Thursday"],
          ["Sideline control", "Assign personnel tracking, offensive communication and equipment responsibilities", "Coach Don / JV staff", "Wednesday"],
          ["Leadership", "Require player leaders to control huddle focus, transitions and finish", "Coach Don / JV leaders", "Daily"],
        ],
      },
      {
        kind: "table",
        title: "Varsity Running Backs",
        columns: ["Area", "Next step", "Responsible", "Target"],
        rows: [
          ["Technique", "Grade mesh, track, read, decisive cut, pad level and finish during team periods", "Coach Don", "Monday–Thursday"],
          ["Assignments", "Test every back across formations, motions, runs, routes and adjustments", "Coach Don", "Tuesday"],
          ["Protections", "Conduct recognition checks, then grade identification, leverage and finish in team work", "Coach Don", "Wednesday"],
          ["Ball security", "Chart every exchange and carry; immediate correction for exposed or loose footballs", "Coach Don / RBs", "Daily"],
          ["Rotation", "Build a preliminary RB1–RB3 and situational-role order based on trust and evidence", "Coach Don", "Thursday"],
          ["Staff alignment", "Present the rotation, concerns and developmental options to Rob", "Coach Don / Rob Frith", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Individual Player Development",
        columns: ["Action", "Next step", "Responsible", "Target"],
        rows: [
          ["Readiness cards", "Give priority players one technical, one assignment and one behavior target", "Position coaches", "Monday"],
          ["Pressure evaluation", "Grade decision-making after mistakes, during fatigue and in competitive periods", "Coaching staff", "Daily"],
          ["Intervention", "Meet privately with players whose effort, attendance or execution is slipping", "Coach Don / applicable coach", "Wednesday"],
          ["Recognition", "Identify the week's most improved and most dependable players using evidence", "Coach Don / staff", "Friday"],
        ],
      },
      {
        kind: "table",
        title: "Champions Lifestyle Mental Focus",
        columns: ["Day", "Standard", "Application", "Responsible"],
        rows: [
          ["Monday", "Teamwork", "Communicate early; never leave a teammate guessing", "Coach Don"],
          ["Tuesday", "Focus", "Treat every practice situation like live football", "Coach Don"],
          ["Wednesday", "Work Hard", "Finish correctly when the body wants shortcuts", "Coach Don"],
          ["Thursday", "Get Better", "Remove one mistake that could lose a game", "Coach Don"],
          ["Friday", "It's a Choice", "Choose discipline before pressure chooses for you", "Coach Don / players"],
        ],
      },
      {
        kind: "table",
        title: "Parent, Staff & Administration Follow-ups",
        columns: ["Follow-up", "Next step", "Responsible", "Target"],
        rows: [
          ["JV staff", "Confirm game-day responsibilities and communication chain", "Coach Don / JV staff", "Monday"],
          ["Varsity staff", "Resolve RB rotation and situational-role questions", "Coach Don / Rob", "Friday"],
          ["Parents", "Distribute only approved schedule, equipment and policy information", "Designated team contact", "When confirmed"],
          ["Administration", "Verify eligibility, transportation, facilities, equipment and emergency procedures", "Coach Don / athletic staff", "Wednesday"],
          ["Documentation", "Record significant attendance, discipline, medical and parent matters", "Coach Don / applicable staff", "Same day"],
        ],
      },
      {
        kind: "list",
        title: "Unresolved Decisions",
        items: [
          "Coach Don: Which JV plays are truly game-ready?",
          "Coach Don and Rob: What is the varsity RB rotation and who owns each situational role?",
          "Coach Don and Rob: Should any JV players receive varsity evaluation?",
          "JV staff: Who tracks substitutions and personnel on game day?",
          "Coach Don: Who leads the JV huddle, warm-up and sideline?",
          "Athletic staff: Are any clearances, eligibility items, injuries, equipment needs or transportation details unresolved?",
        ],
      },
      {
        kind: "list",
        title: "Friday Success Checklist",
        items: [
          "JV core offense operated without coaching every alignment.",
          "Game-day procedures and staff responsibilities were rehearsed.",
          "Situational periods exposed and corrected operational weaknesses.",
          "Every varsity RB has a current readiness grade.",
          "Preliminary RB rotation is supported by assignment and ball-security evidence.",
          "Preventable errors declined during the week.",
          "Player, parent and administrative concerns are documented.",
          "Next week's priorities are based on film and practice evidence.",
        ],
      },
    ],
  },
];

const COVERAGE = [
  "Top three priorities",
  "JV leadership and operations",
  "Varsity running backs",
  "Individual player development",
  "Champions Lifestyle mental focus",
  "Parent, staff, and administration follow-ups",
  "Unresolved coaching decisions",
  "Friday success checklist",
];

const SectionBlock = ({ section }: { section: Section }) => (
  <div className="mb-10">
    <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
      {section.title}
    </h3>
    {section.kind === "table" ? (
      <div className="overflow-x-auto rounded-lg border border-primary/20">
        <table className="w-full min-w-[640px] text-left text-sm md:text-base">
          <thead className="bg-primary/10">
            <tr>
              {section.columns.map((c) => (
                <th
                  key={c}
                  className="px-4 py-3 font-semibold text-primary uppercase text-xs tracking-wider whitespace-nowrap"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-primary/10 hover:bg-primary/5 transition-colors"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 align-top ${
                      j === 0 ? "font-semibold text-white" : "text-gray-200"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <ul className="space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-200">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const StallionsWeeklyPlan = () => {
  const [activeId, setActiveId] = useState(PLANS[PLANS.length - 1].id);
  const active = PLANS.find((p) => p.id === activeId) ?? PLANS[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-primary/10 via-background to-background border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">
            SJH Stallions · It's a Choice
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-5 leading-tight">
            Stallions Weekly Plan
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
            Delivered every Monday morning around 8:00 AM Pacific. Each brief is
            a coaching operating system for the week — priorities, position
            work, player development, and the standards that hold it all
            together.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/5 text-primary text-sm font-semibold">
            <CalendarClock className="w-4 h-4" />
            Mondays · 8:00 AM Pacific
          </div>
        </div>
      </section>

      {/* What each brief covers */}
      <section className="py-14 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What Each Brief Covers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {COVERAGE.map((c) => (
              <Card
                key={c}
                className="card-glass border-primary/25 px-4 py-3 flex items-center gap-3 bg-gradient-to-br from-yellow-500/5 via-background to-background"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-100 text-sm md:text-base">{c}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-10">
            {PLANS.map((p) => (
              <Button
                key={p.id}
                variant={p.id === activeId ? "default" : "outline"}
                onClick={() => setActiveId(p.id)}
                className={
                  p.id === activeId
                    ? "btn-hero font-bold"
                    : "border-primary/50 text-primary hover:bg-primary hover:text-background font-semibold"
                }
              >
                {p.tab}
              </Button>
            ))}
          </div>

          <Card className="card-glass border-primary/30 p-6 md:p-10 bg-gradient-to-br from-yellow-500/5 via-background to-background">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
              {active.delivered}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {active.title}
            </h2>

            <div className="space-y-3 mb-10">
              <p className="text-gray-200 leading-relaxed">
                <span className="text-primary font-semibold">Confirmed: </span>
                {active.confirmed}
              </p>
              <p className="text-gray-200 leading-relaxed">
                <span className="text-primary font-semibold">Assumption: </span>
                {active.assumption}
              </p>
            </div>

            {active.sections.map((s) => (
              <SectionBlock key={s.title} section={s} />
            ))}

            <div className="border-t border-primary/20 pt-6 mt-2">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                For the next plan, send confirmed practice or scrimmage details,
                opponent, roster changes, injuries, JV installation percentage,
                RB rotation decisions, attendance problems, and parent or
                administrative concerns.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default StallionsWeeklyPlan;
