import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Code2, Palette, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Meditation Analytics Platform",
      description: "Full-stack dashboard for tracking meditation progress with real-time biometric integration and AI-powered insights.",
      image: "/images/project-showcase.jpg",
      tags: ["React", "Node.js", "MongoDB", "WebGL"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full Stack",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Binaural Beat Generator",
      description: "Advanced audio synthesis tool for creating therapeutic soundscapes with customizable frequency patterns.",
      image: "/images/project-showcase.jpg",
      tags: ["TypeScript", "Web Audio API", "React", "PWA"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Audio Tech",
      icon: <Play className="w-5 h-5" />
    },
    {
      title: "Mindfulness Mobile App",
      description: "Cross-platform meditation companion with guided sessions, progress tracking, and community features.",
      image: "/images/project-showcase.jpg",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Sacred Geometry Visualizer",
      description: "Interactive web experience exploring mathematical patterns in nature with immersive 3D animations.",
      image: "/images/project-showcase.jpg",
      tags: ["Three.js", "GLSL", "React", "Canvas API"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Creative Tech",
      icon: <Palette className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="section-offset py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions blending technology with consciousness, 
            creating tools for personal transformation and collective growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="btn-hero">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="btn-glass">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-glass">
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;