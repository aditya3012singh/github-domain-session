"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TIMELINE_ROWS = [
  { time: "05:00 PM", title: "ARRIVAL & CHECK-IN", sub: "Welcome to DevUp, check-in badges & recruit desk" },
  { time: "05:15 PM", title: "MEET DEVUP", sub: "Club culture, student stories & the roadmap ahead" },
  { time: "05:30 PM", title: "MISSION 01", sub: "Hands-on GitHub lab, repos & your very first commit" },
  { time: "06:15 PM", title: "MISSION 02", sub: "Live showcase: Web, App, AI/ML, DSA & Design" },
  { time: "06:45 PM", title: "JOIN THE WEB", sub: "Domain selection, mentor connecting & sticker packs" },
  { time: "07:00 PM", title: "COMMISSIONING", sub: "Wrap-up, photos & welcome to the developer web!" },
];

export default function ComicTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="comic-timeline"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      <div id="event-timeline" className="sr-only" />
      <div id="timeline" className="sr-only" />

      {/* Spider-Man Snowy Rooftop Background Artwork (from public/spiderman-2.jpg with Parallax) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[70%] pointer-events-none z-0 origin-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spiderman-2.jpg"
          alt="Spider-Man Mission Timeline"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-105 opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 07 // MISSION SCHEDULE
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            YOUR <span className="text-red-600">DAY.</span>
          </h2>
          <p className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            15–16 SEPTEMBER 2026 // 05:00 PM – 07:00 PM // H BLOCK 106
          </p>
        </motion.div>

        {/* Movie Credits / Clean Mission Timeline Rows with Staggered Scroll Entrance */}
        <div className="border-t border-white/20 divide-y divide-white/10 font-mono">
          {TIMELINE_ROWS.map((row, index) => (
            <motion.div
              key={row.time}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 8, backgroundColor: "rgba(24, 24, 27, 0.85)" }}
              className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group px-4 transition-colors cursor-default rounded"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
