import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CheckCircle2, Target, Flame, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const roleTags = [
    "Head Football Coach",
    "Running Backs Coach",
    "Real Estate Agent – Compass Beverly Hills",
    "Champions Lifestyle Founder",
    "Film & TV Producer/Director",
  ];

  const values = [
    {
      title: "Championship Mindset",
      description:
        "Mental toughness, focus, and accountability are the foundation of every champion.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "It's a Choice",
      description:
        "Every outcome in your life is the result of a decision. Champions own their choices.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: "Proof Beats Promises",
      description:
        "Results speak louder than words. We track, measure, and celebrate real progress.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "On & Off the Field",
      description:
        "The same principles that build champions in sport build champions in life.",
      icon: <Flame className="w-6 h-6" />,
    },
  ];

  const goToContact = () => navigate("/#contact");
  const openCalendly = () =>
    window.open("https://calendly.com/championslifestyle", "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                About Coach Don Ashley
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm Coach Don Ashley — JV Head Football Coach and Varsity Running Backs Coach,
                Real Estate Agent at Compass Beverly Hills, and Founder of Champions Lifestyle.
                With 15+ years mentoring student-athletes ages 10–25, I've built a program rooted
                in mindset, leadership, performance, and accountability. My background in film
                and TV production (producer/director/writer) shapes how I communicate and tell
                stories that move people to action. Champions Lifestyle is built on one truth:{" "}
                <span className="text-primary font-semibold">It's a Choice.</span>
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {roleTags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant={i % 2 === 0 ? "secondary" : "outline"}
                    className="text-sm py-1.5 px-3"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-hero" onClick={openCalendly}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Discovery Call
                </Button>
                <Button variant="outline" className="btn-glass" onClick={goToContact}>
                  <Users className="w-5 h-5 mr-2" />
                  Join the Community
                </Button>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Connect With Coach Don</p>
                <div className="flex gap-5">
                  <a
                    href="https://www.instagram.com/championslifestyle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@championsskoolprogram"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.29z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@CoachDon-555"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/coach-don-headshot.jpg"
                  alt="Coach Don Ashley - Champions Lifestyle Founder"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
            Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-gradient p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Card className="card-gradient max-w-3xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of student-athletes and champions who have transformed their
              mindset, performance, and reality. It's a Choice — make yours today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" onClick={openCalendly}>
                Schedule a Discovery Call
              </Button>
              <Button variant="outline" className="btn-glass" onClick={goToContact}>
                Join the Community
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
