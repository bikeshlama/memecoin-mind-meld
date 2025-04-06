
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
          <TabsTrigger value="analyzer">Token Analyzer</TabsTrigger>
          <TabsTrigger value="detector">Scam Detector</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-violet-500/10 to-violet-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Coins className="h-5 w-5 mr-2 text-violet-500" />
                  Token Analysis
                </CardTitle>
                <CardDescription>Analyze token metrics & risks</CardDescription>
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
                  Scam Detection
                </CardTitle>
                <CardDescription>Identify scams & red flags</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Check contracts for potential scams, security issues, and common red flags.</p>
                <Link to="/scam-detector">
                  <div className="text-teal-500 text-sm font-medium flex items-center">
                    Detect Scams <AlertTriangle className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Info className="h-5 w-5 mr-2 text-amber-500" />
                  Crypto Glossary
                </CardTitle>
                <CardDescription>Learn memecoin terminology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Access definitions and explanations for common crypto and memecoin terms.</p>
                <Link to="/glossary">
                  <div className="text-amber-500 text-sm font-medium flex items-center">
                    View Glossary <LineChart className="ml-1 h-4 w-4" />
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
                    <p className="text-sm text-muted-foreground">You haven't analyzed any tokens yet</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">-</div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Scam Detection</h4>
                    <p className="text-sm text-muted-foreground">You haven't detected any scams yet</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">-</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analyzer">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coins className="h-5 w-5 mr-2 text-primary" />
                Token Analyzer
              </CardTitle>
              <CardDescription>
                Analyze any memecoin token to assess its metrics, risk factors, and potential
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
        </TabsContent>
        
        <TabsContent value="detector">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Scam Detector
              </CardTitle>
              <CardDescription>
                Check any memecoin contract for potential scams, red flags, and security issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Use our scam detector to identify:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Honeypot contracts that prevent selling</li>
                  <li>Hidden mint functions or backdoors</li>
                  <li>Unusual permissions or ownership structures</li>
                  <li>Risky contract implementations</li>
                  <li>Common scam patterns</li>
                </ul>
                <Link to="/scam-detector" className="block mt-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-flex items-center">
                    Go to Scam Detector <AlertTriangle className="ml-2 h-4 w-4" />
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
