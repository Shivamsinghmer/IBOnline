import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
  max?: number;
}

export function StarRating({ rating, className, max = 5 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-[var(--muted-foreground)] opacity-30" />
      ))}
      <span className="ml-2 text-sm font-mono text-[var(--foreground)]">{rating.toFixed(1)}</span>
    </div>
  );
}
