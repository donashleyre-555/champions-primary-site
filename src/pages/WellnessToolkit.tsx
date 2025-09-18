import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, Activity, Pill, Heart, Smartphone, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import assets
import wellnessToolkitCover from '@/assets/champions-wellness-toolkit-cover.jpg';
import muscleTrackerLayout from '@/assets/muscle-tracker-layout.jpg';
import mobileTrackerView from '@/assets/mobile-tracker-view.jpg';
import calendarPosterLayout from '@/assets/calendar-poster-layout.jpg';
import supplementChecklist from '@/assets/supplement-checklist.jpg';
import lpaRiskGuide from '@/assets/lpa-risk-guide.jpg';

const WellnessToolkit = () => {
  const { toast } = useToast();

  const handleDownload = (toolName: string) => {
    toast({
      title: "Download Started",
      description: `${toolName} is being downloaded.`,
    });
  };

  const tools = [
    {
      id: 'muscle-tracker',
      title: '30-Day Muscle Tracker',
      description: 'Form-fillable muscle tracking sheets for comprehensive progress monitoring',
      image: muscleTrackerLayout,
      icon: Activity,
      category: 'Tracking',
      features: ['30-day tracking', 'Form-fillable PDF', 'Progress visualization', 'Muscle group focus']
    },
    {
      id: 'mobile-tracker',
      title: 'Mobile-Optimized Tracker',
      description: 'Smartphone-friendly tracking interface for on-the-go progress monitoring',
      image: mobileTrackerView,
      icon: Smartphone,
      category: 'Mobile',
      features: ['Mobile optimized', 'Quick entry', 'Daily tracking', 'Progress charts']
    },
    {
      id: 'calendar-poster',
      title: 'Calendar-Style Poster',
      description: 'Visual calendar layout for tracking monthly progress and goals',
      image: calendarPosterLayout,
      icon: Calendar,
      category: 'Planning',
      features: ['Monthly view', 'Goal tracking', 'Visual progress', 'Print-ready']
    },
    {
      id: 'supplement-checklist',
      title: 'Supplement & Peptide Checklist',
      description: 'Comprehensive guide for supplement and peptide protocols',
      image: supplementChecklist,
      icon: Pill,
      category: 'Supplements',
      features: ['Peptide protocols', 'Supplement stacks', 'Dosage guides', 'Timing charts']
    },
    {
      id: 'lpa-risk-guide',
      title: 'Lp(a) Risk Reduction Guide',
      description: 'Targeted strategies for cardiovascular health and Lp(a) management',
      image: lpaRiskGuide,
      icon: Heart,
      category: 'Health',
      features: ['Risk assessment', 'Reduction strategies', 'Lifestyle protocols', 'Health optimization']
    }
  ];

  const categories = ['All', 'Tracking', 'Mobile', 'Planning', 'Supplements', 'Health'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Complete Wellness System
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Champions Lifestyle
                <span className="block text-primary">Wellness & Performance Toolkit</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your complete spiral-bound toolkit including daily trackers, supplement protocols, 
                and performance optimization guides. Everything you need to live the Champions Lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero" onClick={() => handleDownload('Complete Toolkit')}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Complete Kit
                </Button>
                <Button variant="outline" size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  View Preview
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
              <img 
                src={wellnessToolkitCover} 
                alt="Champions Lifestyle Wellness Toolkit Cover"
                className="relative z-10 w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Components */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete Performance Toolkit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five essential tools designed to optimize your wellness journey, track progress, 
              and maximize performance across all areas of life.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="card-gradient hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{tool.category}</Badge>
                    </div>
                    <div className="absolute top-4 left-4 p-2 bg-primary rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(tool.title)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="card-gradient text-center p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                Complete Your Champions Lifestyle Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Download the complete wellness and performance toolkit. Everything you need 
                to track progress, optimize health, and live the Champions Lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero" onClick={() => handleDownload('Complete Bundle')}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Complete Bundle
                </Button>
                <Button variant="outline" size="lg">
                  Learn More About the System
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WellnessToolkit;