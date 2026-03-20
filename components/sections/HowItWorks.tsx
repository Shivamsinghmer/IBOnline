import React from "react";
import { PenLine, PhoneCall, CalendarPlus, CreditCard } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Fill the engagement form",
    description: "Start by filling out our quick engagement form with your details, current grade level, and the subjects you need help with.",
    icon: <PenLine size={20} />,
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "2",
    title: "Connect with a counselor",
    description: "Speak with an academic counselor to dive deeper into your learning needs, goals, and schedule so we can match you perfectly.",
    icon: <PhoneCall size={20} />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "3",
    title: "Book a free trial class",
    description: "Experience our teaching firsthand by booking a free trial class with your specially assigned IB expert tutor.",
    icon: <CalendarPlus size={20} />,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "4",
    title: "Pay for subsequent engagement",
    description: "If you're completely satisfied with your trial, securely pay for your upcoming sessions and start your journey to academic excellence.",
    icon: <CreditCard size={20} />,
    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=800",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary-dark)] font-semibold mb-3">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-4">How It Works</h2>
          <p className="text-base font-body text-[var(--muted)] max-w-md mx-auto leading-relaxed">
            Success is just four simple steps away. Our streamlined process 
            makes finding and working with expert tutors effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-[var(--background)] rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_8px_30px_rgba(168,232,50,0.15)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Step number Watermark */}
              <span className="absolute top-4 right-6 font-heading text-8xl font-bold text-[var(--border)] opacity-30 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                {step.number}
              </span>

              {/* Icon chip */}
              <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center text-[#3d6b00] mb-6 shadow-sm">
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
