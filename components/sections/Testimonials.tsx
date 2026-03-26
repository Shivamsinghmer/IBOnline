"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";

const Testimonials = () => {
  // Use exactly 5 testimonials as requested
  const displayTestimonials = testimonials.slice(0, 5);
  // Triple the data for infinite effect
  const extendedTestimonials = [...displayTestimonials, ...displayTestimonials, ...displayTestimonials];
  const [currentIndex, setCurrentIndex] = useState(displayTestimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Card width calculation (including gap)
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const gap = 24; // gap-6
        if (window.innerWidth >= 1024) {
          setCardWidth((width + gap) / 3);
        } else if (window.innerWidth >= 768) {
          setCardWidth((width + gap) / 2);
        } else {
          setCardWidth(width + gap);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleIndexChange = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    animate(x, -newIndex * cardWidth, {
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    });
  }, [cardWidth, x]);

  // Handle infinite wrap-around
  useEffect(() => {
    if (currentIndex >= displayTestimonials.length * 2) {
      setTimeout(() => {
        x.set(-displayTestimonials.length * cardWidth);
        setCurrentIndex(displayTestimonials.length);
      }, 850);
    } else if (currentIndex < displayTestimonials.length) {
      setTimeout(() => {
        x.set(-displayTestimonials.length * cardWidth);
        setCurrentIndex(displayTestimonials.length);
      }, 850);
    }
  }, [currentIndex, cardWidth, x, displayTestimonials.length]);

  // Auto-scroll mechanism
  useEffect(() => {
    if (isPaused || cardWidth === 0) return;

    const interval = setInterval(() => {
      handleIndexChange(currentIndex + 1);
    }, 3500); // Slower interval for better readability

    return () => clearInterval(interval);
  }, [currentIndex, handleIndexChange, isPaused, cardWidth]);

  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Initial position / window resize snap
  useEffect(() => {
    if (cardWidth > 0) {
      x.set(-currentIndexRef.current * cardWidth);
    }
  }, [cardWidth, x]);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      handleIndexChange(currentIndex - 1);
    } else {
      handleIndexChange(currentIndex + 1);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = cardWidth / 4;
    const dragOffset = info.offset.x;

    if (dragOffset < -threshold) {
      handleIndexChange(currentIndex + 1);
    } else if (dragOffset > threshold) {
      handleIndexChange(currentIndex - 1);
    } else {
      handleIndexChange(currentIndex);
    }
    setIsPaused(false);
  };

  // Calculate dot index (0 to 4)
  const activeDotIndex = currentIndex % displayTestimonials.length;

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[var(--surface-2)] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-4 sm:mb-6 tracking-tight leading-tight">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base font-body text-[var(--muted)] leading-relaxed max-w-xl">
              From moving up 2 grades to smashing the IAs, hear how our specialized tutors changed everything.
            </p>
          </div>
        </div>

        <div 
          className="relative px-4 sm:px-12" 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 group w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-white flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300 shadow-md grow-0 shrink-0 hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 group w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-white flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300 shadow-md grow-0 shrink-0 hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing py-4"
            drag="x"
            dragListener={true}
            dragMomentum={false}
            dragElastic={0.1}
            dragConstraints={{ left: -10000, right: 10000 }}
            style={{ x }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
          >
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] h-full"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[var(--border)] hover:shadow-xl hover:border-[var(--primary)] transition-all duration-500 h-full flex flex-col items-start group select-none">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[var(--primary)] text-[var(--primary)]" />
                    ))}
                  </div>

                  <p className="text-[16px] font-body text-[var(--foreground)] leading-relaxed mb-8 flex-grow font-normal italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="w-full border-t border-[var(--border)] pt-6 flex items-center gap-4">
                    <div className="relative w-11 h-11 min-w-[44px] rounded-xl overflow-hidden border-2 border-[var(--surface-2)] group-hover:border-[var(--primary-light)] transition-colors duration-300 shadow-sm">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.studentName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-body font-bold text-[var(--foreground)] leading-tight">
                        {testimonial.studentName}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-body text-[var(--muted)]">
                          {testimonial.grade}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                        <span className="text-xs font-body font-medium text-[var(--primary-dark)]">
                          {testimonial.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {displayTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                // Find the nearest instance of this index to jump to smoothly
                const currentBatch = Math.floor(currentIndex / displayTestimonials.length);
                handleIndexChange(currentBatch * displayTestimonials.length + idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDotIndex === idx 
                  ? "w-8 bg-[var(--primary)] shadow-[0_0_10px_rgba(0,69,135,0.3)]" 
                  : "w-2 bg-[var(--border)] hover:bg-[var(--primary-light)]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
