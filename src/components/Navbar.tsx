import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useLive } from "@/contexts/LiveContext";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const { setModalOpen } = useLive();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulate live status check - in production, check actual streaming platform
    const checkLiveStatus = () => {
      const isCurrentlyLive = Math.random() > 0.7; // 30% chance of being live for demo
      setIsLive(isCurrentlyLive);
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gradient">
              Champions Lifestyle
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <a
              href="/fibonacci-challenge"
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Fibonacci Challenge
            </a>
            <a
              href="/wellness-toolkit"
              className="text-foreground hover:text-primary transition-colors"
            >
              Wellness Toolkit
            </a>
            <button
              onClick={() => scrollToSection("meditation")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Meditation
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <a
              href="/audio-hub"
              className="text-foreground hover:text-primary transition-colors"
            >
              Audio Hub
            </a>
            <a
              href="/coaches-corner"
              className="text-foreground hover:text-primary transition-colors"
            >
              Coaches Corner
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            {isLive && (
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold animate-pulse"
              >
                🔴 Watch Live
              </Button>
            )}
            <ThemeToggle />
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            ) : (
              <a href="/auth">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <a
                href="/fibonacci-challenge"
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fibonacci Challenge
              </a>
              <a
                href="/wellness-toolkit"
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wellness Toolkit
              </a>
              <button
                onClick={() => scrollToSection("meditation")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Meditation
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Blog
              </button>
              <a
                href="/audio-hub"
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Audio Hub
              </a>
              <a
                href="/coaches-corner"
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coaches Corner
              </a>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <a 
                  href="/auth"
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;