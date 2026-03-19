import React from "react";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#aff33e]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-12">Success Stories</h2>
        <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-20 text-center">
          Hear from students who have unlocked their potential with our tutors. 
          Real results from dedicated learners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="text-left bg-[var(--card)] hover:border-[#aff33e]/30 transition-all duration-500 shadow-xl border border-[var(--border)] rounded-3xl">
              <CardContent className="p-10 flex flex-col items-start gap-8">
                <div className="p-4 bg-[var(--accent)] rounded-2xl">
                  <Quote size={40} className="text-[#aff33e] fill-current opacity-80" />
                </div>
                
                <p className="text-xl md:text-2xl font-serif italic text-[var(--foreground)] leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)] w-full">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--primary)]/20 shadow-sm">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.studentName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-[var(--foreground)] font-serif leading-tight">{testimonial.studentName}</h4>
                    <p className="text-sm font-medium text-[#aff33e] uppercase tracking-wider">{testimonial.grade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
