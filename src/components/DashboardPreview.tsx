
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coins, Shield, Info, LineChart, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-violet-500/5 to-teal-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Your Personal Memecoin Guardian</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sign up to access our powerful dashboard with token analysis tools, scam detection, and more
          </p>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-teal-500/20 rounded-2xl blur-2xl" />
          <Card className="border border-border/50 shadow-xl overflow-hidden backdrop-blur-sm bg-background/90 relative">
            <CardHeader className="border-b border-border/40 bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <Coins className="h-5 w-5 mr-2 text-violet-500" />
                    Dashboard
                  </CardTitle>
                  <CardDescription>Preview of members-only features</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Coins className="h-5 w-5 text-violet-500" />
                    <span>Token Analysis</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Analyze tokenomics, liquidity, and supply metrics for any memecoin
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Contract risk evaluation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Liquidity analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Supply distribution</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Shield className="h-5 w-5 text-teal-500" />
                    <span>Scam Detection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Identify potential scams and red flags in memecoin contracts
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Honeypot detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Hidden minting functions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Security backdoors</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <LineChart className="h-5 w-5 text-amber-500" />
                    <span>Portfolio Tracker</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monitor your memecoin investments and track performance
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Price alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Portfolio analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Market reports</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-muted/30 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-teal-600 text-white">
                  <Link to="/auth">Sign Up Now</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
