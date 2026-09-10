"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
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
        </motion.div>

        {/* 4 Archetype Choices (Clean Comic Panels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHETYPES.map((arch, index) => {
            const isSelected = arch.id === selectedId;
            return (
              <motion.button
                type="button"
                key={arch.id}
                onClick={() => setSelectedId(arch.id)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-8 text-left transition-colors border-2 flex flex-col justify-between min-h-[220px] cursor-pointer shadow-2xl ${
                  isSelected
                    ? "bg-black/90 backdrop-blur-md border-red-600 shadow-red-950/40"
                    : "bg-black/70 backdrop-blur-sm border-white/15 hover:border-white/40"
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
              </motion.button>
            );
          })}
        </div>

        {/* Action Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            YOU CAN EXPLORE ALL OF THESE TRACKS ON SEPTEMBER 15–16 (05:00 PM – 07:00 PM)
          </div>
          <motion.button
            type="button"
            onClick={scrollToRegistration}
            whileHover={{ x: 4 }}
            className="font-display font-black text-sm tracking-widest uppercase text-white hover:text-red-500 transition-colors cursor-pointer self-start sm:self-auto"
          >
            CONFIRM YOUR DOMAINS IN FORM ↓
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
