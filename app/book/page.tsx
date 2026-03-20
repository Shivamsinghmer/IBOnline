"use client";

import React, { useState } from "react";
import { tutors, subjects } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check, Calendar as CalendarIcon, Clock, ChevronRight, User, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTutor, setSelectedTutor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  const steps = [
    { id: 1, name: "Choose Tutor", icon: <User size={18} /> },
    { id: 2, name: "Pick Date & Time", icon: <CalendarIcon size={18} /> },
    { id: 3, name: "Confirm & Pay", icon: <CreditCard size={18} /> },
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];
  
  // Create a simple calendar grid for the current month
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const selectedTutorData = tutors.find(t => t.id === selectedTutor);

  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Book Your Session</h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-xl mx-auto">
            Take the first step towards academic excellence. Choose your 
            tutor and schedule your personalized lesson.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[var(--border)] -z-10" />
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3">
              <div 
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border-2 transition-all duration-300",
                  step === s.id 
                    ? "bg-accent text-black border-accent shadow-lg shadow-accent/20 scale-110" 
                    : step > s.id 
                      ? "bg-black text-accent border-black" 
                      : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)]"
                )}
              >
                {step > s.id ? <Check size={24} /> : s.id}
              </div>
              <span className={cn("text-sm font-bold uppercase tracking-widest hidden md:block", step === s.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]")}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {step === 1 && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex flex-col gap-4">
                  <label className="text-2xl font-serif">Select a Subject</label>
                  <div className="flex flex-wrap gap-3">
                    {subjects.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.label)}
                        className={cn(
                          "px-6 py-3 rounded-2xl border-2 font-bold transition-all",
                          selectedSubject === sub.label 
                            ? "bg-accent border-accent text-black shadow-md" 
                            : "bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] hover:border-accent/30"
                        )}
                      >
                        {sub.icon} {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-2xl font-serif">Available Tutors</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tutors.filter(t => !selectedSubject || t.subject === selectedSubject).map((tutor) => (
                      <button
                        key={tutor.id}
                        onClick={() => setSelectedTutor(tutor.id)}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-3xl border-2 text-left transition-all",
                          selectedTutor === tutor.id 
                            ? "bg-[var(--accent)] border-accent shadow-md" 
                            : "bg-[var(--card)] border-[var(--border)] hover:border-accent/30"
                        )}
                      >
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] shrink-0">
                          <img src={tutor.avatar} alt={tutor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold font-serif text-lg leading-tight">{tutor.name}</h4>
                          <p className="text-sm text-[var(--muted-foreground)]">{tutor.subject} • ${tutor.ratePerHour}/hr</p>
                        </div>
                        {selectedTutor === tutor.id && <div className="p-2 bg-accent text-black rounded-full shadow-sm"><Check size={16} /></div>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex flex-col gap-6">
                  <label className="text-2xl font-serif">Select a Date</label>
                  <div className="grid grid-cols-7 gap-3 text-center">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                      <div key={d} className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] opacity-60 mb-2">{d}</div>
                    ))}
                    {days.map(d => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={cn(
                          "aspect-square flex items-center justify-center rounded-2xl font-mono text-lg transition-all",
                          selectedDate === d 
                            ? "bg-accent text-black font-black shadow-lg scale-110" 
                            : "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-accent/50"
                        )}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <label className="text-2xl font-serif">Select a Time</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "flex mb-3 items-center justify-center gap-3 py-4 rounded-2xl border-2 font-bold transition-all",
                          selectedTime === t 
                            ? "bg-black text-accent border-black shadow-md" 
                            : "bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] hover:border-accent/30"
                        )}
                      >
                        <Clock size={18} />
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="p-10 bg-[var(--accent)] border-2 border-accent/30 rounded-[2rem] flex flex-col gap-8">
                  <h3 className="text-3xl font-serif text-black">Booking Confirmation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">Tutor</span>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/10">
                          <img src={selectedTutorData?.avatar} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold text-black">{selectedTutorData?.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">Schedule</span>
                      <div className="flex items-center gap-4 text-xl font-bold text-black">
                        <CalendarIcon size={20} className="text-black/60" />
                        <span>March {selectedDate}, 2026 at {selectedTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[2px] w-full bg-black/10" />
                  
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">Total Amount</span>
                      <div className="text-5xl font-mono font-black text-black">${selectedTutorData?.ratePerHour}<span className="text-xl opacity-50">.00</span></div>
                    </div>
                    <Badge variant="secondary" className="bg-black text-accent h-10 px-6 text-sm flex items-center gap-2">
                      <CreditCard size={16} /> Secure Payment
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <label className="text-2xl font-serif">Payment Method</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-center gap-4 p-6 rounded-3xl border-2 border-black bg-white/10 transition-all text-left">
                      <div className="w-12 h-8 bg-black rounded-md flex items-center justify-center text-[8px] text-white font-black italic">VISA</div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-black leading-tight">•••• •••• •••• 4242</h4>
                        <p className="text-xs text-black/50 uppercase font-bold tracking-widest">Expires 12/28</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"><Check size={14} strokeWidth={4} /></div>
                    </button>
                    <button className="flex items-center gap-4 p-6 rounded-3xl border-2 border-[var(--border)] hover:border-accent/50 transition-all text-left">
                       <div className="w-12 h-8 bg-black/10 rounded-md flex items-center justify-center text-[8px] font-black italic">NEW</div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-[var(--foreground)] opacity-60">Add New Card</h4>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-12 mt-4 border-t border-[var(--border)]">
              {step > 1 ? (
                <Button variant="outline" size="lg" onClick={() => setStep(s => s - 1)} className="rounded-2xl px-10 h-16 text-lg font-bold">
                  Go Back
                </Button>
              ) : <div />}
              
              <Button 
                size="lg" 
                onClick={() => step < 3 ? setStep(s => s + 1) : alert('Booking Confirmed!')}
                className="rounded-2xl px-12 h-16 text-xl font-bold shadow-xl shadow-accent/20"
                disabled={(step === 1 && !selectedTutor) || (step === 2 && (!selectedDate || !selectedTime))}
              >
                {step === 3 ? 'Confirm & Secure Pay' : 'Continue'} <ChevronRight className="ml-2" size={24} />
              </Button>
            </div>
          </div>

          {/* Cart Sidebar / Summary */}
          <div className="lg:sticky lg:top-32 relative group">
             <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform opacity-10" />
             <Card className="rounded-[2rem] border-2 border-[var(--border)] overflow-hidden">
                <CardHeader className="p-8 bg-[var(--muted)] border-b border-[var(--border)]">
                  <h3 className="text-xl font-black font-serif uppercase tracking-widest flex items-center gap-3">
                    <Sparkle size={20} className="text-accent" />
                    Summary
                  </h3>
                </CardHeader>
                <CardContent className="p-8 pb-0">
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] opacity-60">Subject</span>
                        <span className="font-bold text-lg">{selectedSubject || "Not selected"}</span>
                      </div>
                      {selectedSubject && <Badge variant="primary" className="h-8">{selectedSubject}</Badge>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] opacity-60">Tutor</span>
                      <span className="font-bold text-lg">{selectedTutorData?.name || "Not selected"}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] opacity-60">Date & Time</span>
                      <span className="font-bold text-lg">
                        {selectedDate ? `March ${selectedDate}, 2026` : "Not picked"} <br />
                        {selectedTime && <span className="text-sm font-normal text-[var(--muted-foreground)]">at {selectedTime}</span>}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-10 flex flex-col gap-6 bg-[var(--card)]">
                  <div className="w-full h-[1px] bg-[var(--border)] opacity-50" />
                  <div className="flex justify-between items-end w-full">
                    <span className="text-lg font-bold font-serif">Total</span>
                    <div className="text-3xl font-mono font-black">${selectedTutorData?.ratePerHour || 0}</div>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] text-center w-full leading-relaxed">
                    By confirming, you agree to our Terms of Service and 24-hour cancellation policy.
                  </p>
                </CardFooter>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Sparkle icon replacement for Summary header
const Sparkle = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export default BookingPage;
