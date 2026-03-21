import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | IBMadeEasy",
  description: "Terms and conditions for using IBMadeEasy tutoring services.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-[var(--muted)] mb-12 font-body leading-relaxed">
            Last Updated: March 21, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              By accessing and using IBMadeEasy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">2. Tutoring Services</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              IBMadeEasy provides online tutoring services specifically designed for International Baccalaureate (IB) students. We match students with qualified tutors for personalized learning sessions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">3. User Obligations</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              Users are responsible for providing accurate information and maintaining the confidentiality of their account details. Students are expected to engage respectfully with tutors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">4. Payment and Cancellations</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              Payments are processed securely through our chosen payment providers. Cancellations must be made at least 24 hours before a scheduled session to be eligible for a refund or rescheduling.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">5. Limitation of Liability</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              IBMadeEasy is not liable for any direct or indirect damages arising from the use of our services or the inability to access our website.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4">6. Contact Information</h2>
            <p className="text-[var(--muted)] font-body leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at support@ibmadeeasy.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
