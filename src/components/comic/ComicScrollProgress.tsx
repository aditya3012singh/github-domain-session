"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ComicScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Web Strand Laser Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-700 via-red-500 to-white origin-left z-50 pointer-events-none shadow-[0_0_12px_#E52521]"
        style={{ scaleX }}
      />

      {/* Floating HUD Indicator (Only visible after scrolling down a bit) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: percent > 2 ? 1 : 0,
          y: percent > 2 ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-red-600/40 rounded font-mono text-[10px] text-white shadow-xl shadow-red-950/40"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        <span className="text-slate-400">WEB PROGRESS</span>
        <span className="font-bold text-red-500">{percent}%</span>
      </motion.div>
    </>
  );
}
