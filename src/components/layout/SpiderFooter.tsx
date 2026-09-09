"use client";

import React from "react";

export default function SpiderFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Spider-Man Hanging Upside Down from Web Thread */}
      <div className="flex flex-col items-center justify-center mb-8 relative">
        {/* Web Strand Line */}
        <div className="w-0.5 h-20 bg-gradient-to-b from-slate-700 via-red-500 to-red-600" />

        {/* Upside Down Spider-Man Avatar */}
        <div className="relative animate-swing -mt-1 cursor-pointer" onClick={scrollToTop} title="Swing back to top!">
          <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-red-500 p-2 shadow-2xl shadow-red-600/40 flex items-center justify-center rotate-180 hover:scale-110 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/heroes/spiderman.svg"
              alt="Spider-Man Hanging Upside Down"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Quote & Brand */}
        <div className="space-y-1">
          <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-wider text-white">
            EVERY HERO STARTS SOMEWHERE.
          </h3>
          <p className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest">
            DEVUP CLUB // STUDENT DEVELOPER COMMUNITY
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <span>🐙</span> GitHub
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <span>📸</span> Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <span>💼</span> LinkedIn
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <span>💬</span> Discord
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-900 text-[11px] font-mono text-slate-500">
          © 2026 DevUp Student Community. Handcrafted for the incoming freshman developer cohort.
        </div>
      </div>
    </footer>
  );
}
