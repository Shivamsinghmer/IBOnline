"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Find a Tutor", href: "/tutors" },
    { name: "Subjects", href: "/#subjects" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-[var(--border)] py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-serif tracking-tight text-[var(--foreground)] hover:opacity-80 transition-opacity"
        >
          BrightMind<span className="text-[#aff33e]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--foreground)] hover:text-[#aff33e] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-[var(--border)] mx-2" />
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link href="/book">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--foreground)]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[var(--foreground)] hover:text-[#aff33e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
