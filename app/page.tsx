import React from "react";
import Hero from "@/components/sections/Hero";
import SubjectsStrip from "@/components/sections/SubjectsStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import TutorGrid from "@/components/sections/TutorGrid";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTABanner from "@/components/sections/CTABanner";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <SubjectsStrip />
      <HowItWorks />
      <TutorGrid />
      <Testimonials />
      <Pricing />
      <CTABanner />
    </div>
  );
}
