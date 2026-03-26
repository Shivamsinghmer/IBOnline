"use client";

import React, { useState } from "react";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const displayTestimonials = testimonials.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + displayTestimonials.length) % displayTestimonials.length;
      items.push({ item: displayTestimonials[index], offset: i, originalIndex: index });
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[var(--surface-2)] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-4 sm:mb-6 tracking-tight leading-tight">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base font-body text-[var(--muted)] leading-relaxed max-w-xl">
              From moving from the GPA by two grade points to helping smash the IAs, learn how our specialized tutors changed everything for these students.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-6 sm:py-8 px-4 sm:px-16">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-white flex items-center justify-center text-[var(--foreground)] transition-all duration-300 shadow-lg hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-white flex items-center justify-center text-[var(--foreground)] transition-all duration-300 shadow-lg hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="sm:hidden" />
            <ChevronRight size={20} className="hidden sm:block" />
          </button>
          
          <div className="flex justify-center items-stretch gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl relative z-10 px-6 sm:px-0">
            {getVisibleItems().map(({ item, offset, originalIndex }) => (
              <div
                key={`${originalIndex}-${offset}`}
                className={`w-full max-w-sm transition-all duration-500 ease-out flex-shrink-0 cursor-pointer
                  ${offset === 0 ? "scale-105 z-20 opacity-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-[var(--primary)] cursor-default" : "scale-[0.90] z-10 opacity-50 hidden md:block hover:opacity-80"}
                `}
                onClick={() => {
                  if (offset === -1) prev();
                  if (offset === 1) next();
                }}
              >
                <div className={`bg-white rounded-sm p-6 sm:p-8 h-full flex flex-col items-start border transition-all duration-300 ${offset === 0 ? 'border-[var(--primary)] shadow-md' : 'border-[var(--border)]'}`}>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[var(--primary)] text-[var(--primary)]" />
                    ))}
                  </div>

                  <p className="text-[15px] sm:text-[16px] font-body text-[var(--foreground)] leading-relaxed mb-8 flex-grow font-normal italic">
                    "{item.quote}"
                  </p>

                  <div className="w-full border-t border-[var(--border)] pt-6 flex items-center gap-4 mt-auto">
                    <div className="relative w-11 h-11 min-w-[44px] rounded-xl overflow-hidden border-2 border-[var(--surface-2)] shadow-sm">
                      <img
                        src={item.avatar}
                        alt={item.studentName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-body font-bold text-[var(--foreground)] leading-tight">
                        {item.studentName}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-body text-[var(--muted)]">
                          {item.grade}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                        <span className="text-xs font-body font-medium text-[var(--primary-dark)]">
                          {item.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Mobile) & Pagination */}
        <div className="flex flex-col items-center gap-6 mt-4 md:mt-8">

          <div className="flex justify-center gap-2.5">
            {displayTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? "w-8 bg-[var(--primary)] shadow-[0_0_10px_rgba(0,69,135,0.3)]" 
                    : "w-2 bg-[var(--border)] hover:bg-[var(--primary-light)]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
