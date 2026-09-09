"use client";

import React from "react";

interface ScheduleItem {
  time: string;
  title: string;
  badge: string;
  icon: string;
  desc: string;
  highlight?: boolean;
}

const SCHEDULE: ScheduleItem[] = [
  {
    time: "09:30 AM",
    title: "WELCOME TO DEVUP",
    badge: "OPENING KEYNOTE",
    icon: "🕸️",
    desc: "Opening check-in, distribution of rookie badges, and welcoming address: 'Every hero has a first day.'",
  },
  {
    time: "10:00 AM",
    title: "WHO ARE WE?",
    badge: "COMMUNITY STORY",
    icon: "🚀",
    desc: "Meet the senior leads, listen to real freshman-to-internship stories, and learn why college clubs matter.",
  },
  {
    time: "11:00 AM",
    title: "ENTER GITHUB",
    badge: "HANDS-ON WORKSHOP",
    icon: "🐙",
    desc: "Hands-on session: install Git, create your GitHub profile, make your very first commit, and push your first repo.",
    highlight: true,
  },
  {
    time: "12:30 PM",
    title: "BREAK & SQUAD SYNC",
    badge: "NETWORKING LUNCH",
    icon: "🍕",
    desc: "Free pizza, sticker giveaways, and informal Q&A circles with seniors across departments.",
  },
  {
    time: "01:30 PM",
    title: "DISCOVER THE DOMAINS",
    badge: "LIVE TECH DEMOS",
    icon: "🌐",
    desc: "Lightning demos showing Web, App, AI/ML, Cybersecurity, Cloud, and UI/UX projects built right in college.",
    highlight: true,
  },
  {
    time: "03:00 PM",
    title: "FIND YOUR PATH",
    badge: "MENTOR CIRCLES",
    icon: "🎯",
    desc: "1-on-1 breakout pods where you sit with leads of the domain you liked best and get your first roadmap.",
  },
  {
    time: "04:00 PM",
    title: "JOIN THE WEB",
    badge: "COMMISSIONING",
    icon: "🏆",
    desc: "Official rookie badge distribution, GitHub sticker packs, group photo, and welcoming you to the DevUp Discord.",
  },
];

export default function SpiderTimeline() {
  return (
    <section
      id="event-timeline"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          ⏰ 1-DAY AGENDA
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          YOUR DAY IN THE <span className="text-red-600">SPIDER-VERSE</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-body">
          Seven high-impact milestones designed to take you from a complete beginner to having your first deployed repository and a clear tech path.
        </p>
      </div>

      {/* Spider-Web Thread Schedule Line */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Web Line */}
        <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-red-500 via-sky-500 to-emerald-500 opacity-60" />

        <div className="space-y-8 sm:space-y-12">
          {SCHEDULE.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0 ${
                    isEven ? "sm:text-left" : "sm:text-right"
                  }`}
                >
                  <div
                    className={`p-6 rounded-3xl bg-slate-950 border transition-all duration-300 shadow-xl ${
                      item.highlight
                        ? "border-red-500/80 shadow-red-950/40 bg-gradient-to-br from-slate-950 to-red-950/30"
                        : "border-slate-800/90 hover:border-slate-700"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isEven ? "justify-start" : "justify-start sm:justify-end"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-red-400">
                        {item.time}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono font-semibold text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Central Node Badge */}
                <div className="absolute left-2 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-red-500 flex items-center justify-center text-sm shadow-lg shadow-red-500/40 z-10">
                  {item.icon}
                </div>

                {/* Empty opposite spacer for desktop layout balance */}
                <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
