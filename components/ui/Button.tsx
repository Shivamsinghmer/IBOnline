import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[var(--radius)] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#aff33e] text-black hover:brightness-110 shadow-sm",
      secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/90 shadow-sm",
      ghost: "bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]",
      outline: "bg-transparent border border-[var(--border)] hover:bg-[var(--muted)] text-[var(--foreground)]",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
