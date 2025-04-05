
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Coins, Menu, Search, Shield, LogIn, UserPlus } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-meme-purple animate-pulse" />
            <span className="font-bold text-xl text-gradient hidden sm:inline-block">MemeGuardian</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/token-analyzer" className="font-medium transition-colors hover:text-primary">
            Token Analyzer
          </Link>
          <Link to="/scam-detector" className="font-medium transition-colors hover:text-primary">
            Scam Detector
          </Link>
          <Link to="/glossary" className="font-medium transition-colors hover:text-primary">
            Glossary
          </Link>
          <Link to="/pricing" className="font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Auth buttons for desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" className="transition-all hover:scale-105">
              <LogIn className="mr-1 h-4 w-4" />
              Sign In
            </Button>
            <Button size="sm" className="bg-meme-gradient hover:opacity-90 transition-all hover:scale-105">
              <UserPlus className="mr-1 h-4 w-4" />
              Sign Up
            </Button>
          </div>
          
          <ModeToggle />
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-accent">
                  <Shield className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/token-analyzer" className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-accent">
                  <Coins className="h-5 w-5" />
                  <span>Token Analyzer</span>
                </Link>
                <Link to="/scam-detector" className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-accent">
                  <Shield className="h-5 w-5" />
                  <span>Scam Detector</span>
                </Link>
                <Link to="/glossary" className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-accent">
                  <Search className="h-5 w-5" />
                  <span>Glossary</span>
                </Link>
                <Link to="/pricing" className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-accent">
                  <Coins className="h-5 w-5" />
                  <span>Pricing</span>
                </Link>
                
                <div className="border-t pt-4 mt-2 flex flex-col gap-2">
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button className="w-full justify-start bg-meme-gradient hover:opacity-90">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
