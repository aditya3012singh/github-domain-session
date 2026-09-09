"use client";

import React, { useState } from "react";

interface DomainCard {
  id: string;
  suitName: string;
  name: string;
  tagline: string;
  desc: string;
  icon: string;
  color: string;
  borderColor: string;
  glowColor: string;
  skills: string[];
  powerQuote: string;
  fresherTip: string;
}

const DOMAINS: DomainCard[] = [
  {
    id: "web",
    suitName: "CLASSIC RED & BLUE // SUIT 01",
    name: "Web Development",
    tagline: "Build what people interact with every day.",
    desc: "From the very first page you design to full-stack cloud applications, web development turns your ideas into websites and online services anyone with a browser can use.",
    icon: "🕸️",
    color: "#E52521",
    borderColor: "border-red-500/60",
    glowColor: "rgba(229, 37, 33, 0.2)",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "REST APIs"],
    powerQuote: "Everything in the digital world connects through the Web.",
    fresherTip: "Instant visual feedback: write one line of code, see it change right on your screen!",
  },
  {
    id: "app",
    suitName: "PETER'S STEALTH SUIT // SUIT 02",
    name: "App Development",
    tagline: "Build experiences people carry everywhere.",
    desc: "Smartphones are in the pockets of 6 billion people. Create silky-smooth native Android and iOS mobile apps, with touch gestures, cameras, and offline sync.",
    icon: "📱",
    color: "#10B981",
    borderColor: "border-emerald-500/60",
    glowColor: "rgba(16, 185, 129, 0.2)",
    skills: ["Android Studio", "Kotlin", "Jetpack Compose", "Flutter", "iOS Swift", "Mobile APIs"],
    powerQuote: "Put software directly into people's hands wherever they go.",
    fresherTip: "See your very own app running on your personal smartphone on Day 1!",
  },
  {
    id: "ai",
    suitName: "IRON SPIDER NANOTECH // SUIT 03",
    name: "AI / ML",
    tagline: "Teach machines to think, predict & generate.",
    desc: "Step into cutting-edge intelligence. Train machine learning models to detect objects in images, analyze human voice, automate workflows, and harness modern Large Language Models.",
    icon: "🤖",
    color: "#D97706",
    borderColor: "border-amber-500/60",
    glowColor: "rgba(217, 119, 6, 0.2)",
    skills: ["Python", "Machine Learning", "Neural Networks", "OpenCV", "PyTorch", "LLM APIs"],
    powerQuote: "The future belongs to developers who build thinking software.",
    fresherTip: "Python is readable and beginner-friendly — start with simple prediction scripts!",
  },
  {
    id: "dsa",
    suitName: "SYMBIOTE SENSE MATRIX // SUIT 04",
    name: "DSA / CP",
    tagline: "Solve problems. Think differently.",
    desc: "Unravel computational puzzles. Master data structures, recursion, dynamic programming, and algorithmic patterns to write code that runs at blistering O(1) speed.",
    icon: "🧩",
    color: "#0284C7",
    borderColor: "border-sky-500/60",
    glowColor: "rgba(2, 132, 199, 0.2)",
    skills: ["C++ / Java", "Data Structures", "Algorithms", "Dynamic Prog", "Graphs", "LeetCode"],
    powerQuote: "Every complex problem has an optimal solution waiting to be discovered.",
    fresherTip: "The foundation of all technical job interviews at Google, Microsoft, and top tech companies!",
  },
  {
    id: "cyber",
    suitName: "ARACHNO-SHIELD DEFENSE // SUIT 05",
    name: "Cybersecurity",
    tagline: "Protect the web. Hold the digital line.",
    desc: "Learn how hackers break software so you can build airtight defenses. Explore network security, ethical penetration testing, cryptography, and defensive forensics.",
    icon: "🔐",
    color: "#8B5CF6",
    borderColor: "border-purple-500/60",
    glowColor: "rgba(139, 92, 246, 0.2)",
    skills: ["Network Security", "Ethical Hacking", "Linux", "Wireshark", "Cryptography", "CTF Challenges"],
    powerQuote: "With great connectivity comes the responsibility to defend systems.",
    fresherTip: "Compete in fun capture-the-flag (CTF) games where you hack real puzzles!",
  },
  {
    id: "cloud",
    suitName: "BIFROST HYPERSCALE // SUIT 06",
    name: "Cloud / DevOps",
    tagline: "Keep the world running without crashing.",
    desc: "Behind every app that handles a million users is a DevOps engineer. Learn Docker containers, automated CI/CD pipelines, and global cloud servers on AWS.",
    icon: "☁️",
    color: "#06B6D4",
    borderColor: "border-cyan-500/60",
    glowColor: "rgba(6, 182, 212, 0.2)",
    skills: ["Docker", "Kubernetes", "AWS Cloud", "Linux CLI", "CI/CD", "GitHub Actions"],
    powerQuote: "Architect infrastructure that withstands storms of global traffic.",
    fresherTip: "Learn how to deploy your personal projects online so anyone on Earth can visit them!",
  },
  {
    id: "uiux",
    suitName: "SCARLET REALITY WEAVER // SUIT 07",
    name: "UI/UX & Design",
    tagline: "Make technology beautiful, intuitive & usable.",
    desc: "Where psychology meets pixel-perfect artistry. Master color theory, user research, wireframing, micro-animations, and collaborative Figma prototyping for world-class products.",
    icon: "🎨",
    color: "#EC4899",
    borderColor: "border-pink-500/60",
    glowColor: "rgba(236, 72, 153, 0.2)",
    skills: ["Figma", "Design Systems", "User Psychology", "Wireframing", "Prototyping", "Design Tokens"],
    powerQuote: "Design isn't just how it looks. Design is how it works and feels.",
    fresherTip: "Every startup and project desperately needs someone who makes apps look incredible!",
  },
];

