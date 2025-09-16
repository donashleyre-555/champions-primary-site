import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code2, 
  Heart, 
  Target, 
  Award, 
  BookOpen, 
  Users, 
  Zap,
  Download,
  Calendar
} from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const skills = [
    { name: "Meditation & Mindfulness", level: 95, category: "Consciousness" },
    { name: "Full-Stack Development", level: 90, category: "Technology" },
    { name: "React & TypeScript", level: 95, category: "Frontend" },
    { name: "Node.js & Python", level: 85, category: "Backend" },
    { name: "UX/UI Design", level: 80, category: "Design" },
    { name: "Neurofeedback Systems", level: 75, category: "BioTech" }
  ];

  const achievements = [
    {
      title: "Certified Meditation Instructor",
      organization: "International Mindfulness Institute",
      year: "2020",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Full-Stack Developer Certification",
      organization: "Advanced Programming Academy",
      year: "2019",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Bentov Protocol Practitioner",
      organization: "Gateway Research Institute",
      year: "2021",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Biofeedback Technology Specialist",
      organization: "Neurotechnology Center",
      year: "2022",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const values = [
    {
      title: "Scientific Approach",
      description: "Combining ancient wisdom with modern research for measurable results",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Authentic Growth",
      description: "Fostering genuine transformation through consistent practice",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Community Impact",
      description: "Building tools and experiences that elevate collective consciousness",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new frontiers in consciousness and technology",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a consciousness researcher and full-stack developer passionate about 
                bridging the gap between ancient wisdom and modern technology to help 
                people unlock their full potential.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary">Meditation Instructor</Badge>
                <Badge variant="outline">Full-Stack Developer</Badge>
                <Badge variant="secondary">Consciousness Researcher</Badge>
                <Badge variant="outline">BioTech Enthusiast</Badge>
              </div>
              <div className="flex gap-4">
                <Button className="btn-hero">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="btn-glass">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="card-glass p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
            Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient p-6 text-center hover:shadow-xl transition-all duration-300">
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

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-glass p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-2">{achievement.organization}</p>
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Card className="card-gradient max-w-3xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to combine consciousness and technology for meaningful impact? 
              Let's explore how we can collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Start a Conversation
              </Button>
              <Button variant="outline" className="btn-glass">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;