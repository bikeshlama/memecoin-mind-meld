
import React from 'react';
import { Shield, Coins, Zap, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-500/5 to-pink-500/5 pt-10">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-[30%] -left-[5%] h-[300px] w-[300px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-[5%] right-[30%] h-[250px] w-[250px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Hero content */}
          <motion.div 
            className="text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-violet-500/10 px-4 py-1.5 rounded-full mb-2">
              <span className="text-sm font-medium flex items-center text-violet-600 dark:text-violet-400">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                The #1 Memecoin Safety Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Navigate the <span className="text-gradient bg-gradient-to-r from-violet-600 via-pink-500 to-teal-500">Memecoin</span> Universe Safely
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Protect your investments with AI-powered analysis to detect scams, 
              analyze tokenomics, and make informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/token-analyzer">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:opacity-90 transition-opacity text-white shadow-lg">
                  Start Analyzing <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/scam-detector">
                <Button size="lg" variant="outline" className="border-violet-500/50 group hover:bg-violet-500/10">
                  <Shield className="mr-2 h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" /> Detect Scams
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-violet-${(i+3)*100} to-pink-${(i+5)*100} border-2 border-background flex items-center justify-center text-white text-xs font-bold`}>
                    {i+1}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">25,000+</span> users trust MemeGuardian
              </p>
            </div>
          </motion.div>
          
          {/* Hero image/visual */}
          <motion.div 
            className="relative mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-teal-500/20 rounded-2xl blur-2xl" />
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl overflow-hidden relative">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg">Token Safety Score</h3>
                      <p className="text-sm text-muted-foreground">Real-time analysis</p>
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-500 font-semibold text-sm px-3 py-1 rounded-full">
                      Safe
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Contract Security</span>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Liquidity</span>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Holder Distribution</span>
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '68%' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted/50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">Transactions monitored</span>
                    </div>
                    <span className="font-bold">38,249</span>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-4 flex justify-between items-center">
                  <Button size="sm" variant="ghost" className="text-xs">View Details</Button>
                  <Button size="sm" className="bg-violet-500 hover:bg-violet-600 text-white text-xs">Analyze Another</Button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -right-6 -top-6 bg-violet-600 text-white p-3 rounded-lg shadow-lg"
              initial={{ x: 20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Shield className="h-6 w-6" />
            </motion.div>
            
            <motion.div 
              className="absolute -left-6 bottom-12 bg-teal-600 text-white p-3 rounded-lg shadow-lg"
              initial={{ x: -20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Coins className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Dashboard Preview Section */}
      <DashboardPreview />
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-muted/30"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
