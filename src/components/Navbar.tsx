import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useLive } from "@/contexts/LiveContext";
import { useAuth } from "@/contexts/AuthContext";

type NavItem = { label: string; path: string };
type NavGroup = { label: string; items: NavItem[] };

const PROTOCOL_GROUP: NavGroup = {
  label: "The Protocol",
  items: [
    { label: "Fibonacci Challenge", path: "/fibonacci-challenge" },
    { label: "Wellness Toolkit", path: "/wellness-toolkit" },
    { label: "Meditation", path: "/meditation" },
  ],
};

const RESOURCES_GROUP: NavGroup = {
  label: "Resources",
  items: [
    { label: "Audio Hub", path: "/audio-hub" },
    { label: "Coaches Corner", path: "/coaches-corner" },
    { label: "Blog", path: "/blog" },
    { label: "Projects", path: "/projects" },
  ],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openLiveModal } = useLive();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goRoute = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
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

  const DropdownNav = ({ group }: { group: NavGroup }) => (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
      >
        {group.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === group.label ? "rotate-180" : ""}`} />
      </button>
      {openDropdown === group.label && (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-md border border-border bg-background/95 backdrop-blur-md shadow-lg py-2 z-50">
          {group.items.map((item) => (
            <button
              key={item.path}
              onClick={() => goRoute(item.path)}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
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
          <div className="flex items-center cursor-pointer" onClick={() => goRoute("/")}>
            <h1 className="text-xl font-bold text-gradient">Champions Lifestyle</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
            <DropdownNav group={PROTOCOL_GROUP} />
            <DropdownNav group={RESOURCES_GROUP} />
            <button
              onClick={() => goRoute("/projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              SJH Stallions
            </button>
            <button
              onClick={() => goRoute("/about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Coach Don
            </button>

            <WatchLiveButton />

            <ThemeToggle />
            {user ? (
              <Button variant="ghost" size="sm" onClick={signOut} className="flex items-center gap-2">
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
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">The Protocol</p>
                {PROTOCOL_GROUP.items.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => goRoute(item.path)}
                    className="block w-full text-left py-1.5 pl-3 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Resources</p>
                {RESOURCES_GROUP.items.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => goRoute(item.path)}
                    className="block w-full text-left py-1.5 pl-3 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => goRoute("/projects")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                SJH Stallions
              </button>
              <button
                onClick={() => goRoute("/about")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                About Coach Don
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
