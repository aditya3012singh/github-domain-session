"use client";

import React, { useState, useEffect, useCallback } from "react";
import Logo from "@/components/ui/Logo";

interface ComicOpeningProps {
  onEnter: (options?: { fromBottom?: boolean }) => void;
  isEntered: boolean;
}

export default function ComicOpening({ onEnter, isEntered }: ComicOpeningProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const [beat, setBeat] = useState<number>(1);
  const [isBeat1Exiting, setIsBeat1Exiting] = useState(false);
  const [showBeat2Details, setShowBeat2Details] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Style B: 2-Beat Trailer Cut timing sequence
  useEffect(() => {
    // 0.2s: Initial web laser strand
    const t0 = setTimeout(() => setIsReady(true), 200);

    // 1.8s: Beat 1 holds for ~1.4s, then begins fade out
    const t1 = setTimeout(() => {
      setIsBeat1Exiting(true);
    }, 1800);

    // 2.3s: Beat 2 slams into clean screen ("WHAT'S YOURS?")
    const t2 = setTimeout(() => {
      setBeat(2);
    }, 2300);

    // 2.8s: Event details & CTA bar reveal
    const t3 = setTimeout(() => {
      setShowBeat2Details(true);
    }, 2800);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleEnter = useCallback(
    (fromBottom = true) => {
      if (isFadingOut || isEntered) return;
      setIsFadingOut(true);
      if (fromBottom) {
        setIsAscending(true);
        try {
          const bottomY =
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            ) - window.innerHeight;
          window.scrollTo(0, bottomY);
          const lenis = (window as any).__lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(bottomY, { immediate: true });
          }
        } catch {}
      }
      setTimeout(() => {
        onEnter({ fromBottom });
      }, 500);
    },
    [isFadingOut, isEntered, onEnter]
  );

  // Support mouse wheel, keyboard, and touch swipe to immediately enter
  useEffect(() => {
    if (isEntered || isFadingOut) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 15) {
        handleEnter();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) {
        handleEnter();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (touchStartY - currentY > 30) {
        handleEnter();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isEntered, isFadingOut, handleEnter]);

  if (isEntered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between px-5 py-6 sm:p-12 md:p-16 bg-black text-white transition-all duration-700 ease-in-out select-none overflow-hidden ${
        isFadingOut ? "-translate-y-8 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Animated Glowing Red Web Strand Cutting Horizontally */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[68%] sm:top-[54%] left-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-600 to-transparent transition-all duration-1000 ease-out"
          style={{
            width: isReady ? "100%" : "0%",
            opacity: isReady ? 0.75 : 0,
          }}
        />

        {/* Decorative Corner Spider Web SVG Drawing In */}
        <svg
          viewBox="0 0 300 300"
          className={`absolute -top-10 -left-10 w-64 h-64 text-red-600/30 transition-all duration-1000 ease-out ${
            isReady
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 -rotate-45"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M0,0 L300,300 M0,0 L150,300 M0,0 L300,150 M0,0 L0,300 M0,0 L300,0" />
          <path d="M60,0 C60,40 40,60 0,60" />
          <path d="M120,0 C120,80 80,120 0,120" />
          <path d="M180,0 C180,120 120,180 0,180" />
          <path d="M240,0 C240,160 160,240 0,240" />
        </svg>
      </div>

      {/* Background Cinematic Spider-Man Artwork with Dynamic Zoom & Fade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man"
          className={`w-full h-full object-cover object-center filter contrast-125 brightness-95 transition-all duration-1000 ease-out ${
            beat === 2
              ? "scale-100 opacity-80 blur-0"
              : isReady
              ? "scale-105 opacity-70 blur-0"
              : "scale-110 opacity-0 blur-sm"
          }`}
        />
        {/* Radial ambient glow to prevent empty black voids on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,37,33,0.18)_0%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Top Header: DevUp Logo & Skip Button */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div
          className={`transition-all duration-700 ease-out ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Logo />
        </div>

        <button
          type="button"
          onClick={() => handleEnter(false)}
          className={`font-mono text-xs tracking-widest text-slate-300 hover:text-white uppercase transition-all duration-700 px-3 py-1.5 border border-white/20 hover:border-white/50 bg-black/40 backdrop-blur-sm cursor-pointer ${
            isReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          SKIP INTRO →
        </button>
      </div>

      {/* Center Stage: Vertically Centered Loading & Hero Sequence */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-auto py-6 sm:py-8 text-center px-4">
        {/* BEAT 1: "EVERY HERO HAS A FIRST DAY." (Perfect Vertical Center on Mobile & Desktop) */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-center justify-center text-center max-w-xl mx-auto ${
            beat === 1 && !isBeat1Exiting
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-6 pointer-events-none hidden"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-600/15 border border-red-600/40 text-red-400 font-mono text-[11px] sm:text-xs tracking-[0.3em] font-bold uppercase mb-4 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            ORIGIN STORY // 2026
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92] text-white uppercase mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            EVERY HERO <br />
            <span className="text-red-600 drop-shadow-[0_0_25px_rgba(229,37,33,0.6)]">
              HAS A FIRST DAY.
            </span>
          </h1>

          <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs text-slate-400 tracking-[0.2em] uppercase">
            <span>KIET GROUP OF INSTITUTIONS</span>
            <span>•</span>
            <span className="text-red-400">DEVUP RECRUITMENT</span>
          </div>
        </div>

        {/* BEAT 2: "WHAT'S YOURS?" (Perfect Vertical Center on Mobile & Desktop) */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-center justify-center text-center max-w-2xl mx-auto ${
            beat === 2
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-110 translate-y-8 pointer-events-none hidden"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-600/15 border border-red-600/40 text-red-400 font-mono text-[11px] sm:text-xs tracking-[0.3em] font-bold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            YOUR TURN
          </div>

          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.88] text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            WHAT&apos;S{" "}
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(229,37,33,0.7)]">
              YOURS?
            </span>
          </h1>

          {/* Subtitle & Date Badge for Beat 2 */}
          <div
            className={`mt-6 sm:mt-10 space-y-1.5 sm:space-y-2 transition-all duration-700 delay-150 ${
              showBeat2Details ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase">
              SPIDER-MAN: YOUR FIRST WEB
            </div>
            <div className="font-mono text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] text-slate-400 uppercase">
              15 SEPTEMBER 2026 // 05:00 PM – 07:00 PM // DEVUP ARENA
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Atmosphere Bar: Balances Mobile Screen in Both Beat 1 and Beat 2 */}
      <div className="relative z-10 border-t border-white/10 pt-4 sm:pt-6 transition-all duration-700 ease-out">
        {beat === 1 ? (
          <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-slate-400 tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>FRESHMAN INITIATIVE // 0 EXP REQUIRED</span>
            </div>
            <button
              type="button"
              onClick={() => handleEnter(true)}
              className="text-red-500 hover:text-white uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
            >
              <span>SWIPE / TAP</span>
              <span className="animate-bounce">↓</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <div className="font-mono text-xs text-slate-400 tracking-wider">
                A 1-DAY FRESHMAN INITIATIVE // ALL 12 BRANCHES
              </div>
              <button
                type="button"
                onClick={() => handleEnter(true)}
                className="inline-flex items-center gap-2 font-mono text-xs text-red-500 hover:text-red-400 tracking-widest uppercase transition-colors text-left cursor-pointer"
              >
                <span className="animate-bounce">↓</span>
                <span>SCROLL DOWN OR CLICK TO ENTER</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleEnter(true)}
              disabled={isFadingOut}
              className="group inline-flex items-center justify-between gap-6 px-8 py-4 sm:py-5 rounded-none bg-red-600 hover:bg-white text-white hover:text-black font-display font-extrabold text-base sm:text-lg tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(229,37,33,0.5)] cursor-pointer disabled:opacity-85"
            >
              <span>{isAscending ? "ASCENDING THE WEB..." : "ENTER THE WEB"}</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">
                {isAscending ? "↑" : "→"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
