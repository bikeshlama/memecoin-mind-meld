
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {
  const [activeTab, setActiveTab] = useState<string>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const { login, register } = useAuth();

  const validateForm = () => {
    setError(null);
    
    if (activeTab === 'register') {
      if (!name.trim()) {
        setError('Name is required');
        return false;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }
    }
    
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!password.trim()) {
      setError('Password is required');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      if (activeTab === 'login') {
        await login(email, password);
        onOpenChange(false);
      } else {
        await register(name, email, password);
        setVerificationSent(true);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setVerificationSent(false);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-violet-500" />
            <span>MemeGuardian</span>
          </DialogTitle>
        </DialogHeader>

        {verificationSent ? (
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Verify your email</h2>
              <p className="text-muted-foreground">
                We've sent a verification link to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Please check your inbox and click the verification link to complete your registration.
              </p>
            </div>
            <div className="pt-4">
              <Button 
                onClick={() => onOpenChange(false)} 
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <Tabs defaultValue="login" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    placeholder="your@email.com" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    placeholder="••••••••" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input 
                    id="register-email" 
                    placeholder="your@email.com" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input 
                    id="register-password" 
                    placeholder="••••••••" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input 
                    id="confirm-password" 
                    placeholder="••••••••" 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                  />
                </div>
              </TabsContent>

              <div className="mt-6">
                <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-teal-500 hover:opacity-90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                      {activeTab === 'login' ? 'Logging in...' : 'Creating account...'}
                    </>
                  ) : (
                    activeTab === 'login' ? 'Login' : 'Create Account'
                  )}
                </Button>
              </div>
            </form>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};
