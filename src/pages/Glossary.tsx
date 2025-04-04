
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const glossaryItems = [
  {
    term: 'Airdrop',
    definition: 'A distribution of cryptocurrency tokens to wallet addresses, usually for free, as part of a marketing campaign or community-building initiative.'
  },
  {
    term: 'APY',
    definition: 'Annual Percentage Yield - the real rate of return earned on an investment, taking into account the effect of compounding interest.'
  },
  {
    term: 'Aping In',
    definition: 'Investing a large amount in a cryptocurrency without proper research, often driven by FOMO (fear of missing out).'
  },
  {
    term: 'Bag Holder',
    definition: 'Someone who holds onto a cryptocurrency that has significantly decreased in value, often in the hope that it will recover.'
  },
  {
    term: 'Bull/Bear Market',
    definition: 'Bull market refers to a rising market; bear market refers to a declining market.'
  },
  {
    term: 'Burn',
    definition: 'The process of permanently removing tokens from circulation, often done to increase scarcity and potentially value.'
  },
  {
    term: 'Diamond Hands',
    definition: 'A term used to describe someone who holds onto their investment despite market volatility or losses.'
  },
  {
    term: 'Fair Launch',
    definition: 'A cryptocurrency launch where there is no pre-sale, private allocation, or pre-mining before the public launch.'
  },
  {
    term: 'Gas Fee',
    definition: 'The cost required to perform a transaction on the Ethereum blockchain, paid in ETH.'
  },
  {
    term: 'Honeypot',
    definition: 'A cryptocurrency contract that appears legitimate but contains code that prevents buyers from selling their tokens.'
  },
  {
    term: 'Liquidity',
    definition: 'The degree to which an asset can be quickly bought or sold without affecting its price. High liquidity means easy trading.'
  },
  {
    term: 'LP (Liquidity Pool)',
    definition: 'A collection of funds locked in a smart contract that facilitates trading by providing liquidity.'
  },
  {
    term: 'Market Cap',
    definition: 'The total value of a cryptocurrency, calculated by multiplying the price by the circulating supply.'
  },
  {
    term: 'Moon',
    definition: 'A term used to describe a rapidly increasing price of a cryptocurrency (e.g., "This coin is going to the moon!").'
  },
  {
    term: 'Paper Hands',
    definition: 'A term used to describe someone who sells their investment at the first sign of trouble or small profit.'
  },
  {
    term: 'Pump and Dump',
    definition: 'A scheme where a group artificially inflates the price of a cryptocurrency through misleading statements, then sells their overvalued tokens.'
  },
  {
    term: 'Rug Pull',
    definition: 'A scam where developers abandon a project and run away with investor funds, typically by removing liquidity from trading pools.'
  },
  {
    term: 'Smart Contract',
    definition: 'A self-executing contract with the terms directly written into code, which automatically enforces and executes the terms of an agreement.'
  },
  {
    term: 'Tokenomics',
    definition: 'The economics of a token, including supply, distribution, utility, and incentive mechanisms.'
  },
  {
    term: 'Whale',
    definition: 'A person or entity that holds a large amount of a particular cryptocurrency, enough to influence its price with a single trade.'
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Search className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Memecoin Glossary</h1>
            <p className="text-muted-foreground">Learn the essential terminology of the memecoin and cryptocurrency world.</p>
          </div>
          
          <div className="flex items-center mb-8 relative">
            <Search className="absolute left-3 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="space-y-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle>{item.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground text-sm">
                      {item.definition}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No glossary terms found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
