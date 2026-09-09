"use client";

import React, { useState } from "react";
import { useRecruit } from "@/context/RecruitContext";

interface ClusterData {
  id: string;
  name: string;
  category: string;
  hero: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  icon: string;
  status: string;
  latency: string;
  uptime: string;
  signal: string;
  tagline: string;
  desc: string;
  skills: string[];
  logSnippet: string[];
  curriculum: string;
  terminalHeader: string;
}

const DEVUP_CLUSTERS: ClusterData[] = [
  {
    id: "web",
    name: "Web Development",
    category: "FRONTEND & FULL-STACK SYSTEMS",
    hero: "Spider-Man // Earth-616",
    color: "#E52521",
    borderColor: "border-red-500/60",
    bgGlow: "rgba(229, 37, 33, 0.15)",
    icon: "🌐",
    status: "ONLINE",
    latency: "12ms",
    uptime: "99.98%",
    signal: "OPTIMAL",
    tagline: "Build responsive websites, interactive single-page apps, and high-scale cloud APIs.",
    desc: "From your very first HTML/CSS tag to building modern Next.js 15 apps, RESTful backends, and full-stack microservices, the Web Development foundry equips recruits with instant visual feedback and immense market demand.",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "PostgreSQL"],
    logSnippet: [
      "[STARK-OS::WEB] Initialized V8 engine pipeline on port 3000...",
      "[HTTP/3] Edge network deployment verified across 32 worldwide nodes.",
      "[METRIC] DOM Interactive reached in 0.42s (Lighthouse score: 100/100).",
      "[MENTOR ADVICE] Start with interactive component layouts before database modeling!"
    ],
    curriculum: "Beginner Friendly · Instant Visual Feedback · 0 XP Needed",
    terminalHeader: "SPIDER_NET // V8_CORE",
  },
  {
    id: "android",
    name: "Android Development",
    category: "NATIVE & CROSS-PLATFORM MOBILE",
    hero: "Thor // Asgard Mobile Core",
    color: "#10B981",
    borderColor: "border-emerald-500/60",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    icon: "📱",
    status: "ONLINE",
    latency: "8ms",
    uptime: "99.95%",
    signal: "EXCELLENT",
    tagline: "Craft high-performance native apps running in the palms of billions of users.",
    desc: "Build silky-smooth 120 FPS mobile applications using modern Kotlin, Jetpack Compose declarative UI, and robust mobile architecture. Learn device hardware access, notifications, and play store publishing.",
    skills: ["Kotlin", "Jetpack Compose", "Android Studio", "Material Design 3", "Coroutines", "Room DB", "Flutter"],
    logSnippet: [
      "[MOBILE-OS::KOTLIN] Gradle Daemon compilation complete in 1.4s.",
      "[RUNTIME] 120 FPS display refresh rate locked with zero jank frames.",
      "[STATE] Jetpack Compose recomposition cycle optimized for memory.",
      "[MENTOR ADVICE] Build a personalized habit tracker or notes app as your first milestone!"
    ],
    curriculum: "High Industry Demand · Modern Declarative UI · Handheld Power",
    terminalHeader: "ASGARD_MOBILE // KOTLIN_RUNTIME",
  },
  {
    id: "ai",
    name: "AI & ML",
    category: "NEURAL NETWORKS & COGNITIVE SYSTEMS",
    hero: "Iron Man // Jarvis Neural Hub",
    color: "#D97706",
    borderColor: "border-amber-500/60",
    bgGlow: "rgba(217, 119, 6, 0.15)",
    icon: "🤖",
    status: "ONLINE",
    latency: "16ms",
    uptime: "99.99%",
    signal: "COGNITIVE",
    tagline: "Engineer autonomous neural networks, predictive models, and computer vision.",
    desc: "Tony Stark's premier engineering lab. Train computer vision models, deploy machine learning algorithms, automate workflows with Python, and explore modern Generative AI and autonomous LLM agents.",
    skills: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "Neural Networks", "LLM APIs", "Computer Vision"],
    logSnippet: [
      "[JARVIS-AI::CORE] Tensor cores synchronized: 8x GPU clusters online.",
      "[INFERENCE] ResNet model forward pass executed in 2.1ms (99.4% precision).",
      "[AGENT] Autonomous code reviewer agent awaiting input prompts.",
      "[MENTOR ADVICE] Master Python basics and linear algebra fundamentals to unlock ML models!"
    ],
    curriculum: "Stark-Level Valuation · High Academic & Research Prestige",
    terminalHeader: "JARVIS_NEURAL // TENSOR_HUB",
  },
  {
    id: "uiux",
    name: "UI/UX",
    category: "PRODUCT DESIGN & USER PSYCHOLOGY",
    hero: "Scarlet Reality // Visual Matrix",
    color: "#EC4899",
    borderColor: "border-pink-500/60",
    bgGlow: "rgba(236, 72, 153, 0.15)",
    icon: "🎨",
    status: "ONLINE",
    latency: "4ms",
    uptime: "100.0%",
    signal: "PRISTINE",
    tagline: "Design intuitive digital realities that captivate users at first touch.",
    desc: "Where human psychology meets pixel-perfect artistry. Master user research, wireframing, color theory, design systems, micro-interactions, and collaborative Figma prototyping for world-class products.",
    skills: ["Figma", "Design Systems", "Wireframing", "User Research", "Interaction Design", "Prototyping", "Design Tokens"],
    logSnippet: [
      "[DESIGN-OS::FIGMA] Auto-layout components synced to global design tokens.",
      "[ACCESSIBILITY] WCAG AAA contrast compliance verified across all themes.",
      "[ANIMATION] Spring physics curve calibrated for 60 FPS micro-animations.",
      "[MENTOR ADVICE] Always design for the user first: interview classmates and sketch wireframes!"
    ],
    curriculum: "Creative & Logical Blend · Universal Need for Every Tech Startup",
    terminalHeader: "SCARLET_DESIGN // FIGMA_SYNC",
  },
  {
    id: "dsa",
    name: "DSA / CP",
    category: "ALGORITHMIC COMPLEXITY & COMPETITIVE LOGIC",
    hero: "Doctor Strange // Sanctum Sanctorum",
    color: "#0284C7",
    borderColor: "border-sky-500/60",
    bgGlow: "rgba(2, 132, 199, 0.15)",
    icon: "🌀",
    status: "ONLINE",
    latency: "2ms",
    uptime: "100.0%",
    signal: "OPTIMAL",
    tagline: "Solve intricate engineering puzzles and unravel complexity in O(1).",
    desc: "The sacred portal of mathematical problem-solving. Master dynamic programming, graph traversal, trees, recursion, and time complexity to excel in technical coding rounds and competitive programming.",
    skills: ["C++ / Java", "Data Structures", "Dynamic Programming", "Graph Theory", "Recursion", "Competitive Coding", "Time Complexity"],
    logSnippet: [
      "[SANCTUM-DSA::ALGO] Dijkstra shortest path solved across 100k nodes in 0.04ms.",
      "[OPTIMIZATION] Space complexity compressed to O(1) in-place pointers.",
      "[BENCHMARK] LeetCode & Codeforces algorithmic suite passed 100% test cases.",
      "[MENTOR ADVICE] Consistency beats intensity: solve 1 problem every day!"
    ],
    curriculum: "Cracks Big-Tech Interviews · Sharpened Problem Solving Logic",
    terminalHeader: "SANCTUM_ALGO // O1_COMPLEXITY",
  },
];

