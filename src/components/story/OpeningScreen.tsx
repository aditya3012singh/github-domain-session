"use client";

import React, { useState, useEffect, useRef } from "react";

interface OpeningScreenProps {
  onEnter: () => void;
  isEntered: boolean;
}

export default function OpeningScreen({ onEnter, isEntered }: OpeningScreenProps) {
  const [phase, setPhase] = useState<number>(1);
  const [isDismissing, setIsDismissing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Phase timers: Phase 1 -> Phase 2 -> Phase 3
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 2200);
    const t2 = setTimeout(() => setPhase(3), 4400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Web Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Floating Web Particles / Anchor Nodes
    const nodes = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle web threads between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25;
            ctx.strokeStyle = `rgba(229, 37, 33, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (const node of nodes) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleEnterClick = () => {
    setIsDismissing(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  if (isEntered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden transition-all duration-700 ${
        isDismissing ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Interactive Web Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* Spider-Sense Radial Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />

      {/* Top Skip Button */}
      <button
        type="button"
        onClick={handleEnterClick}
        className="absolute top-6 right-6 font-mono text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 transition-all z-20 cursor-pointer"
      >
        SKIP INTRO →
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Phase 1: "EVERY HERO HAS A FIRST DAY." */}
        {phase === 1 && (
          <div className="space-y-4 animate-fade-in transition-opacity duration-700">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-bold block">
              ● DEVUP RECRUIT INITIATIVE
            </span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-white leading-tight">
              EVERY HERO HAS A <span className="text-red-500">FIRST DAY</span>.
            </h1>
          </div>
        )}

        {/* Phase 2: "WHAT'S YOURS?" */}
        {phase === 2 && (
          <div className="space-y-4 animate-fade-in transition-opacity duration-700">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400 font-bold block">
              🕷️ SPIDER-SENSE DETECTED
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-white leading-tight">
              WHAT&apos;S <span className="text-sky-400">YOURS?</span>
            </h1>
          </div>
        )}

        {/* Phase 3: Spider-Man Reveals & DevUp Event Hero Banner */}
        {phase >= 3 && (
          <div className="space-y-8 animate-fade-in flex flex-col items-center">
            {/* Swinging Spider-Man Badge / Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-red-600/20 border-2 border-red-500/80 p-2 shadow-2xl shadow-red-500/30 flex items-center justify-center animate-bounce">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/heroes/spiderman.svg"
                  alt="Spider-Man"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_12px_rgba(229,37,33,0.8)]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-red-600 text-[10px] font-mono font-bold tracking-wider text-white">
                ROOKIE SPIDEY
              </div>
            </div>

            {/* Event Brand & Title */}
            <div className="space-y-2">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-red-400 uppercase">
                DEVUP PRESENTS
              </span>
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white">
                SPIDER-MAN: <span className="text-red-500">YOUR FIRST WEB</span>
              </h1>
              <p className="font-body text-slate-300 text-sm sm:text-base max-w-lg mx-auto pt-2 leading-relaxed">
                An Introduction to GitHub &amp; Tech Domains for First-Year Students.
              </p>
            </div>

            {/* Call to Action Button */}
            <button
              type="button"
              onClick={handleEnterClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-display font-bold text-base sm:text-lg tracking-wider shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>ENTER THE WEB</span>
              <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
              <span className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </button>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span>● 1-DAY RECRUIT MISSION</span>
              <span>● 0 EXPERIENCE NEEDED</span>
              <span>● FREE ADMISSION</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
