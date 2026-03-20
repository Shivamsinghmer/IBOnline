"use client";

import React, { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { subjects } from "@/lib/data";

const CTABanner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact-form" className="relative z-10 mx-6 my-12">
      <div className="max-w-6xl mx-auto bg-[var(--primary)] rounded-3xl overflow-hidden p-12 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Half */}
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#3d6b00] font-semibold mb-3">
              Start Today
            </span>
            <h2 className="text-[44px] font-heading font-bold text-[var(--dark)] leading-tight mb-4">
              Ready to Ace Your Next Exam?
            </h2>
            <p className="text-base font-body text-[var(--dark)] opacity-70 mb-8 max-w-sm leading-relaxed">
              Join hundreds of other happy students and start your journey towards academic excellence today.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                "Free first session",
                "No commitment",
                "Expert tutors"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-[var(--dark)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--dark)]/15 flex items-center justify-center">
                    <Check size={12} className="text-[var(--dark)]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Half: Form Card */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            {!isSubmitted ? (
              <>
                <h3 className="text-[22px] font-heading font-semibold text-[var(--foreground)] mb-6">
                  Book your free trial class
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Student Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-150"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Subject Required</label>
                      <select 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-150 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a subject</option>
                        {subjects.map((sub) => (
                          <option key={sub.id} value={sub.label}>{sub.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Email ID</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Tentative Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-150"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="bg-[var(--dark)] text-white font-semibold text-sm rounded-xl w-full py-4 mt-2 hover:bg-[#1f2937] active:scale-[0.99] transition-all"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[var(--primary-light)] text-[#3d6b00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-[var(--foreground)] mb-3">Request Received!</h3>
                <p className="text-sm font-body text-[var(--muted)] leading-relaxed mb-8">
                  Thank you, {formData.name}. Our academic counselor will reach out to you shortly at {formData.email}.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[var(--dark)] font-body font-bold hover:underline"
                >
                  Book another session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
