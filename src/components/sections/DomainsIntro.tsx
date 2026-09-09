"use client";

import React from "react";

export default function DomainsIntro() {
  return (
    <section
      id="domains-intro"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/50 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
          🕸️ MISSION 02 // BEYOND THE BASICS
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          THE WEB IS <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-sky-400">
            BIGGER THAN YOU THINK.
          </span>
        </h2>

        <p className="font-body text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          You don&apos;t have to become everything. <br className="hidden sm:inline" />
          <strong className="text-white font-semibold">You just have to discover what interests you.</strong>
        </p>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto text-left shadow-xl backdrop-blur-md">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Technology isn&apos;t a single narrow highway. It&apos;s an interconnected web of diverse creative and analytical specialties — called <strong className="text-red-400 font-bold">domains</strong>.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>7 CORE DEVUP DOMAINS</span>
            <span className="text-emerald-400">● DISCOVER BELOW ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
