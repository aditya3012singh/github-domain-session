"use client";

import React, { useState } from "react";
import { useRecruit } from "@/context/RecruitContext";

const AVAILABLE_DOMAINS = [
  "Web Development",
  "App Development",
  "AI & ML",
  "DSA / CP",
  "Cybersecurity",
  "Cloud / DevOps",
  "UI/UX Design",
];

export default function ComicRegistration() {
  const { updateRecruitField, completeRegistration, showToast } = useRecruit();

  const [form, setForm] = useState({
    name: "",
    email: "",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    github: "",
    selectedDomains: ["Web Development"],
  });

  const [isWebShooting, setIsWebShooting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      showToast("Please enter your name and college email!");
      return;
    }

    setIsWebShooting(true);

    setTimeout(() => {
      setIsWebShooting(false);
      setIsSuccess(true);
      updateRecruitField("name", form.name);
      updateRecruitField("email", form.email);
      updateRecruitField("branch", form.branch);
      updateRecruitField("domains", form.selectedDomains);
      completeRegistration();
      showToast("🕸️ YOU'RE IN! See you September 19!");
    }, 750);
  };

  return (
    <section
      id="comic-registration"
      className="relative min-h-screen py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden flex flex-col justify-center"
    >
      <div id="registration" className="sr-only" />
      <div id="register" className="sr-only" />

      {/* Spider-Man Real Background Artwork (Same Style as Section 1) */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0 opacity-30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Registration"
          className="w-full h-full object-cover object-left filter contrast-125 brightness-90 -scale-x-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Corner Web Shoot Animation Overlay */}
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

      {/* Post-Submission Screen (Movie Comic Style) */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-16 bg-black text-white animate-fade-in">
          <div className="font-mono text-xs tracking-[0.3em] text-red-500 font-bold uppercase">
            DEVUP RECRUIT CONFIRMATION // 19 SEPT 2026
          </div>

          <div className="max-w-2xl my-auto space-y-8">
            <div className="space-y-2">
              <span className="text-4xl">🕸️</span>
              <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase text-white leading-none">
                YOU&apos;RE <span className="text-red-600">IN.</span>
              </h2>
            </div>

            <div className="border-t border-b border-white/20 py-6 space-y-3 font-mono text-sm sm:text-base">
              <div className="flex justify-between text-slate-300">
                <span>RECRUIT:</span>
                <span className="text-white font-bold">{form.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>MISSION 01:</span>
                <span className="text-red-500 font-bold">GITHUB ✓</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>MISSION 02:</span>
                <span className="text-red-500 font-bold">DOMAIN DISCOVERY ✓</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-bold">READY</span>
              </div>
            </div>

            <div className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white uppercase">
              SEE YOU ON SEPTEMBER 19.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="font-mono text-xs text-slate-400 hover:text-white uppercase tracking-widest text-left"
          >
            ← RETURN TO PASS
          </button>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-12">
        {/* Upside Down Spider-Man Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-red-600 mb-1" />
          <div className="w-16 h-16 rounded-full bg-black border-2 border-red-600 p-2 rotate-180 flex items-center justify-center animate-swing">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/heroes/spiderman.svg"
              alt="Spider-Man"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Huge Headline */}
        <div className="text-center space-y-2">
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85]">
            READY? <br />
            <span className="text-red-600">JOIN THE WEB.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest text-slate-400 uppercase pt-2">
            YOUR FIRST DAY IN TECH STARTS HERE.
          </p>
        </div>

        {/* Minimalist Recruit Form */}
        <div className="p-8 sm:p-14 bg-black/80 backdrop-blur-md border-2 border-white/20 shadow-2xl">
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
            YOUR RECRUIT PASS // DEVUP INITIATIVE
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Peter Parker"
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider">
                  COLLEGE EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="peter@college.edu"
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider">
                  BRANCH / DEPARTMENT
                </label>
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-red-600"
                >
                  <option>Computer Science &amp; Engineering</option>
                  <option>Information Technology</option>
                  <option>AI &amp; Data Science</option>
                  <option>Electronics &amp; Communication</option>
                  <option>Other Engineering</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider">
                  YEAR
                </label>
                <select
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-red-600"
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider">
                GITHUB USERNAME (OPTIONAL)
              </label>
              <input
                type="text"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
                placeholder="github.com/username"
                className="w-full px-4 py-3 bg-black border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Choose Your Domains */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 uppercase">
                <span>CHOOSE YOUR DOMAINS</span>
                <span>SELECT 1 OR MORE</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {AVAILABLE_DOMAINS.map((domain) => {
                  const isChecked = form.selectedDomains.includes(domain);
                  return (
                    <button
                      type="button"
                      key={domain}
                      onClick={() => toggleDomain(domain)}
                      className={`px-4 py-2 border font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                        isChecked
                          ? "bg-red-600 border-red-600 text-white font-bold"
                          : "bg-black border-white/20 text-slate-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      {isChecked ? "✓ " : ""}{domain}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Huge Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-5 bg-red-600 hover:bg-white text-white hover:text-black font-display font-black text-lg sm:text-xl tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                CONFIRM RECRUIT PASS ➔
              </button>
              <p className="font-mono text-center text-xs text-slate-500 mt-4 tracking-widest uppercase">
                100% FREE ADMISSION // DEVUP FRESHMAN CLASS OF 2026
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
