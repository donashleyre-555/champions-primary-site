import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Filter,
  BookOpen,
  Brain,
  Zap,
  Code2,
  Target,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24, icon: <BookOpen className="w-4 h-4" /> },
    { id: "meditation", name: "Meditation", count: 8, icon: <Brain className="w-4 h-4" /> },
    { id: "technology", name: "Technology", count: 6, icon: <Code2 className="w-4 h-4" /> },
    { id: "wellness", name: "Wellness", count: 7, icon: <Heart className="w-4 h-4" /> },
    { id: "science", name: "Science", count: 3, icon: <Zap className="w-4 h-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Neuroscience of Meditation: What Happens in Your Brain",
      excerpt: "Recent breakthrough studies reveal how meditation literally rewires neural pathways for enhanced focus, emotional regulation, and cognitive performance.",
      category: "science",
      author: "Dr. Sarah Chen",
      date: "2024-12-15",
      readTime: "12 min read",
      image: "/images/project-showcase.jpg",
      featured: true,
      tags: ["Neuroscience", "Meditation", "Brain Health"]
    },
    {
      id: 2,
      title: "Building Resilient Web Applications with Mindful Coding",
      excerpt: "Applying meditation principles to software development creates more maintainable code and reduces developer burnout.",
      category: "technology",
      author: "Alex Rodriguez",
      date: "2024-12-12",
      readTime: "8 min read",
      image: "/images/project-showcase.jpg",
      featured: false,
      tags: ["Development", "Mindfulness", "Best Practices"]
    },
    {
      id: 3,
      title: "Gateway States: Accessing Higher Consciousness Through Technology",
      excerpt: "Exploring how binaural beats, neurofeedback, and VR can accelerate meditation practice and consciousness expansion.",
      category: "meditation",
      author: "Marcus Thompson",
      date: "2024-12-10",
      readTime: "15 min read",
      image: "/images/project-showcase.jpg",
      featured: true,
      tags: ["Consciousness", "Technology", "Meditation"]
    },
    {
      id: 4,
      title: "The Mind-Body Connection in Digital Wellness",
      excerpt: "How to maintain physical and mental health while working in technology, including posture, eye health, and stress management.",
      category: "wellness",
      author: "Dr. Lisa Park",
      date: "2024-12-08",
      readTime: "10 min read",
      image: "/images/project-showcase.jpg",
      featured: false,
      tags: ["Wellness", "Digital Health", "Productivity"]
    },
    {
      id: 5,
      title: "React Patterns for Conscious Developers",
      excerpt: "Clean, sustainable coding practices that reflect mindful development principles and create better user experiences.",
      category: "technology",
      author: "Jamie Foster",
      date: "2024-12-05",
      readTime: "7 min read",
      image: "/images/project-showcase.jpg",
      featured: false,
      tags: ["React", "Clean Code", "Best Practices"]
    },
    {
      id: 6,
      title: "Breathwork Techniques for Developer Focus",
      excerpt: "Simple breathing exercises that can be done at your desk to enhance concentration and reduce programming stress.",
      category: "wellness",
      author: "Sarah Johnson",
      date: "2024-12-03",
      readTime: "6 min read",
      image: "/images/project-showcase.jpg",
      featured: false,
      tags: ["Breathwork", "Focus", "Productivity"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Consciousness Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exploring the intersection of consciousness, technology, and human potential. 
              Insights for the modern seeker and conscious developer.
            </p>
            
            {/* Search & Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button variant="outline" className="h-12 px-6">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-glass p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* Recent Posts */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-border/50 pb-4 last:border-0">
                      <h4 className="font-medium text-sm mb-2 hover:text-primary cursor-pointer transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="card-gradient overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-4">
                      Featured Article
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4 hover:text-primary cursor-pointer transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>By {featuredPost.author}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="btn-hero">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="card-glass overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 capitalize"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <div>By {post.author}</div>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="btn-glass">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;