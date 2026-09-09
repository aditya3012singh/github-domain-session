"use client";

import React from "react";

export default function ComicHero() {
  const scrollToNext = () => {
    const el = document.getElementById("who-is-devup");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="comic-hero"
      className="relative min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-black text-white overflow-hidden"
    >
      {/* Spider-Man Occupying 60-70% of the screen as a massive cinematic poster */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] pointer-events-none z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-95"
        />
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Top Bar: Minimal Mark */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="font-display font-extrabold text-xl tracking-wider text-white">
          DEVUP <span className="text-red-600">//</span> 2026
        </div>

        <div className="font-mono text-xs tracking-widest text-slate-400">
          SPIDER-MAN: YOUR FIRST WEB
        </div>
      </div>

      {/* Main Poster Typography (Stacked Bold) */}
      <div className="relative z-10 max-w-xl my-auto py-12">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.88] text-white uppercase">
          YOUR <br />
          JOURNEY <br />
          <span className="text-red-600">STARTS HERE.</span>
        </h1>

        <div className="mt-8 space-y-3 max-w-md">
          <p className="font-body text-lg sm:text-2xl text-slate-200 font-medium leading-snug">
            You don&apos;t need to know everything.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-400 leading-relaxed">
            You just need to take the first step. Today, DevUp guides you into GitHub and the technical paths of software engineering.
          </p>
        </div>

        {/* Tiny Event Information Strip (No Giant Cards!) */}
        <div className="mt-8 inline-flex items-center gap-3 font-mono text-xs sm:text-sm tracking-widest text-slate-300 uppercase py-2 px-4 border border-white/15 bg-black/60 backdrop-blur-sm">
          <span>15 SEPT</span>
          <span className="text-red-500">•</span>
          <span>DEVUP ARENA</span>
          <span className="text-red-500">•</span>
          <span>05:00 PM – 07:00 PM</span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
        <button
          type="button"
          onClick={scrollToNext}
          className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest text-slate-400 hover:text-white uppercase transition-colors cursor-pointer"
        >
          <span>SCROLL TO BEGIN STORY</span>
          <span className="text-red-500 group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>

        <div className="font-mono text-xs text-slate-500">
          SCENE 01 // ROOKIE ARRIVAL
        </div>
      </div>
    </section>
  );
}
