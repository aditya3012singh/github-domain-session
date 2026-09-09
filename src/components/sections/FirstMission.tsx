"use client";

import React from "react";

export default function FirstMission() {
  const scrollToGithub = () => {
    const el = document.getElementById("github-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDomains = () => {
    const el = document.getElementById("domains-intro");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="first-mission"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🎯 TODAY&apos;S OBJECTIVES
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          YOUR <span className="text-red-600">FIRST MISSION</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
          Mission Briefing: You don&apos;t need 4 years to get started. Today&apos;s 1-day event focuses on mastering the two keys that unlock the developer universe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission 01: Enter GitHub */}
        <div className="relative group p-8 sm:p-10 rounded-3xl bg-slate-950 border-2 border-emerald-500/60 shadow-2xl shadow-emerald-950/30 flex flex-col justify-between overflow-hidden text-white transition-all duration-300 hover:border-emerald-400 hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-extrabold text-emerald-500 pointer-events-none">
            01
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              🟢 PRIMARY MISSION 01
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              ENTER GITHUB
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Learn the universal tool every developer on Earth uses. Master what Git is, create your own GitHub profile, make your very first commit, and learn how teams collaborate on code.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm font-mono text-slate-400 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> No more emailing zip files or losing work
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Your developer portfolio starts today
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Real hands-on terminal practice
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={scrollToGithub}
              className="inline-flex items-center gap-2 text-emerald-400 font-display font-bold text-sm tracking-wider group-hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <span>INSPECT MISSION 01</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <span className="font-mono text-xs text-slate-500">11:00 AM SESSION</span>
          </div>
        </div>

        {/* Mission 02: Discover Your Domain */}
        <div className="relative group p-8 sm:p-10 rounded-3xl bg-slate-950 border-2 border-sky-500/60 shadow-2xl shadow-sky-950/30 flex flex-col justify-between overflow-hidden text-white transition-all duration-300 hover:border-sky-400 hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-extrabold text-sky-500 pointer-events-none">
            02
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400 font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              🔵 PRIMARY MISSION 02
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              DISCOVER YOUR DOMAIN
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Find out where you belong in the massive world of technology. See live demos across Web, App, AI/ML, Cybersecurity, Cloud, and UI/UX to find the path that matches your curiosity.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm font-mono text-slate-400 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> 7 technical power paths explained simply
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> Discover which path fits your personality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> Senior roadmap guides for 1st year
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={scrollToDomains}
              className="inline-flex items-center gap-2 text-sky-400 font-display font-bold text-sm tracking-wider group-hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>EXPLORE DOMAINS</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <span className="font-mono text-xs text-slate-500">01:30 PM SESSION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
