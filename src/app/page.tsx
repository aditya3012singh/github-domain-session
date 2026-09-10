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

  const handleEnterSite = (targetId?: string) => {
    // Clear any hash so it doesn't jump to another section
    if (window.location.hash) {
      try {
        history.replaceState(null, "", window.location.pathname);
      } catch {}
    }

    setIsEntered(true);

    setTimeout(() => {
      const targetEl = targetId
        ? document.getElementById(targetId)
        : document.getElementById("comic-hero");

      if (targetEl) {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetEl, { offset: -24, duration: 1.0 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
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

      {/* System Toast Alerts */}
      <Toast />
    </main>
  );
}
