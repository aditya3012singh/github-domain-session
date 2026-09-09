"use client";

import React from "react";

export default function ComicTwoMissions() {
  const scrollToGithub = () => {
    const el = document.getElementById("github-lab");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDomains = () => {
    const el = document.getElementById("domains-web");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="two-missions"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Cinematic Spider-Man Real Background Image (Mirrored Action Framing) */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0 opacity-35">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Two Missions"
          className="w-full h-full object-cover object-left filter contrast-125 brightness-90 -scale-x-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Horizontal Web Strand Cutting Across the Section */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title Sequence */}
        <div className="space-y-2">
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 03 // THE BRIEFING
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]">
            TWO MISSIONS. <br />
            <span className="text-red-600">ONE DAY.</span>
          </h2>
        </div>

        {/* Two Comic Panels (Bold, Sharp, High Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel 01: GitHub */}
          <div
            onClick={scrollToGithub}
            className="group relative p-8 sm:p-12 bg-black/75 backdrop-blur-md border-2 border-white/20 hover:border-red-600 transition-all duration-300 flex flex-col justify-between min-h-[380px] cursor-pointer shadow-2xl"
          >
            {/* Comic Panel Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs tracking-widest text-red-500 font-bold">
                PANEL 01 // 05:30 PM
              </span>
              <span className="font-mono text-xs text-slate-400">MISSION A</span>
            </div>

            {/* Panel Core Content */}
            <div className="space-y-4 my-8">
              <div className="font-mono text-6xl font-extrabold text-white group-hover:text-red-500 transition-colors">
                01
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                GITHUB
              </h3>
              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed">
                Learn how developers store code, track history, and work together on real projects without losing work.
              </p>
            </div>

            {/* Comic Action Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs tracking-wider text-slate-400 group-hover:text-white transition-colors">
              <span>ENTER THE LAB</span>
              <span className="text-red-500 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
          </div>

          {/* Panel 02: Domains */}
          <div
            onClick={scrollToDomains}
            className="group relative p-8 sm:p-12 bg-black/75 backdrop-blur-md border-2 border-white/20 hover:border-red-600 transition-all duration-300 flex flex-col justify-between min-h-[380px] cursor-pointer shadow-2xl"
          >
            {/* Comic Panel Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs tracking-widest text-sky-400 font-bold">
                PANEL 02 // 06:15 PM
              </span>
              <span className="font-mono text-xs text-slate-400">MISSION B</span>
            </div>

            {/* Panel Core Content */}
            <div className="space-y-4 my-8">
              <div className="font-mono text-6xl font-extrabold text-white group-hover:text-sky-400 transition-colors">
                02
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                DOMAINS
              </h3>
              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed">
                Discover what you can build. Explore Web, App, AI/ML, Cybersecurity, Cloud, and Design to find your direction.
              </p>
            </div>

            {/* Comic Action Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs tracking-wider text-slate-400 group-hover:text-white transition-colors">
              <span>EXPLORE THE WEB</span>
              <span className="text-sky-400 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
