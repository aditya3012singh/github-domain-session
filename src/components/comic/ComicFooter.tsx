"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function ComicFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "EVENT POSTER", href: "/poster" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "DISCORD", href: "https://discord.com" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white py-24 px-6 sm:px-12 md:px-20 border-t border-white/15 overflow-hidden"
    >
      {/* Spider-Man Real Background Artwork (Footer / Section 9 with Parallax) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none z-0 transform-gpu will-change-transform [backface-visibility:hidden]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/real_images/spiderman_2.jpg"
          alt="Spider-Man Footer"
          className="w-full h-full object-cover object-center filter contrast-115 brightness-95 opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Back to Top Link */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="font-mono text-xs text-slate-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer pb-2"
        >
          <span>BACK TO TOP</span>
          <span className="text-red-500 font-bold">↑</span>
        </motion.button>

        {/* DevUp Logo Component */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-2"
        >
          <Logo />
        </motion.div>

        {/* Minimal Typographic Ending */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-display text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white leading-none">
            EVERY HERO <br />
            <span className="text-red-600">STARTS SOMEWHERE.</span>
          </h3>
          <p className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase pt-1">
            DEVUP CLUB // STUDENT DEVELOPER COMMUNITY
          </p>
        </motion.div>

        {/* Minimal Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-slate-400 tracking-wider uppercase pt-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2, color: "#E52521" }}
              className="transition-colors cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
