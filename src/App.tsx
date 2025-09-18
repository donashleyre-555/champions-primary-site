import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LiveProvider } from "@/contexts/LiveContext";
import Index from "./pages/Index";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import CoachesCorner from "./pages/CoachesCorner";
import AudioHub from "./pages/AudioHub";
import FibonacciChallenge from "./pages/FibonacciChallenge";
import WellnessToolkit from "./pages/WellnessToolkit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LiveProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/coaches-corner" element={<CoachesCorner />} />
              <Route path="/audio-hub" element={<AudioHub />} />
              <Route path="/fibonacci-challenge" element={<FibonacciChallenge />} />
              <Route path="/wellness-toolkit" element={<WellnessToolkit />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LiveProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
