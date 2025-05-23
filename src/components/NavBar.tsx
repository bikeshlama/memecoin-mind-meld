
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { ShieldCheck, LayoutDashboard, BookOpen } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';
import { UserMenu } from './auth/UserMenu';
import { useAuth } from '@/contexts/AuthContext';

const NavBar = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-violet-500" />
            <span className="font-bold text-xl hidden md:inline-block bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
              MemeGuardian
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {isAuthenticated && (
              <Link 
                to="/dashboard" 
                className="flex items-center text-foreground/60 hover:text-foreground transition-colors"
              >
                <LayoutDashboard className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
            )}
            <Link to="/glossary" className="text-foreground/60 hover:text-foreground transition-colors">
              <BookOpen className="h-4 w-4 mr-1 inline" />
              Glossary
            </Link>
            <Link to="/pricing" className="text-foreground/60 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <ModeToggle />
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Button onClick={() => setAuthModalOpen(true)} className="bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen} 
      />
    </header>
  );
};

export default NavBar;
