
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import AiMessage from '@/components/AiMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useMeme } from '@/contexts/MemeContext';

const Index = () => {
  const { currentAiMessage, isAiLoading, askAi } = useMeme();
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      askAi(userInput);
      setUserInput('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Chat with MemeGuardian AI</h2>
          
          <div className="mb-6">
            <AiMessage message={currentAiMessage} isLoading={isAiLoading} />
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Ask about memecoins, token safety, or investment strategies..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isAiLoading || !userInput.trim()}>
              <Send className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
