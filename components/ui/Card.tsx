import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--card)] text-[var(--card-foreground)] rounded-[var(--radius)] border border-[var(--border)] transition-all duration-300 shadow-md",
          hover && "hover:-translate-y-1 hover:shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 flex flex-col gap-1.5", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0 flex items-center", className)} {...props} />;
}
