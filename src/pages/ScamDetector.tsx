
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { useMeme } from '@/contexts/MemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ScamDetector = () => {
  const { currentAiMessage, isAiLoading, scamCheckResult, checkForScam } = useMeme();
  const [contractAddress, setContractAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contractAddress.trim()) {
      checkForScam(contractAddress.trim());
    }
  };

  const getRiskBadge = () => {
    if (!scamCheckResult) return null;

    switch (scamCheckResult.riskLevel) {
      case 'Low':
        return <Badge className="bg-green-500">Low Risk</Badge>;
      case 'Medium':
        return <Badge className="bg-amber-500">Medium Risk</Badge>;
      case 'High':
        return <Badge className="bg-red-500">High Risk</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Scam Detector</h1>
            <p className="text-muted-foreground">Check any memecoin contract for potential scams, red flags, and security issues.</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Contract Address</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  placeholder="0x..."
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={isAiLoading || !contractAddress.trim()}>
                  {isAiLoading ? 'Checking...' : 'Check'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <AiMessage message={currentAiMessage} isLoading={isAiLoading} className="mb-8" />
          
          {scamCheckResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className={
                scamCheckResult.riskLevel === 'Low' ? 'border-green-200 dark:border-green-800' : 
                scamCheckResult.riskLevel === 'Medium' ? 'border-amber-200 dark:border-amber-800' : 
                'border-red-200 dark:border-red-800'
              }>
                <CardHeader className={
                  scamCheckResult.riskLevel === 'Low' ? 'bg-green-50 dark:bg-green-900/20' : 
                  scamCheckResult.riskLevel === 'Medium' ? 'bg-amber-50 dark:bg-amber-900/20' : 
                  'bg-red-50 dark:bg-red-900/20'
                }>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <span>Risk Assessment</span>
                    </div>
                    {getRiskBadge()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Issues Detected</h3>
                  <ul className="space-y-2 mb-6">
                    {scamCheckResult.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {scamCheckResult.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScamDetector;
