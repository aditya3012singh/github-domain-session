"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`h-12 sm:h-14 w-auto px-3 sm:px-4 flex items-center gap-2.5 sm:gap-3 bg-[#080B11] border border-white/20 rounded-xl shadow-2xl hover:border-white/40 transition-colors select-none cursor-pointer group shrink-0 ${className}`}
      title="DevUp Club"
    >
      {/* Official DevUp Orange Rocket Emblem */}
      <svg
        viewBox="0 0 100 125"
        className="h-8 sm:h-10 w-auto shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
      >
        {/* Rocket Main Body & Swept-back Wings */}
        <path
          d="M50 8 C32 24 23 52 23 80 C23 85 19 94 8 98 C14 99 23 96 28 89 C33 93 41 95 50 95 C59 95 67 93 72 89 C77 96 86 99 92 98 C81 94 77 85 77 80 C77 52 68 24 50 8 Z"
          fill="#FF6000"
        />
        {/* Circular White Porthole Window */}
        <circle cx="50" cy="48" r="11" fill="#FFFFFF" />
        {/* Rocket Flame */}
        <path
          d="M41 98 C46 110 50 120 50 120 C50 120 54 110 59 98 C54 100 46 100 41 98 Z"
          fill="#FF6000"
        />
      </svg>

      {/* DevUp Brand Typography */}
      <div className="flex flex-col justify-center leading-none text-left">
        {/* Main Title: DevUP */}
        <div className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-none flex items-baseline">
          <span>Dev</span>
          <span className="font-black text-white">UP</span>
        </div>

        {/* Subtitle: UPSKILL (white) + </> (red/orange) + COLLAB (white) */}
        <div className="flex items-center gap-[2px] font-mono text-[8px] sm:text-[9px] font-extrabold tracking-wider mt-1 leading-none">
          <span className="text-white">UPSKILL</span>
          <span className="text-red-500 font-black">&lt;/&gt;</span>
          <span className="text-white">COLLAB</span>
        </div>
      </div>
    </motion.div>
  );
}
