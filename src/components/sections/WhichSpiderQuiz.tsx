"use client";

import React, { useState } from "react";

interface Persona {
  id: string;
  archetype: string;
  tagline: string;
  icon: string;
  color: string;
  recommendedDomain: string;
  domainId: string;
  quote: string;
  spideyVariant: string;
}

const PERSONAS: Persona[] = [
  {
    id: "builder",
    archetype: "THE BUILDER",
    tagline: "I want to create websites, webapps, and things people can touch.",
    icon: "🕸️",
    color: "#E52521",
    recommendedDomain: "Web & App Development",
    domainId: "web",
    quote: "You love seeing immediate visual results from your code and shipping real products.",
    spideyVariant: "Classic Peter Parker",
  },
  {
    id: "thinker",
    archetype: "THE THINKER",
    tagline: "I love solving difficult problems, puzzles, and optimizing logic.",
    icon: "🧠",
    color: "#0284C7",
    recommendedDomain: "DSA & Competitive Programming",
    domainId: "dsa",
    quote: "You look at algorithmic puzzles and find deep satisfaction when your code runs in O(1).",
    spideyVariant: "Spider-Man 2099 (Miguel O'Hara)",
  },
  {
    id: "inventor",
    archetype: "THE INVENTOR",
    tagline: "I want to build intelligent machines that think and predict.",
    icon: "🤖",
    color: "#D97706",
    recommendedDomain: "AI & Machine Learning",
    domainId: "ai",
    quote: "You're curious about how algorithms learn, recognize speech, and generate new content.",
    spideyVariant: "Iron Spider (Stark Nanotech)",
  },
  {
    id: "guardian",
    archetype: "THE GUARDIAN",
    tagline: "I want to understand vulnerabilities and protect systems from attacks.",
    icon: "🔐",
    color: "#8B5CF6",
    recommendedDomain: "Cybersecurity & Defenses",
    domainId: "cyber",
    quote: "You have a natural investigative mindset and love defending networks from threats.",
    spideyVariant: "Spider-Noir Detective",
  },
  {
    id: "engineer",
    archetype: "THE ENGINEER",
    tagline: "I want to understand how giant distributed servers run without crashing.",
    icon: "☁️",
    color: "#06B6D4",
    recommendedDomain: "Cloud & DevOps Infrastructure",
    domainId: "cloud",
    quote: "You care about stability, cloud containers, and keeping world-scale apps online 24/7.",
    spideyVariant: "Cyborg Spider-Man",
  },
  {
    id: "artist",
    archetype: "THE ARTIST",
    tagline: "I want to design intuitive digital realities that users fall in love with.",
    icon: "🎨",
    color: "#EC4899",
    recommendedDomain: "UI/UX & Product Design",
    domainId: "uiux",
    quote: "You care deeply about visual hierarchy, psychology, and silky micro-interactions.",
    spideyVariant: "Ghost-Spider (Gwen Stacy)",
  },
];

export default function WhichSpiderQuiz() {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>("builder");

  const activePersona =
    PERSONAS.find((p) => p.id === selectedPersonaId) || PERSONAS[0];

  const handleSelectAndScroll = () => {
    const el = document.getElementById("join-web");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="which-spider"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🕷️ INTERACTIVE MATCHMAKER
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          WHICH SPIDER <span className="text-red-600">ARE YOU?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          Every Spider-Man is different. So is every developer. Choose the statement that resonates with you most to discover your recommended domain.
        </p>
      </div>

      {/* Grid of 6 Archetype Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {PERSONAS.map((persona) => {
          const isSelected = persona.id === activePersona.id;
          return (
            <button
              type="button"
              key={persona.id}
              onClick={() => setSelectedPersonaId(persona.id)}
              className={`p-6 sm:p-7 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                isSelected
                  ? "bg-slate-900 border-2 shadow-2xl scale-[1.03]"
                  : "bg-slate-950/80 border border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
              }`}
              style={{
                borderColor: isSelected ? persona.color : undefined,
                boxShadow: isSelected ? `0 12px 36px -8px ${persona.color}40` : undefined,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{persona.icon}</span>
                  <span
                    className="font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-800"
                    style={{ color: isSelected ? persona.color : "#94A3B8" }}
                  >
                    {persona.spideyVariant}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {persona.archetype}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{persona.tagline}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">PATH:</span>
                <span className="font-bold" style={{ color: persona.color }}>
                  {persona.recommendedDomain}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Recommendation Spotlight Banner */}
      <div
        className="p-6 sm:p-8 rounded-3xl bg-slate-950 border-2 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl transition-all duration-300"
        style={{ borderColor: activePersona.color }}
      >
        <div className="space-y-2 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
            YOUR MATCHED SPIDER-VERSE PATH
          </span>
          <h4 className="font-display text-2xl font-extrabold text-white">
            {activePersona.archetype} ➔{" "}
            <span style={{ color: activePersona.color }}>
              {activePersona.recommendedDomain}
            </span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            {activePersona.quote}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSelectAndScroll}
          className="shrink-0 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          style={{ backgroundColor: activePersona.color }}
        >
          CLAIM THIS PATH IN FORM ↓
        </button>
      </div>
    </section>
  );
}
