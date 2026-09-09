"use client";

import React, { useState, useEffect } from "react";
import ComicOpening from "@/components/comic/ComicOpening";
import ComicScrollProgress from "@/components/comic/ComicScrollProgress";
import ComicHero from "@/components/comic/ComicHero";
import ComicWhoIsDevUp from "@/components/comic/ComicWhoIsDevUp";
import ComicTwoMissions from "@/components/comic/ComicTwoMissions";
import ComicGithubLab from "@/components/comic/ComicGithubLab";
import ComicDomainsWeb from "@/components/comic/ComicDomainsWeb";
import ComicArchetypes from "@/components/comic/ComicArchetypes";
import ComicTimeline from "@/components/comic/ComicTimeline";
import ComicRegistration from "@/components/comic/ComicRegistration";
import ComicFooter from "@/components/comic/ComicFooter";
import Toast from "@/components/hud/Toast";

export default function Home() {
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [isAscending, setIsAscending] = useState<boolean>(false);

  // If user scrolls manually while ascending, gracefully yield control
  useEffect(() => {
    if (!isAscending) return;
    const handleInterrupt = () => {
      setIsAscending(false);
    };
    window.addEventListener("wheel", handleInterrupt, { passive: true });
    window.addEventListener("touchstart", handleInterrupt, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleInterrupt);
      window.removeEventListener("touchstart", handleInterrupt);
    };
  }, [isAscending]);

  const handleEnterSite = (options?: { fromBottom?: boolean }) => {
    // Clear any hash so it doesn't interrupt or jump
    if (window.location.hash) {
      try {
        history.replaceState(null, "", window.location.pathname);
      } catch {}
    }

    if (options?.fromBottom) {
      setIsAscending(true);

      const getBottomY = () => {
        return (
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          ) - window.innerHeight
        );
      };

      const bottomY = getBottomY();

      // Instantly position scroll at the bottom of the website
      window.scrollTo(0, bottomY);
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(bottomY, { immediate: true });
      }

      setIsEntered(true);

      // Trigger the slow cinematic transition up to the top of the website
      setTimeout(() => {
        const lenisInstance = (window as any).__lenis;
        const slowDuration = 4.5; // 4.5 seconds majestic ascent

        if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
          lenisInstance.scrollTo(0, {
            duration: slowDuration,
            easing: (t: number) =>
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
            onComplete: () => {
              setIsAscending(false);
            },
          });
        } else {
          // Native smooth scroll animation fallback
          const startY = window.scrollY || getBottomY();
          const startTime = performance.now();
          const durationMs = slowDuration * 1000;

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const ease =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY * (1 - ease));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setIsAscending(false);
            }
          };
          requestAnimationFrame(step);
        }

        setTimeout(() => setIsAscending(false), (slowDuration + 0.5) * 1000);
      }, 60);
    } else {
      // Direct enter from skip button
      setIsEntered(true);
      setTimeout(() => {
        const heroEl = document.getElementById("comic-hero");
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 80);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-red-600 selection:text-white relative overflow-x-hidden">
      {/* Global Framer Motion Web Scroll Progress */}
      {isEntered && <ComicScrollProgress />}

      {/* 1. Movie Title Opening Sequence */}
      <ComicOpening onEnter={handleEnterSite} isEntered={isEntered} />

      {/* 2. Hero Movie Poster */}
      <ComicHero />

      {/* 3. Comic Page: Who is DevUp? */}
      <ComicWhoIsDevUp />

      {/* 4. Two Missions, One Day Comic Panels */}
      <ComicTwoMissions />

      {/* 5. GitHub Lab & First Commit Hero Moment */}
      <ComicGithubLab />

      {/* 6. Domains: The Central "YOU" Spider-Web */}
      <ComicDomainsWeb />

      {/* 7. What Kind of Developer Could You Be? */}
      <ComicArchetypes />

      {/* 8. Movie Credits Mission Timeline */}
      <ComicTimeline />

      {/* 9. Final Registration & Web-Shoot Confirmation */}
      <ComicRegistration />

      {/* 10. Minimal Ending Footer */}
      <ComicFooter />

      {/* Ascending Floating HUD Badge */}
      {isAscending && (
        <div className="fixed bottom-6 right-6 z-40 bg-zinc-950/90 border border-red-600/70 backdrop-blur-md px-4 py-2.5 shadow-[0_0_24px_rgba(229,37,33,0.45)] text-white font-mono text-xs tracking-widest uppercase flex items-center gap-3 animate-fade-in pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-bold text-slate-200">ASCENDING TO HERO // ENTERING DEVUP</span>
          <span className="text-red-500 font-black">↑</span>
        </div>
      )}

      {/* System Toast Alerts */}
      <Toast />
    </main>
  );
}
