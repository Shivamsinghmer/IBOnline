"use client";

import React from "react";
import { subjects } from "@/lib/data";

const SubjectsStrip = () => {
  // Use 4 sets of subjects to ensure the marquee always fills the container and loops seamlessly
  const marqueeItems = [...subjects, ...subjects, ...subjects, ...subjects];

  return (
    <section id="subjects" className="py-3 bg-[var(--surface-2)] border-y border-[var(--border)] overflow-hidden flex items-center h-16">
      <div className="container max-w-6xl mx-auto px-6 flex items-center gap-6 relative z-10">
        <label className="shrink-0 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-semibold whitespace-nowrap bg-[var(--surface-2)] pr-4 z-20">
          Tutoring Available For
        </label>
        
        <div className="relative flex-1 overflow-hidden items-center flex h-full">
          {/* Fades for smooth entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--surface-2)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--surface-2)] to-transparent z-10" />

          <div className="animate-marquee gap-3 flex items-center whitespace-nowrap">
            {marqueeItems.map((subject, index) => (
              <div 
                key={`${subject.id}-${index}`} 
                className="group flex-shrink-0 bg-white border border-[var(--border)] rounded-full px-4 py-1.5 text-sm font-body font-medium text-[var(--foreground)] hover:bg-[var(--primary-light)] hover:border-[var(--primary)] hover:text-[#3d6b00] transition-all duration-150 cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span className="text-base leading-none">{subject.icon}</span>
                <span>{subject.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsStrip;
