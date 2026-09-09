import { Universe, NavigatorStation, DaySchedule } from "@/types/multiverse";

export const UNIVERSES: Record<string, Universe> = {
  web: {
    id: "web",
    num: "UNIVERSE 001",
    hero: "SPIDER-MAN",
    name: "WEB DEVELOPMENT",
    theme: "#E52521",
    quote: "Build the web. Don't just browse it. Everything is connected.",
    desc: "The dimension where ideas turn into responsive frontends, modern Next.js 15 apps, and connected backend APIs. From your first HTML tag to full-stack cloud microservices, this is where ideas take flight.",
    stack: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React 19", "Next.js 15", "Node.js", "PostgreSQL"],
    img: "/assets/real_images/spiderman_2.jpg",
    fallbackImg: "/assets/heroes/spiderman.svg"
  },
  android: {
    id: "android",
    num: "UNIVERSE 002",
    hero: "THOR",
    name: "ANDROID DEVELOPMENT",
    theme: "#10B981",
    quote: "Wield lightning-fast native mobile apps across handheld dimensions.",
    desc: "Harness the power of modern Kotlin and Jetpack Compose. Build high-performance 120 FPS mobile experiences running in the hands of billions of smartphone users worldwide.",
    stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Material 3", "Coroutines", "Room DB", "Flutter"],
    img: "/assets/heroes/thor.svg",
    fallbackImg: "/assets/heroes/thor.svg"
  },
  ai: {
    id: "ai",
    num: "UNIVERSE 003",
    hero: "IRON MAN",
    name: "AI & ML",
    theme: "#D97706",
    quote: "The future isn't built. It's engineered.",
    desc: "Enter Tony Stark's engineering lab. Build artificial intelligence, train computer vision systems, and automate workflows with machine learning models and autonomous agents.",
    stack: ["Python", "Machine Learning", "Neural Networks", "OpenCV", "PyTorch", "Scikit-Learn", "LLM APIs"],
    img: "/assets/real_images/ironman.jpg",
    fallbackImg: "/assets/heroes/ironman.svg"
  },
  uiux: {
    id: "uiux",
    num: "UNIVERSE 004",
    hero: "CAPTAIN AMERICA",
    name: "UI/UX DESIGN",
    theme: "#EC4899",
    quote: "Design intuitive digital realities. Craft every pixel with purpose.",
    desc: "Where human psychology meets pixel-perfect artistry. Master user research, wireframing, color theory, design systems, micro-interactions, and collaborative Figma prototyping.",
    stack: ["Figma", "Design Systems", "Wireframing", "User Research", "Interaction Design", "Prototyping", "Design Tokens"],
    img: "/assets/heroes/captain-america.svg",
    fallbackImg: "/assets/heroes/captain-america.svg"
  },
  dsa: {
    id: "dsa",
    num: "UNIVERSE 005",
    hero: "DOCTOR STRANGE",
    name: "DSA / CP",
    theme: "#0284C7",
    quote: "Master the patterns of the multiverse. Optimize every timeline.",
    desc: "Step through the portal of pure logic. Master time and space complexity, dynamic programming, recursive trees, and graph algorithms to solve the most difficult competitive coding puzzles.",
    stack: ["C++ / Java", "Data Structures", "Dynamic Programming", "Graph Theory", "Time Complexity", "Competitive Coding"],
    img: "/assets/real_images/multiverse_cosmos.jpg",
    fallbackImg: "/assets/heroes/doctor-strange.svg"
  }
};

// Backwards compatibility aliases
UNIVERSES.cloud = UNIVERSES.android;
UNIVERSES.cyber = UNIVERSES.uiux;

