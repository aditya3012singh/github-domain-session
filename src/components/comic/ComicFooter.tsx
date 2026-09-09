"use client";

import React from "react";

export default function ComicFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white py-24 px-6 sm:px-12 md:px-20 border-t border-white/15 overflow-hidden">
      {/* Spider-Man Real Background Artwork (Footer / Section 9) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Footer"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-90 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Upside Down Spider-Man */}
        <div
          onClick={scrollToTop}
          className="cursor-pointer group flex flex-col items-center"
          title="Return to beginning"
        >
          <div className="w-0.5 h-12 bg-red-600 mb-1" />
          <div className="w-14 h-14 rounded-full bg-black border-2 border-white/20 p-2 rotate-180 flex items-center justify-center group-hover:border-red-600 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/heroes/spiderman.svg"
              alt="Spider-Man Hanging"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Minimal Typographic Ending */}
        <div className="space-y-2">
          <h3 className="font-display text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white leading-none">
            EVERY HERO <br />
            <span className="text-red-600">STARTS SOMEWHERE.</span>
          </h3>
          <p className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase pt-1">
            DEVUP CLUB // STUDENT DEVELOPER COMMUNITY
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-slate-400 tracking-wider uppercase pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            DISCORD
          </a>
        </div>
      </div>
    </footer>
  );
}
