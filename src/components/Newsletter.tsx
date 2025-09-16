import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <Card className="card-gradient max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full animate-glow">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Join the Champions Community
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to advanced meditation techniques, consciousness research updates, 
              and tools for accelerating your personal transformation journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Weekly Insights
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                Exclusive Content
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-secondary" />
                Early Access
              </div>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="btn-hero h-12 px-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. Your privacy is protected.
                </p>
              </form>
            ) : (
              <div className="animate-scale-in">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <span className="text-lg font-semibold text-green-500">
                    Welcome to the Champions Community!
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Check your email for a confirmation link and your first exclusive content.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5,000+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Community Support</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;