export const NAVIGATOR_DATA: Record<string, NavigatorStation> = {
  web: {
    id: "web",
    num: "UNIVERSE 001 // THE WEB ARCHITECT",
    hero: "SPIDER-MAN",
    role: "WEB DEVELOPMENT",
    dimension: "EARTH-616",
    headingMain: "BUILD THE WEB.",
    headingSub: "DON'T JUST BROWSE IT.",
    quote: "The universe where a blank page turns into something real. If you like seeing your work come alive in a browser within minutes, you belong here.",
    power: "Frontend Interfaces, Dynamic Apps & APIs",
    fresher: "Instant Visual Feedback · Zero Experience Needed",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React 19", "Tailwind CSS", "REST APIs", "Next.js"],
    theme: "#E52521",
    border: "#FCA5A5",
    img: "/assets/real_images/spiderman_2.jpg",
    fallbackImg: "/assets/heroes/spiderman.svg"
  },
  android: {
    id: "android",
    num: "UNIVERSE 002 // ASGARD MOBILE CORE",
    hero: "THOR",
    role: "ANDROID DEVELOPMENT",
    dimension: "REALM-965",
    headingMain: "ASGARD MOBILE.",
    headingSub: "CRAFT NATIVE HANDHELD REALITIES.",
    quote: "Wield the lightning speed of native Kotlin and Jetpack Compose. Build buttery-smooth apps with device hardware integration for billions of users.",
    power: "120 FPS Native Apps, Kotlin & Handheld Architecture",
    fresher: "Modern Declarative UI · Handheld Real-Time Testing",
    skills: ["Kotlin", "Jetpack Compose", "Android Studio", "Material Design 3", "Room DB", "Coroutines"],
    theme: "#10B981",
    border: "#6EE7B7",
    img: "/assets/heroes/thor.svg",
    fallbackImg: "/assets/heroes/thor.svg"
  },
  ai: {
    id: "ai",
    num: "UNIVERSE 003 // STARK PROTOCOL",
    hero: "IRON MAN",
    role: "AI & ML",
    dimension: "EARTH-199999",
    headingMain: "STARK PROTOCOL.",
    headingSub: "THE FUTURE IS ENGINEERED.",
    quote: "Teach machines to analyze patterns, recognize vision, and generate new realities. Equal parts logic, mathematics, and autonomous agents.",
    power: "Neural Networks, Machine Learning & Computer Vision",
    fresher: "Hands-on Python Scripts · High Industry Demand",
    skills: ["Python", "Machine Learning", "Neural Networks", "OpenCV", "PyTorch", "Automation"],
    theme: "#D97706",
    border: "#FCD34D",
    img: "/assets/real_images/ironman.jpg",
    fallbackImg: "/assets/heroes/ironman.svg"
  },
  uiux: {
    id: "uiux",
    num: "UNIVERSE 004 // THE DESIGN MATRIX",
    hero: "CAPTAIN AMERICA",
    role: "UI/UX DESIGN",
    dimension: "SECTOR-1941",
    headingMain: "DESIGN MATRIX.",
    headingSub: "CRAFT PIXEL-PERFECT EXPERIENCES.",
    quote: "Where user psychology meets visual brilliance. Build design systems, micro-interactions, and high-fidelity Figma prototypes that enchant users at first glance.",
    power: "Product Psychology, Figma Systems & Interaction Flow",
    fresher: "Visual Storytelling · Universal Tech Industry Need",
    skills: ["Figma Prototyping", "Design Systems", "User Research", "Wireframing", "Micro-Animations", "Design Tokens"],
    theme: "#EC4899",
    border: "#F472B6",
    img: "/assets/heroes/captain-america.svg",
    fallbackImg: "/assets/heroes/captain-america.svg"
  },
  dsa: {
    id: "dsa",
    num: "UNIVERSE 005 // THE SORCERER'S CODE",
    hero: "DOCTOR STRANGE",
    role: "DSA / CP",
    dimension: "EARTH-838",
    headingMain: "SORCERER'S CODE.",
    headingSub: "EVERY PROBLEM HAS ANOTHER DIMENSION.",
    quote: "Unravel algorithmic complexity. Master competitive programming, graph traversal, and dynamic programming to make solutions run in O(1).",
    power: "Optimal Problem Solving & Algorithmic Design",
    fresher: "Cracks Technical Interviews · Sharpened Logic",
    skills: ["Data Structures", "Algorithms", "C++ / Java", "Time Complexity", "Dynamic Prog", "Graphs"],
    theme: "#0284C7",
    border: "#7DD3FC",
    img: "/assets/real_images/multiverse_cosmos.jpg",
    fallbackImg: "/assets/heroes/doctor-strange.svg"
  }
};

// Backwards compatibility aliases
NAVIGATOR_DATA.cloud = NAVIGATOR_DATA.android;
NAVIGATOR_DATA.cyber = NAVIGATOR_DATA.uiux;

