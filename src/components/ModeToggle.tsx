
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration completed before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-500 hover:bg-primary/10 animate-pulse-slow"
    >
      <Sun className={`h-[1.3rem] w-[1.3rem] transition-all duration-300 ${theme === 'dark' ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`} />
      <Moon className={`h-[1.3rem] w-[1.3rem] transition-all duration-300 ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
