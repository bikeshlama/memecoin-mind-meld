
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Coins, Shield, LineChart, TrendingUp, AlertTriangle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-muted-foreground">Access all your MemeGuardian tools from one place</p>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="tools">Analysis Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-violet-500/10 to-violet-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Coins className="h-5 w-5 mr-2 text-violet-500" />
                  Analysis Tools
                </CardTitle>
                <CardDescription>Analyze tokens & risks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Evaluate memecoin tokens based on key metrics and detect potential risks.</p>
                <Link to="/token-analyzer">
                  <div className="text-violet-500 text-sm font-medium flex items-center">
                    Open Analyzer <TrendingUp className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-teal-500/10 to-teal-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Shield className="h-5 w-5 mr-2 text-teal-500" />
                  Security Tools
                </CardTitle>
                <CardDescription>Identify scams & red flags</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Check contracts for potential scams, security issues, and common red flags.</p>
                <Link to="/scam-detector">
                  <div className="text-teal-500 text-sm font-medium flex items-center">
                    Security Check <AlertTriangle className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <LineChart className="h-5 w-5 mr-2 text-amber-500" />
                  Portfolio Tracker
                </CardTitle>
                <CardDescription>Track your investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Monitor your memecoin portfolio, track performance, and set price alerts.</p>
                <Link to="/portfolio">
                  <div className="text-amber-500 text-sm font-medium flex items-center">
                    View Portfolio <TrendingUp className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent interactions on MemeGuardian</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="bg-primary/10 p-2 rounded">
                    <Coins className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Token Analysis</h4>
                    <p className="text-sm text-muted-foreground">You analyzed PEPE token</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">2h ago</div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="bg-primary/10 p-2 rounded">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Security Check</h4>
                    <p className="text-sm text-muted-foreground">Contract verified: 0x4321...</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">1d ago</div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded">
                    <LineChart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Portfolio Update</h4>
                    <p className="text-sm text-muted-foreground">Added DOGE to portfolio</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">3d ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="portfolio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="h-5 w-5 mr-2 text-primary" />
                Portfolio Tracker
              </CardTitle>
              <CardDescription>
                Monitor your memecoin investments and track performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="font-medium">Token</div>
                    <div className="font-medium">Price</div>
                    <div className="font-medium">24h Change</div>
                    <div className="font-medium">Holdings</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                        <Coins className="h-4 w-4 text-blue-500" />
                      </div>
                      <span>DOGE</span>
                    </div>
                    <div>$0.1245</div>
                    <div className="text-green-500">+5.6%</div>
                    <div>$1,245.00</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                        <Coins className="h-4 w-4 text-green-500" />
                      </div>
                      <span>SHIB</span>
                    </div>
                    <div>$0.00002</div>
                    <div className="text-red-500">-2.3%</div>
                    <div>$860.00</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                        <Coins className="h-4 w-4 text-purple-500" />
                      </div>
                      <span>PEPE</span>
                    </div>
                    <div>$0.000005</div>
                    <div className="text-green-500">+12.4%</div>
                    <div>$450.00</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Total Portfolio Value</div>
                    <div className="text-xl font-bold">$2,555.00</div>
                  </div>
                  <div className="text-sm text-green-500 flex justify-end items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" /> +4.8% (24h)
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90">
                  Add New Token
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance History</CardTitle>
                <CardDescription>Your portfolio's performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
                  <p className="text-muted-foreground">Portfolio chart will appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Price Alerts</CardTitle>
                <CardDescription>Get notified about price movements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div>DOGE above $0.14</div>
                    <div className="text-amber-500">Pending</div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div>SHIB below $0.00001</div>
                    <div className="text-amber-500">Pending</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Create New Alert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tools" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coins className="h-5 w-5 mr-2 text-primary" />
                Token Analysis Tool
              </CardTitle>
              <CardDescription>
                Analyze any memecoin token to assess its metrics and potential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Use our token analyzer to evaluate tokens based on:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Supply and distribution metrics</li>
                  <li>Liquidity depth and stability</li>
                  <li>Tax structures and tokenomics</li>
                  <li>Holder concentration analysis</li>
                  <li>Security vulnerabilities</li>
                </ul>
                <Link to="/token-analyzer" className="block mt-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-flex items-center">
                    Go to Token Analyzer <TrendingUp className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Security Check Tool
              </CardTitle>
              <CardDescription>
                Check any memecoin contract for potential scams and security issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Use our security tools to identify:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Honeypot contracts that prevent selling</li>
                  <li>Hidden mint functions or backdoors</li>
                  <li>Unusual permissions or ownership structures</li>
                  <li>Risky contract implementations</li>
                  <li>Common scam patterns</li>
                </ul>
                <Link to="/scam-detector" className="block mt-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-flex items-center">
                    Go to Security Check <AlertTriangle className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
