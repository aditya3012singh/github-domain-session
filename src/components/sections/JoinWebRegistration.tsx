"use client";

import React, { useState } from "react";
import { useRecruit } from "@/context/RecruitContext";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  year: string;
  githubUser: string;
  selectedDomains: string[];
  gitExperience: string;
  notes: string;
}

const DOMAIN_OPTIONS = [
  { id: "web", label: "Web Development", icon: "🕸️", color: "#E52521" },
  { id: "app", label: "App Development", icon: "📱", color: "#10B981" },
  { id: "ai", label: "AI / ML", icon: "🤖", color: "#D97706" },
  { id: "dsa", label: "DSA / CP", icon: "🧩", color: "#0284C7" },
  { id: "cyber", label: "Cybersecurity", icon: "🔐", color: "#8B5CF6" },
  { id: "cloud", label: "Cloud / DevOps", icon: "☁️", color: "#06B6D4" },
  { id: "uiux", label: "UI/UX & Design", icon: "🎨", color: "#EC4899" },
];

export default function JoinWebRegistration() {
  const { updateRecruitField, completeRegistration, showToast } = useRecruit();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    branch: "Computer Science & Engineering (CSE)",
    year: "1st Year",
    githubUser: "",
    selectedDomains: ["Web Development"],
    gitExperience: "Never used it — excited to learn!",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isWebShooting, setIsWebShooting] = useState<boolean>(false);

  const toggleDomain = (domainLabel: string) => {
    setForm((prev) => {
      const exists = prev.selectedDomains.includes(domainLabel);
      if (exists) {
        if (prev.selectedDomains.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          selectedDomains: prev.selectedDomains.filter((d) => d !== domainLabel),
        };
      }
      return {
        ...prev,
        selectedDomains: [...prev.selectedDomains, domainLabel],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      showToast("Please enter your name and college email!");
      return;
    }

    setIsSubmitting(true);
    setIsWebShooting(true);

    // Trigger Spider-Man web shoot animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsWebShooting(false);
      setIsSuccessModalOpen(true);
      updateRecruitField("name", form.fullName);
      updateRecruitField("email", form.email);
      updateRecruitField("phone", form.phone);
      updateRecruitField("branch", form.branch);
      updateRecruitField("domains", form.selectedDomains);
      completeRegistration();
      showToast("🎉 Recruit registered! Welcome to the DevUp Web!");
    }, 900);
  };

  return (
    <section
      id="join-web"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Spider-Web Shoot Overlay Animation */}
      {isWebShooting && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full bg-red-950/40 backdrop-blur-sm animate-fade-in flex items-center justify-center">
            {/* SVG Web Shoot Burst */}
            <svg
              viewBox="0 0 400 400"
              className="w-96 h-96 animate-shoot text-red-500 drop-shadow-[0_0_24px_rgba(229,37,33,0.8)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {/* Radiating Web Strands */}
              <line x1="200" y1="200" x2="20" y2="40" />
              <line x1="200" y1="200" x2="100" y2="10" />
              <line x1="200" y1="200" x2="200" y2="10" />
              <line x1="200" y1="200" x2="300" y2="10" />
              <line x1="200" y1="200" x2="380" y2="40" />
              <line x1="200" y1="200" x2="390" y2="150" />
              <line x1="200" y1="200" x2="390" y2="250" />
              <line x1="200" y1="200" x2="360" y2="360" />
              <line x1="200" y1="200" x2="250" y2="390" />
              <line x1="200" y1="200" x2="150" y2="390" />
              <line x1="200" y1="200" x2="40" y2="360" />
              <line x1="200" y1="200" x2="10" y2="250" />
              <line x1="200" y1="200" x2="10" y2="150" />

              {/* Concentric Web Rings */}
              <polygon points="200,160 230,180 230,220 200,240 170,220 170,180" />
              <polygon points="200,120 260,150 260,250 200,280 140,250 140,150" />
              <polygon points="200,70 300,120 300,280 200,330 100,280 100,120" />
            </svg>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🕷️ FINAL MISSION // COMMISSIONING
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          READY TO <span className="text-red-600">JOIN THE WEB?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          Your first commit is waiting. Your domain is waiting. Your journey starts right here.
        </p>
      </div>

      {/* Registration Form Box */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border-2 border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-sky-500" />

        <div className="mb-8 pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest block">
              OFFICIAL FRESHMAN ENROLLMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              BECOME A DEVUP RECRUIT
            </h3>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold self-start sm:self-auto">
            100% FREE ADMISSION
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Name & College Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Peter Parker"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                COLLEGE EMAIL *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="peter.parker@college.edu"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Phone & College Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                WHATSAPP / PHONE NUMBER
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                COLLEGE BRANCH / DEPARTMENT
              </label>
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              >
                <option>Computer Science &amp; Engineering (CSE)</option>
                <option>Information Technology (IT)</option>
                <option>AI &amp; Data Science (AI/DS)</option>
                <option>Electronics &amp; Communication (ECE)</option>
                <option>Electrical Engineering (EE)</option>
                <option>Mechanical / Other Engineering</option>
              </select>
            </div>
          </div>

          {/* Row 3: Year & GitHub Username */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                COLLEGE YEAR
              </label>
              <select
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              >
                <option>1st Year (Freshman)</option>
                <option>2nd Year (Sophomore)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                GITHUB USERNAME (OPTIONAL)
              </label>
              <input
                type="text"
                value={form.githubUser}
                onChange={(e) => setForm({ ...form, githubUser: e.target.value })}
                placeholder="github.com/peter-parker (leave blank if you don't have one yet)"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-body text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          {/* Domain Selection Cards with Visual Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                WHICH DOMAIN(S) INTEREST YOU MOST? *
              </label>
              <span className="font-mono text-xs text-slate-400">
                Select 1 or more
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DOMAIN_OPTIONS.map((domain) => {
                const isChecked = form.selectedDomains.includes(domain.label);
                return (
                  <button
                    type="button"
                    key={domain.id}
                    onClick={() => toggleDomain(domain.label)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isChecked
                        ? "bg-slate-900 text-white border-red-500 shadow-md scale-[1.02]"
                        : "bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{domain.icon}</span>
                      <span className="font-display font-bold text-xs sm:text-sm text-white">
                        {domain.label}
                      </span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs font-bold ${
                        isChecked
                          ? "bg-red-600 border-red-600 text-white"
                          : "border-slate-700 text-transparent"
                      }`}
                    >
                      ✓
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <label className="block font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
              HAVE YOU USED GIT / GITHUB BEFORE?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Never used it — excited to learn!",
                "Have an account, but rarely use it",
                "I've made a few commits and repos",
              ].map((exp) => (
                <button
                  type="button"
                  key={exp}
                  onClick={() => setForm({ ...form, gitExperience: exp })}
                  className={`p-3 rounded-xl border text-xs font-mono text-left transition-all cursor-pointer ${
                    form.gitExperience === exp
                      ? "bg-slate-900 border-sky-500 text-white font-bold"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-display font-extrabold text-base sm:text-lg tracking-widest shadow-2xl shadow-red-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{isSubmitting ? "SHOOTING WEB..." : "CLAIM YOUR RECRUIT PASS 🕸️"}</span>
              <span className="text-xl">→</span>
            </button>
            <p className="text-center font-mono text-xs text-slate-500 mt-3">
              🔒 Instant confirmation. No spam, just event reminders &amp; workshop access.
            </p>
          </div>
        </form>
      </div>

      {/* Success Modal: "YOU'RE IN. 🕸️ DEVUP NETWORK" */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-lg w-full p-8 rounded-3xl bg-slate-950 border-2 border-red-500 shadow-2xl text-center space-y-6">
            {/* Top Badge */}
            <div className="w-20 h-20 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-4xl mx-auto shadow-xl shadow-red-500/30 animate-bounce">
              🕸️
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest block">
                MISSION BRIEFING CONFIRMED
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                YOU&apos;RE IN.
              </h3>
              <p className="font-mono text-sm text-emerald-400 font-bold">
                DEVUP RECRUIT NETWORK // REGISTERED
              </p>
            </div>

            {/* Pass Summary Details */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left font-mono text-xs space-y-2 text-slate-300">
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-500">RECRUIT NAME:</span>
                <span className="text-white font-bold">{form.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-500">STATUS:</span>
                <span className="text-emerald-400 font-bold">READY FOR MISSION 01</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-500">MISSION DATE:</span>
                <span className="text-white font-bold">Sat, Sept 19 @ 09:30 AM</span>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block mb-1">SELECTED DOMAINS:</span>
                <div className="flex flex-wrap gap-1.5">
                  {form.selectedDomains.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-red-300 font-bold"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 italic">
              &ldquo;See you inside the web, Spider-Developer.&rdquo;
            </p>

            <button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-sm tracking-wider transition-all cursor-pointer"
            >
              CLOSE CONFIRMATION ✓
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
