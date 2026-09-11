"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function PosterPage() {
  const [selectedTab, setSelectedTab] = useState<"instagram" | "linkedin">("instagram");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const linkedinCaption = `🚀 EVERY HERO HAS A FIRST DAY. WHAT’S YOURS?

Freshmen of KIET, your developer journey starts here. 

DevUp Upskill Collab is proud to announce "SPIDER-MAN: YOUR FIRST WEB" — a premier 1-day technical induction & hands-on development experience exclusively designed for 1st-year students.

Whether you've never written a single line of code or have already started building, this orientation will help you unlock your path in technology.

📌 What You’ll Master:
• Version Control: Hands-on Git & GitHub lab — make your very first commit live!
• Discover Your Domain: Real-world insights into Web Development, App Development, AI & Machine Learning, Competitive Programming (DSA), and UI/UX Design.
• Meet the DevUp core leads and mentors who will guide your college journey.

🗓️ Date: 15–16 September 2026
⏰ Time: 05:00 PM – 07:00 PM
📍 Venue: H Block 106, KIET Campus
🎟️ Eligibility: Exclusively for 1st Year KIET Students (Free Admission)

Limited seats available. Confirm your digital pass now:
👉 https://your-first-web.netlify.app/

#DevUp #KIET #Engineering #Freshmen2026 #GitHub #WebDevelopment #ArtificialIntelligence #DSA #TechCommunity #Coding`;

  const instagramCaption = `🕸️ EVERY HERO HAS A FIRST DAY. WHAT’S YOURS? 🕸️

DevUp presents: SPIDER-MAN: YOUR FIRST WEB 🕷️⚡
A 2-day mission for all 1st-year KIETians to dive headfirst into the developer multiverse!

You don't need any prior coding experience — just curiosity and your laptop.

🔥 What’s down the web:
✦ Make your very first GitHub commit live 💻
✦ Explore 5 Specialized Tech Domains:
   🌐 Web Dev (Next.js & React)
   📱 App Dev (Flutter & Native)
   🤖 AI & Machine Learning (Python & LLMs)
   ⚡ DSA / CP (Logic & Problem Solving)
   🎨 UI/UX Design (Figma & Creative Systems)
✦ Network with seniors, mentors, and fellow tech enthusiasts!

📅 15–16 September 2026
🕔 05:00 PM – 07:00 PM
📍 H Block 106 (KIET Campus)
🎟️ FREE ADMISSION • Digital Pass Required

🔗 Link in bio to claim your freshman pass, or visit: https://your-first-web.netlify.app/

Tag your classmates below & get ready to swing into tech! 🚀

#DevUp #KIET #SpiderMan #TechMultiverse #GitHub #FirstCommit #CollegeLife #Freshers2026 #BTech #CodingCommunity`;

  const whatsappMessage = `*🕸️ DEVUP PRESENTS: SPIDER-MAN — YOUR FIRST WEB 🕸️*
_A 2-Day Developer Induction Exclusively for KIET 1st Years!_

🚀 *Date:* 15–16 September 2026
⏰ *Time:* 05:00 PM – 07:00 PM
📍 *Venue:* H Block 106 (KIET Campus)
🎓 *Eligibility:* 1st Year Students (0 Prior Coding Experience Needed!)

*What you will do:*
✅ Hands-on Git & GitHub Workshop (Make your 1st commit live!)
✅ Discover 5 Tech Domains: Web Dev, App Dev, AI/ML, DSA, UI/UX
✅ Connect with DevUp mentors & community leads

🎟️ *Entry is 100% FREE*, but registration is mandatory to generate your official admission pass:
👉 *Register Now:* https://your-first-web.netlify.app/

_Bring your laptop & college ID. See you there!_`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-body p-6 sm:p-12 md:p-16">
      {/* Top Navigation */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          <span className="font-mono text-xs text-red-500 uppercase tracking-widest hidden sm:inline">
            // OFFICIAL PROMO &amp; QR ASSETS
          </span>
        </div>

        <Link
          href="/"
          className="font-mono text-xs tracking-wider uppercase px-4 py-2 border border-white/20 hover:border-white/50 text-slate-300 hover:text-white transition-colors"
        >
          ← Return to Website
        </Link>
      </div>

      <div className="max-w-6xl mx-auto my-10 space-y-3">
        <span className="font-mono text-xs tracking-[0.3em] text-red-500 font-extrabold uppercase">
          MARKETING &amp; REGISTRATION ASSETS
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
          OFFICIAL PROMO &amp; QR SUITE
        </h1>
        <p className="font-body text-slate-400 text-sm sm:text-base max-w-2xl">
          High-resolution 4K posters and direct offline QR codes pointing to{" "}
          <code className="text-red-400 bg-red-950/40 px-2 py-0.5 border border-red-900/50">https://your-first-web.netlify.app/</code>.
          Zero third-party redirects, 100% locally generated.
        </p>
      </div>

      {/* Asset Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual Preview & Downloads */}
        <div className="lg:col-span-6 space-y-6">
          {/* Format Selector Tabs */}
          <div className="flex items-center gap-2 p-1 bg-zinc-950 border border-white/15">
            <button
              type="button"
              onClick={() => setSelectedTab("instagram")}
              className={`flex-1 py-2.5 px-3 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedTab === "instagram"
                  ? "bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(229,37,33,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Instagram (4:5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("linkedin")}
              className={`flex-1 py-2.5 px-3 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedTab === "linkedin"
                  ? "bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(229,37,33,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              LinkedIn (1:1)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("qr" as any)}
              className={`flex-1 py-2.5 px-3 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                (selectedTab as string) === "qr"
                  ? "bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(229,37,33,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Direct QR Code
            </button>
          </div>

          {/* Poster / QR Image Preview */}
          <div className="relative group border border-white/20 bg-zinc-950 overflow-hidden shadow-2xl flex items-center justify-center p-4 min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                (selectedTab as string) === "qr"
                  ? "/qr-code.png"
                  : selectedTab === "instagram"
                  ? "/devup_instagram_poster.png"
                  : "/devup_linkedin_poster.png"
              }
              alt="DevUp Asset"
              className={`object-contain transition-transform duration-500 ${
                (selectedTab as string) === "qr"
                  ? "w-72 h-72 rounded-lg bg-white p-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  : "w-full h-auto group-hover:scale-[1.01]"
              }`}
            />
          </div>

          {/* Download Buttons */}
          {(selectedTab as string) === "qr" ? (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="/qr-code-devup.png"
                  download="devup_qr_code_branded.png"
                  className="py-3.5 px-4 bg-red-600 hover:bg-white text-white hover:text-black font-display font-extrabold text-xs tracking-wider uppercase text-center transition-all duration-200 shadow-[0_0_20px_rgba(229,37,33,0.4)]"
                >
                  DEVUP BADGE (PNG 1024) ↓
                </a>
                <a
                  href="/qr-code-devup-circle.png"
                  download="devup_qr_code_circle.png"
                  className="py-3.5 px-4 bg-zinc-900 hover:bg-white text-white hover:text-black border border-white/20 font-display font-extrabold text-xs tracking-wider uppercase text-center transition-all duration-200"
                >
                  CIRCULAR BADGE (PNG) ↓
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="/qr-code-devup.svg"
                  download="devup_qr_code.svg"
                  className="py-3 px-4 bg-zinc-900 hover:bg-white text-white hover:text-black border border-white/20 font-mono text-[11px] tracking-wider uppercase text-center transition-all duration-200"
                >
                  VECTOR SVG (PRINT) ↓
                </a>
                <a
                  href="/qr-code-crimson.png"
                  download="devup_qr_code_crimson.png"
                  className="py-3 px-4 bg-zinc-900 hover:bg-white text-white hover:text-black border border-white/20 font-mono text-[11px] tracking-wider uppercase text-center transition-all duration-200"
                >
                  CRIMSON SPIDER (PNG) ↓
                </a>
              </div>
              <div className="text-[11px] font-mono text-slate-400 text-center pt-1">
                Level H Error Correction (30% Redundancy) • Tested &amp; Scannable on all iOS/Android Cameras
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/devup_instagram_poster.png"
                download="devup_instagram_poster.png"
                className="py-4 px-5 bg-red-600 hover:bg-white text-white hover:text-black font-display font-extrabold text-sm tracking-wider uppercase text-center transition-all duration-200 shadow-[0_0_20px_rgba(229,37,33,0.4)]"
              >
                DOWNLOAD 4:5 (IG POSTER) ↓
              </a>
              <a
                href="/devup_linkedin_poster.png"
                download="devup_linkedin_poster.png"
                className="py-4 px-5 bg-zinc-900 hover:bg-white text-white hover:text-black border border-white/20 font-display font-extrabold text-sm tracking-wider uppercase text-center transition-all duration-200"
              >
                DOWNLOAD 1:1 (LINKEDIN) ↓
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Pre-written Captions */}
        <div className="lg:col-span-6 space-y-6">
          {/* LinkedIn Caption Card */}
          <div className="p-6 bg-zinc-950 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                LINKEDIN POST COPY
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(linkedinCaption, "linkedin")}
                className="font-mono text-xs text-slate-300 hover:text-white border border-white/20 px-3 py-1 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer"
              >
                {copiedType === "linkedin" ? "✓ COPIED!" : "COPY CAPTION"}
              </button>
            </div>
            <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto p-3 bg-black/60 border border-white/10">
              {linkedinCaption}
            </pre>
          </div>

          {/* Instagram Caption Card */}
          <div className="p-6 bg-zinc-950 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-pink-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                INSTAGRAM CAPTION &amp; TAGS
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(instagramCaption, "instagram")}
                className="font-mono text-xs text-slate-300 hover:text-white border border-white/20 px-3 py-1 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer"
              >
                {copiedType === "instagram" ? "✓ COPIED!" : "COPY CAPTION"}
              </button>
            </div>
            <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto p-3 bg-black/60 border border-white/10">
              {instagramCaption}
            </pre>
          </div>

          {/* WhatsApp / Discord Broadcast Card */}
          <div className="p-6 bg-zinc-950 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                WHATSAPP / DISCORD BROADCAST
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(whatsappMessage, "whatsapp")}
                className="font-mono text-xs text-slate-300 hover:text-white border border-white/20 px-3 py-1 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer"
              >
                {copiedType === "whatsapp" ? "✓ COPIED!" : "COPY MESSAGE"}
              </button>
            </div>
            <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto p-3 bg-black/60 border border-white/10">
              {whatsappMessage}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
