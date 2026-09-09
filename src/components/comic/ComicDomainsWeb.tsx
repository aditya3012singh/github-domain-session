"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DomainNode {
  id: string;
  num: string;
  name: string;
  shortTag: string;
  headline: string;
  desc: string;
  stack: string[];
  themeColor: string;
}

const DOMAIN_NODES: DomainNode[] = [
  {
    id: "web",
    num: "01",
    name: "WEB DEVELOPMENT",
    shortTag: "WEB DEV",
    headline: "Build what people interact with.",
    desc: "Turn your ideas into live websites, responsive webapps, and cloud interfaces anyone with a browser can use.",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    themeColor: "#E52521",
  },
  {
    id: "app",
    num: "02",
    name: "APP DEVELOPMENT",
    shortTag: "APP DEV",
    headline: "Build experiences people carry everywhere.",
    desc: "Create high-performance native Android and iOS mobile apps running in the hands of billions of smartphone users.",
    stack: ["Kotlin", "Jetpack Compose", "Flutter", "Android Studio"],
    themeColor: "#10B981",
  },
  {
    id: "ai",
    num: "03",
    name: "AI & MACHINE LEARNING",
    shortTag: "AI / ML",
    headline: "Teach machines to think & predict.",
    desc: "Train neural networks to recognize vision, analyze speech, automate workflows, and harness modern Large Language Models.",
    stack: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "LLMs"],
    themeColor: "#D97706",
  },
  {
    id: "dsa",
    num: "04",
    name: "DSA / CP",
    shortTag: "DSA / CP",
    headline: "Solve problems. Think differently.",
    desc: "Master computational problem solving, data structures, recursion, and dynamic programming to crack top technical rounds.",
    stack: ["C++", "Java", "Data Structures", "Algorithms", "Dynamic Prog"],
    themeColor: "#0284C7",
  },
  {
    id: "uiux",
    num: "05",
    name: "UI/UX DESIGN",
    shortTag: "UI/UX DESIGN",
    headline: "Make technology beautiful and usable.",
    desc: "Bridge psychology and pixel-perfect design. Master user research, wireframing, design systems, and Figma prototyping.",
    stack: ["Figma", "Design Systems", "Wireframing", "User Psychology", "Motion"],
    themeColor: "#EC4899",
  },
];

export default function ComicDomainsWeb() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("web");

  const activeNode =
    DOMAIN_NODES.find((d) => d.id === selectedNodeId) || DOMAIN_NODES[0];

  const handleStartHere = () => {
    const el = document.getElementById("comic-registration");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="domains-web"
      className="relative min-h-screen py-24 sm:py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Spider-Man Dual Suit Background Artwork (Rock-Solid Pinned, Zero Flicker / Zero Jitter) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spiderman.jpg"
          alt="Spider-Man Dual Suit"
          className="w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block drop-shadow-md">
            SCENE 05 // THE WEB MAP
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] drop-shadow-xl">
            THE WEB IS <br />
            <span className="text-red-600">BIGGER THAN YOU THINK.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 max-w-xl drop-shadow">
            You are at the center. Select a domain below to activate its superpower:
          </p>
        </motion.div>

        {/* Floating Typographic Domain Selector (Rock-solid layout, zero flickering) */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 border-b border-white/15 pb-4 sm:pb-6">
          {DOMAIN_NODES.map((node) => {
            const isSelected = node.id === activeNode.id;
            return (
              <button
                type="button"
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className="group relative cursor-pointer text-left focus:outline-none py-2 px-1"
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-200 ${
                      isSelected ? "text-red-500" : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {node.num}
                  </span>
                  <span
                    className={`font-display font-black text-lg sm:text-2xl tracking-wider uppercase transition-colors duration-200 ${
                      isSelected
                        ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {node.shortTag}
                  </span>
                </div>

                {/* Animated Floating Underline */}
                {isSelected && (
                  <motion.div
                    layoutId="activeDomainLine"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-red-600 shadow-[0_0_12px_#E52521]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Pure Floating Domain Showcase with Stable Height Container (Zero Jerk, Zero Collapse) */}
        <div className="relative min-h-[520px] sm:min-h-[480px] md:min-h-[460px] pt-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="space-y-8 max-w-4xl"
            >
              {/* Domain Number & Name */}
              <div className="space-y-2">
                <div className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-red-500 uppercase flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#E52521]" />
                  <span>PATH {activeNode.num} // MISSION 02 DOMAIN</span>
                </div>
                <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] drop-shadow-2xl">
                  {activeNode.name}
                </h3>
              </div>

              {/* Floating Quote Headline */}
              <p className="font-display text-2xl sm:text-4xl text-slate-200 font-bold leading-tight drop-shadow-lg">
                &ldquo;{activeNode.headline}&rdquo;
              </p>

              {/* Floating Story Paragraph */}
              <p className="font-body text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl drop-shadow-md">
                {activeNode.desc}
              </p>

              {/* Floating Technologies List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
                  CORE TECHNOLOGIES &amp; SUPERPOWERS:
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm sm:text-base text-slate-200 font-medium">
                  {activeNode.stack.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 hover:text-white transition-colors cursor-default"
                    >
                      <span className="text-red-500 text-xs">◆</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Call to Action */}
              <div className="pt-4 sm:pt-6">
                <motion.button
                  type="button"
                  onClick={handleStartHere}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-4 font-display font-black text-xl sm:text-3xl text-white hover:text-red-500 uppercase tracking-wider cursor-pointer transition-colors"
                >
                  <span>CHOOSE THIS TRACK IN YOUR PASS</span>
                  <span className="text-red-600 group-hover:translate-x-3 transition-transform text-2xl sm:text-4xl">
                    ➔
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
