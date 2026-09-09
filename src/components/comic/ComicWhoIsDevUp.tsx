"use client";

import React from "react";

export default function ComicWhoIsDevUp() {
  return (
    <section
      id="who-is-devup"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-black text-white overflow-hidden"
    >
      {/* Huge Spider-Man Background Image with Comic Contrast & Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_1.jpg"
          alt="Spider-Man Comic Art"
          className="w-full h-full object-cover object-center filter contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      {/* Comic Page Framing Outline */}
      <div className="relative z-10 max-w-5xl mx-auto w-full border-l-4 border-red-600 pl-6 sm:pl-12 py-6 space-y-12">
        {/* Comic Dialogue / Monologue Header */}
        <div className="space-y-3">
          <div className="font-mono text-xs tracking-[0.25em] text-red-500 font-bold uppercase">
            SCENE 02 // THE ORIGIN STORY
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]">
            SO... <br />
            <span className="text-red-600">WHAT IS DEVUP?</span>
          </h2>
        </div>

        {/* Story Text */}
        <p className="font-body text-xl sm:text-3xl md:text-4xl text-slate-200 font-light max-w-3xl leading-snug">
          We&apos;re a community of college students who{" "}
          <strong className="text-white font-bold">learn technology</strong>,{" "}
          <strong className="text-white font-bold">build things</strong>, explore
          different domains, and help each other grow without gatekeeping.
        </p>

        {/* Four Words Along a Spider Thread (Very Minimal!) */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-display font-black text-xl sm:text-3xl md:text-4xl tracking-widest uppercase">
            <span className="text-white hover:text-red-500 transition-colors">
              LEARN
            </span>
            <span className="text-red-600">→</span>
            <span className="text-white hover:text-red-500 transition-colors">
              EXPLORE
            </span>
            <span className="text-red-600">→</span>
            <span className="text-white hover:text-red-500 transition-colors">
              BUILD
            </span>
            <span className="text-red-600">→</span>
            <span className="text-white hover:text-red-500 transition-colors">
              CONNECT
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-4 tracking-wider uppercase">
            NO PRIOR EXPERIENCE REQUIRED // EVERY FRESHMAN WELCOME
          </p>
        </div>
      </div>
    </section>
  );
}
