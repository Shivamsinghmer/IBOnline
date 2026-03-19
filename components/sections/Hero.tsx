import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Users, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#aff33e]/20 rounded-full blur-[100px] animate-float opacity-40 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#aff33e]/15 rounded-full blur-[120px] animate-float opacity-30 mix-blend-multiply dark:mix-blend-lighten pointer-events-none animation-delay-2000" />
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-[#aff33e]/10 rounded-full blur-[90px] animate-float opacity-20 pointer-events-none animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 px-4 py-2 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-full text-sm font-bold flex items-center gap-2 border border-[var(--primary)]/20 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Star size={16} fill="currentColor" />
          <span>Voted #1 Online Tutoring Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--foreground)] max-w-5xl leading-[1.1] md:leading-[1] mb-10 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Learn Anything. <br />
          From Anyone. <br />
          <span className="text-[#aff33e]">At Your Pace.</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Expert one-on-one sessions tailored specifically to your learning style. 
          Master subjects, ace exams, and build confidence with BrightMind.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Link href="/tutors">
            <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl">
              Find a Tutor <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="ghost" size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl border-2 border-transparent hover:border-[var(--border)]">
              How It Works
            </Button>
          </Link>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
          {[
            { label: "Active Students", value: "10,000+", icon: <Users size={20} /> },
            { label: "Expert Tutors", value: "500+", icon: <GraduationCap size={20} /> },
            { label: "Satisfaction", value: "98.4%", icon: <Star size={20} /> },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="bg-[var(--card)] border border-[var(--border)] rounded-full py-4 px-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[var(--accent)] rounded-full text-[var(--accent-foreground)]">
                  {stat.icon}
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">{stat.label}</span>
              </div>
              <span className="text-2xl font-mono font-bold text-[var(--foreground)]">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
