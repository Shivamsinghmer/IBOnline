import React from "react";
import { PenLine, PhoneCall, CalendarPlus, CreditCard } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Fill the engagement form",
    description: "Tell us about yourself, your grade level, and the subjects you are struggling with.",
    icon: <PenLine size={24} />,
    image: "/step1.jpg",
  },
  {
    number: "2",
    title: "Connect with a counselor",
    description: "Chat with a friendly counselor who will listen to your goals and find the right tutor.",
    icon: <PhoneCall size={24} />,
    image: "/step2.jpg",
  },
  {
    number: "3",
    title: "Book a free trial class",
    description: "Try a live class with your matched tutor — completely free, no strings attached.",
    icon: <CalendarPlus size={24} />,
    image: "/step3.jpg",
  },
  {
    number: "4",
    title: "Pay for subsequent engagement",
    description: "Happy with your trial? Pay for sessions and start making real progress today.",
    icon: <CreditCard size={24} />,
    image: "/step4.jpg",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary-dark)] font-semibold mb-3">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-4 px-2">How It Works</h2>
          <p className="text-sm sm:text-base font-body text-[var(--muted)] max-w-md mx-auto leading-relaxed px-4">
            Success is just four simple steps away. Our streamlined process 
            makes finding and working with expert tutors effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-[var(--background)] rounded-2xl p-6 sm:p-8 border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_8px_30px_rgba(0,69,135,0.15)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Step number Watermark */}
              <span className="absolute -top-6 sm:-top-10 -right-4 sm:-right-6 font-heading text-[8rem] sm:text-[12rem] font-bold text-[var(--primary)] opacity-[0.08] select-none pointer-events-none group-hover:opacity-15 transition-all duration-500">
                {step.number}
              </span>

              {/* Icon chip */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] mb-8 shadow-[0_8px_30px_rgba(147,197,253,0.3)] group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-heading font-semibold text-[var(--foreground)] mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-[15px] font-body text-[var(--muted)] leading-relaxed mb-6 relative z-10">
                {step.description}
              </p>

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-[var(--border)]">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
