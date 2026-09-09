"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function ComicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollToNext = () => {
    const el = document.getElementById("who-is-devup");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="comic-hero"
      className="relative min-h-screen flex flex-col justify-between px-5 py-6 sm:p-12 md:p-16 bg-black text-white overflow-hidden"
    >
      {/* Spider-Man Occupying 60-70% of the screen with Parallax Scroll Effect */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] pointer-events-none z-0 origin-top"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man"
          className="w-full h-full object-cover object-center filter contrast-120 brightness-100"
        />
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 lg:via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </motion.div>

      {/* Top Bar: DevUp Logo & Mission Label (Responsive Column on Mobile, Row on Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4"
      >
        <Logo />

        <div className="font-mono text-[10px] sm:text-xs md:text-sm tracking-widest text-slate-300 uppercase py-1 px-2.5 bg-black/60 sm:bg-transparent border border-white/15 sm:border-0 rounded-sm">
          SPIDER-MAN: YOUR FIRST WEB
        </div>
      </motion.div>

      {/* Main Poster Typography (Stacked Bold with Framer Motion Stagger) */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-xl my-auto py-8 sm:py-12"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.88] text-white uppercase"
        >
          YOUR <br />
          JOURNEY <br />
          <span className="text-red-600">STARTS HERE.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 space-y-3 max-w-md"
        >
          <p className="font-body text-lg sm:text-2xl text-slate-200 font-medium leading-snug">
            You don&apos;t need to know everything.
          </p>
          <p className="font-body text-sm sm:text-base text-slate-400 leading-relaxed">
            You just need to take the first step. Today, DevUp guides you into GitHub and the technical paths of software engineering.
          </p>
        </motion.div>

        {/* Tiny Event Information Strip with Micro-Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.03, borderColor: "rgba(229, 37, 33, 0.6)" }}
          className="mt-6 sm:mt-8 inline-flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest text-slate-300 uppercase py-2 px-3 sm:px-4 border border-white/15 bg-black/70 backdrop-blur-sm cursor-default transition-colors max-w-full"
        >
          <span className="text-white font-bold whitespace-nowrap">15 SEPT</span>
          <span className="text-red-500">•</span>
          <span className="whitespace-nowrap">DEVUP ARENA</span>
          <span className="text-red-500">•</span>
          <span className="text-slate-300 whitespace-nowrap">05:00 PM – 07:00 PM</span>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator with Floating Spring Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6"
      >
        <motion.button
          type="button"
          onClick={scrollToNext}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest text-slate-400 hover:text-white uppercase transition-colors cursor-pointer"
        >
          <span>SCROLL TO BEGIN STORY</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-red-500 inline-block font-bold"
          >
            ↓
          </motion.span>
        </motion.button>

        <div className="font-mono text-[11px] sm:text-xs text-slate-500 tracking-wider uppercase">
          SCENE 01 // ROOKIE ARRIVAL
        </div>
      </motion.div>
    </section>
  );
}
