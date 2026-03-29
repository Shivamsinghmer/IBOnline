"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, CheckCircle2, ChevronDown, Calendar as CalendarIcon, X } from "lucide-react";
import { subjects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => {
      const numbers = val.match(/\d/g);
      return !numbers || numbers.length <= 1;
    }, "Name can contain at most 1 number"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Invalid email address"),
  phoneCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(5, "Phone number is required"),
  date: z.string().min(1, "Tentative date is required"),
});

const CustomSelect = ({ value, onChange, options, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt: any) => opt.label === value);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[var(--background)] border border-[var(--border)] rounded-sm px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition-all duration-200 ${isOpen ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20 shadow-sm" : "hover:border-[var(--muted)]/50"}`}
      >
        <span className={value ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} className={`text-[var(--muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-0 right-0 mt-2 bg-white border border-[var(--border)] rounded-sm shadow-xl overflow-hidden max-h-[220px] overflow-y-auto custom-scrollbar pr-1 py-1.5"
          >
            {options.map((option: any) => (
              <div
                key={option.id}
                onClick={() => {
                  onChange(option.label);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${value === option.label ? "bg-[var(--primary)] text-white font-medium" : "text-[var(--foreground)] hover:bg-[var(--surface-2)]"}`}
              >
                <span>{option.label}</span>
                {value === option.label && <Check size={14} className="ml-auto opacity-70" />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const countryCodes = [
  { id: 1, label: "+1", name: "US/CA" },
  { id: 2, label: "+44", name: "UK" },
  { id: 3, label: "+91", name: "IN" },
  { id: 4, label: "+61", name: "AU" },
  { id: 5, label: "+971", name: "AE" },
  { id: 6, label: "+65", name: "SG" },
];

const CountryCodeSelect = ({ value, onChange, options }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-[60px] md:w-[80px] shrink-0" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[var(--background)] border border-[var(--border)] rounded-sm px-2 py-3 text-sm flex items-center justify-between cursor-pointer transition-all duration-200 ${isOpen ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20 shadow-sm" : "hover:border-[var(--muted)]/50"}`}
      >
        <span className="text-[var(--foreground)] font-medium">{value}</span>
        <ChevronDown size={14} className={`text-[var(--muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-0 right-0 mt-2 bg-white border border-[var(--border)] rounded-sm shadow-xl overflow-hidden max-h-[220px] overflow-y-auto custom-scrollbar py-1"
          >
            {options.map((option: any) => (
              <div
                key={option.id}
                onClick={() => {
                  onChange(option.label);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer transition-colors ${value === option.label ? "bg-[var(--primary)] text-white font-medium" : "text-[var(--foreground)] hover:bg-[var(--surface-2)]"}`}
              >
                <span>{option.label}</span>
                <span className={`text-[10px] ml-auto ${value === option.label ? "text-white/70" : "text-[var(--muted)]"}`}>{option.name}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CustomDatePicker = ({ value, onChange, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Basic Calendar Logic
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange(formatDate(selectedDate));
    setIsOpen(false);
  };

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[var(--background)] border border-[var(--border)] rounded-sm px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition-all duration-200 ${isOpen ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20 shadow-sm" : "hover:border-[var(--muted)]/50"}`}
      >
        <span className={value ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>
          {value || placeholder}
        </span>
        <CalendarIcon size={16} className="text-[var(--muted)]" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-0 right-0 md:left-auto md:w-[280px] bottom-full mb-2 bg-white border border-[var(--border)] rounded-sm shadow-xl p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-[var(--foreground)]">{monthName} {currentMonth.getFullYear()}</span>
              <div className="flex gap-1">
                <button 
                  type="button" 
                  onClick={() => {
                    const todayDate = new Date();
                    const minMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
                    const current = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
                    if (current > minMonth) {
                      changeMonth(-1);
                    }
                  }} 
                  className={`p-1 rounded-md transition-colors ${new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1) <= new Date(new Date().getFullYear(), new Date().getMonth(), 1) ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--surface-2)] cursor-pointer'}`}
                >
                  <ChevronDown size={14} className="rotate-90" />
                </button>
                <button type="button" onClick={() => changeMonth(1)} className="p-1 hover:bg-[var(--surface-2)] rounded-md transition-colors cursor-pointer"><ChevronDown size={14} className="-rotate-90" /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <span key={day} className="text-[10px] font-bold text-[var(--muted)] uppercase">{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                checkDate.setHours(0, 0, 0, 0);
                const todayBtn = new Date();
                todayBtn.setHours(0, 0, 0, 0);
                const isDisabled = checkDate <= todayBtn;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => !isDisabled && handleDateSelect(day)}
                    disabled={isDisabled}
                    className={`w-full aspect-square text-xs rounded-lg flex items-center justify-center transition-colors ${isDisabled ? 'opacity-30 cursor-not-allowed text-[var(--muted)]' : 'hover:bg-[var(--primary-light)] hover:text-[#002a5c] cursor-pointer'}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTABanner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    date: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        newErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        phone: `${formData.phoneCode} ${formData.phone}`,
        date: formData.date
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError("Failed to send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative z-10 mx-4 sm:mx-6 my-12 sm:my-20">
      <div className="max-w-6xl mx-auto bg-[var(--primary-light)] rounded-sm p-8 sm:p-12 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Half */}
          <div className="flex flex-col items-start px-2 sm:px-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary-dark)] font-semibold mb-3">
              Start Today
            </span>
            <h2 className="text-3xl sm:text-[44px] font-heading font-bold text-[var(--dark)] leading-tight mb-4">
              Ready to Ace Your Next Exam?
            </h2>
            <p className="text-sm sm:text-base font-body text-[var(--dark)] opacity-70 mb-8 max-w-sm leading-relaxed">
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
          <div className="bg-white rounded-sm p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
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
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full bg-[var(--background)] border ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/20'} rounded-sm px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 transition-all duration-150`}
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Subject Required</label>
                      <CustomSelect
                        value={formData.subject}
                        onChange={(val: string) => {
                          setFormData({ ...formData, subject: val });
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                        options={subjects}
                        placeholder="Select a subject"
                      />
                      {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Email ID</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full bg-[var(--background)] border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/20'} rounded-sm px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 transition-all duration-150`}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Phone Number</label>
                    <div className="flex gap-2">
                      <CountryCodeSelect
                        value={formData.phoneCode}
                        onChange={(val: string) => {
                          setFormData({ ...formData, phoneCode: val });
                          if (errors.phoneCode) setErrors({ ...errors, phoneCode: "" });
                        }}
                        options={countryCodes}
                      />
                      <div className="relative w-full">
                        <input
                          type="tel"
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          className={`w-full bg-[var(--background)] border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/20'} rounded-sm px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:ring-2 transition-all duration-150`}
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block absolute -bottom-5 left-0">{errors.phone}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-heading font-semibold text-[var(--muted)] uppercase tracking-wide mb-1.5 block">Tentative Date</label>
                    <CustomDatePicker
                      value={formData.date}
                      onChange={(val: string) => {
                        setFormData({ ...formData, date: val });
                        if (errors.date) setErrors({ ...errors, date: "" });
                      }}
                      placeholder="dd-mm-yyyy"
                    />
                    {errors.date && <span className="text-red-500 text-xs mt-1 block">{errors.date}</span>}
                  </div>

                  {submitError && <div className="text-red-500 text-sm">{submitError}</div>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--dark)] text-white font-semibold text-sm rounded-sm w-full py-4 mt-2 hover:bg-[#1f2937] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-white text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
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
