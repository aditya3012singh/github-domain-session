"use client";

import React from "react";

export default function HeroSpiderSection() {
  const scrollToMission = () => {
    const el = document.getElementById("about-devup");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRegistration = () => {
    const el = document.getElementById("join-web");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white"
    >
      {/* Cinematic Spider-Man Real Artwork Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Background"
          className="w-full h-full object-cover object-center opacity-15 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/70 to-slate-950" />
      </div>

      {/* Spider-Web Background Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#E52521_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story Copy & Event Card */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/80 text-red-400 font-mono text-xs font-bold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            DEVUP CLUB // FRESHMAN RECRUIT DAY
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              YOUR JOURNEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400">
                STARTS HERE.
              </span>
            </h1>
          </div>

          {/* Student-First Mindset Copy */}
          <p className="font-body text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            You don&apos;t need to know everything about technology. <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">You just need to take the first step.</strong>
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            You are a new Spider-Man entering the digital web. Today, DevUp introduces you to the essential developer tools and exciting paths waiting ahead of you.
          </p>

          {/* Event Info Card Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  DATE
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  Sat, Sept 19, 2026
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  VENUE
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  DevUp Arena Labs
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  TIME
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  09:30 AM — 04:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={scrollToMission}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-sm sm:text-base tracking-wider shadow-lg shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>JOIN THE MISSION</span>
              <span className="text-lg">↓</span>
            </button>

            <button
              type="button"
              onClick={scrollToRegistration}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-display font-bold text-sm sm:text-base tracking-wider hover:text-white transition-all duration-200 cursor-pointer"
            >
              <span>RECRUIT PASS</span>
              <span className="font-mono text-xs text-red-400">FREE</span>
            </button>
          </div>
        </div>

        {/* Right Column: High-Impact Spider-Man Visual */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-red-600/50 shadow-2xl shadow-red-900/30 group">
            {/* Real Spider-Man Image with Fallback */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/real_images/spiderman_2.jpg"
              alt="Spider-Man Rookie Recruit"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "/assets/heroes/spiderman.svg";
              }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Bottom Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                    STATUS: READY TO SWING
                  </span>
                  <div className="font-display font-bold text-base text-white">
                    PETER PARKER // RECRUIT 001
                  </div>
                </div>
                <span className="text-2xl">🕸️</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 italic font-mono">
                &ldquo;Anyone can wear the mask. The only question is: will you build your web?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
