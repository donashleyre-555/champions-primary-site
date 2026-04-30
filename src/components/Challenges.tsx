import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Trophy, Target, X } from "lucide-react";

const Challenges = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const challenges = [
    {
      title: "7-Day Focus Challenge",
      duration: "Free • Instant Access",
      description: "Kickstart your transformation with our most popular entry program. No credit card required.",
      features: ["90-Day Discipline Tracker", "Visualization Mastery", "Habit Scoreboard"],
      thumbnail: "/images/course-intro-video.jpg",
      difficulty: "Free",
      participants: "2,847",
      color: "from-yellow-500/20 to-amber-600/20",
      borderColor: "border-yellow-500/30",
      cta: "START FREE NOW",
    },
    {
      title: "Full Membership",
      duration: "$200/month",
      description: "The complete Champions Lifestyle system with live coaching and full community access.",
      features: ["Weekly Live Coaching", "Complete Workbook + SJH Drills", "Private Community"],
      thumbnail: "/images/course-advanced-video.jpg",
      difficulty: "Members",
      participants: "1,204",
      color: "from-purple-500/20 to-indigo-600/20",
      borderColor: "border-purple-500/30",
      cta: "JOIN THE PROGRAM",
    },
    {
      title: "SJH Stallions Program",
      duration: "For Athletes & Families",
      description: "Football-specific mental training built for student-athletes and their support systems.",
      features: ["Football-Specific Mental Training", "Private Locker Access", "Team & Parent Tools"],
      thumbnail: "/images/course-stadium-video.jpg",
      difficulty: "Athletes",
      participants: "387",
      color: "from-emerald-500/20 to-teal-600/20",
      borderColor: "border-emerald-500/30",
      cta: "ENROLL MY ATHLETE",
    },
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/champions-logo-main.png" 
              alt="Champions Lifestyle" 
              className="h-16 w-auto"
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Transform Your Life</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of champions who have transformed their mindset, performance, and reality through our proven challenge programs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30">
              <Trophy className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
              <Users className="w-4 h-4 mr-2" />
              4,438+ Active Members
            </Badge>
            <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
              <Target className="w-4 h-4 mr-2" />
              Science-Based
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card key={index} className={`card-glass ${challenge.borderColor} overflow-hidden group hover:scale-105 transition-all duration-300`}>
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url("${challenge.thumbnail}")` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${challenge.color} group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="btn-hero rounded-full w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-black/80 text-yellow-400 border-yellow-500/30">
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-black/80 text-primary border-primary/30">
                      <Clock className="w-3 h-3 mr-1" />
                      {challenge.duration}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground mb-6">{challenge.description}</p>
                
                <div className="space-y-3 mb-6">
                  {challenge.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-yellow-500" />
                    {challenge.participants} participants
                  </div>
                </div>
                
                <Button
                  className="w-full btn-hero text-lg py-3"
                  onClick={() => window.open("https://championslifestyle.com/courses", "_blank", "noopener,noreferrer")}
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  {challenge.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-glass border-yellow-500/30 p-8 max-w-4xl mx-auto bg-gradient-to-r from-yellow-500/10 to-amber-600/10">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/champions-logo-main.png" 
                alt="Champions Lifestyle" 
                className="h-12 w-auto opacity-80"
              />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Become a Champion?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose your challenge level and begin your transformation today. Every champion started with a single decision to change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-hero text-lg px-8 py-4"
                onClick={() => window.open("https://championslifestyle.com/courses", "_blank", "noopener,noreferrer")}
              >
                <Play className="w-5 h-5 mr-2" />
                Start 30-Day Challenge
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-black/80 border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 py-4"
                onClick={() => setPreviewOpen(true)}
              >
                Watch Preview
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {previewOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-black rounded-xl overflow-hidden border border-primary/30">
            <Button
              onClick={() => setPreviewOpen(false)}
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 z-10"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </Button>
            <iframe
              src="https://brand-master-toolkit.lovable.app"
              title="Brand Master Toolkit Preview"
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Challenges;