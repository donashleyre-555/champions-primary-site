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
...
};

export default Navbar;
