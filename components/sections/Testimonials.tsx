import React from "react";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[var(--surface-2)] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-6">Success Stories</h2>
          <p className="text-base font-body text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Testimonials from real students who unlocked their potential with our tutors 
            and achieved substantial improvement in their grades and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-7 border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)] transition-all duration-300 flex flex-col items-start h-full"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--primary)] text-[var(--primary)]" />
                ))}
              </div>
              
              <p className="text-[15px] font-body text-[var(--foreground)] leading-relaxed mb-10 flex-grow font-normal">
                {testimonial.quote}
              </p>

              <div className="w-full border-t border-[var(--border)] pt-5 flex items-center gap-3">
                <div className="relative w-9 h-9 min-w-[36px] rounded-full overflow-hidden border border-[var(--border)] shadow-sm">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.studentName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-body font-semibold text-[var(--foreground)] leading-tight">
                    {testimonial.studentName}
                  </span>
                  <span className="text-xs font-body text-[var(--muted)]">
                    {testimonial.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
