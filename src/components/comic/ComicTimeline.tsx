"use client";

import React from "react";

const TIMELINE_ROWS = [
  { time: "05:00 PM", title: "ARRIVAL & CHECK-IN", sub: "Welcome to DevUp, check-in badges & recruit desk" },
  { time: "05:15 PM", title: "MEET DEVUP", sub: "Club culture, student stories & the roadmap ahead" },
  { time: "05:30 PM", title: "MISSION 01", sub: "Hands-on GitHub lab, repos & your very first commit" },
  { time: "06:15 PM", title: "MISSION 02", sub: "Live showcase: Web, App, AI/ML, Cloud & Design" },
  { time: "06:45 PM", title: "JOIN THE WEB", sub: "Domain selection, mentor connecting & sticker packs" },
  { time: "07:00 PM", title: "COMMISSIONING", sub: "Wrap-up, photos & welcome to the developer web!" },
];

export default function ComicTimeline() {
  return (
    <section
      id="comic-timeline"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      <div id="event-timeline" className="sr-only" />
      <div id="timeline" className="sr-only" />

      {/* Spider-Man Real Background Artwork (Section 7 - Same Style as Section 1) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] pointer-events-none z-0 opacity-30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Mission Timeline"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 07 // MISSION SCHEDULE
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            YOUR <span className="text-red-600">DAY.</span>
          </h2>
          <p className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            TUESDAY, 15 SEPTEMBER 2026 // 05:00 PM – 07:00 PM // DEVUP ARENA LABS
          </p>
        </div>

        {/* Movie Credits / Clean Mission Timeline Rows */}
        <div className="border-t border-white/20 divide-y divide-white/10 font-mono">
          {TIMELINE_ROWS.map((row) => (
            <div
              key={row.time}
              className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group hover:bg-zinc-950 px-4 transition-colors"
            >
              <div className="w-36 text-sm text-red-500 font-bold shrink-0">
                {row.time}
              </div>

              <div className="flex-1 font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
                {row.title}
              </div>

              <div className="text-xs sm:text-sm text-slate-400 font-body text-left sm:text-right">
                {row.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
