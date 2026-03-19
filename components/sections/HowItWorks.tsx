import React from "react";
import Image from "next/image";
import { Search, Calendar, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Browse Tutors",
    description: "Search through our curated list of 500+ expert tutors. Filter by subject, price range, and student reviews to find your perfect match.",
    icon: <Search className="w-8 h-8 text-[#aff33e]" />,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "02",
    title: "Book a Session",
    description: "Pick a date and time that fits your schedule. Our easy booking system handles everything, including secure payments and reminders.",
    icon: <Calendar className="w-8 h-8 text-[#aff33e]" />,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "03",
    title: "Start Learning",
    description: "Connect with your tutor via our interactive virtual classroom. Access collaborative whiteboards, screen sharing, and recorded sessions.",
    icon: <GraduationCap className="w-8 h-8 text-[#aff33e]" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">How It Works</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl">
            Success is just three simple steps away. Our streamlined process 
            makes finding and working with expert tutors effortless.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={cn(
                "flex flex-col gap-12 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 relative">
                {/* Large Background Number */}
                <span className="absolute -top-16 -left-8 text-[12rem] md:text-[16rem] font-serif text-[#aff33e]/10 pointer-events-none select-none">
                  {step.number}
                </span>
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)] rounded-2xl flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif">{step.title}</h3>
                  <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full relative group">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[#aff33e] rounded-[var(--radius)] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="relative aspect-[4/3] rounded-[var(--radius)] overflow-hidden border-2 border-[var(--border)] shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
