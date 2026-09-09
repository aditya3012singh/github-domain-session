"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  isVisible?: boolean;
}

const navLinks = [
  { href: "#about-devup", label: "About" },
  { href: "#first-mission", label: "Missions" },
  { href: "#github-section", label: "GitHub" },
  { href: "#tech-domains", label: "Domains" },
  { href: "#which-spider", label: "Matcher" },
  { href: "#event-timeline", label: "Timeline" },
  { href: "#takeaways", label: "Takeaways" },
];

export default function Navbar({ isVisible = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero-section"
          className="flex items-center gap-3 group text-white cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
            🕷️
          </div>
          <div>
            <span className="font-display font-extrabold text-base tracking-wider block text-white group-hover:text-red-400 transition-colors">
              DEVUP <span className="text-red-500">CLUB</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block -mt-1">
              YOUR FIRST WEB
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#join-web"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
          >
            <span>JOIN THE WEB</span>
            <span>→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl space-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#join-web"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-red-600 text-white font-display font-bold"
            >
              CLAIM RECRUIT PASS →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
