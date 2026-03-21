import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | IBMadeEasy",
  description: "Learn how IBMadeEasy protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-[var(--muted)] mb-12 font-body leading-relaxed">
            Last Updated: March 21, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">1. Information We Collect</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              We collect information that you provide to us directly, such as your name, email address, and educational requirements when you book a trial class or contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">2. How We Use Your Information</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              Your information is used to match you with suitable tutors, process payments, and improve our services. We may also send you occasional updates regarding our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">3. Data Security</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">4. Sharing Your Information</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              We do not sell your personal information to third parties. We only share data with service providers who help us operate our business (e.g., payment processors).
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">5. Your Rights</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at support@ibmadeeasy.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
