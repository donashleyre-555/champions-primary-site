import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, Brain, Zap } from "lucide-react";

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Science Behind Binaural Beats: Gateway to Consciousness",
      excerpt: "Exploring how specific frequency patterns can alter brainwave states and facilitate deeper meditation experiences.",
      category: "Science",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "/images/project-showcase.jpg",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Building Resilience Through Daily Practice",
      excerpt: "Simple techniques for developing mental fortitude and emotional stability in our fast-paced world.",
      category: "Wellness",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "/images/project-showcase.jpg",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "The Technology of Transformation",
      excerpt: "How modern tools can enhance ancient wisdom practices for accelerated personal growth.",
      category: "Technology",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "/images/project-showcase.jpg",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const categories = [
    { name: "Meditation", count: 12, color: "bg-primary" },
    { name: "Science", count: 8, color: "bg-accent" },
    { name: "Technology", count: 6, color: "bg-secondary" },
    { name: "Wellness", count: 10, color: "bg-primary" }
  ];

  return (
    <section id="blog" className="section-offset py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of consciousness, technology, and human potential 
            through practical wisdom and scientific discovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={index}
                  className="card-gradient overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {post.icon}
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="group-hover:text-primary transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup Preview */}
            <Card className="card-gradient p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get weekly insights on consciousness, technology, and personal growth.
              </p>
              <Button className="btn-hero w-full">
                Subscribe Now
              </Button>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="btn-glass">
            <BookOpen className="w-5 h-5 mr-2" />
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;