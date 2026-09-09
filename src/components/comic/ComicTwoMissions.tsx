"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ComicTwoMissions() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
      ref={sectionRef}
      id="two-missions"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Spider-Man Comic Art Background (Moved from Section 2 to Section 3 with Parallax) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none z-0 origin-center opacity-65"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_1.jpg"
          alt="Spider-Man Comic Art Two Missions"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
      </motion.div>

      {/* Horizontal Web Strand Cutting Across the Section */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 pointer-events-none origin-center"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title Sequence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 03 // THE BRIEFING
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]">
            TWO MISSIONS. <br />
            <span className="text-red-600">ONE DAY.</span>
          </h2>
        </motion.div>

        {/* Two Comic Panels (Bold, Sharp, Framer Motion Powered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel 01: GitHub */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToGithub}
            className="group relative p-8 sm:p-12 bg-black/75 backdrop-blur-md border-2 border-white/20 hover:border-red-600 transition-colors flex flex-col justify-between min-h-[380px] cursor-pointer shadow-2xl hover:shadow-red-600/20"
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="font-mono text-6xl font-extrabold text-white group-hover:text-red-500 transition-colors inline-block"
              >
                01
              </motion.div>
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
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500 inline-block font-bold text-base"
              >
                →
              </motion.span>
            </div>
          </motion.div>

          {/* Panel 02: Domains */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToDomains}
            className="group relative p-8 sm:p-12 bg-black/75 backdrop-blur-md border-2 border-white/20 hover:border-sky-400 transition-colors flex flex-col justify-between min-h-[380px] cursor-pointer shadow-2xl hover:shadow-sky-500/20"
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="font-mono text-6xl font-extrabold text-white group-hover:text-sky-400 transition-colors inline-block"
              >
                02
              </motion.div>
              <h3 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                DOMAINS
              </h3>
              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed">
                Discover what you can build. Explore Web, App, AI/ML, DSA, and UI/UX Design to find your direction.
              </p>
            </div>

            {/* Comic Action Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs tracking-wider text-slate-400 group-hover:text-white transition-colors">
              <span>EXPLORE THE WEB</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                className="text-sky-400 inline-block font-bold text-base"
              >
                →
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
