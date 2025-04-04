
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { useMeme } from '@/contexts/MemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TokenAnalyzer = () => {
  const { currentAiMessage, isAiLoading, tokenAnalysisResult, analyzeToken } = useMeme();
  const [tokenAddress, setTokenAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenAddress.trim()) {
      analyzeToken(tokenAddress.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Coins className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Token Analyzer</h1>
            <p className="text-muted-foreground">Analyze any memecoin token to assess its metrics, risk factors, and potential.</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Token Address</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  placeholder="0x..."
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={isAiLoading || !tokenAddress.trim()}>
                  {isAiLoading ? 'Analyzing...' : 'Analyze'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <AiMessage message={currentAiMessage} isLoading={isAiLoading} className="mb-8" />
          
          {tokenAnalysisResult && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Token Health Score</span>
                    <span className={`text-lg font-bold ${tokenAnalysisResult.score > 70 ? 'text-green-500' : tokenAnalysisResult.score > 40 ? 'text-amber-500' : 'text-red-500'}`}>
                      {tokenAnalysisResult.score}/100
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress 
                    value={tokenAnalysisResult.score} 
                    className={`h-3 ${tokenAnalysisResult.score > 70 ? 'bg-green-100' : tokenAnalysisResult.score > 40 ? 'bg-amber-100' : 'bg-red-100'}`}
                    indicatorClassName={tokenAnalysisResult.score > 70 ? 'bg-green-500' : tokenAnalysisResult.score > 40 ? 'bg-amber-500' : 'bg-red-500'}
                  />
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Token Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Supply:</span>
                      <span className="font-medium">{tokenAnalysisResult.supply}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Liquidity:</span>
                      <span className="font-medium">{tokenAnalysisResult.liquidity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Holders:</span>
                      <span className="font-medium">{tokenAnalysisResult.holders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Buy Tax:</span>
                      <span className="font-medium">{tokenAnalysisResult.buyTax}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sell Tax:</span>
                      <span className="font-medium">{tokenAnalysisResult.sellTax}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="bg-red-50 dark:bg-red-900/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Issues Found
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tokenAnalysisResult.issues.map((issue, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-50 dark:bg-green-900/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Positive Factors
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tokenAnalysisResult.positives.map((positive, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{positive}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenAnalyzer;
