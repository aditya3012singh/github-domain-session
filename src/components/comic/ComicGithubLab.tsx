"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GitStage {
  id: string;
  stepNum: string;
  cmd: string;
  badge: string;
  headline: string;
  output: string;
  plainEnglish: string;
  proTip: string;
}

const GIT_STAGES: GitStage[] = [
  {
    id: "init",
    stepNum: "01",
    cmd: "git init",
    badge: "THE TIME MACHINE",
    headline: "Turn any folder into a project time machine",
    output: "Initialized empty Git repository in /freshman-lab/rookie-web/.git/",
    plainEnglish:
      "Turns your regular computer folder into a time machine that remembers and tracks every change you ever make.",
    proTip: "Never name files 'project_final_v2_FINAL.zip' again.",
  },
  {
    id: "add",
    stepNum: "02",
    cmd: "git add .",
    badge: "THE STAGING WEB",
    headline: "Pack the exact files you want to save",
    output: "Changes to be committed:\n  (new file):   index.html\n  (new file):   app.js",
    plainEnglish:
      "Tells Git: 'These are the specific lines and files I want bundled into my next snapshot.'",
    proTip: "Lets you save only polished, working code while keeping experimental drafts aside.",
  },
  {
    id: "commit",
    stepNum: "03",
    cmd: 'git commit -m "first commit"',
    badge: "THE CHECKPOINT",
    headline: "Lock your work into history forever",
    output: "[main (root-commit) 84f09a2] first commit\n 2 files changed, 48 insertions(+)\n create mode 100644 index.html\n create mode 100644 app.js",
    plainEnglish:
      "Permanently stamps your work into history with a clear message explaining what you built or fixed.",
    proTip: "If your code breaks tomorrow, you can rewind back to this working checkpoint in 1 second.",
  },
  {
    id: "push",
    stepNum: "04",
    cmd: "git push origin main",
    badge: "CLOUD LAUNCH",
    headline: "Launch your code live to GitHub",
    output: "Enumerating objects: 4, done.\nWriting objects: 100% (4/4), 1.2 KiB | 1.2 MiB/s, done.\nTo https://github.com/recruit/rookie-web.git\n * [new branch] main -> main",
    plainEnglish:
      "Uploads your code from your laptop to GitHub's global servers so it is backed up, public, and shareable.",
    proTip: "Your laptop could crash, and your code is still 100% safe in the cloud.",
  },
  {
    id: "branch",
    stepNum: "05",
    cmd: "git branch new-feature",
    badge: "PARALLEL UNIVERSES",
    headline: "Experiment without breaking the main app",
    output: "Switched to a new branch 'new-feature'\nReady for experimental code.",
    plainEnglish:
      "Splits off into an alternate timeline where you can test bold new features without breaking the working app.",
    proTip: "Multiple students can work simultaneously on the same project without overwriting each other.",
  },
  {
    id: "pr",
    stepNum: "06",
    cmd: "gh pr create",
    badge: "THE COLLAB MERGE",
    headline: "Invite teammates to review & merge",
    output: "Creating pull request for 'new-feature' into 'main'\n✓ Pull request #1 opened: https://github.com/recruit/rookie-web/pull/1\nReady for peer review.",
    plainEnglish:
      "An invitation for teammates to review your work, suggest tweaks, and cleanly merge it into production.",
    proTip: "This is how engineering teams at Google, Microsoft, and top startups ship code together.",
  },
];

