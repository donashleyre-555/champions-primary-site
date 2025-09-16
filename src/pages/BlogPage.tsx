import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <header className="bg-secondary text-primary py-20 text-center">
        <img 
          src="/images/champions-logo-trans.png" 
          alt="Champions Lifestyle Logo" 
          className="max-w-[180px] mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">It's a Choice Blog</h1>
        <p className="text-lg text-muted-foreground">
          The Champions Lifestyle Program – Motivation, Discipline & Empowerment
        </p>
      </header>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
              The Power of Mindset
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Your mindset is the cornerstone of your success. Believe in yourself, set ambitious goals, and visualize achieving them.
            </p>
            
            <div className="bg-muted border-l-4 border-primary p-4 italic text-muted-foreground mb-6">
              "Champions aren't made in gyms. Champions are made from something they have deep inside them — a desire, a dream, a vision." — Muhammad Ali
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
              Discipline: The Bridge Between Goals and Accomplishments
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discipline is about doing what needs to be done, even when you don't feel like it. Set routines, stay consistent, and build momentum.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
              Champions in Action
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This week we spotlight Jake, a junior from Great Oaks High School, who overcame setbacks with determination and led his team to victory.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center my-12">
          <Button size="lg" className="btn-hero">
            Join Our Next Webinar
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-primary text-center py-8">
        <div className="container mx-auto px-6">
          <p className="text-lg font-bold mb-2">"FOCUS, TEAMWORK, WORK HARD, GET BETTER"</p>
          <Separator className="my-4 bg-primary/20" />
          <p className="text-sm text-muted-foreground">
            © 2025 Champions Lifestyle Program | {" "}
            <a 
              href="mailto:info@championslifestyle.com" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              info@championslifestyle.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;