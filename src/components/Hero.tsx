
import React from 'react';
import { Shield, Coins, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-meme-gradient opacity-5 dark:opacity-10"></div>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="animate-float">
              <Shield className="h-16 w-16 text-meme-purple" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-gradient">MemeGuardian</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Your AI companion for navigating the wild world of memecoins.
            Detect scams, analyze tokens, and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/token-analyzer">
              <Button size="lg" className="bg-meme-gradient hover:opacity-90 transition-opacity">
                <Coins className="mr-2 h-5 w-5" /> Analyze Token
              </Button>
            </Link>
            <Link to="/scam-detector">
              <Button size="lg" variant="outline" className="border-primary">
                <Shield className="mr-2 h-5 w-5" /> Detect Scams
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="container mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Scam Detection</h3>
            <p className="text-muted-foreground">
              Identify common red flags and avoid honeypot contracts and rug pulls before investing.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Token Analysis</h3>
            <p className="text-muted-foreground">
              Evaluate tokenomics, liquidity metrics, and holder distribution to make informed decisions.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Investment Guide</h3>
            <p className="text-muted-foreground">
              Learn the basics of memecoin investment with our AI-driven educational resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
