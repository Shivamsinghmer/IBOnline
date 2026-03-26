"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Subjects", href: "#subjects" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        mobileMenuOpen
          ? "bg-white border-b border-[var(--border)] py-3"
          : scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[var(--border)] py-3"
            : "bg-white/80 backdrop-blur-lg border-b border-transparent py-4"
      )}
    >
      <nav className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center h-8 sm:h-9 w-48 sm:w-64 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="IBMadeEasy Logo"
            width={256}
            height={90}
            className="h-16 sm:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-body font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link href="#contact-form">
            <button className="bg-[var(--dark)] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[var(--foreground)]/90 active:scale-[0.98] transition-all">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--foreground)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--border)] transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-body font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact-form" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-[var(--dark)] text-white font-medium px-5 py-3 rounded-full hover:bg-[var(--foreground)]/90 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
