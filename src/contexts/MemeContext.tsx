
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ScamCheckResult = {
  riskLevel: 'Low' | 'Medium' | 'High';
  issues: string[];
  recommendations: string[];
};

type TokenAnalysisResult = {
  supply: string;
  liquidity: string;
  holders: string;
  buyTax: string;
  sellTax: string;
  score: number;
  issues: string[];
  positives: string[];
};

interface MemeContextType {
  currentAiMessage: string;
  isAiLoading: boolean;
  scamCheckResult: ScamCheckResult | null;
  tokenAnalysisResult: TokenAnalysisResult | null;
  setCurrentAiMessage: (message: string) => void;
  setIsAiLoading: (isLoading: boolean) => void;
  checkForScam: (address: string) => void;
  analyzeToken: (address: string) => void;
  askAi: (question: string) => void;
}

const MemeContext = createContext<MemeContextType | undefined>(undefined);

export const MemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentAiMessage, setCurrentAiMessage] = useState<string>('Hello! I\'m MemeGuardian, your AI assistant for navigating the memecoin space. How can I help you today?');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [scamCheckResult, setScamCheckResult] = useState<ScamCheckResult | null>(null);
  const [tokenAnalysisResult, setTokenAnalysisResult] = useState<TokenAnalysisResult | null>(null);

  // Mock function for scam detection - in a real app, this would call a backend or blockchain API
  const checkForScam = (address: string) => {
    setIsAiLoading(true);
    setScamCheckResult(null);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we'll use a simple check based on the address length
      const lastChar = address.charAt(address.length - 1);
      
      if (!address.startsWith('0x')) {
        setScamCheckResult({
          riskLevel: 'High',
          issues: [
            'Invalid Ethereum address format',
            'Contract source code not verified',
            'Suspicious token distribution'
          ],
          recommendations: [
            'Do not invest in this token',
            'Report this address to blockchain explorers',
            'Verify contract addresses on trusted platforms'
          ]
        });
        setCurrentAiMessage(`I've analyzed the address ${address} and detected multiple high-risk issues. This appears to be an invalid or potentially fraudulent contract address. I recommend avoiding this token entirely.`);
      } else if (parseInt(lastChar, 16) % 3 === 0) {
        setScamCheckResult({
          riskLevel: 'Medium',
          issues: [
            'Ownership not renounced',
            'Moderate concentration of tokens in few wallets',
            'Limited trading history'
          ],
          recommendations: [
            'Proceed with caution',
            'Only invest what you can afford to lose',
            'Monitor the project closely for any suspicious activities'
          ]
        });
        setCurrentAiMessage(`I've analyzed the address ${address} and found some potential concerns. While not necessarily a scam, there are risk factors to consider. I'd recommend limiting your exposure if you decide to invest.`);
      } else {
        setScamCheckResult({
          riskLevel: 'Low',
          issues: [
            'Small liquidity pool relative to market cap'
          ],
          recommendations: [
            'Continue normal due diligence',
            'Follow standard investment best practices',
            'Diversify your investments'
          ]
        });
        setCurrentAiMessage(`I've analyzed the address ${address} and the initial check shows a relatively low risk profile. However, always remember that memecoins carry inherent volatility and risk regardless of their security.`);
      }
      
      setIsAiLoading(false);
    }, 2500);
  };

  // Mock function for token analysis
  const analyzeToken = (address: string) => {
    setIsAiLoading(true);
    setTokenAnalysisResult(null);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, generate some data based on the address
      const hash = Array.from(address).reduce((acc, char) => acc + char.charCodeAt(0), 0);
      
      const supply = `${(hash % 1000) * 1000000000}`;
      const liquidity = `$${(hash % 100) * 10000}`;
      const holders = `${(hash % 10) * 100 + 50}`;
      const buyTax = `${hash % 10}%`;
      const sellTax = `${hash % 15}%`;
      const score = Math.min(Math.floor(hash % 100), 90) + 10; // Always between 10 and 100
      
      setTokenAnalysisResult({
        supply,
        liquidity,
        holders,
        buyTax,
        sellTax,
        score,
        issues: [
          'Centralized token holdings',
          'Recently created token',
          score < 50 ? 'High sell tax' : ''
        ].filter(Boolean),
        positives: [
          'Liquidity locked',
          'Ownership renounced',
          score > 70 ? 'Active developer community' : ''
        ].filter(Boolean)
      });

      setCurrentAiMessage(`I've analyzed the token at address ${address}. The token has a total supply of ${supply} tokens with ${liquidity} in liquidity. There are ${holders} holder addresses, with buy and sell taxes at ${buyTax} and ${sellTax} respectively. Based on these metrics, I've assigned a health score of ${score}/100.`);
      
      setIsAiLoading(false);
    }, 3000);
  };

  // Mock function for general AI questions
  const askAi = (question: string) => {
    setIsAiLoading(true);

    // Common memecoin questions and answers
    const faqs: Record<string, string> = {
      'what is a memecoin': 'A memecoin is a cryptocurrency that originated from an internet meme or has a humorous nature. Unlike utility tokens, memecoins typically don\'t have inherent utility or technological innovation. Examples include Dogecoin, Shiba Inu, and Pepe.',
      'is investing in memecoins safe': 'Investing in memecoins is considered high risk due to their extreme volatility, lack of fundamental value, and susceptibility to pump-and-dump schemes. Only invest what you can afford to lose and always do thorough research.',
      'what is a rugpull': 'A "rug pull" is a type of exit scam where crypto developers abandon a project and run away with investor funds. In memecoins, this often happens when creators dump their tokens, removing liquidity from trading pools and leaving investors with worthless tokens.',
      'how to spot a scam memecoin': 'Look for red flags like anonymous teams, unrealistic promises, copy-pasted code without audits, high transaction taxes, locked liquidity for short periods, and concentrated token ownership. Always check contract verification and audit reports.'
    };

    // Simulate API call
    setTimeout(() => {
      // Check if the question matches any FAQ
      const normalizedQuestion = question.toLowerCase().trim();
      let answer = '';
      
      for (const [key, value] of Object.entries(faqs)) {
        if (normalizedQuestion.includes(key)) {
          answer = value;
          break;
        }
      }
      
      // Default response if no match
      if (!answer) {
        answer = `That's a great question about ${normalizedQuestion.includes('memecoin') ? 'memecoins' : 'crypto'}. While I'm designed to provide basic guidance, remember that cryptocurrency investments always carry risk, and it's important to do thorough research before investing.`;
      }
      
      setCurrentAiMessage(answer);
      setIsAiLoading(false);
    }, 1500);
  };

  return (
    <MemeContext.Provider value={{
      currentAiMessage,
      isAiLoading,
      scamCheckResult,
      tokenAnalysisResult,
      setCurrentAiMessage,
      setIsAiLoading,
      checkForScam,
      analyzeToken,
      askAi
    }}>
      {children}
    </MemeContext.Provider>
  );
};

export const useMeme = () => {
  const context = useContext(MemeContext);
  if (context === undefined) {
    throw new Error('useMeme must be used within a MemeProvider');
  }
  return context;
};
