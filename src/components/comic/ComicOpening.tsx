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
          className="absolute top-[54%] left-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-600 to-transparent transition-all duration-1000 ease-out"
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
          className={`w-full h-full object-cover object-right md:object-center filter contrast-115 brightness-100 transition-all duration-1000 ease-out ${
            beat === 2
              ? "scale-100 opacity-75 blur-0"
              : isReady
              ? "scale-105 opacity-60 blur-0"
              : "scale-110 opacity-0 blur-sm"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
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

      {/* Center Stage: 2-Beat Trailer Cut Transition */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-auto py-8">
        {/* BEAT 1: "EVERY HERO HAS A FIRST DAY." (Lifted Cleanly Above the Red Line) */}
        <div
          className={`absolute inset-x-0 transition-all duration-700 ease-out flex flex-col items-center justify-center text-center px-4 ${
            beat === 1 && !isBeat1Exiting
              ? "opacity-100 scale-100 -translate-y-16 sm:-translate-y-20 md:-translate-y-24"
              : "opacity-0 scale-95 -translate-y-28 pointer-events-none"
          }`}
        >
          <div className="font-mono text-xs tracking-[0.35em] text-red-500 font-bold uppercase mb-4 animate-pulse">
            ORIGIN STORY // 2026
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
            EVERY HERO <br />
            <span className="text-red-600">
              HAS A FIRST DAY.
            </span>
          </h1>
        </div>

        {/* BEAT 2: "WHAT'S YOURS?" Slams In on Clean Screen (Shifted Upwards from the Red Line) */}
        <div
          className={`absolute inset-x-0 transition-all duration-700 ease-out flex flex-col items-center justify-center text-center px-4 ${
            beat === 2
              ? "opacity-100 scale-100 -translate-y-12 sm:-translate-y-16 md:-translate-y-18"
              : "opacity-0 scale-110 translate-y-10 pointer-events-none"
          }`}
        >
          <div className="font-mono text-xs tracking-[0.35em] text-red-500 font-bold uppercase mb-3">
            YOUR TURN
          </div>

          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.88] text-white uppercase">
            WHAT&apos;S{" "}
            <span className="text-red-600">
              YOURS?
            </span>
          </h1>

          {/* Subtitle & Date Badge for Beat 2 (Cleanly Beneath the Red Line) */}
          <div
            className={`mt-8 sm:mt-12 md:mt-14 space-y-2 transition-all duration-700 delay-150 ${
              showBeat2Details ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-wider text-slate-200 uppercase">
              SPIDER-MAN: YOUR FIRST WEB
            </div>
            <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-slate-400 uppercase">
              15 SEPTEMBER 2026 // 05:00 PM – 07:00 PM // DEVUP COMPUTING ARENA
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Enter Button & Animated Cue (Reveals on Beat 2) */}
      <div
        className={`relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-6 transition-all duration-700 ease-out ${
          showBeat2Details ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="font-mono text-xs text-slate-500 tracking-wider">
            A 1-DAY FRESHMAN INITIATIVE // 0 EXP REQUIRED
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
          className="group inline-flex items-center justify-between gap-6 px-8 py-5 rounded-none bg-red-600 hover:bg-white text-white hover:text-black font-display font-extrabold text-base sm:text-lg tracking-widest uppercase transition-all duration-300 shadow-2xl cursor-pointer disabled:opacity-85"
        >
          <span>{isAscending ? "ASCENDING THE WEB..." : "ENTER THE WEB"}</span>
          <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">
            {isAscending ? "↑" : "→"}
          </span>
        </button>
      </div>
    </div>
  );
}
