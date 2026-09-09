"use client";

import React, { useState } from "react";

interface Archetype {
  id: string;
  title: string;
  domain: string;
  focus: string;
}

const ARCHETYPES: Archetype[] = [
  { id: "builder", title: "THE BUILDER", domain: "Web / App Development", focus: "“I want to create websites, tools, and apps people use.”" },
  { id: "inventor", title: "THE INVENTOR", domain: "AI / Machine Learning", focus: "“I want to build intelligent software that predicts & learns.”" },
  { id: "thinker", title: "THE THINKER", domain: "DSA / Competitive Coding", focus: "“I love complex logic puzzles and algorithmic speed.”" },
  { id: "guardian", title: "THE GUARDIAN", domain: "Cybersecurity", focus: "“I want to find vulnerabilities and defend digital infrastructure.”" },
  { id: "engineer", title: "THE ENGINEER", domain: "Cloud / DevOps", focus: "“I want to understand how distributed cloud fleets stay up.”" },
  { id: "artist", title: "THE ARTIST", domain: "UI/UX Design", focus: "“I want to design what users see, feel, and love at first touch.”" },
];

export default function ComicArchetypes() {
  const [selectedId, setSelectedId] = useState<string>("builder");

  const scrollToRegistration = () => {
    const el = document.getElementById("comic-registration");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="comic-archetypes"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Cinematic Background Artwork */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/multiverse_cosmos.jpg"
          alt="Developer Multiverse"
          className="w-full h-full object-cover object-center filter contrast-150 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="space-y-3">
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 06 // ARCHETYPE IDENTIFIER
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            WHAT KIND OF <br />
            DEVELOPER <br />
            <span className="text-red-600">COULD YOU BE?</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-400 max-w-xl">
            Select your natural instinct. Every developer finds their rhythm in a different part of the web.
          </p>
        </div>

        {/* 6 Giant Minimal Choices (Clean Comic Panels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHETYPES.map((arch) => {
            const isSelected = arch.id === selectedId;
            return (
              <button
                type="button"
                key={arch.id}
                onClick={() => setSelectedId(arch.id)}
                className={`p-8 text-left transition-all duration-300 border-2 flex flex-col justify-between min-h-[220px] cursor-pointer ${
                  isSelected
                    ? "bg-black/80 backdrop-blur-md border-red-600 shadow-2xl scale-[1.02]"
                    : "bg-black/60 backdrop-blur-sm border-white/15 hover:border-white/40"
                }`}
              >
                <div>
                  <div className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest mb-2">
                    {arch.domain}
                  </div>
                  <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight">
                    {arch.title}
                  </h3>
                </div>

                <p className="font-body text-sm text-slate-300 italic pt-4">
                  {arch.focus}
                </p>
              </button>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            YOU CAN EXPLORE ALL OF THESE TRACKS ON SEPTEMBER 15 (05:00 PM – 07:00 PM)
          </div>
          <button
            type="button"
            onClick={scrollToRegistration}
            className="font-display font-black text-sm tracking-widest uppercase text-white hover:text-red-500 transition-colors cursor-pointer self-start sm:self-auto"
          >
            CONFIRM YOUR DOMAINS IN FORM ↓
          </button>
        </div>
      </div>
    </section>
  );
}
