
import React from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Rocket, Gem, Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      description: 'Basic memecoin analysis',
      price: '$0',
      period: 'forever',
      features: [
        'Basic token analysis',
        'Simple scam detection',
        'Limited AI assistant',
        'Public information access'
      ],
      icon: Shield,
      color: 'bg-blue-500/10 text-blue-500',
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Pro',
      description: 'Advanced tools for active investors',
      price: '$19',
      period: 'per month',
      features: [
        'Everything in Free',
        'Advanced token metrics',
        'Real-time scam alerts',
        'Unlimited AI conversations',
        'Portfolio monitoring'
      ],
      icon: Rocket,
      color: 'bg-purple-500/10 text-purple-500',
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For professional traders and teams',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'API access',
        'Custom analysis tools',
        'Priority support',
        'Team collaboration',
        'Custom alerts and reports'
      ],
      icon: Gem,
      color: 'bg-emerald-500/10 text-emerald-500',
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the tools you need to navigate the memecoin market safely and profitably.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${plan.popular ? 'border-primary shadow-md scale-105 md:scale-110' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator />
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.buttonVariant} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
