
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, TrendingUp, Shield, Coins, Users, BookOpen, MessageCirclePlus, MessageCircleCode, Rocket, Info, HelpCircle, BarChart3, LineChart, PieChart, ArrowUpRight } from 'lucide-react';
import { useMeme } from '@/contexts/MemeContext';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const { currentAiMessage, isAiLoading, askAi } = useMeme();
  const [userInput, setUserInput] = useState('');
  const [chatMode, setChatMode] = useState('general');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      askAi(userInput);
      setUserInput('');
    }
  };

  const quickPrompts = [
    "What are the risks of investing in memecoins?",
    "How to spot a potential rugpull?",
    "Explain tokenomics in simple terms",
    "What's the difference between memecoins and utility tokens?"
  ];

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

  const faqs = [
    {
      question: "What is MemeGuardian?",
      answer: "MemeGuardian is an AI-powered platform designed to help investors navigate the risky world of memecoins. It provides scam detection, token analysis, and educational resources to make informed investment decisions."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "MemeGuardian's AI utilizes pattern recognition and blockchain data analysis to identify common scam patterns with high accuracy. However, no system is perfect, and we recommend using our analysis as one of several tools in your research process."
    },
    {
      question: "Is MemeGuardian free to use?",
      answer: "Yes, the core features of MemeGuardian are free to use. We offer premium subscription plans for advanced features like portfolio monitoring, real-time alerts, and detailed token reports."
    },
    {
      question: "Can MemeGuardian guarantee I won't lose money on investments?",
      answer: "No platform can guarantee investment returns. MemeGuardian provides analytical tools and educational resources to help you make better-informed decisions, but all investments in the cryptocurrency space carry inherent risks."
    },
    {
      question: "How do I analyze a specific token?",
      answer: "Navigate to our Token Analyzer page, enter the token's contract address, and our AI will analyze various aspects including contract code, liquidity, holder distribution, and more."
    },
    {
      question: "How does the scam detector work?",
      answer: "Our Scam Detector analyzes contract code, tokenomics, team information, and market behavior to identify red flags commonly associated with fraudulent projects."
    }
  ];

  // Sample dashboard data
  const dashboardData = {
    tokens: [
      { name: 'DOGE', status: 'Safe', score: 85, change: '+2.5%', risk: 'Low' },
      { name: 'SHIB', status: 'Safe', score: 79, change: '-1.2%', risk: 'Medium' },
      { name: 'PEPE', status: 'Warning', score: 62, change: '+5.1%', risk: 'Medium' },
      { name: 'FLOKI', status: 'Safe', score: 77, change: '+0.8%', risk: 'Low' },
    ],
    scamAlerts: 3,
    marketSentiment: 'Bullish',
    watchlistTokens: 8
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />

      {/* Enhanced AI Chat Section */}
      <div className="container mx-auto px-4 py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Chat with MemeGuardian AI</h2>

          <Tabs defaultValue="chat" className="mb-6">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="chat" className="transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">General Chat</TabsTrigger>
              <TabsTrigger value="token" className="transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Token Analysis</TabsTrigger>
              <TabsTrigger value="scam" className="transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Scam Detection</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-4 animate-in slide-in-from-left">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Ask About Crypto & Memecoins</CardTitle>
                  <CardDescription>
                    Get guidance on memecoin investing, market trends, and safety tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <AiMessage message={currentAiMessage} isLoading={isAiLoading} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {quickPrompts.map((prompt, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="justify-start hover:bg-primary/10 transition-colors"
                        onClick={() => {
                          setUserInput(prompt);
                          askAi(prompt);
                        }}
                      >
                        <MessageCirclePlus className="h-4 w-4 mr-2" />
                        {prompt}
                      </Button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      placeholder="Ask about memecoins, token safety, or investment strategies..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-1 transition-all focus:ring-2 focus:ring-primary"
                    />
                    <Button type="submit" disabled={isAiLoading || !userInput.trim()} className="transition-all hover:scale-105">
                      <Send className="h-4 w-4" />
                      <span className="ml-2 hidden sm:inline">Send</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="token" className="space-y-4 animate-in slide-in-from-top">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Analyze a Token</CardTitle>
                  <CardDescription>
                    Enter a token address to get a detailed analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <AiMessage 
                      message="Enter a token contract address, and I'll analyze its tokenomics, liquidity, security, and more." 
                      isLoading={false} 
                    />
                  </div>
                  
                  <form className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <Input
                        placeholder="Enter token contract address (0x...)"
                        className="flex-1 transition-all focus:ring-2 focus:ring-primary"
                      />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="deepScan" />
                        <label htmlFor="deepScan" className="text-sm">Perform deep scan (takes longer)</label>
                      </div>
                    </div>
                    
                    <Link to="/token-analyzer">
                      <Button className="w-full transition-all hover:scale-105 bg-meme-gradient hover:opacity-90">
                        <Rocket className="h-4 w-4 mr-2" />
                        Start Analysis
                      </Button>
                    </Link>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scam" className="space-y-4 animate-in slide-in-from-right">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Check for Scams</CardTitle>
                  <CardDescription>
                    Verify if a project shows signs of being a scam
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <AiMessage 
                      message="I can help you identify potential scams. Enter a contract address or project website to check for red flags." 
                      isLoading={false} 
                    />
                  </div>
                  
                  <form className="space-y-4">
                    <Input
                      placeholder="Enter contract address or project URL"
                      className="flex-1 transition-all focus:ring-2 focus:ring-primary"
                    />
                    
                    <Link to="/scam-detector">
                      <Button className="w-full transition-all hover:scale-105">
                        <Shield className="h-4 w-4 mr-2" />
                        Check for Scams
                      </Button>
                    </Link>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex items-center justify-center mt-2">
            <p className="text-xs text-muted-foreground">
              <Info className="inline h-3 w-3 mr-1" /> 
              MemeGuardian AI helps you make informed decisions, but always do your own research
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Your MemeGuardian Dashboard</h2>
          <Button variant="outline" className="hidden md:flex items-center gap-2 transition-all hover:scale-105">
            Go to Full Dashboard <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-3 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Token Safety Ratings
              </CardTitle>
              <CardDescription>Monitor your watched tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Safety Score</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>Risk Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dashboardData.tokens.map((token, index) => (
                    <TableRow key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{token.name}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          token.status === 'Safe' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-orange-500/10 text-orange-500'
                        }`}>
                          {token.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={token.score} className="h-2 w-16" />
                          <span>{token.score}</span>
                        </div>
                      </TableCell>
                      <TableCell className={
                        token.change.startsWith('+') 
                          ? 'text-green-500' 
                          : 'text-red-500'
                      }>{token.change}</TableCell>
                      <TableCell>{token.risk}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="ml-auto">View All Tokens</Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card className="transition-all hover:shadow-md bg-gradient-to-br from-background to-muted">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-red-500" />
                  Scam Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-6">
                <div className="text-4xl font-bold text-red-500 mb-2">{dashboardData.scamAlerts}</div>
                <p className="text-sm text-muted-foreground">Active alerts in your watchlist</p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" size="sm" className="w-full">Review Alerts</Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-all hover:shadow-md bg-gradient-to-br from-background to-muted">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <LineChart className="mr-2 h-5 w-5 text-primary" />
                  Market Sentiment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-6">
                <div className="text-4xl font-bold text-green-500 mb-2 capitalize">{dashboardData.marketSentiment}</div>
                <p className="text-sm text-muted-foreground">Overall memecoin market trend</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Button variant="outline" className="items-center gap-2">
            Go to Full Dashboard <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">MemeGuardian by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow hover:scale-105 transition-all"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary animate-pulse" />
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
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Input Token</h3>
            <p className="text-muted-foreground">Enter a token address or name and let our AI analyze its contract.</p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
            <p className="text-muted-foreground">Our advanced models scan for red flags, tokenomics issues, and security vulnerabilities.</p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-meme-gradient opacity-90 rounded-full flex items-center justify-center mb-4">
              <Coins className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Smart Decisions</h3>
            <p className="text-muted-foreground">Get detailed reports to make informed decisions about your memecoin investments.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="h-6 w-6 text-primary animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="animate-in slide-in-from-top-5 duration-300">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Don't see your question? Ask our AI directly or check our documentation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="transition-all hover:scale-105">
                  <MessageCircleCode className="mr-2 h-4 w-4" />
                  Ask AI Assistant
                </Button>
                <Link to="/glossary">
                  <Button variant="secondary" className="transition-all hover:scale-105">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Glossary
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-lg shadow-sm flex flex-col transition-all hover:shadow-md hover:-translate-y-1"
              >
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
              <Button size="lg" variant="secondary" className="font-semibold transition-all hover:scale-105">
                <Coins className="mr-2 h-5 w-5" />
                Analyze Your First Token
              </Button>
            </Link>
            <Link to="/scam-detector">
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 border-white text-white transition-all hover:scale-105">
                <Shield className="mr-2 h-5 w-5" />
                Detect Scams
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="py-16 container mx-auto px-4 bg-background">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock more powerful tools and features with our premium plans
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-md hover:scale-105">
              <CardHeader>
                <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Free</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-1">/forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Basic token analysis</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Simple scam detection</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Limited AI assistant</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-md hover:scale-105 relative border-primary">
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  POPULAR
                </div>
              </div>
              <CardHeader>
                <div className="bg-purple-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Rocket className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Pro</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Advanced token metrics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Real-time scam alerts</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Unlimited AI conversations</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button className="w-full bg-meme-gradient hover:opacity-90">Upgrade to Pro</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-md hover:scale-105">
              <CardHeader>
                <div className="bg-emerald-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Gem className="h-6 w-6 text-emerald-500" />
                </div>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>API access</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Custom analysis tools</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>Team collaboration</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing">
              <Button variant="link" className="text-primary hover:underline">
                View all plans and features <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
