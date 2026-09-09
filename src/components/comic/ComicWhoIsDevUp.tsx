"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ComicWhoIsDevUp() {
  const words = [
    { label: "LEARN", color: "#E52521" },
    { label: "EXPLORE", color: "#3B82F6" },
    { label: "BUILD", color: "#10B981" },
    { label: "CONNECT", color: "#F59E0B" },
  ];

  return (
    <section
      id="who-is-devup"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-black text-white overflow-hidden"
    >


      {/* Comic Page Framing Outline with Scroll Entrance */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto w-full border-l-4 border-red-600 pl-6 sm:pl-12 py-6 space-y-12"
      >
        {/* Comic Dialogue / Monologue Header */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.25em] text-red-500 font-bold uppercase"
          >
            SCENE 02 // THE ORIGIN STORY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]"
          >
            SO... <br />
            <span className="text-red-600">WHAT IS DEVUP?</span>
          </motion.h2>
        </div>

        {/* Story Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-xl sm:text-3xl md:text-4xl text-slate-200 font-light max-w-3xl leading-snug"
        >
          We&apos;re a community of college students who{" "}
          <strong className="text-white font-bold">learn technology</strong>,{" "}
          <strong className="text-white font-bold">build things</strong>, explore
          different domains, and help each other grow without gatekeeping.
        </motion.p>

        {/* Four Words Along a Spider Thread with Interactive Framer Motion */}
        <div className="pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-6 font-display font-black text-xl sm:text-3xl md:text-4xl tracking-widest uppercase"
          >
            {words.map((item, i) => (
              <React.Fragment key={item.label}>
                <motion.span
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white hover:text-red-500 transition-colors cursor-pointer"
                >
                  {item.label}
                </motion.span>
                {i < words.length - 1 && (
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.2,
                    }}
                    className="text-red-600 inline-block"
                  >
                    →
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-xs text-slate-400 mt-4 tracking-wider uppercase"
          >
            NO PRIOR EXPERIENCE REQUIRED // EVERY FRESHMAN WELCOME
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
