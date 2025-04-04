
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, TrendingUp, Shield, Coins, Users, BookOpen } from 'lucide-react';
import { useMeme } from '@/contexts/MemeContext';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const { currentAiMessage, isAiLoading, askAi } = useMeme();
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      askAi(userInput);
      setUserInput('');
    }
  };

  const testimonials = [
    {
      quote: "MemeGuardian helped me avoid a rugpull that would have cost me thousands. Can't recommend it enough!",
      author: "Alex C., Crypto Enthusiast"
    },
    {
      quote: "The AI analysis is surprisingly accurate. It spotted tokenomic red flags that I completely missed.",
      author: "Mia K., DeFi Investor"
    },
    {
      quote: "Finally an AI tool that understands the memecoin ecosystem. It's saved me from multiple bad investments.",
      author: "Ryan T., Trader"
    }
  ];

  const stats = [
    { number: "500+", label: "Scams Detected", icon: Shield },
    { number: "10,000+", label: "Tokens Analyzed", icon: Coins },
    { number: "25,000+", label: "Active Users", icon: Users },
    { number: "150+", label: "Educational Articles", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />

      {/* AI Chat Section */}
      <div className="container mx-auto px-4 py-12 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Chat with MemeGuardian AI</h2>
          
          <div className="mb-6">
            <AiMessage message={currentAiMessage} isLoading={isAiLoading} />
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Ask about memecoins, token safety, or investment strategies..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isAiLoading || !userInput.trim()}>
              <Send className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Send</span>
            </Button>
          </form>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">MemeGuardian by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How MemeGuardian Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Input Token</h3>
            <p className="text-muted-foreground">Enter a token address or name and let our AI analyze its contract.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
            <p className="text-muted-foreground">Our advanced models scan for red flags, tokenomics issues, and security vulnerabilities.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <Coins className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Smart Decisions</h3>
            <p className="text-muted-foreground">Get detailed reports to make informed decisions about your memecoin investments.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm flex flex-col">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-meme-purple opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-4 flex-grow">{testimonial.quote}</p>
                <Separator className="mb-4" />
                <p className="text-sm text-muted-foreground">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-meme-gradient opacity-90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Navigate the Memecoin Universe?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of investors using MemeGuardian to make smarter, safer decisions in the wild world of memecoins.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/token-analyzer">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Coins className="mr-2 h-5 w-5" />
                Analyze Your First Token
              </Button>
            </Link>
            <Link to="/scam-detector">
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 border-white text-white">
                <Shield className="mr-2 h-5 w-5" />
                Detect Scams
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
