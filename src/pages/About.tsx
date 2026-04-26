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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero" onClick={openCalendly}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Discovery Call
                </Button>
                <Button variant="outline" className="btn-glass" onClick={goToContact}>
                  <Users className="w-5 h-5 mr-2" />
                  Join the Community
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/coach-don-ashley.jpg"
                  alt="Coach Don Ashley"
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
              <Button className="btn-hero" onClick={goToContact}>
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
