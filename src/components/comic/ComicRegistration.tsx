"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRecruit } from "@/context/RecruitContext";
import { ALLOWED_BRANCHES, AllowedBranch, RegistrationRecord } from "@/lib/types";

const AVAILABLE_DOMAINS = [
  "Web Development",
  "App Development",
  "AI & ML",
  "DSA / CP",
  "UI/UX Design",
];

export default function ComicRegistration() {
  const { updateRecruitField, completeRegistration, showToast } = useRecruit();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    branch: "CSE" as AllowedBranch,
    year: "1st Year",
    github: "",
    selectedDomains: ["Web Development"],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWebShooting, setIsWebShooting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedTicket, setConfirmedTicket] = useState<RegistrationRecord | null>(null);

  // Close ticket overlay on Escape key
  useEffect(() => {
    if (!isSuccess) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSuccess(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSuccess]);

  const toggleDomain = (domain: string) => {
    setForm((prev) => {
      const exists = prev.selectedDomains.includes(domain);
      if (exists) {
        if (prev.selectedDomains.length === 1) return prev;
        return {
          ...prev,
          selectedDomains: prev.selectedDomains.filter((d) => d !== domain),
        };
      }
      return {
        ...prev,
        selectedDomains: [...prev.selectedDomains, domain],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side quick checks
    if (!form.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    const cleanEmail = form.email.trim().toLowerCase();
    if (!/^[a-zA-Z0-9._%+-]+@kiet\.edu$/i.test(cleanEmail)) {
      setErrorMessage("Please enter a valid KIET email ending with @kiet.edu.");
      return;
    }

    if (form.selectedDomains.length === 0) {
      setErrorMessage("Please select at least 1 track of interest.");
      return;
    }

    setIsSubmitting(true);
    setIsWebShooting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: cleanPhone,
          email: cleanEmail,
          branch: form.branch,
          year: "1st Year",
          github: form.github.trim(),
          domains: form.selectedDomains,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsWebShooting(false);
        setIsSubmitting(false);
        const errMsg = data.error || "Failed to register. Please try again.";
        setErrorMessage(errMsg);
        showToast(`⚠️ ${errMsg}`);
        return;
      }

      // Success sequence
      setTimeout(() => {
        setIsWebShooting(false);
        setIsSubmitting(false);
        setConfirmedTicket(data.ticket);
        setIsSuccess(true);
        updateRecruitField("name", data.ticket.fullName);
        updateRecruitField("email", data.ticket.email);
        updateRecruitField("branch", data.ticket.branch);
        updateRecruitField("domains", data.ticket.domains);
        completeRegistration();
        showToast("🕸️ TICKET CONFIRMED! Welcome to DevUp!");
      }, 700);
    } catch (err: any) {
      setIsWebShooting(false);
      setIsSubmitting(false);
      const networkMsg = "Network error. Please check your connection and retry.";
      setErrorMessage(networkMsg);
      showToast(networkMsg);
    }
  };

  return (
    <section
      id="comic-registration"
      className="relative min-h-screen py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden flex flex-col justify-center"
    >
      <div id="registration" className="sr-only" />
      <div id="register" className="sr-only" />

      {/* Web Shoot Overlay */}
      {isWebShooting && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/90">
          <svg
            viewBox="0 0 400 400"
            className="w-80 h-80 animate-shoot text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="0" y1="0" x2="400" y2="400" />
            <line x1="0" y1="0" x2="400" y2="200" />
            <line x1="0" y1="0" x2="200" y2="400" />
            <circle cx="200" cy="200" r="100" />
            <circle cx="200" cy="200" r="160" />
          </svg>
        </div>
      )}

      {/* Post-Submission Screen (Confirmed Ticket) */}
      <AnimatePresence>
        {isSuccess && confirmedTicket && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsSuccess(false)}
            className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-16 bg-black text-white overflow-y-auto cursor-pointer select-none"
            title="Click anywhere to return to website"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-[0.25em] text-slate-400 font-bold uppercase pointer-events-none">
              <span>DEVUP RECRUIT CONFIRMATION // 15 SEPT 2026 // 05:00 PM – 07:00 PM</span>
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-black">{confirmedTicket.id}</span>
                <span className="text-[11px] text-slate-400 border border-white/20 px-2 py-0.5 tracking-wider bg-white/5">
                  ✕ CLOSE [ESC]
                </span>
              </div>
            </div>

            <div className="max-w-2xl my-auto space-y-8 py-8 pointer-events-none">
              <div className="space-y-2">
                <span className="text-4xl">🕸️</span>
                <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase text-white leading-none">
                  YOU&apos;RE IN.
                </h2>
                <div className="font-mono text-sm text-red-500 font-bold tracking-widest pt-1">
                  OFFICIAL ADMISSION TICKET: {confirmedTicket.id}
                </div>
              </div>

              <div className="border-t border-b border-white/20 py-6 space-y-3.5 font-mono text-sm sm:text-base">
                <div className="flex justify-between text-slate-300">
                  <span>RECRUIT NAME:</span>
                  <span className="text-white font-bold">{confirmedTicket.fullName}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>KIET EMAIL:</span>
                  <span className="text-white font-bold">{confirmedTicket.email}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>PHONE NUMBER:</span>
                  <span className="text-white font-bold">+91 {confirmedTicket.phone}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>BRANCH / YEAR:</span>
                  <span className="text-white font-bold">
                    {confirmedTicket.branch} ({confirmedTicket.year})
                  </span>
                </div>
                {confirmedTicket.github && (
                  <div className="flex justify-between text-slate-300">
                    <span>GITHUB:</span>
                    <span className="text-white font-bold">github.com/{confirmedTicket.github}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-300">
                  <span>CHOSEN TRACKS:</span>
                  <span className="text-white font-bold text-right">
                    {confirmedTicket.domains.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300 pt-2 border-t border-white/10">
                  <span>STATUS:</span>
                  <span className="text-emerald-400 font-bold">✓ CONFIRMED &amp; ADMITTED</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white uppercase">
                  SEE YOU ON TUESDAY, SEPT 15 // 05:00 PM.
                </div>
                <div className="font-mono text-xs text-slate-400">
                  DevUp Computing Arena • Please carry your college ID card or show this digital pass.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs text-slate-400 pointer-events-none">
              <span className="text-slate-400 uppercase tracking-widest flex items-center gap-2">
                ← CLICK ANYWHERE TO RETURN TO SITE
              </span>
              <span className="text-zinc-500 text-[11px] hidden sm:inline uppercase tracking-widest">
                TAP ANYWHERE ON SCREEN OR PRESS ESC
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-slate-400 uppercase font-semibold block">
            REGISTRATION • 15 SEPTEMBER 2026
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.9]">
            GET YOUR PASS.
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 max-w-md mx-auto">
            DevUp recruitment &amp; tech track discovery. Exclusively for 1st Year KIET students. Free admission.
          </p>
        </motion.div>

        {/* Floating Form Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-7"
        >
          {/* Metadata Strip */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs text-slate-400">
            <span className="text-white font-bold tracking-wider uppercase">1ST YEAR FRESHMAN PASS</span>
            <span>TUE, 15 SEPT • 05:00 PM – 07:00 PM</span>
          </div>

          {/* Inline Error Alert */}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-950/70 border border-red-600/80 text-white font-mono text-xs sm:text-sm rounded-none flex items-start gap-3"
            >
              <span className="text-red-500 font-bold shrink-0 text-base leading-none">⚠</span>
              <div className="space-y-1">
                <span className="font-bold text-red-400 block">Registration Error</span>
                <span className="text-slate-200 block">{errorMessage}</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Peter Parker"
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-white/20 hover:border-red-600/70 focus:border-red-600 focus:ring-1 focus:ring-red-600/40 focus:bg-black text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center bg-zinc-950/80 border border-white/20 hover:border-red-600/70 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600/40 focus-within:bg-black transition-all duration-200">
                  <span className="pl-4 pr-2 font-mono text-xs sm:text-sm text-slate-400 font-medium select-none border-r border-white/10">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                    }
                    placeholder="9876543210"
                    className="w-full px-3 py-3.5 bg-transparent text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: KIET College Email */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 uppercase tracking-wider">
                <span>
                  KIET College Email <span className="text-red-500">*</span>
                </span>
                <span className="text-slate-400 text-[11px] lowercase tracking-normal">
                  must end with @kiet.edu
                </span>
              </div>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="peter.2628cs1024@kiet.edu"
                className="w-full px-4 py-3.5 bg-zinc-950/80 border border-white/20 hover:border-red-600/70 focus:border-red-600 focus:ring-1 focus:ring-red-600/40 focus:bg-black text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Row 3: Branch & Academic Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                  Branch / Department <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <select
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value as AllowedBranch })}
                    className="w-full px-4 py-3.5 bg-zinc-950/80 border border-white/20 hover:border-red-600/70 focus:border-red-600 focus:ring-1 focus:ring-red-600/40 focus:bg-black text-white font-mono text-sm focus:outline-none transition-all duration-200 cursor-pointer appearance-none pr-10"
                  >
                    {ALLOWED_BRANCHES.map((b) => (
                      <option key={b} value={b} className="bg-zinc-950 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 group-hover:text-red-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                  Academic Year <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value="1st Year (Freshman 2026)"
                    className="w-full px-4 py-3.5 bg-zinc-950/50 border border-white/15 text-slate-300 font-mono text-sm focus:outline-none select-none cursor-not-allowed"
                    title="This orientation event is exclusively for 1st year students"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-400 font-mono text-xs">
                    LOCKED ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: GitHub Username (Optional) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 uppercase tracking-wider">
                <span>GitHub Username</span>
                <span className="text-slate-500 text-[11px] lowercase tracking-normal">(optional)</span>
              </div>
              <div className="relative flex items-center bg-zinc-950/80 border border-white/20 hover:border-red-600/70 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600/40 focus-within:bg-black transition-all duration-200">
                <span className="pl-4 font-mono text-xs sm:text-sm text-slate-400 font-medium select-none">
                  github.com/
                </span>
                <input
                  type="text"
                  value={form.github.replace(/^github\.com\//, "")}
                  onChange={(e) => setForm({ ...form, github: e.target.value.replace(/^github\.com\//, "") })}
                  placeholder="username"
                  className="w-full px-2 py-3.5 bg-transparent text-white font-mono text-sm placeholder:text-zinc-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 5: Domain Selection */}
            <div className="space-y-3 pt-4 border-t border-white/15">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                <span className="text-slate-300 font-medium">Interested Tracks</span>
                <span className="text-slate-400 text-[11px]">Select 1 or more</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {AVAILABLE_DOMAINS.map((domain) => {
                  const isChecked = form.selectedDomains.includes(domain);
                  return (
                    <button
                      type="button"
                      key={domain}
                      onClick={() => toggleDomain(domain)}
                      className={`py-3 px-3 border text-center transition-all duration-200 cursor-pointer flex items-center justify-center ${
                        isChecked
                          ? "bg-red-600 border-red-600 text-white font-bold shadow-[0_0_16px_rgba(229,37,33,0.5)]"
                          : "bg-zinc-950/80 border-white/20 text-slate-300 hover:border-red-600 hover:text-white hover:bg-red-600/10"
                      }`}
                    >
                      <span className="font-mono text-xs tracking-wider">
                        {isChecked ? "✓ " : ""}{domain}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action Bar */}
            <div className="pt-4 space-y-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 sm:py-5 font-display font-black text-lg sm:text-xl tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] ${
                  isSubmitting
                    ? "bg-zinc-800 text-slate-400 cursor-wait"
                    : "bg-white hover:bg-red-600 text-black hover:text-white cursor-pointer hover:shadow-[0_0_30px_rgba(229,37,33,0.5)]"
                }`}
              >
                {isSubmitting ? "GENERATING OFFICIAL PASS..." : "CONFIRM PASS ➔"}
              </motion.button>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-[11px] text-slate-400 uppercase tracking-wider text-center">
                <span>Free Admission</span>
                <span>•</span>
                <span>Instant Digital Ticket</span>
                <span>•</span>
                <span>Exclusive to KIET 1st Year</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
