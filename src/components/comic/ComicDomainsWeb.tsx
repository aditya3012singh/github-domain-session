"use client";

import React, { useState } from "react";

interface DomainNode {
  id: string;
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
    name: "WEB DEVELOPMENT",
    shortTag: "WEB DEV",
    headline: "Build what people interact with.",
    desc: "Turn your ideas into live websites, responsive webapps, and cloud interfaces anyone with a browser can use.",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    themeColor: "#E52521",
  },
  {
    id: "app",
    name: "APP DEVELOPMENT",
    shortTag: "APP DEV",
    headline: "Build experiences people carry everywhere.",
    desc: "Create high-performance native Android and iOS mobile apps running in the hands of billions of smartphone users.",
    stack: ["Kotlin", "Jetpack Compose", "Flutter", "Android Studio"],
    themeColor: "#10B981",
  },
  {
    id: "ai",
    name: "AI & MACHINE LEARNING",
    shortTag: "AI / ML",
    headline: "Teach machines to think & predict.",
    desc: "Train neural networks to recognize vision, analyze speech, automate workflows, and harness modern Large Language Models.",
    stack: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "LLMs"],
    themeColor: "#D97706",
  },
  {
    id: "dsa",
    name: "DSA / CP",
    shortTag: "DSA / CP",
    headline: "Solve problems. Think differently.",
    desc: "Master computational problem solving, data structures, recursion, and dynamic programming to crack top technical rounds.",
    stack: ["C++", "Java", "Data Structures", "Algorithms", "Dynamic Prog"],
    themeColor: "#0284C7",
  },
  {
    id: "cyber",
    name: "CYBERSECURITY",
    shortTag: "CYBERSECURITY",
    headline: "Protect the web. Defend the perimeter.",
    desc: "Understand vulnerabilities, network attacks, ethical penetration testing, and cryptography to keep digital systems safe.",
    stack: ["Networks", "Linux", "Ethical Hacking", "Wireshark", "Cryptography"],
    themeColor: "#8B5CF6",
  },
  {
    id: "cloud",
    name: "CLOUD & DEVOPS",
    shortTag: "CLOUD / DEVOPS",
    headline: "Keep the world running without crashing.",
    desc: "Deploy applications across hyperscale servers, configure Docker containers, and build automated continuous delivery pipelines.",
    stack: ["Docker", "Kubernetes", "AWS Cloud", "Linux CLI", "CI/CD"],
    themeColor: "#06B6D4",
  },
  {
    id: "uiux",
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
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden transition-colors duration-500"
    >
      {/* Spider-Man Real Background Artwork (Same Style as Hero Section 1) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] pointer-events-none z-0 opacity-30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Web Multiverse"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="space-y-3">
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 05 // THE WEB MAP
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            THE WEB IS <br />
            <span className="text-red-600">BIGGER THAN YOU THINK.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 max-w-xl">
            You are at the center. Each branch represents a different superpower. Click a node to transform the scene:
          </p>
        </div>

        {/* The Central Spider-Web Graph: YOU in center, branches around */}
        <div className="p-8 sm:p-14 bg-black/80 backdrop-blur-md border-2 border-white/20 relative overflow-hidden shadow-2xl">
          {/* Subtle connecting web lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#E52521_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            {/* Center "YOU" Node */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 border-4 border-white flex flex-col items-center justify-center shadow-2xl shadow-red-600/50">
                <span className="font-mono text-[10px] font-black tracking-widest text-white/80">
                  RECRUIT
                </span>
                <span className="font-display font-black text-xl sm:text-2xl text-white tracking-widest">
                  YOU
                </span>
              </div>
              <div className="w-0.5 h-6 bg-red-600/60" />
            </div>

            {/* Surrounding Domain Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 w-full">
              {DOMAIN_NODES.map((node) => {
                const isSelected = node.id === activeNode.id;
                return (
                  <button
                    type="button"
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3.5 sm:p-4 text-center transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? "bg-red-600 border-white text-white font-black scale-105 shadow-xl"
                        : "bg-black/90 border-white/20 text-slate-300 hover:border-red-500 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[9px] block opacity-70 mb-1">
                      PATH
                    </span>
                    <div className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase">
                      {node.shortTag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Transformation Panel */}
        <div
          className="p-8 sm:p-14 bg-black/85 backdrop-blur-md border-l-8 transition-all duration-500 space-y-8 shadow-2xl border-t border-r border-b border-white/10"
          style={{ borderColor: activeNode.themeColor }}
        >
          <div className="space-y-3">
            <span
              className="font-mono text-xs font-black tracking-widest uppercase block"
              style={{ color: activeNode.themeColor }}
            >
              SELECTED PATH // MISSION 02
            </span>
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
              {activeNode.name}
            </h3>
            <p className="font-display text-xl sm:text-3xl text-slate-200 font-bold max-w-2xl pt-2">
              &ldquo;{activeNode.headline}&rdquo;
            </p>
          </div>

          <p className="font-body text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {activeNode.desc}
          </p>

          {/* 4-5 Technologies Only (Minimal & Impactful) */}
          <div className="space-y-2 pt-4 border-t border-white/10">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              CORE TECHNOLOGIES:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeNode.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-black border border-white/20 font-mono text-xs sm:text-sm text-slate-200 uppercase font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link: START HERE → */}
          <div className="pt-6">
            <button
              type="button"
              onClick={handleStartHere}
              className="group inline-flex items-center gap-4 font-display font-black text-lg sm:text-2xl text-white hover:text-red-500 uppercase tracking-wider cursor-pointer transition-colors"
            >
              <span>START HERE</span>
              <span className="group-hover:translate-x-3 transition-transform text-red-600">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
