
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, BarChart, ShieldCheck, HeartPulse, Zap, ArrowRight, Check, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
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
      
      {/* Pricing Section - Moved here, right below How MemeGuardian Works */}
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest with Confidence?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of investors who trust MemeGuardian to protect their investments and find the best opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-pink-500 hover:opacity-90 text-white shadow-lg transition-all hover:shadow-xl">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="border-violet-500/50 hover:bg-violet-500/10">
                Watch Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Start protecting your investments today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <ShieldCheck className="h-8 w-8 text-violet-500 mr-2" />
              <span className="text-xl font-bold text-gradient bg-gradient-to-r from-violet-500 to-pink-500">MemeGuardian</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/token-analyzer" className="hover:text-foreground transition-colors">Token Analyzer</Link>
              <Link to="/scam-detector" className="hover:text-foreground transition-colors">Scam Detector</Link>
              <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MemeGuardian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
