"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { subjects } from "@/lib/data";
import { Search, Filter, SlidersHorizontal, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TutorFilters = () => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-10">
      {/* Search */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-bold font-serif flex items-center gap-2">
          <Search size={20} className="text-accent" />
          Search
        </label>
        <Input placeholder="By name or keyword..." className="h-14 rounded-2xl border-2 focus-visible:ring-offset-0" />
      </div>

      {/* Subjects */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-bold font-serif flex items-center gap-2">
          <Filter size={18} className="text-accent" />
          Subjects
        </label>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {subjects.map((subject) => (
            <label key={subject.id} className="group flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-[var(--border)] hover:border-accent hover:bg-accent/5 transition-all">
              <input type="checkbox" className="w-5 h-5 accent-accent rounded-md transition-colors" />
              <span className="text-sm font-medium text-[var(--foreground)]">{subject.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-bold font-serif flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-accent" />
          Price Range
        </label>
        <div className="flex items-center gap-4">
          <Input placeholder="Min" className="h-12 rounded-xl" />
          <span className="text-[var(--muted-foreground)]">-</span>
          <Input placeholder="Max" className="h-12 rounded-xl" />
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="flex flex-col gap-4">
        <label className="text-lg font-bold font-serif flex items-center gap-2">
          <Star size={18} className="text-accent" />
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <Button key={rating} variant="outline" size="sm" className="rounded-full border-accent/30 hover:bg-accent/10">
              {rating}+ Stars
            </Button>
          ))}
        </div>
      </div>

      {/* Quick Filters */}
      <div className="p-6 bg-[var(--accent)] border border-accent/20 rounded-3xl mt-4">
        <h4 className="font-bold text-black mb-4">Availability</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-5 h-5 accent-black" defaultChecked />
          <span className="text-sm font-medium text-black/80 group-hover:text-black">Online Now</span>
        </label>
      </div>

      <Button className="w-full h-14 text-lg font-bold mt-4">Reset All Filters</Button>
    </aside>
  );
};

export default TutorFilters;