export const SCHEDULE_DAYS: DaySchedule[] = [
  {
    label: "DAY 1: DISCOVER YOUR UNIVERSE",
    date: "Tuesday, September 15, 2026 (5:00 PM – 7:00 PM)",
    theme: "Inspiration, Domain Deep-Dives, & The Git Foundations",
    events: [
      {
        time: "09:00 — 10:00 AM",
        title: "Opening Keynote: Enter The Multiverse",
        category: "KEYNOTE",
        desc: "Welcome address, unveiling the 5 tech dimensions, and hearing from senior student engineers and industry mentors.",
        badge: "Main Auditorium"
      },
      {
        time: "10:15 — 11:45 AM",
        title: "Dimension 01 & 02: Modern Web & Stark AI Labs",
        category: "TECH TRACK",
        desc: "Live code sessions demonstrating how responsive React fullstack apps integrate with Python AI microservices.",
        badge: "Lab Complex A"
      },
      {
        time: "12:00 — 01:15 PM",
        title: "Dimension 03 & 04: Algorithmic Thinking & Cloud DevOps",
        category: "TECH TRACK",
        desc: "Demystifying Data Structures and showing how Docker containers deploy across global cloud regions in seconds.",
        badge: "Lab Complex B"
      },
      {
        time: "01:15 — 02:15 PM",
        title: "Networking Lunch & Universe Hub Walkthrough",
        category: "COMMUNITY",
        desc: "Meet domain mentors, get questions answered, and align with your fellow first-year squad members.",
        badge: "Student Center"
      },
      {
        time: "02:15 — 04:30 PM",
        title: "Universal Skill: Master Git & GitHub Hands-On",
        category: "WORKSHOP",
        desc: "Every recruit installs Git, creates their first repository, writes Markdown documentation, and makes their first pull request.",
        badge: "Hands-On Lab"
      },
      {
        time: "04:30 — 05:00 PM",
        title: "Day 1 Wrap-up & Squad Challenge Briefing",
        category: "BRIEFING",
        desc: "Announcing the 24-hour Recruit Build Challenge and team pairing.",
        badge: "Main Hall"
      }
    ]
  },
  {
    label: "DAY 2: BUILD YOUR UNIVERSE",
    date: "Sunday, September 20, 2026",
    theme: "Collaborative Building, Mentorship, & Commissioning",
    events: [
      {
        time: "09:30 — 10:00 AM",
        title: "Morning Sync & Command Center Briefing",
        category: "STANDUP",
        desc: "Project architecture check-ins and sprint alignment for teams building mini-projects.",
        badge: "Computing Hub"
      },
      {
        time: "10:00 AM — 01:00 PM",
        title: "Multiverse Sprint: Open Build Session",
        category: "BUILD SPRINT",
        desc: "Dedicated project creation time with roaming mentors across Web, AI, DSA, Cloud, and Cybersecurity tracks.",
        badge: "All Labs"
      },
      {
        time: "01:00 — 02:00 PM",
        title: "Recruit Lunch & Code Review Clinic",
        category: "MENTORSHIP",
        desc: "1-on-1 code reviews from seniors and alumni to polish GitHub profiles and repositories.",
        badge: "Lounge"
      },
      {
        time: "02:00 — 03:45 PM",
        title: "Demo Showcase & Speed Presentations",
        category: "SHOWCASE",
        desc: "First-year teams present live deployed URLs and GitHub repositories to the entire assembly.",
        badge: "Main Stage"
      },
      {
        time: "04:00 — 05:00 PM",
        title: "Awards, Commissioning Ceremony & Official Swag",
        category: "CEREMONY",
        desc: "Honoring top rookie projects, awarding official DevUp recruits, distributing stickers & certificates.",
        badge: "Main Auditorium"
      }
    ]
  }
];

export const GIT_TERMINAL_COMMANDS: Record<string, string> = {
  "git init": "Initialized empty Git repository in /multiverse/recruit-project/.git/\nBranch: main (default)",
  "git status": "On branch main\nNo commits yet\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tindex.html\n\tmultiverse.config.json\n\thero-arsenal.ts\n\nnothing added to commit but untracked files present.",
  "git add .": "Added untracked files to staging area:\n  + index.html (staged)\n  + multiverse.config.json (staged)\n  + hero-arsenal.ts (staged)",
  "git commit -m \"feat: initialize universe protocol\"": "[main (root-commit) 7a9e3d1] feat: initialize universe protocol\n 3 files changed, 142 insertions(+)\n create mode 100644 index.html\n create mode 100644 multiverse.config.json\n create mode 100644 hero-arsenal.ts",
  "git branch -M main": "Branch renamed to 'main'. Current HEAD points to main.",
  "git remote add origin https://github.com/devup/recruit-hub.git": "Remote 'origin' linked to https://github.com/devup/recruit-hub.git",
  "git push -u origin main": "Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (5/5), 4.12 KiB | 4.12 MiB/s, done.\nTotal 5 (delta 0), reused 0 (delta 0)\nTo https://github.com/devup/recruit-hub.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.\n\n🎉 CONGRATULATIONS RECRUIT! YOUR PROJECT IS LIVE ON GITHUB!"
};
