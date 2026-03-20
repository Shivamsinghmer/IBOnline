import React from "react";
import { pricingPlans } from "@/lib/data";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[var(--card)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-[var(--muted-foreground)]">
            Invest in your future with our flexible plans. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={cn(
                "relative h-full flex flex-col items-center text-center rounded-[2rem] border-2",
                plan.highlight 
                  ? "bg-accent border-accent shadow-2xl scale-105 z-20" 
                  : "bg-[var(--card)] border-[var(--border)] shadow-md"
              )}
              hover={!plan.highlight}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Star fill="currentColor" size={14} />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="p-10 pb-6 w-full flex flex-col items-center">
                <h3 className={cn("text-2xl font-serif uppercase tracking-widest mb-4", plan.highlight ? "text-black" : "text-[var(--foreground)]")}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-6xl font-mono font-black", plan.highlight ? "text-black" : "text-[var(--foreground)]")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-lg font-medium", plan.highlight ? "text-black/60" : "text-[var(--muted-foreground)]")}>
                    /mo
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="p-10 pt-0 flex-grow w-full flex flex-col items-center">
                <div className={cn("h-[2px] w-12 rounded-full mb-10 opacity-30", plan.highlight ? "bg-black" : "bg-[var(--primary)]")} />
                <ul className="flex flex-col gap-6 w-full">
                  {plan.features.map((feature) => (
                    <li key={feature} className={cn("flex items-center gap-4 text-left transition-transform", plan.highlight ? "text-black" : "text-[var(--foreground)]")}>
                      <div className={cn("p-1 rounded-full", plan.highlight ? "bg-black/10 text-black" : "bg-[var(--accent)] text-accent")}>
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="p-10 pt-0 w-full">
                <Button 
                  size="lg" 
                  className={cn(
                    "w-full h-16 text-lg font-bold rounded-2xl transition-all shadow-lg",
                    plan.highlight 
                      ? "bg-black text-accent hover:bg-black/90 active:scale-95 border-b-4 border-black/20" 
                      : "bg-accent text-black hover:brightness-110 active:scale-95"
                  )}
                >
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
