
import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AiMessageProps {
  message: string;
  isLoading?: boolean;
  className?: string;
}

const AiMessage = ({ message, isLoading = false, className }: AiMessageProps) => {
  return (
    <div className={cn("flex items-start gap-3 rounded-lg bg-accent/50 p-4 border border-border/40 shadow-sm", className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-teal-500 shadow-sm">
        <Shield className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1">
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce"></div>
            <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiMessage;
