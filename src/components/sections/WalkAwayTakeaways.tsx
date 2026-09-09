"use client";

import React from "react";

export default function WalkAwayTakeaways() {
  const takeaways = [
    {
      title: "What Git Is & How to Use It",
      desc: "No more fear of terminal command lines. You'll know how to initialize, stage, and track changes locally.",
    },
    {
      title: "What GitHub Is & Why It Matters",
      desc: "Every tech company checks your GitHub. You'll leave with your profile set up and your first project pushed.",
    },
    {
      title: "How Real Developers Collaborate",
      desc: "Understand pull requests, code reviews, and working in engineering squads without file collisions.",
    },
    {
      title: "Repository, Branches & Commits",
      desc: "Demystify software engineering terminology so you speak fluent developer language in your 1st year.",
    },
    {
      title: "The Landscape of 7 Tech Domains",
      desc: "Understand what Web, App, AI, DSA, Cyber, Cloud, and UI/UX developers actually do day-to-day.",
    },
    {
      title: "Which Domain Specifically Interests You",
      desc: "Cut through the noise of 100 YouTube recommendations and pick a clear path that matches your curiosity.",
    },
    {
      title: "Where & How to Start Learning",
      desc: "Receive curated beginner roadmaps and bookmarks recommended by senior students who took the same path.",
    },
    {
      title: "A Direct Mentor Network in College",
      desc: "Connect with DevUp senior leads and alumni who answer your questions throughout your 4 years.",
    },
  ];

  return (
    <section
      id="takeaways"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🎓 GRADUATION BENEFIT
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          BY THE END OF <span className="text-emerald-400">THE DAY...</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          You don&apos;t need to walk out as a senior software architect. But here is the tangible foundation you are guaranteed to walk away with:
        </p>
      </div>

      {/* Checklist Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {takeaways.map((item, idx) => (
          <div
            key={item.title}
            className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800/90 shadow-lg flex items-start gap-4 hover:border-emerald-500/50 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0 mt-0.5">
              ✓
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The Core Freshman Philosophy */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-red-600/50 text-center max-w-3xl mx-auto shadow-2xl">
        <span className="text-3xl sm:text-4xl block mb-3">🕸️</span>
        <blockquote className="font-display text-xl sm:text-2xl font-extrabold text-white leading-snug">
          &ldquo;You don&apos;t need to become a developer today. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
            You just need to know where to start.
          </span>&rdquo;
        </blockquote>
        <p className="font-mono text-xs text-slate-400 mt-3 uppercase tracking-wider">
          DEVUP CLUB FRESHMAN CREED // ZERO BARRIER ENTRY
        </p>
      </div>
    </section>
  );
}
