"use client";

import React from "react";
import { subjects } from "@/lib/data";
import { SubjectBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const SubjectsStrip = () => {
  return (
    <section id="subjects" className="py-12 bg-[var(--background)] border-y border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6">
        <label className="block text-center text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-8">
          Explore Popular Subjects
        </label>
        
        {/* 
          Using Tailwind for scrollbar hiding and masking.
          Masking is done via [mask-image] utility.
          Scrollbar hiding is done via custom utility classes in globals.css or just inline-style for now to avoid hydration mismatch.
        */}
        <div 
          className={cn(
            "flex flex-nowrap overflow-x-auto pb-4 gap-4 -mx-6 px-6",
            "scrollbar-none" // We'll add this to globals.css
          )}
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {subjects.map((subject) => (
            <div key={subject.id} className="flex-shrink-0 transition-all duration-300">
              <SubjectBadge label={subject.label} icon={subject.icon} />
            </div>
          ))}
          {/* Duplicate for infinite feel scroll if needed */}
          {subjects.map((subject) => (
            <div key={`${subject.id}-dup`} className="flex-shrink-0 transition-all duration-300 pointer-events-none md:pointer-events-auto">
              <SubjectBadge label={subject.label} icon={subject.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsStrip;