export default function TechDomainsGrid() {
  const [selectedDomainId, setSelectedDomainId] = useState<string>("web");

  const activeDomain =
    DOMAINS.find((d) => d.id === selectedDomainId) || DOMAINS[0];

  const handleSelectAndScroll = () => {
    const el = document.getElementById("join-web");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tech-domains"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🕷️ 7 POWER SUITS // FIND YOUR PATH
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          THE 7 <span className="text-red-600">TECH DOMAINS</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          Each domain is like a different Spider-Man suit with unique powers and equipment. Click any suit below to inspect its superpowers.
        </p>
      </div>

      {/* 7-Domain Tabs Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {DOMAINS.map((domain) => {
          const isSelected = domain.id === activeDomain.id;
          return (
            <button
              type="button"
              key={domain.id}
              onClick={() => setSelectedDomainId(domain.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-display font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white border-2 shadow-lg scale-105"
                  : "bg-slate-900/40 text-slate-400 border border-slate-800 hover:bg-slate-900/80 hover:text-slate-200"
              }`}
              style={{
                borderColor: isSelected ? domain.color : undefined,
                boxShadow: isSelected ? `0 0 20px -4px ${domain.glowColor}` : undefined,
              }}
            >
              <span>{domain.icon}</span>
              <span>{domain.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Domain Spotlight Dossier */}
      <div
        className="relative rounded-3xl p-6 sm:p-10 bg-slate-950 border-2 shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          borderColor: activeDomain.color,
          boxShadow: `0 24px 64px -12px ${activeDomain.glowColor}`,
        }}
      >
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl bg-slate-900 border border-slate-800 shadow-md"
              style={{ color: activeDomain.color }}
            >
              {activeDomain.icon}
            </div>
            <div>
              <span
                className="font-mono text-xs font-bold tracking-widest uppercase block"
                style={{ color: activeDomain.color }}
              >
                {activeDomain.suitName}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                {activeDomain.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-300">DEVUP TRACK // ACTIVE</span>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Column (7 cols): Tagline, Description, Fresher Advice */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote
              className="border-l-4 pl-4 text-base sm:text-lg font-medium italic text-slate-200"
              style={{ borderColor: activeDomain.color }}
            >
              &ldquo;{activeDomain.tagline}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeDomain.desc}
            </p>

            {/* Fresher Advantage Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="font-mono text-xs font-bold text-amber-400 block mb-1">
                ⭐ WHY FIRST-YEARS LOVE THIS DOMAIN
              </span>
              <p className="text-xs sm:text-sm text-slate-200">
                {activeDomain.fresherTip}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                CORE TOOLS &amp; TECHNOLOGIES:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDomain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-200 hover:border-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleSelectAndScroll}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                backgroundColor: activeDomain.color,
                boxShadow: `0 8px 24px -6px ${activeDomain.color}80`,
              }}
            >
              <span>CHOOSE {activeDomain.name.toUpperCase()} IN FORM</span>
              <span>↓</span>
            </button>
          </div>

          {/* Right Column (5 cols): Spider-Power Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2">
                SUPERPOWER PHILOSOPHY
              </span>
              <p className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                &ldquo;{activeDomain.powerQuote}&rdquo;
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-800/40">
                <span>PREREQUISITE XP:</span>
                <span className="text-emerald-400 font-bold">ZERO (BEGINNER)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/40">
                <span>MENTOR SUPPORT:</span>
                <span className="text-sky-400 font-bold">SENIOR DEVUP LEADS</span>
              </div>
              <div className="flex justify-between py-1">
                <span>EVENT DEMO TIME:</span>
                <span className="text-white font-bold">01:30 PM — 03:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
