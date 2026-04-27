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

    try {
      const response = await fetch("https://formspree.io/f/xpwzgvkj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Champions Lifestyle Newsletter Subscriber",
          _to: "info@championslifestyle.com",
        }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (err) {
      console.error("Newsletter subscribe error:", err);
    } finally {
      setIsLoading(false);
    }
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
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <span className="text-lg font-semibold text-primary">
                    You're in!
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Check your inbox for your first Champions Lifestyle insight.
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
              <p className="text-sm font-semibold text-foreground mb-4">Follow Coach Don</p>
              <div className="flex justify-center gap-6 mb-6">
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