export default function CommandCenter() {
  const [selectedClusterId, setSelectedClusterId] = useState<string>("web");
  const { toggleDomain, showToast } = useRecruit();

  const activeCluster =
    DEVUP_CLUSTERS.find((c) => c.id === selectedClusterId) || DEVUP_CLUSTERS[0];

  const handleAssignCluster = () => {
    toggleDomain(activeCluster.name);
    showToast(`Assigned ${activeCluster.name} to your recruit pass!`);
  };

  return (
    <section
      id="command-center"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient High-Tech Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          SCENE 04 // TECH FOUNDRY HQ
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
          DEVUP <span className="text-red-600">INDUSTRIES</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
          &ldquo;Building the next generation of developers.&rdquo; Active telemetry,
          live department monitoring, and roadmaps across our 5 flagship technical multiverses.
        </p>
      </div>

      {/* Main Command Foundry Dashboard Card */}
      <div className="relative rounded-3xl bg-slate-950 text-slate-100 border border-slate-800/90 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
        {/* Subtle Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 via-emerald-500 via-pink-500 to-sky-500 rounded-t-3xl" />

        {/* Dashboard Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase mb-1">
              STARK-OS // DEVUP INDUSTRIES FOUNDRY v5.4
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white">
              MULTIVERSE ACTIVE HUBS // 5 DIMENSIONS
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              ALL 5 HUBS OPERATIONAL
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
              UPTIME: 99.98%
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
              LATENCY: 8MS AVG
            </span>
          </div>
        </div>

        {/* 5-Multiverse Selector Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 my-8">
          {DEVUP_CLUSTERS.map((cluster) => {
            const isSelected = cluster.id === activeCluster.id;
            return (
              <button
                type="button"
                key={cluster.id}
                onClick={() => setSelectedClusterId(cluster.id)}
                className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isSelected
                    ? "bg-slate-900/90 border-2 shadow-xl scale-[1.02]"
                    : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700"
                }`}
                style={{
                  borderColor: isSelected ? cluster.color : undefined,
                  boxShadow: isSelected ? `0 10px 30px -10px ${cluster.bgGlow}` : undefined,
                }}
              >
                {/* Active Indicator Strip */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: cluster.color }}
                  />
                )}

                {/* Card Top: Icon & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-110 transition-transform duration-200"
                    style={{ color: cluster.color }}
                  >
                    {cluster.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {cluster.status}
                  </span>
                </div>

                {/* Card Middle: Title & Hero */}
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-red-400 transition-colors">
                    {cluster.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate font-mono">
                    {cluster.hero}
                  </p>
                </div>

                {/* Card Footer: Metrics & Action */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>⚡ {cluster.latency}</span>
                  <span
                    className="font-semibold transition-colors"
                    style={{ color: isSelected ? cluster.color : "#94A3B8" }}
                  >
                    {isSelected ? "● INSPECTING" : "INSPECT →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Multiverse Deep-Dive Inspector Panel */}
        <div
          className="relative rounded-2xl border p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950 shadow-inner overflow-hidden transition-all duration-300"
          style={{
            borderColor: `${activeCluster.color}40`,
            boxShadow: `inset 0 1px 0 0 ${activeCluster.color}30, 0 20px 40px -15px ${activeCluster.bgGlow}`,
          }}
        >
          {/* Top Inspector Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-slate-800/80 border border-slate-700/60 shadow-lg"
                style={{ color: activeCluster.color }}
              >
                {activeCluster.icon}
              </div>
              <div>
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase block"
                  style={{ color: activeCluster.color }}
                >
                  {activeCluster.category}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {activeCluster.name}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">MENTOR HUB:</span>
              <span className="text-xs font-mono font-bold text-white">
                {activeCluster.hero}
              </span>
            </div>
          </div>

          {/* Body: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Left Column: Technical Overview */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <blockquote
                  className="border-l-4 pl-4 text-base sm:text-lg font-medium italic text-slate-200"
                  style={{ borderColor: activeCluster.color }}
                >
                  &ldquo;{activeCluster.tagline}&rdquo;
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCluster.desc}
                </p>

                {/* Fresher Advantage Highlight */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span className="font-mono text-xs font-bold text-emerald-400 block mb-1">
                    🎯 FRESHER ADVANTAGE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {activeCluster.curriculum}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 mb-2 uppercase">
                    DIMENSION TECH STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono font-medium text-slate-300 hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Assign Button */}
              <button
                type="button"
                onClick={handleAssignCluster}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: activeCluster.color,
                  boxShadow: `0 8px 24px -6px ${activeCluster.color}80`,
                }}
              >
                <span>ASSIGN {activeCluster.name.toUpperCase()} TO RECRUIT PASS</span>
                <span className="text-lg">＋</span>
              </button>
            </div>

            {/* Right Column: Live Stark Terminal Simulator */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="rounded-xl border border-slate-800 bg-black/90 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 truncate max-w-[200px]">
                    {activeCluster.terminalHeader}
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 space-y-2 text-slate-300 overflow-x-auto min-h-[220px]">
                  <div className="text-slate-400">
                    <span className="text-emerald-400 font-bold">stark@devup-foundry</span>
                    :
                    <span className="text-sky-400 font-bold">
                      ~/multiverse/{activeCluster.id}
                    </span>
                    $ telemetry --stream
                  </div>
                  {activeCluster.logSnippet.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        idx === activeCluster.logSnippet.length - 1
                          ? "text-amber-400 font-semibold"
                          : "text-slate-300"
                      }
                    >
                      {log}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-red-400 pt-2">
                    <span>&gt;</span>
                    <span className="inline-block w-2 h-4 bg-red-500 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Mini Stats Row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    UPTIME
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-white mt-0.5">
                    {activeCluster.uptime}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    LATENCY
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-white mt-0.5">
                    {activeCluster.latency}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    SIGNAL
                  </div>
                  <div
                    className="font-mono text-xs sm:text-sm font-bold mt-0.5"
                    style={{ color: activeCluster.color }}
                  >
                    {activeCluster.signal}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Foundry Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center hover:bg-slate-900 transition-colors">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-red-500">
              5
            </div>
            <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Multiverse Hubs
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center hover:bg-slate-900 transition-colors">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-500">
              2 DAYS
            </div>
            <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Hands-on Workshops
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center hover:bg-slate-900 transition-colors">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-500">
              15+
            </div>
            <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Student Mentors
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center hover:bg-slate-900 transition-colors">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-sky-500">
              100%
            </div>
            <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
              Free For Freshers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
