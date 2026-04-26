import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle, Sparkles, Award, Trophy } from "lucide-react";

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
    <section id="newsletter" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="card-gradient max-w-5xl mx-auto relative overflow-hidden">
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-background via-primary/5 to-background p-8 border-b border-primary/20">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/champions-logo.png" 
                alt="Champions Lifestyle Logo" 
                className="h-16 md:h-20 w-auto animate-glow"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gradient">
              Champions Lifestyle Newsletter
            </h1>
            <p className="text-center text-muted-foreground mt-2 text-sm">
              "IT'S A CHOICE" - Exclusive insights for champions
            </p>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Join the Elite Circle
              </h2>
            
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Get exclusive access to championship mindset training, the Bentov-Gateway protocol updates, 
                and proven strategies for mastering your emotions and manifesting your reality.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                  <Trophy className="w-4 h-4 text-primary" />
                  Champion's Weekly Insights
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/5 p-3 rounded-lg">
                  <Award className="w-4 h-4 text-accent" />
                  Exclusive Protocol Updates
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/5 p-3 rounded-lg">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  VIP Early Access
                </div>
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
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                <div className="text-sm text-muted-foreground">Champions Trained</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">15+ Years</div>
                <div className="text-sm text-muted-foreground">Proven Methods</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Science-Based</div>
              </div>
            </div>

            {/* Footer Branding */}
            <div className="mt-8 pt-6 border-t border-primary/20 text-center">
              <p className="text-xs text-muted-foreground">
                © 2026 Champions Lifestyle | Transform Your Mind, Transform Your Life
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;