
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart, ShieldCheck, HeartPulse, Zap, ArrowRight, Check, Gem, MessageCircle, Send, HelpCircle, Plus, Minus, Facebook, Twitter, Instagram, Github, Linkedin, LayoutDashboard, LineChart, PieChart, Activity, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [chatMessage, setChatMessage] = useState('');
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      
      {/* How MemeGuardian Works Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MemeGuardian Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI-powered platform analyzes memecoins to keep your investments safe and profitable.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
                title: "Smart Contract Analysis",
                description: "Our AI scans code for vulnerabilities, backdoors, and malicious functions to protect your assets.",
                color: "from-teal-500/20 to-blue-500/20"
              },
              {
                icon: <BarChart className="h-10 w-10 text-violet-500" />,
                title: "Tokenomics Evaluation",
                description: "We analyze token distribution, liquidity, and market dynamics to identify healthy projects.",
                color: "from-violet-500/20 to-purple-500/20"
              },
              {
                icon: <HeartPulse className="h-10 w-10 text-pink-500" />,
                title: "Risk Assessment",
                description: "Get real-time alerts about potential rug pulls, honeypots, and other common scam patterns.",
                color: "from-pink-500/20 to-orange-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`p-3 rounded-lg inline-block bg-gradient-to-br ${feature.color} mb-3`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="group">
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chatbot Section - Added Below How MemeGuardian Works */}
      <section className="py-20 bg-gradient-to-b from-background to-violet-500/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-meme-neon blur-3xl" />
          <div className="absolute top-[20%] left-[5%] h-[300px] w-[300px] rounded-full bg-meme-pink blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Got Questions? Ask Our AI Assistant</h2>
              <p className="text-muted-foreground mb-6">
                Our advanced AI can answer all your questions about memecoins, blockchain technology, and investment strategies in real-time.
              </p>
              
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-4 border-b border-border/50 bg-muted/30 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="AI" />
                    <AvatarFallback className="bg-violet-500/20 text-violet-500">AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">MemeGuardian AI</h4>
                    <p className="text-xs text-muted-foreground">Online 24/7</p>
                  </div>
                </div>
                
                <div className="p-4 h-[300px] overflow-y-auto flex flex-col space-y-4">
                  <div className="bg-muted/30 p-3 rounded-xl rounded-tl-none max-w-[80%] self-start">
                    <p>Hey there! I'm the MemeGuardian AI assistant. How can I help you today with your memecoin investments?</p>
                  </div>
                  
                  <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none max-w-[80%] self-end">
                    <p>How do I check if a token might be a scam?</p>
                  </div>
                  
                  <div className="bg-muted/30 p-3 rounded-xl rounded-tl-none max-w-[80%] self-start">
                    <p>Great question! To check if a token might be a scam, you should look for these red flags:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Smart contracts that can't be verified</li>
                      <li>Hidden minting functions</li>
                      <li>Unusually high dev/team token allocation</li>
                      <li>Locked liquidity for very short periods</li>
                      <li>Anonymous teams with no track record</li>
                    </ul>
                    <p className="mt-2">MemeGuardian can automatically check all of these factors and more for you!</p>
                  </div>
                </div>
                
                <div className="p-3 border-t border-border/50 bg-card">
                  <div className="flex">
                    <Input 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask a question..."
                      className="flex-1 bg-muted/20"
                    />
                    <Button variant="ghost" className="ml-2 text-primary">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-teal-500/20 rounded-2xl blur-xl transform rotate-3" />
                <Card className="relative border border-border/50 shadow-xl backdrop-blur-sm bg-card/80 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Bot className="h-6 w-6 text-violet-500 mr-2" />
                      AI Assistant Features
                    </CardTitle>
                    <CardDescription>Your 24/7 memecoin investment companion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        {
                          title: "Real-time Analysis",
                          description: "Ask about any token and get instant risk analysis and validation."
                        },
                        {
                          title: "Market Insights",
                          description: "Get the latest trends, market caps, and volume data for any memecoin."
                        },
                        {
                          title: "Educational Support",
                          description: "Learn about tokenomics, blockchain concepts, and investment strategies."
                        },
                        {
                          title: "Portfolio Recommendations",
                          description: "Get personalized advice to optimize your memecoin investments."
                        }
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-violet-500/10 rounded-full p-2 mt-1">
                            <Check className="h-4 w-4 text-violet-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90 text-white">
                      Try AI Assistant Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Feature - Added Above Choose Your Plan */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-[30%] right-[20%] h-[500px] w-[500px] rounded-full bg-meme-purple blur-3xl" />
          <div className="absolute bottom-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-meme-blue blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Dashboard Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your portfolio performance and monitor market trends with our comprehensive analytics dashboard.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-violet-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <LayoutDashboard className="h-6 w-6 text-violet-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Portfolio Overview</h3>
                    <p className="text-muted-foreground">
                      Get a comprehensive view of all your memecoin investments in one place with real-time updates.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-teal-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <LineChart className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor the performance of your investments with detailed charts and metrics over time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pink-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <PieChart className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Asset Allocation</h3>
                    <p className="text-muted-foreground">
                      Visualize your portfolio distribution across different memecoins and investment categories.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <Activity className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Market Trends</h3>
                    <p className="text-muted-foreground">
                      Stay updated with the latest market trends and memecoin movements with predictive analytics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90 transition-opacity text-white shadow-md">
                  Explore Dashboard <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-teal-500/20 rounded-2xl blur-xl transform -rotate-3" />
                <Card className="border border-border/50 shadow-xl overflow-hidden relative backdrop-blur-sm bg-card/80 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <CardHeader className="bg-muted/30 border-b border-border/50">
                    <CardTitle className="text-xl flex items-center">
                      <LayoutDashboard className="h-5 w-5 text-violet-500 mr-2" />
                      Portfolio Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Portfolio Value</h4>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-2xl font-bold">$24,685.32</span>
                          <span className="text-emerald-500 text-sm font-medium">+12.4%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-violet-500 to-teal-500 rounded-full" style={{ width: '68%' }} />
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <h5 className="text-sm text-muted-foreground mb-1">Top Performer</h5>
                          <p className="font-medium">DogeMoon</p>
                          <span className="text-emerald-500 text-sm">+28.5%</span>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <h5 className="text-sm text-muted-foreground mb-1">Risk Score</h5>
                          <p className="font-medium">Low</p>
                          <span className="text-emerald-500 text-sm">Safe</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-sm mb-3">Asset Allocation</h4>
                        <div className="flex gap-1 items-center mb-2">
                          <div className="w-[60%] h-3 bg-violet-500 rounded-l-full"></div>
                          <div className="w-[25%] h-3 bg-teal-500"></div>
                          <div className="w-[15%] h-3 bg-pink-500 rounded-r-full"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                            <span>DogeMoon</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span>CatCoin</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span>FrogToken</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/30 border-t border-border/50 flex justify-between">
                    <Button variant="ghost" size="sm">View Details</Button>
                    <Button size="sm" className="bg-violet-500 hover:bg-violet-600 text-white">Update</Button>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Now positioned after Dashboard */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-meme-purple blur-3xl" />
          <div className="absolute top-[30%] -left-[5%] h-[300px] w-[300px] rounded-full bg-meme-blue blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the tools you need to navigate the memecoin market safely and profitably.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Free",
                description: "Basic memecoin analysis",
                price: "$0",
                period: "forever",
                features: [
                  "Basic token analysis",
                  "Simple scam detection",
                  "Limited AI assistant",
                  "Public information access"
                ],
                buttonText: "Get Started",
                buttonVariant: "outline" as const,
                color: "bg-blue-500/10 text-blue-500",
                iconColor: "text-blue-500"
              },
              {
                name: "Pro",
                description: "Advanced tools for active investors",
                price: "$19",
                period: "per month",
                features: [
                  "Everything in Free",
                  "Advanced token metrics",
                  "Real-time scam alerts",
                  "Unlimited AI conversations",
                  "Portfolio monitoring"
                ],
                buttonText: "Upgrade to Pro",
                buttonVariant: "default" as const,
                popular: true,
                color: "bg-violet-500/10 text-violet-500",
                iconColor: "text-violet-500"
              },
              {
                name: "Enterprise",
                description: "For professional traders and teams",
                price: "$99",
                period: "per month",
                features: [
                  "Everything in Pro",
                  "API access",
                  "Custom analysis tools",
                  "Priority support",
                  "Team collaboration",
                  "Custom alerts and reports"
                ],
                buttonText: "Contact Sales",
                buttonVariant: "outline" as const,
                color: "bg-emerald-500/10 text-emerald-500",
                iconColor: "text-emerald-500"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl border-border/50 ${plan.popular ? 'border-violet-500/50 shadow-lg shadow-violet-500/10 scale-105 md:scale-110' : ''} h-full`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-violet-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                      {index === 2 ? <Gem className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Separator />
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className={`h-5 w-5 mr-2 ${plan.iconColor}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant={plan.buttonVariant} className={`w-full ${plan.popular ? 'bg-violet-500 hover:bg-violet-600 text-white' : ''}`}>
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/pricing">
              <Button variant="ghost" size="lg" className="group">
                View full pricing details
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust MemeGuardian */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-[50%] right-[20%] h-[500px] w-[500px] rounded-full bg-meme-green blur-3xl" />
          <div className="absolute bottom-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-meme-purple blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust MemeGuardian</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built a platform that puts your security first with powerful tools that are easy to use.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-teal-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Security First Approach</h3>
                    <p className="text-muted-foreground">
                      Every analysis begins with a thorough security scan to identify potential threats.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-violet-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-violet-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
                    <p className="text-muted-foreground">
                      Our platform monitors changes in real-time to alert you of new risks as they emerge.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pink-500/10 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
                    <BarChart className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Make informed decisions based on comprehensive market data and expert analysis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-violet-500 hover:opacity-90 transition-opacity text-white shadow-md">
                  Explore All Features <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-violet-500/20 rounded-2xl blur-xl transform -rotate-3" />
                <Card className="border border-border/50 shadow-xl overflow-hidden relative backdrop-blur-sm bg-card/80 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <CardHeader className="bg-muted/30 border-b border-border/50">
                    <CardTitle className="text-xl flex items-center">
                      <ShieldCheck className="h-5 w-5 text-teal-500 mr-2" />
                      Security Analysis Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Contract Safety</span>
                        <div className="w-36 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '95%' }} />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Liquidity Lock</span>
                        <div className="w-36 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Owner Privileges</span>
                        <div className="w-36 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '70%' }} />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Token Distribution</span>
                        <div className="w-36 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }} />
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                        <p className="text-emerald-500 flex items-center text-sm">
                          <ShieldCheck className="h-4 w-4 mr-1" />
                          This token passes all security checks
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section - New */}
      <section className="py-20 bg-gradient-to-b from-background to-violet-500/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-[20%] right-[30%] h-[300px] w-[300px] rounded-full bg-meme-blue blur-3xl" />
          <div className="absolute bottom-[20%] left-[20%] h-[400px] w-[400px] rounded-full bg-meme-purple blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about MemeGuardian and memecoin investments.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What is MemeGuardian?",
                  answer: "MemeGuardian is an advanced platform designed to help investors safely navigate the memecoin market. We use AI-powered analytics to identify potential scams, assess token security, and provide insights for better investment decisions."
                },
                {
                  question: "How does MemeGuardian detect scams?",
                  answer: "Our AI scans smart contracts for malicious code, analyzes token distribution patterns, monitors liquidity locks, and evaluates team backgrounds. We look for red flags like hidden minting functions, ownership renunciation issues, and suspicious transaction patterns."
                },
                {
                  question: "Is MemeGuardian suitable for beginners?",
                  answer: "Absolutely! We designed MemeGuardian with both beginners and experienced traders in mind. Our user-friendly interface provides clear risk assessments and educational resources to help new investors make informed decisions."
                },
                {
                  question: "Why should I choose a paid plan?",
                  answer: "Paid plans offer advanced features like real-time monitoring, deeper contract analysis, portfolio tracking, and unlimited access to our AI assistant. These tools provide a comprehensive security blanket for your investments and can help you identify opportunities faster."
                },
                {
                  question: "How accurate is MemeGuardian's analysis?",
                  answer: "Our analysis is highly accurate, but cryptocurrency investments always carry risk. We provide a confidence score with each analysis and continuously improve our AI models based on new scam patterns and market developments."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-10 text-center">
              <p className="mb-4 text-muted-foreground">
                Still have questions? We're here to help!
              </p>
              <Button variant="outline" className="bg-card">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 bg-background/90 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-4">MemeGuardian</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/token-analyzer" className="text-muted-foreground hover:text-primary transition-colors">Token Analyzer</Link></li>
                <li><Link to="/scam-detector" className="text-muted-foreground hover:text-primary transition-colors">Scam Detector</Link></li>
                <li><Link to="/glossary" className="text-muted-foreground hover:text-primary transition-colors">Glossary</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-meme-purple" />
              <span className="font-bold text-gradient">MemeGuardian</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2025 MemeGuardian. All rights reserved. Protecting your memecoin investments with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