export default function ComicGithubLab() {
  const [activeStepId, setActiveStepId] = useState<string>("commit");
  const [hasCommitted, setHasCommitted] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const activeStage =
    GIT_STAGES.find((s) => s.id === activeStepId) || GIT_STAGES[2];

  const handleRunCommit = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setHasCommitted(true);
    }, 600);
  };

  return (
    <section
      id="github-lab"
      className="relative py-28 px-5 sm:px-12 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Background Web Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#E52521_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Scene Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase block">
            SCENE 04 // THE DEVELOPER LAB
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            WITH GREAT POWER... <br />
            <span className="text-red-600 text-3xl sm:text-5xl md:text-7xl">
              COMES GREAT VERSION CONTROL.
            </span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 max-w-2xl">
            Git isn&apos;t just a tool—it&apos;s a developer&apos;s superpower. Walk along the live commit branch below to decode each step:
          </p>
        </motion.div>

        {/* Dynamic Git Commit Branch Strand (Interactive Pipeline, Not Cards!) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pt-6 pb-2"
        >
          {/* Glowing Red Branch Strand Connecting Line */}
          <div className="absolute top-[48px] left-6 right-6 h-[3px] bg-gradient-to-r from-red-700 via-red-500 to-red-600 shadow-[0_0_12px_#EF4444] pointer-events-none hidden sm:block" />

          {/* Interactive Commit Branch Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 sm:gap-2 relative z-10">
            {GIT_STAGES.map((stage) => {
              const isSelected = stage.id === activeStage.id;
              return (
                <button
                  type="button"
                  key={stage.id}
                  onClick={() => setActiveStepId(stage.id)}
                  className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 focus:outline-none"
                >
                  {/* Glowing Circular Commit Node */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-black text-sm transition-all duration-300 ${
                      isSelected
                        ? "bg-red-600 border-white text-white shadow-[0_0_25px_#E52521] scale-110"
                        : "bg-black/90 border-white/25 text-slate-400 group-hover:border-red-500 group-hover:text-white"
                    }`}
                  >
                    {stage.stepNum}
                  </div>

                  {/* Command Tag Label */}
                  <div className="mt-3 space-y-0.5">
                    <span
                      className={`font-mono text-xs font-bold block transition-colors ${
                        isSelected ? "text-red-500 font-extrabold" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {stage.cmd.split(" ")[0]} {stage.cmd.split(" ")[1] || ""}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      {stage.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Unified Spider-Man IDE Console & Holographic Terminal HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="rounded-xl border-2 border-white/20 bg-[#07090E] shadow-2xl overflow-hidden"
        >
          {/* Console Header Bar */}
          <div className="px-5 py-3.5 bg-black/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            {/* Terminal Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 font-medium ml-2 text-[11px] sm:text-xs">
                spiderman@devup-lab: ~/missions/my-first-repo
              </span>
            </div>

            {/* Active Branch Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sky-400 font-bold tracking-wider">branch: (main)</span>
            </div>
          </div>

          {/* Console Content: 2-Column Responsive Layout */}
          <div className="relative min-h-[420px] sm:min-h-[340px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
              >
              {/* Left Column (7 cols): Live Terminal Emulator */}
              <div className="lg:col-span-7 p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-4 bg-black/50">
                <div className="text-slate-500 text-[11px] uppercase tracking-wider flex items-center justify-between">
                  <span>LIVE COMMAND TERMINAL</span>
                  <span className="text-red-500 font-bold">{activeStage.stepNum} // 06</span>
                </div>

                {/* Simulated Command Line */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                    <span className="text-red-500 select-none">$</span>
                    <span className="text-white">{activeStage.cmd}</span>
                    <span className="inline-block w-2 h-4 bg-red-500 animate-pulse" />
                  </div>

                  {/* Terminal Execution Output */}
                  <div className="p-4 bg-zinc-950/80 border border-white/10 rounded font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {activeStage.output}
                  </div>
                </div>

                {/* Quick Hint */}
                <div className="text-[11px] text-slate-500 pt-2 flex items-center gap-2">
                  <span className="text-red-500">ℹ</span>
                  <span>Click any node on the timeline above to switch stages</span>
                </div>
              </div>

              {/* Right Column (5 cols): Rookie Plain-English Decoding */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-zinc-950/40">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-extrabold tracking-widest text-red-500 uppercase block">
                      DECODED // {activeStage.badge}
                    </span>
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {activeStage.headline}
                    </h4>
                  </div>

                  <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    &ldquo;{activeStage.plainEnglish}&rdquo;
                  </p>

                  <div className="p-3.5 bg-black/80 border-l-2 border-red-500 rounded-r text-xs text-slate-300 space-y-1">
                    <span className="font-mono font-bold text-red-400 block text-[10px] uppercase tracking-wider">
                      💡 SPIDER-DEV PRO-TIP:
                    </span>
                    <p className="leading-snug text-slate-400">
                      {activeStage.proTip}
                    </p>
                  </div>
                </div>

                {/* Interactive Test Action */}
                <div className="pt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-2">
                    HANDS-ON LAB EXERCISE:
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStepId(activeStage.id);
                    }}
                    className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider rounded transition-colors text-center cursor-pointer"
                  >
                    RE-SIMULATE {activeStage.cmd.split(" ")[0].toUpperCase()} ↺
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

        {/* Hero Interactive Moment: FIRST COMMIT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10 bg-gradient-to-r from-black via-zinc-950 to-black border-2 border-red-600/40 rounded-xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] text-red-500 font-bold uppercase tracking-widest px-2.5 py-1 bg-red-950/40 border border-red-600/30 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              YOUR FIRST LIVE COMMIT
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              COMMISSION YOUR FIRST REPO.
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every software engineer in history started with this exact command line. Execute it now to unlock your badge:
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            {!hasCommitted ? (
              <motion.button
                type="button"
                onClick={handleRunCommit}
                disabled={isSimulating}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-white text-white hover:text-black font-display font-black text-sm tracking-wider uppercase rounded transition-colors cursor-pointer shadow-xl shadow-red-950/60"
              >
                {isSimulating ? "RECORDING COMMIT..." : "EXECUTE FIRST COMMIT ➔"}
              </motion.button>
            ) : (
              <div className="space-y-2">
                <div className="p-3.5 bg-emerald-950/50 border border-emerald-500 text-white rounded space-y-1">
                  <div className="font-mono text-emerald-400 font-bold text-xs">
                    ✓ COMMIT VERIFIED: [main 84f09a2] my first commit
                  </div>
                  <div className="font-display font-bold text-xs text-slate-200">
                    🕸️ SPIDER-DEV BADGE UNLOCKED!
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setHasCommitted(false)}
                  className="font-mono text-[10px] text-slate-400 hover:text-white uppercase tracking-wider block text-right w-full cursor-pointer"
                >
                  RESET ↺
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
