
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MemeProvider } from "@/contexts/MemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TokenAnalyzer from "./pages/TokenAnalyzer";
import ScamDetector from "./pages/ScamDetector";
import Glossary from "./pages/Glossary";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";

const queryClient = new QueryClient();

// Wrapper component for route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/token-analyzer" element={<PageTransition><TokenAnalyzer /></PageTransition>} />
        <Route path="/scam-detector" element={<PageTransition><ScamDetector /></PageTransition>} />
        <Route path="/glossary" element={<PageTransition><Glossary /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <MemeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </MemeProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
