"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRecruit } from "@/context/RecruitContext";

const GIT_STEPS: Record<number, { cmd: string; res: string }> = {
  1: {
    cmd: "git init",
    res: "Initialized empty Git repository in /home/recruit/projects/first-commit/.git/",
  },
  2: {
    cmd: "git add .",
    res: "Indexed: recruit_profile.json, multiverse_manifesto.md, first_commit.js",
  },
  3: {
    cmd: 'git commit -m "feat: first commit into the multiverse"',
    res: "[main (root-commit) e52521a] feat: first commit into the multiverse\n 3 files changed, 184 insertions(+)",
  },
  4: {
    cmd: "git push -u origin main",
    res: "Enumerating objects: 5, done.\nWriting objects: 100% (5/5), done.\nTo https://github.com/devup-club/multiverse.git\n * [new branch] main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.",
  },
};

interface TerminalEntry {
  type: "system" | "cmd" | "done";
  cmd?: string;
  res?: string;
  text?: string;
}

export default function BuildProtocol() {
  const { showToast } = useRecruit();
  const [logs, setLogs] = useState<TerminalEntry[]>([
    { type: "system", text: "// DEVUP BUILD PROTOCOL INITIATED" },
    {
      type: "cmd",
      cmd: "git status",
      res: "On branch main. Ready to initialize your developer journey.",
    },
  ]);
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const runStep = (step: number) => {
    const d = GIT_STEPS[step];
    if (!d) return;

    setLogs((prev) => [
      ...prev,
      { type: "cmd", cmd: d.cmd, res: d.res },
      ...(step === 4
        ? [
            {
              type: "done" as const,
              text: "✔ BUILD COMPLETE — CODE COMMITTED & PUSHED TO THE MULTIVERSE!",
            },
          ]
        : []),
    ]);

    if (step === 4) {
      setBadgeUnlocked(true);
      showToast("Achievement Unlocked: FIRST COMMIT!");
    }
  };

  const autoRun = () => {
    setBadgeUnlocked(false);
    setLogs([{ type: "system", text: "// DEVUP AUTO-RUN BUILD PROTOCOL INITIATED" }]);

    let s = 1;
    const timer = setInterval(() => {
      runStep(s);
      s++;
      if (s > 4) clearInterval(timer);
    }, 750);
  };

  return (
    <section id="build-protocol" className="section-wrapper section-terminal">
      <div className="section-inner">
        <div className="section-header-block">
          <span className="section-category-tag">
            SCENE 06 // GITHUB WORKSHOP
          </span>
          <h2 className="section-main-title">
            THE <span>BUILD PROTOCOL</span>
          </h2>
          <p className="section-lead-text">
            &ldquo;Every developer starts with their first commit.&rdquo; Test drive
            your Git commands interactively below or click Auto-Run to complete
            the protocol.
          </p>
        </div>

        <div className="terminal-shell-card">
          <div className="terminal-header-mac">
            <div className="mac-lights-flex">
              <div className="mac-light mac-red"></div>
              <div className="mac-light mac-yellow"></div>
              <div className="mac-light mac-green"></div>
            </div>
            <div className="terminal-title-text">
              recruit@devup-terminal: ~/projects/first-commit
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#38BDF8",
              }}
            >
              GIT v2.44
            </div>
          </div>

          <div
            className="terminal-console-screen"
            id="terminalLog"
            ref={terminalRef}
          >
            {logs.map((item, idx) => {
              if (item.type === "system") {
                return (
                  <div key={idx} className="prompt-res">
                    {item.text}
                  </div>
                );
              }
              if (item.type === "cmd") {
                return (
                  <div key={idx}>
                    <div>
                      <span className="prompt-symbol">recruit@devup:~$ </span>
                      <span className="prompt-cmd">{item.cmd}</span>
                    </div>
                    <div className="prompt-res" style={{ whiteSpace: "pre-wrap" }}>
                      {item.res}
                    </div>
                  </div>
                );
              }
              if (item.type === "done") {
                return (
                  <div key={idx} className="prompt-done">
                    {item.text}
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="terminal-control-footer">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button className="btn-term-action" onClick={() => runStep(1)}>
                git init
              </button>
              <button className="btn-term-action" onClick={() => runStep(2)}>
                git add .
              </button>
              <button className="btn-term-action" onClick={() => runStep(3)}>
                git commit -m &quot;first commit&quot;
              </button>
              <button className="btn-term-action" onClick={() => runStep(4)}>
                git push -u origin main
              </button>
            </div>

            <button className="btn-term-action btn-term-autorun" onClick={autoRun}>
              ▶ AUTO-RUN BUILD PROTOCOL
            </button>
          </div>
        </div>

        <div
          id="achievementBadgeUnlock"
          className={badgeUnlocked ? "show" : ""}
          style={{ display: badgeUnlocked ? "flex" : "none" }}
        >
          <span style={{ fontSize: "36px" }}>🏆</span>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--text-heading)",
              }}
            >
              ACHIEVEMENT UNLOCKED: YOUR FIRST COMMIT!
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12.5px",
                color: "#059669",
                fontWeight: 600,
              }}
            >
              SYSTEM STATUS: BUILD COMPLETE · WELCOME TO THE OPEN SOURCE
              MULTIVERSE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
