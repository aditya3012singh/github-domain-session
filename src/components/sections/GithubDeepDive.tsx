"use client";

import React, { useState } from "react";

export default function GithubDeepDive() {
  const [hasCommitted, setHasCommitted] = useState<boolean>(false);
  const [commitMessage, setCommitMessage] = useState<string>("feat: my first commit as a Spider-Dev");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const concepts = [
    {
      icon: "🧩",
      title: "What is Git?",
      badge: "TIME MACHINE",
      desc: "Git is a local tool on your computer that saves snapshots of your project. If you break your code at 2 AM, Git lets you jump back in time instantly.",
    },
    {
      icon: "🐙",
      title: "What is GitHub?",
      badge: "THE CLOUD HUB",
      desc: "GitHub is the worldwide social cloud for developers. It's where you back up your Git projects, collaborate with friends, and show your work to recruiters.",
    },
    {
      icon: "📦",
      title: "What is a Repository?",
      badge: "PROJECT VAULT",
      desc: "Often called a 'repo', this is simply the project folder where all your code files, images, documentation, and version history live.",
    },
    {
      icon: "🌿",
      title: "What is a Branch?",
      badge: "PARALLEL REALITY",
      desc: "A branch lets you test out crazy new features without touching the main working code. If it works, you merge it. If not, delete it cleanly!",
    },
    {
      icon: "💾",
      title: "What is a Commit?",
      badge: "SAVED CHECKPOINT",
      desc: "A commit is a permanent snapshot in your project's history with a message explaining what you changed. Like a save point in a video game.",
    },
    {
      icon: "🚀",
      title: "How do you Push Code?",
      badge: "CLOUD LAUNCH",
      desc: "'git push' uploads your local saved commits from your laptop directly onto GitHub for the entire world (or just your teammates) to see.",
    },
  ];

  const handleRunCommit = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setHasCommitted(true);
    }, 600);
  };

  const handleResetCommit = () => {
    setHasCommitted(false);
  };

  return (
    <section
      id="github-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Spider-Web Accent */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          🐙 MISSION 01 // VERSION CONTROL
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          WITH GREAT POWER... <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400">
            COMES GREAT VERSION CONTROL.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          GitHub is where developers store, share, and collaborate on code. Say goodbye to naming files <code className="bg-slate-900 px-2 py-0.5 rounded text-red-400 text-xs font-mono">final_v2_really_final.zip</code>.
        </p>
      </div>

      {/* Visual Journey: Write Code -> Git -> GitHub -> Collaborate -> Build Projects */}
      <div className="mb-20">
        <div className="font-mono text-xs font-bold text-center tracking-widest text-slate-400 uppercase mb-4">
          HOW MODERN SOFTWARE IS BUILT // THE DEVELOPER LIFECYCLE
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {[
            { step: "01", label: "WRITE CODE", icon: "💻", sub: "Your laptop IDE" },
            { step: "02", label: "GIT", icon: "🧩", sub: "Local save checkpoint" },
            { step: "03", label: "GITHUB", icon: "🐙", sub: "Cloud sync & backup" },
            { step: "04", label: "COLLABORATE", icon: "👥", sub: "Teammates pull request" },
            { step: "05", label: "BUILD PROJECTS", icon: "🚀", sub: "Deploy to millions" },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="relative p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 shadow-lg hover:border-slate-700 transition-colors"
            >
              <span className="text-2xl sm:text-3xl">{item.icon}</span>
              <div className="font-display font-bold text-xs sm:text-sm text-white tracking-wide">
                {item.label}
              </div>
              <span className="text-[10px] font-mono text-slate-400">{item.sub}</span>

              {/* Connecting arrow for desktop */}
              {idx < 4 && (
                <span className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-600 text-xs font-mono z-10">
                  ▶
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 6 Core Concepts Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {concepts.map((concept) => (
          <div
            key={concept.title}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{concept.icon}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-red-400">
                  {concept.badge}
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-2">
                {concept.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {concept.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
              COVERED LIVE AT EVENT // HANDS-ON
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Feature: "YOUR FIRST COMMIT" Terminal Simulator */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border-2 border-red-600/60 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Terminal Window Chrome */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="font-mono text-xs text-slate-400 ml-2">
              bash — spiderman@devup-terminal: ~/recruit-web
            </span>
          </div>
          <span className="font-mono text-xs font-bold text-emerald-400">
            SIMULATION TERMINAL
          </span>
        </div>

        {/* Simulator Content */}
        <div className="space-y-6">
          <div>
            <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block mb-1">
              INTERACTIVE RECRUIT CHALLENGE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              YOUR FIRST COMMIT
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Every developer remembers their very first commit message. Test the command right here before the workshop:
            </p>
          </div>

          {/* Terminal Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">spidey@first-web</span>:
              <span className="text-sky-400">~/mission-01</span>$
              <span className="text-white">git add .</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex items-center gap-2 text-slate-400 shrink-0">
                <span className="text-emerald-400 font-bold">spidey@first-web</span>:
                <span className="text-sky-400">~/mission-01</span>$
                <span className="text-amber-400 font-semibold">git commit -m</span>
              </div>
              <input
                type="text"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-1 text-emerald-300 font-mono text-xs sm:text-sm focus:outline-none focus:border-red-500"
                placeholder='feat: my first commit'
              />
            </div>

            {/* Execution Stream Output */}
            {hasCommitted && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-xs space-y-1.5 animate-fade-in text-emerald-300">
                <div className="font-bold text-emerald-400">
                  [main (root-commit) a17b94c] {commitMessage}
                </div>
                <div className="text-slate-400">
                  1 file changed, 14 insertions(+)
                </div>
                <div className="text-slate-400">
                  create mode 100644 spidey_first_web.html
                </div>
                <div className="text-sky-400 pt-1 font-bold">
                  🎉 CONGRATULATIONS RECRUIT! YOU COMMITTED YOUR FIRST CODE SNAPSHOT!
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {!hasCommitted ? (
              <button
                type="button"
                onClick={handleRunCommit}
                disabled={isTyping}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm tracking-wider shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <span>{isTyping ? "COMMITTING..." : "EXECUTE YOUR FIRST COMMIT 🚀"}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetCommit}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-display font-bold text-xs tracking-wider transition-all cursor-pointer"
              >
                <span>RESET SIMULATION ↺</span>
              </button>
            )}

            <span className="font-mono text-xs text-slate-400">
              💡 You will execute this on your actual laptop at 11:00 AM!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
