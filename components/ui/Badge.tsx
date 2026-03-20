import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]";
  
  const variants = {
    primary: "bg-accent text-black border-transparent",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] border-transparent",
    outline: "border border-[var(--border)] text-[var(--foreground)]",
    accent: "bg-[var(--accent)] text-[var(--accent-foreground)] border-transparent",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

export function SubjectBadge({ label, icon }: { label: string; icon?: string }) {
  return (
    <div className="group flex items-center gap-2 px-4 py-2 bg-transparent border border-[var(--border)] rounded-full hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all duration-300 cursor-pointer">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--foreground)]">{label}</span>
      <div className="h-[2px] w-0 bg-[var(--primary)] group-hover:w-full transition-all duration-300 absolute bottom-0 left-0" />
    </div>
  );
}
