
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, TrendingUp, Shield, Coins, Users, BookOpen, MessageCirclePlus, MessageCircleCode, Rocket, Info, HelpCircle, BarChart3, LineChart, PieChart, ArrowUpRight, Check, Gem, MousePointerClick, Brain, Award, Zap, Target } from 'lucide-react';
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
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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

  const quickPrompts = [
    "What are the risks of investing in memecoins?",
    "How to spot a potential rugpull?",
    "Explain tokenomics in simple terms",
    "What's the difference between memecoins and utility tokens?"
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Powerful Tools to Keep You Safe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform analyzes blockchain data to provide real-time insights and protect your investments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-purple-500" />,
                title: "Scam Detection",
                description: "Identify honeypot contracts, rug pulls, and other common scams before investing",
                color: "from-purple-500/20 to-purple-600/20"
              },
              {
                icon: <Target className="h-10 w-10 text-pink-500" />,
                title: "Token Analysis",
                description: "Evaluate tokenomics, liquidity metrics, and holder distribution for informed decisions",
                color: "from-pink-500/20 to-pink-600/20"
              },
              {
                icon: <Brain className="h-10 w-10 text-blue-500" />,
                title: "AI Assistant",
                description: "Get expert guidance on memecoin investing with our specialized AI assistant",
                color: "from-blue-500/20 to-blue-600/20"
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <div className="h-full relative rounded-xl overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 h-full flex flex-col">
                    <div className="bg-background/80 rounded-full p-3 w-fit mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-primary group">
                        Learn more 
                        <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-6">Chat with MemeGuardian AI</h2>
                <p className="text-muted-foreground mb-8">
                  Our specialized AI assistant helps you navigate the complex world of memecoins, providing expert guidance and analysis in real-time.
                </p>

                <div className="bg-card border border-border rounded-xl shadow-lg p-6">
                  <div className="mb-4">
                    <AiMessage 
                      message={currentAiMessage || "Hello! I'm MemeGuardian AI. Ask me anything about memecoins, token safety, or investment strategies..."} 
                      isLoading={isAiLoading} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {quickPrompts.slice(0, 2).map((prompt, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        size="sm"
                        className="justify-start hover:bg-primary/10 transition-colors text-xs"
                        onClick={() => {
                          setUserInput(prompt);
                          askAi(prompt);
                        }}
                      >
                        <MessageCirclePlus className="h-3 w-3 mr-2" />
                        {prompt}
                      </Button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      placeholder="Ask about memecoins or token safety..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-1 transition-all focus:ring-2 focus:ring-primary text-sm"
                    />
                    <Button 
                      type="submit" 
                      disabled={isAiLoading || !userInput.trim()} 
                      className="transition-all hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative z-10">
                  <img 
                    src="/placeholder.svg" 
                    alt="AI Assistant Dashboard" 
                    className="rounded-xl shadow-xl border border-border/50 bg-card/80 backdrop-blur-sm"
                  />
                  {/* Floating elements */}
                  <div className="absolute -right-6 top-1/4 bg-card p-2 rounded-md shadow-lg border border-border animate-float">
                    <Zap className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="absolute -left-6 bottom-1/4 bg-card p-2 rounded-md shadow-lg border border-border animate-float delay-500">
                    <Award className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Your MemeGuardian Dashboard</h2>
            <Button variant="outline" className="hidden md:flex items-center gap-2 transition-all hover:scale-105">
              Go to Full Dashboard <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <motion.div 
              className="lg:col-span-3 transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
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
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
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
              </motion.div>
            </div>
          </div>

          <div className="mt-6 text-center md:hidden">
            <Button variant="outline" className="items-center gap-2">
              Go to Full Dashboard <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold">MemeGuardian by the Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Join thousands of investors already using our platform to make smarter decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, number: "500+", label: "Scams Detected", color: "purple" },
              { icon: Coins, number: "10,000+", label: "Tokens Analyzed", color: "pink" },
              { icon: Users, number: "25,000+", label: "Active Users", color: "blue" },
              { icon: BookOpen, number: "150+", label: "Educational Articles", color: "green" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`p-3 rounded-full bg-${stat.color}-500/10 mb-4`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-500 animate-pulse`} />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold">How MemeGuardian Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Our simple 3-step process helps you navigate the memecoin ecosystem safely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hidden md:block"></div>
            
            {[
              {
                icon: MousePointerClick,
                title: "1. Input Token",
                description: "Enter a token address or name and let our AI analyze its contract"
              },
              {
                icon: Brain,
                title: "2. AI Analysis",
                description: "Our advanced models scan for red flags, tokenomics issues, and security vulnerabilities"
              },
              {
                icon: Award,
                title: "3. Smart Decisions",
                description: "Get detailed reports to make informed decisions about your memecoin investments"
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg relative">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Trusted by thousands of investors around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute -top-3 -left-3">
                  <svg className="h-8 w-8 text-purple-500 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 pt-4">{testimonial.quote}</p>
                <Separator className="mb-4" />
                <p className="text-muted-foreground">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="flex items-center gap-2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
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
                  question: "How do I analyze a specific token?",
                  answer: "Navigate to our Token Analyzer page, enter the token's contract address, and our AI will analyze various aspects including contract code, liquidity, holder distribution, and more."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-border">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="animate-in slide-in-from-top-5 duration-300">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Unlock more powerful tools and features with our premium plans
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield, 
                  iconColor: "text-blue-500",
                  bgColor: "bg-blue-500/10",
                  title: "Free",
                  price: "$0",
                  period: "/forever",
                  features: ["Basic token analysis", "Simple scam detection", "Limited AI assistant"],
                  buttonText: "Get Started",
                  buttonVariant: "outline",
                  popular: false
                },
                {
                  icon: Rocket, 
                  iconColor: "text-purple-500",
                  bgColor: "bg-purple-500/10",
                  title: "Pro",
                  price: "$19",
                  period: "/month",
                  features: ["Advanced token metrics", "Real-time scam alerts", "Unlimited AI conversations"],
                  buttonText: "Upgrade to Pro",
                  buttonVariant: "gradient",
                  popular: true
                },
                {
                  icon: Gem, 
                  iconColor: "text-emerald-500",
                  bgColor: "bg-emerald-500/10",
                  title: "Enterprise",
                  price: "$99",
                  period: "/month",
                  features: ["API access", "Custom analysis tools", "Team collaboration"],
                  buttonText: "Contact Sales",
                  buttonVariant: "outline",
                  popular: false
                }
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  className={`transition-all hover:shadow-md ${plan.popular ? 'relative border-primary scale-105 shadow-lg' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col">
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className={`${plan.bgColor} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2`}>
                        <plan.icon className={`h-6 w-6 ${plan.iconColor}`} />
                      </div>
                      <CardTitle>{plan.title}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center">
                          <Check className="h-5 w-5 mr-2 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Link to="/pricing" className="w-full">
                        <Button 
                          variant={plan.buttonVariant === "gradient" ? "default" : "outline"} 
                          className={`w-full ${plan.buttonVariant === "gradient" ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white" : ""}`}
                        >
                          {plan.buttonText}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
