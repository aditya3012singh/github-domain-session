"use client";

import React, { useState } from "react";
import ComicOpening from "@/components/comic/ComicOpening";
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

  const handleEnterSite = () => {
    setIsEntered(true);
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        try {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            return;
          }
        } catch {
          // ignore selector errors
        }
      }
      const heroEl = document.getElementById("comic-hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-red-600 selection:text-white relative overflow-x-hidden">
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
