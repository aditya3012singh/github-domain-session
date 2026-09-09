"use client";

import React from "react";

export default function WhatIsDevUp() {
  const pillars = [
    {
      num: "01",
      title: "LEARN",
      icon: "💡",
      color: "#E52521",
      borderColor: "border-red-500/50",
      desc: "Zero prerequisites required. Hands-on weekend workshops where seniors guide you from your very first line of code to real software.",
    },
    {
      num: "02",
      title: "EXPLORE",
      icon: "🌐",
      color: "#0284C7",
      borderColor: "border-sky-500/50",
      desc: "You don't have to guess what you like. Taste Web Dev, AI, Cybersecurity, Mobile, and more before picking your specialty.",
    },
    {
      num: "03",
      title: "BUILD",
      icon: "🚀",
      color: "#10B981",
      borderColor: "border-emerald-500/50",
      desc: "Stop watching passive tutorials. Form squads with fellow first-years and ship working apps you can showcase on your resume.",
    },
    {
      num: "04",
      title: "CONNECT",
      icon: "🤝",
      color: "#EC4899",
      borderColor: "border-pink-500/50",
      desc: "Join a vibrant family of developers, hackathon competitors, and alumni mentors who have got your back throughout college.",
    },
  ];

  return (
    <section
      id="about-devup"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white bg-slate-950"
    >
      {/* Real Spider-Man Background Artwork: spiderman_1.jpg */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_1.jpg"
          alt="Spider-Man Background"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 saturate-125 scale-105"
        />
        {/* Dark Vignettes & Radial Overlays for Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800 text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-lg backdrop-blur-md">
            🕷️ CHAPTER 01 // WELCOME RECRUIT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            BEFORE YOU <span className="text-red-500">SWING...</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-body drop-shadow">
            There&apos;s a whole world of technology waiting for you. Here is what DevUp is all about — built by students, for students.
          </p>
        </div>

        {/* Spider-Web Metaphor: Learn -> Explore -> Build -> Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative p-6 sm:p-7 rounded-3xl bg-slate-950/85 backdrop-blur-xl border ${pillar.borderColor} shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between overflow-hidden text-white`}
            >
              {/* Top Row: Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">
                  STAGE {pillar.num}
                </span>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-slate-900/90 border border-slate-700/60 shadow-md group-hover:rotate-6 transition-transform"
                  style={{ color: pillar.color }}
                >
                  {pillar.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-extrabold tracking-wide text-white group-hover:text-red-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Thread Accent */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DEVUP MENTORSHIP</span>
                <span style={{ color: pillar.color }}>● ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/70 via-slate-950/90 to-sky-950/70 border border-slate-800 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-xl">
          <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            &ldquo;Do I need to already know how to code?&rdquo;
          </h4>
          <p className="font-body text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-emerald-400 font-semibold">Absolutely not.</strong> Every senior lead in DevUp was once sitting exactly where you are today. DevUp is specifically designed to take you from <em>step zero</em> into your developer journey with friends who help you along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
