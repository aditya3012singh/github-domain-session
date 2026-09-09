"use client";

import React, { useState } from "react";

interface StepDetail {
  id: string;
  name: string;
  shortDesc: string;
  plainEnglish: string;
}

const JOURNEY_STEPS: StepDetail[] = [
  {
    id: "code",
    name: "YOUR CODE",
    shortDesc: "Local files on your laptop",
    plainEnglish: "The HTML, CSS, Python, or C++ files you write on your machine.",
  },
  {
    id: "git",
    name: "GIT",
    shortDesc: "Local time machine",
    plainEnglish: "A program running locally on your computer that tracks changes so you never lose work.",
  },
  {
    id: "github",
    name: "GITHUB",
    shortDesc: "Cloud collaborative vault",
    plainEnglish: "The website where millions of developers store their code online and showcase projects to companies.",
  },
  {
    id: "commit",
    name: "COMMIT",
    shortDesc: "Permanent save checkpoint",
    plainEnglish: "A commit is basically a saved checkpoint of your code with a note describing what you built.",
  },
  {
    id: "push",
    name: "PUSH",
    shortDesc: "Uploading to cloud",
    plainEnglish: "Sending your local saved commits over the internet directly onto GitHub for others to see.",
  },
  {
    id: "share",
    name: "SHARE",
    shortDesc: "World & team access",
    plainEnglish: "Anyone with the link can run your project, suggest fixes, or recruit you for an internship!",
  },
];

export default function ComicGithubLab() {
  const [activeStepId, setActiveStepId] = useState<string>("commit");
  const [hasCommitted, setHasCommitted] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const activeStep =
    JOURNEY_STEPS.find((s) => s.id === activeStepId) || JOURNEY_STEPS[3];

  const handleRunCommit = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setHasCommitted(true);
    }, 500);
  };

  return (
    <section
      id="github-lab"
      className="relative py-28 px-6 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* High-Tech Lab Cinematic Background with Dark Vignette */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/stark_tower.jpg"
          alt="High-Tech Lab"
          className="w-full h-full object-cover object-center filter contrast-150 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Spider-Man Silhouette in Corner */}
      <div className="absolute top-12 right-6 opacity-15 pointer-events-none w-64 h-64 md:w-96 md:h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/heroes/spiderman.svg"
          alt="Spider-Man Lab Mark"
          className="w-full h-full object-contain filter invert"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Huge Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 04 // THE DEVELOPER LAB
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            WITH GREAT POWER... <br />
            <span className="text-red-600 text-3xl sm:text-5xl md:text-7xl">
              COMES GREAT VERSION CONTROL.
            </span>
          </h2>
        </div>

        {/* Single Interactive GitHub Journey Pipeline */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-slate-400 tracking-widest uppercase">
            CLICK ANY STEP TO DECODE // THE COMPLETE GIT FLOW
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 border border-white/20 p-3 bg-zinc-950">
            {JOURNEY_STEPS.map((step) => {
              const isSelected = step.id === activeStep.id;
              return (
                <button
                  type="button"
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-4 text-left transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-red-600 border-red-600 text-white font-bold"
                      : "bg-black/80 border-white/10 text-slate-400 hover:text-white hover:border-white/40"
                  }`}
                >
                  <span className="font-mono text-[10px] block opacity-70 mb-1">
                    STEP
                  </span>
                  <div className="font-display font-black text-base sm:text-lg tracking-wider">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simple Explanation Spotlight Card */}
          <div className="p-6 sm:p-8 bg-zinc-950 border-l-4 border-red-600 space-y-2">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest">
              {activeStep.name} // {activeStep.shortDesc}
            </span>
            <p className="font-body text-lg sm:text-2xl text-slate-100 font-medium">
              &ldquo;{activeStep.plainEnglish}&rdquo;
            </p>
          </div>
        </div>

        {/* Hero Moment: "FIRST COMMIT" Terminal */}
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest">
              INTERACTIVE HERO MOMENT
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              FIRST COMMIT. <span className="text-red-600">FIRST STEP.</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Every software engineer in history started with this exact line. Run it now:
            </p>
          </div>

          {/* Massive Minimal Terminal */}
          <div className="p-6 sm:p-10 bg-black border-2 border-white/20 font-mono text-sm sm:text-base text-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-slate-500 text-xs border-b border-white/10 pb-3">
              <span className="text-red-500">●</span>
              <span>TERMINAL // SPIDER-DEV RECRUIT</span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-slate-400">
                <span className="text-red-500">$</span> git add .
              </div>
              <div className="text-slate-400">
                <span className="text-red-500">$</span> git commit -m &ldquo;my first commit&rdquo;
              </div>

              {hasCommitted && (
                <div className="p-4 bg-zinc-900 border-l-4 border-red-600 text-white space-y-2 mt-4 animate-fade-in">
                  <div className="text-red-500 font-bold text-base sm:text-lg">
                    ✓ COMMIT CREATED: [main (root-commit) 84f09a2] my first commit
                  </div>
                  <div className="text-xs text-slate-300">
                    1 file changed, 14 insertions(+) • ready to push to GitHub
                  </div>
                  <div className="font-display font-extrabold text-sm text-white pt-2">
                    🕸️ SPIDER-DEV BADGE UNLOCKED! YOU&apos;RE OFFICIALLY IN VERSION CONTROL.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {!hasCommitted ? (
                <button
                  type="button"
                  onClick={handleRunCommit}
                  disabled={isTyping}
                  className="px-6 py-3 bg-red-600 hover:bg-white text-white hover:text-black font-display font-extrabold text-sm tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {isTyping ? "COMMITTING..." : "EXECUTE FIRST COMMIT →"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setHasCommitted(false)}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-slate-300 font-mono text-xs uppercase cursor-pointer"
                >
                  RESET TERMINAL ↺
                </button>
              )}
              <span className="text-xs font-mono text-slate-500">
                NO PRIOR TERMINAL KNOWLEDGE NEEDED TODAY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
