"use client";

import React, { useState } from "react";
import { tutors } from "@/lib/data";
import TutorCard from "@/components/tutors/TutorCard";
import TutorFilters from "@/components/tutors/TutorFilters";
import { Search, SlidersHorizontal, ArrowLeft, ArrowRight, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TutorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  // Calculate pagination
  const totalPages = Math.ceil(tutors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTutors = tutors.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">Find Your Perfect <br className="hidden md:block" /> Tutor<span className="text-[#aff33e]">.</span></h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-xl">
              Discover world-class educators from our community of 500+ experts. 
              Filter by subject, price, and rating to find your match.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[var(--card)] p-4 border border-[var(--border)] rounded-2xl shadow-sm">
            <span className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Sort By:</span>
            <select className="bg-transparent border-none focus:ring-0 font-bold text-[var(--foreground)] cursor-pointer">
              <option>Most Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] overflow-y-auto no-scrollbar lg:pr-4">
            <TutorFilters />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
              <span className="text-lg font-bold font-serif">{tutors.length} Tutors found</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                  <SlidersHorizontal size={18} /> Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentTutors.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex items-center justify-center gap-4">
              <Button 
                variant="outline" 
                size="md" 
                className="h-12 w-12 p-0 rounded-2xl"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                <ChevronLeft size={24} />
              </Button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button 
                    key={i + 1}
                    className={cn(
                      "h-12 w-12 p-0 rounded-2xl font-bold font-mono transition-all",
                      currentPage === i + 1 
                        ? 'bg-[#aff33e] text-black shadow-lg scale-110' 
                        : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]'
                    )}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="md" 
                className="h-12 w-12 p-0 rounded-2xl"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
