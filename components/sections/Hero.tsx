import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] pt-20 sm:pt-24 pb-12 flex flex-col items-center justify-center bg-[var(--background)]">
      {/* Subtle Radial Glow */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,69,135,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div
          className="inline-flex items-center gap-2 bg-[var(--primary-light)] text-[var(--primary-dark)] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span>✦ Trusted by Students Worldwide 🌎</span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--foreground)] leading-[1.2] sm:leading-[1.1] mb-6 tracking-tight animate-fade-up px-2"
          style={{ animationDelay: "100ms", letterSpacing: "-0.01em" }}
        >
          Excel in Your IB Exams by perfecting your preparation with<br className="hidden sm:block" />
          <span className="relative inline-block mt-1 sm:mt-2">
            <em className="italic not-italic font-bold font-heading text-[var(--foreground)]">top Tutors</em>
            <svg viewBox="0 0 200 8" className="absolute -bottom-1 left-0 w-full text-[var(--primary)] pointer-events-none" preserveAspectRatio="none">
              <path
                d="M0 6 Q50 1 100 5 Q150 9 200 4"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-sm md:text-lg font-body text-[var(--muted)] max-w-xl mb-10 leading-relaxed animate-fade-up px-4"
          style={{ animationDelay: "200ms" }}
        >
          One to one online tutoring sessions catering to your specific needs and learning style.
          Master the subject matter, practice the exam style questions and build confidence.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12 w-full max-w-sm sm:max-w-none animate-fade-up px-6"
          style={{ animationDelay: "300ms" }}
        >
          <Link href="#contact-form" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[var(--primary)] text-white rounded-sm px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-[var(--primary-dark)] transition-all duration-200 shadow-[0_4px_20px_rgba(0,69,135,0.3)] flex items-center justify-center gap-2">
              Get Started
            </button>
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[var(--primary)] text-white rounded-sm px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-[var(--primary-dark)] transition-all duration-200 shadow-[0_4px_20px_rgba(0,69,135,0.3)] flex items-center justify-center gap-2">
              Learn More
            </button>
          </Link>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-8 md:gap-x-12 w-full animate-fade-up max-w-[1100px] mt-12 sm:mt-16 bg-white sm:bg-transparent p-6 sm:p-0 rounded-sm sm:rounded-none border sm:border-none border-[var(--border)] shadow-sm sm:shadow-none"
          style={{ animationDelay: "400ms" }}
        >
          {[
            { label: "Expert Tutors", sub: "Verified Credentials" },
            { label: "Guaranteed Success", sub: "Grade Improvement" },
            { label: "IB Resources", sub: "Practice Papers" },
            { label: "Regular Feedback", sub: "For Parents" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4 justify-start sm:justify-center px-2">
              <div className="w-10 h-10 sm:w-8 sm:h-8 bg-[var(--primary-light)] rounded-full flex items-center justify-center shadow-sm shrink-0">
                <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-[var(--foreground)] leading-tight whitespace-nowrap">{stat.label}</span>
                <span className="text-[11px] text-[var(--muted)] font-medium mt-0.5 leading-none">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
