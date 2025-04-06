
import React, { useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart, ShieldCheck, HeartPulse, Zap, ArrowRight, Check, Gem, MessageCircle, Send, HelpCircle, Plus, Minus, Facebook, Twitter, Instagram, Github, Linkedin, LayoutDashboard, LineChart, PieChart, Activity, Bot, AlertCircle, TrendingUp, Clock, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [chatMessage, setChatMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: "Hey there! I'm the MemeGuardian AI assistant. How can I help you today with your memecoin investments?" },
    { type: 'user', content: "How do I check if a token might be a scam?" },
    { type: 'bot', content: "Great question! To check if a token might be a scam, you should look for these red flags:", 
      list: [
        "Smart contracts that can't be verified",
        "Hidden minting functions",
        "Unusually high dev/team token allocation",
        "Locked liquidity for very short periods",
        "Anonymous teams with no track record"
      ],
      footer: "MemeGuardian can automatically check all of these factors and more for you!" }
  ]);
  
  const { isAuthenticated } = useAuth();
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', content: chatMessage }]);
    
    // Simulate bot thinking
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          type: 'bot', 
          content: "I've analyzed your question about memecoins. Based on our security database, always remember to check smart contract verification, liquidity locks, and team background before investing."
        }
      ]);
      
      // Scroll to bottom after adding new messages
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 1000);
    
    setChatMessage('');
  };
  
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
      
      {/* Enhanced Chatbot Section */}
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
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                      <p className="text-xs text-muted-foreground">Online 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div ref={chatContainerRef} className="p-4 h-[350px] overflow-y-auto flex flex-col space-y-4 scrollbar-thin">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`${
                        msg.type === 'bot' 
                          ? "bg-muted/30 rounded-xl rounded-tl-none max-w-[85%] self-start" 
                          : "bg-primary/10 rounded-xl rounded-tr-none max-w-[85%] self-end"
                      } p-3 animate-fade-in`}
                    >
                      {msg.type === 'bot' && (
                        <div className="flex items-start gap-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg" alt="AI" />
                            <AvatarFallback className="text-[10px] bg-violet-500/20 text-violet-500">AI</AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium">MemeGuardian AI</span>
                        </div>
                      )}
                      
                      <p>{msg.content}</p>
                      
                      {msg.list && (
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          {msg.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                      
                      {msg.footer && <p className="mt-2 text-sm">{msg.footer}</p>}
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSendMessage} className="p-3 border-t border-border/50 bg-card">
                  <div className="flex">
                    <Input 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask a question..."
                      className="flex-1 bg-muted/20"
                    />
                    <Button type="submit" variant="ghost" className="ml-2 text-primary">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
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
                    <Tabs defaultValue="features">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="examples">Example Questions</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="space-y-4">
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
                          <div key={index} className="flex items-start gap-3">
                            <div className="bg-violet-500/10 rounded-full p-2 mt-1">
                              <Check className="h-4 w-4 text-violet-500" />
                            </div>
                            <div>
                              <h4 className="font-medium">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="examples">
                        <div className="space-y-3">
                          {[
                            "Is TokenXYZ safe to invest in?",
                            "How do I spot a potential rug pull?",
                            "Compare the tokenomics of DogeCoin vs ShibaCoin",
                            "What's the current market trend for meme tokens?",
                            "Explain liquidity pools in simple terms"
                          ].map((question, i) => (
                            <div key={i} className="bg-muted/20 p-3 rounded-lg hover:bg-muted/40 cursor-pointer transition-colors">
                              <p className="text-sm">{question}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90 text-white">
                      {isAuthenticated ? 'Try Premium Features' : 'Sign In to Unlock Premium'}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Improved Dashboard Feature */}
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
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border/50 bg-card/90 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <LayoutDashboard className="h-5 w-5 text-violet-500 mr-2" />
                        Portfolio Overview
                      </CardTitle>
                      <Badge variant="outline" className="bg-violet-500/10 text-violet-500 border-violet-500/20">Real-time</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Total Value</span>
                          <div className="flex items-center gap-1 text-emerald-500">
                            <TrendingUp className="h-3 w-3" />
                            <span className="text-xs">+12.4%</span>
                          </div>
                        </div>
                        <div className="text-2xl font-bold">$24,685.32</div>
                      </div>
                      <Progress value={68} className="h-1.5" indicatorClassName="bg-gradient-to-r from-violet-500 to-teal-500" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50 bg-card/90 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                        Risk Analysis
                      </CardTitle>
                      <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Low Risk</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Safety Score</span>
                          <span className="font-bold">92/100</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Audited</span>
                          <span className="font-bold">83%</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Progress value={92} className="h-1.5" indicatorClassName="bg-emerald-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50 bg-card/90 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <PieChart className="h-5 w-5 text-pink-500 mr-2" />
                        Asset Allocation
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex gap-1 items-center">
                        <div className="w-[60%] h-2 bg-violet-500 rounded-l-full"></div>
                        <div className="w-[25%] h-2 bg-teal-500"></div>
                        <div className="w-[15%] h-2 bg-pink-500 rounded-r-full"></div>
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
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50 bg-card/90 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        Recent Activity
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { token: "DogeMoon", action: "Purchase", time: "2h ago", value: "+$450" },
                        { token: "CatCoin", action: "Sale", time: "1d ago", value: "-$120" }
                      ].map((activity, i) => (
                        <div key={i} className="flex justify-between items-center py-1 border-b border-border/30 text-sm">
                          <div>
                            <div className="font-medium">{activity.token}</div>
                            <div className="text-xs text-muted-foreground flex items-center">
                              <span>{activity.action}</span>
                              <span className="mx-1">•</span>
                              <span>{activity.time}</span>
                            </div>
                          </div>
                          <div className={activity.action === "Purchase" ? "text-emerald-500" : "text-red-500"}>
                            {activity.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 flex justify-center md:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90 transition-opacity text-white shadow-md">
                  Explore Full Dashboard <ChevronRight className="ml-1 h-4 w-4" />
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
                <Card className="border border-border/50 shadow-xl overflow-hidden relative backdrop-blur-sm bg-card/90 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                  <CardHeader className="bg-muted/30 border-b border-border/50 pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl flex items-center">
                        <LayoutDashboard className="h-5 w-5 text-violet-500 mr-2" />
                        Portfolio Dashboard
                      </CardTitle>
                      <Badge className="bg-emerald-500 text-white">Live</Badge>
                    </div>
                    <CardDescription>Last updated 5 minutes ago</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-sm">Total Portfolio Value</h4>
                          <div className="flex items-center">
                            <span className="text-xs text-muted-foreground mr-2">24h change:</span>
                            <span className="text-emerald-500 text-sm font-medium flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" /> +12.4%
                            </span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
                          $24,685.32
                        </div>
                        <Progress value={68} className="h-2" indicatorClassName="bg-gradient-to-r from-violet-500 to-teal-500" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
                          <h5 className="text-sm text-muted-foreground mb-1 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> Top Performer
                          </h5>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">DogeMoon</p>
                              <span className="text-emerald-500 text-sm flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" /> +28.5%
                              </span>
                            </div>
                            <div className="bg-violet-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-violet-500">DM</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
                          <h5 className="text-sm text-muted-foreground mb-1 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" /> Risk Score
                          </h5>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Low Risk</p>
                              <span className="text-emerald-500 text-sm flex items-center">
                                <ShieldCheck className="h-3 w-3 mr-1" /> Safe
                              </span>
                            </div>
                            <div className="bg-emerald-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <ShieldCheck className="h-5 w-5 text-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-5">
                        <h4 className="font-medium text-sm mb-3 flex items-center">
                          <PieChart className="h-4 w-4 text-violet-500 mr-1" /> Asset Allocation
                        </h4>
                        <div className="flex gap-1 items-center mb-3">
                          <div className="w-[60%] h-3 bg-violet-500 rounded-l-full"></div>
                          <div className="w-[25%] h-3 bg-teal-500"></div>
                          <div className="w-[15%] h-3 bg-pink-500 rounded-r-full"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                            <div>
                              <div>DogeMoon</div>
                              <div className="text-muted-foreground">60%</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <div>
                              <div>CatCoin</div>
                              <div className="text-muted-foreground">25%</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <div>
                              <div>FrogToken</div>
                              <div className="text-muted-foreground">15%</div>
                            </div>
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

      {/* Pricing Section */}
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

      {/* FAQs Section with Answers */}
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
                  answer: "MemeGuardian is an advanced platform designed to help investors safely navigate the memecoin market. We use AI-powered analytics to identify potential scams, assess token security, and provide insights for better investment decisions. Our tools provide real-time monitoring, smart contract analysis, and personalized recommendations to help both new and experienced investors make informed choices in the volatile memecoin space."
                },
                {
                  question: "How does MemeGuardian detect scams?",
                  answer: "Our AI scans smart contracts for malicious code, analyzes token distribution patterns, monitors liquidity locks, and evaluates team backgrounds. We look for red flags like hidden minting functions, ownership renunciation issues, and suspicious transaction patterns. Our advanced algorithms compare new tokens against databases of known scams and apply machine learning to continuously improve detection rates. We also monitor social sentiment and developer activity to provide a comprehensive risk assessment."
                },
                {
                  question: "Is MemeGuardian suitable for beginners?",
                  answer: "Absolutely! We designed MemeGuardian with both beginners and experienced traders in mind. Our user-friendly interface provides clear risk assessments and educational resources to help new investors make informed decisions. For beginners, we offer simplified explanations of complex blockchain concepts, step-by-step guides to using our tools, and a comprehensive glossary of crypto terminology. Our AI assistant can answer questions in plain language, making cryptocurrency investing more accessible to everyone."
                },
                {
                  question: "Why should I choose a paid plan?",
                  answer: "Paid plans offer advanced features like real-time monitoring, deeper contract analysis, portfolio tracking, and unlimited access to our AI assistant. These tools provide a comprehensive security blanket for your investments and can help you identify opportunities faster. Premium users get priority alerts about potential risks, customized investment recommendations based on their risk profile, and access to exclusive research reports and market analysis. For serious investors, the cost of a subscription can quickly pay for itself by helping avoid just one potential scam or identifying high-potential opportunities early."
                },
                {
                  question: "How accurate is MemeGuardian's analysis?",
                  answer: "Our analysis is highly accurate, but cryptocurrency investments always carry risk. We provide a confidence score with each analysis and continuously improve our AI models based on new scam patterns and market developments. In testing, our system has demonstrated a 97.8% accuracy rate in identifying known scams and suspicious tokens. However, we always recommend using our platform as one tool in your broader investment strategy, and never investing more than you can afford to lose. The crypto market is evolving rapidly, and while our AI adapts quickly, no security system can guarantee 100% protection."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 mr-2 text-violet-500 flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-7">
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
              <ShieldCheck className="h-6 w-6 text-meme-purple" />
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
