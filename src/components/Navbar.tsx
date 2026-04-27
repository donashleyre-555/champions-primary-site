import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useLive } from "@/contexts/LiveContext";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openLiveModal } = useLive();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After navigating to /#section, scroll to it
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      // small delay so the section has mounted
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        }
      }, 50);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }
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

  const goRoute = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const openLive = () => {
    openLiveModal();
    setIsMobileMenuOpen(false);
  };

  const WatchLiveButton = ({ mobile = false }: { mobile?: boolean }) => (
    <Button
      onClick={openLive}
      variant="outline"
      size={mobile ? "default" : "sm"}
      className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background/40 backdrop-blur-sm font-semibold ${
        mobile ? "w-full justify-start" : ""
      }`}
    >
      <span className="relative flex h-2.5 w-2.5 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive"></span>
      </span>
      Watch Live
    </Button>
  );

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
          <div className="flex items-center cursor-pointer" onClick={() => goRoute("/")}>
            <h1 className="text-xl font-bold text-gradient">Champions Lifestyle</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => goRoute("/about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => goRoute("/fibonacci-challenge")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Fibonacci Challenge
            </button>
            <button
              onClick={() => goRoute("/wellness-toolkit")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Wellness Toolkit
            </button>
            <button
              onClick={() => goRoute("/meditation")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Meditation
            </button>
            <button
              onClick={() => goRoute("/projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => goRoute("/blog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => goRoute("/audio-hub")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Audio Hub
            </button>
            <button
              onClick={() => goRoute("/coaches-corner")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Coaches Corner
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>

            <WatchLiveButton />

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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => goRoute("/auth")}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Member Login
              </Button>
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
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <button
                onClick={() => goRoute("/about")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => goRoute("/fibonacci-challenge")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-semibold"
              >
                Fibonacci Challenge
              </button>
              <button
                onClick={() => goRoute("/wellness-toolkit")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Wellness Toolkit
              </button>
              <button
                onClick={() => goRoute("/meditation")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Meditation
              </button>
              <button
                onClick={() => goRoute("/projects")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => goRoute("/blog")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => goRoute("/audio-hub")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Audio Hub
              </button>
              <button
                onClick={() => goRoute("/coaches-corner")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Coaches Corner
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>

              <WatchLiveButton mobile />

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
                <button
                  onClick={() => goRoute("/auth")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Member Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
