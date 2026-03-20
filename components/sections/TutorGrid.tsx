import React from "react";
import Link from "next/link";
import { tutors } from "@/lib/data";
import TutorCard from "@/components/tutors/TutorCard";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TutorGrid = () => {
  // Landing page shows 6 featured tutors
  const featuredTutors = tutors.slice(0, 6);

  return (
    <section id="featured-tutors" className="py-24 bg-[var(--card)] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Featured Tutors</h2>
            <p className="text-xl text-[var(--muted-foreground)]">
              Learn from the best. Our tutors are carefully vetted professionals, 
              university professors, and industry experts.
            </p>
          </div>
          <Link href="/tutors" className="group flex items-center gap-3 text-lg font-bold text-[var(--foreground)] hover:text-accent transition-colors">
            View All 500+ Tutors
            <div className="p-3 rounded-full bg-[var(--muted)] group-hover:bg-accent group-hover:text-black transition-all">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorGrid;
