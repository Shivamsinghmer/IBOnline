import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Rocket, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-32 bg-[#aff33e] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 border-[40px] border-black/5 rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-black/5 rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="p-4 bg-black/10 rounded-3xl mb-12">
          <Sparkles className="text-black w-10 h-10" />
        </div>
        
        <h2 className="text-4xl md:text-7xl font-serif text-black max-w-4xl mb-10 leading-[1.1] tracking-tight">
          Ready to Ace Your <br className="hidden md:block" /> Next Exam?
        </h2>
        
        <p className="text-xl md:text-2xl text-black/70 font-medium max-w-2xl mb-16 px-4">
          Join 10,000+ happy students and start your journey towards academic 
          excellence today. Personalized tutoring is just one click away.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/book">
            <Button 
              size="lg" 
              className="h-16 px-12 text-xl font-bold bg-black text-[#aff33e] hover:bg-black/90 rounded-2xl shadow-xl shadow-black/10 flex items-center gap-3 transition-transform"
            >
              Get Started Now <Rocket size={20} />
            </Button>
          </Link>
          <Link href="/tutors">
            <Button 
              variant="ghost" 
              size="lg" 
              className="h-16 px-12 text-xl font-bold border-2 border-black/10 text-black hover:bg-black/10 rounded-2xl transition-transform"
            >
              Browse Tutors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
