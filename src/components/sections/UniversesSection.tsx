"use client";

import React, { useState, useEffect, useRef } from "react";
import { UNIVERSES } from "@/data/multiverseData";
import { useRecruit } from "@/context/RecruitContext";

interface OrbitDomain {
  id: string;
  name: string;
  hero: string;
  color: string;
  glow: string;
  icon: string;
  imgSrc: string;
  angleOffset: number;
  renderX?: number;
  renderY?: number;
  renderRadius?: number;
  loadedImg?: HTMLImageElement;
}

const INITIAL_ORBIT_DOMAINS: OrbitDomain[] = [
  {
    id: "web",
    name: "WEB DEV",
    hero: "Spider-Man",
    color: "#E52521",
    glow: "rgba(229, 37, 33, 0.7)",
    icon: "🕷️",
    imgSrc: "/assets/real_images/spiderman_2.jpg",
    angleOffset: 0,
  },
  {
    id: "android",
    name: "ANDROID DEV",
    hero: "Thor",
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.7)",
    icon: "📱",
    imgSrc: "/assets/heroes/thor.svg",
    angleOffset: (Math.PI * 2 / 5) * 1,
  },
  {
    id: "ai",
    name: "AI & ML",
    hero: "Iron Man",
    color: "#D97706",
    glow: "rgba(217, 119, 6, 0.7)",
    icon: "🤖",
    imgSrc: "/assets/real_images/ironman.jpg",
    angleOffset: (Math.PI * 2 / 5) * 2,
  },
  {
    id: "uiux",
    name: "UI/UX DESIGN",
    hero: "Cap America",
    color: "#EC4899",
    glow: "rgba(236, 72, 153, 0.7)",
    icon: "🎨",
    imgSrc: "/assets/heroes/captain-america.svg",
    angleOffset: (Math.PI * 2 / 5) * 3,
  },
  {
    id: "dsa",
    name: "DSA / CP",
    hero: "Dr Strange",
    color: "#0284C7",
    glow: "rgba(2, 132, 199, 0.7)",
    icon: "🌀",
    imgSrc: "/assets/real_images/multiverse_cosmos.jpg",
    angleOffset: (Math.PI * 2 / 5) * 4,
  },
];

export default function UniversesSection() {
  const { openUniverseModal, showToast } = useRecruit();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState(1.0);
  const [orbitDirection, setOrbitDirection] = useState(1);
  const [focusDomain, setFocusDomain] = useState<string | null>(null);
  const [timecode, setTimecode] = useState("TC 00:02:14:09");
  const [statusText, setStatusText] = useState("ORBITING SACRED TIMELINE");
  const [isStarkTowerView, setIsStarkTowerView] = useState(false);

  // References for animation loop
  const stateRef = useRef({
    isPlaying: true,
    orbitSpeed: 1.0,
    orbitDirection: 1,
    orbitAngle: 0,
    timecodeSeconds: 134.15,
    focusDomain: null as string | null,
    hoveredDomain: null as OrbitDomain | null,
    domains: [] as OrbitDomain[],
    axisParticles: [] as Array<{
      y: number;
      speed: number;
      size: number;
      opacity: number;
      hue: string;
    }>,
  });

  useEffect(() => {
    stateRef.current.isPlaying = isPlaying;
    stateRef.current.orbitSpeed = orbitSpeed;
    stateRef.current.orbitDirection = orbitDirection;
    stateRef.current.focusDomain = focusDomain;
  }, [isPlaying, orbitSpeed, orbitDirection, focusDomain]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize domains and images
    const domains = INITIAL_ORBIT_DOMAINS.map((d) => {
      const img = new Image();
      img.src = d.imgSrc;
      return { ...d, loadedImg: img };
    });
    stateRef.current.domains = domains;

    // Axis particles
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        y: Math.random() * 520,
        speed: 0.8 + Math.random() * 1.5,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.4 + Math.random() * 0.6,
        hue: i % 2 === 0 ? "#38BDF8" : "#E52521",
      });
    }
    stateRef.current.axisParticles = particles;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height || 520;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found: OrbitDomain | null = null;
      for (const d of stateRef.current.domains) {
        if (d.renderX && d.renderY && d.renderRadius) {
          const dist = Math.hypot(mouseX - d.renderX, mouseY - d.renderY);
          if (dist < d.renderRadius + 6) {
            found = d;
            canvas.style.cursor = "pointer";
            break;
          }
        }
      }
      stateRef.current.hoveredDomain = found;
      if (!found) canvas.style.cursor = "default";
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (const d of stateRef.current.domains) {
        if (d.renderX && d.renderY && d.renderRadius) {
          const dist = Math.hypot(mouseX - d.renderX, mouseY - d.renderY);
          if (dist < d.renderRadius + 8) {
            handleLockUniverse(d.id);
            return;
          }
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    let animId: number;

    const render = () => {
      const s = stateRef.current;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      if (s.isPlaying) {
        s.orbitAngle += 0.008 * s.orbitSpeed * s.orbitDirection;
        s.timecodeSeconds += 0.016;

        const totalSec = Math.floor(s.timecodeSeconds);
        const hrs = String(Math.floor(totalSec / 3600)).padStart(2, "0");
        const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
        const secs = String(totalSec % 60).padStart(2, "0");
        const frames = String(Math.floor((s.timecodeSeconds % 1) * 30)).padStart(2, "0");
        setTimecode(`TC ${hrs}:${mins}:${secs}:${frames}`);
      }

      const rx = Math.min(w * 0.42, 440);
      const ry = Math.min(h * 0.32, 140);
      const tilt = 0.35;

      const nodes = s.domains.map((d) => {
        const a = s.orbitAngle + d.angleOffset;
        const x = cx + rx * Math.cos(a);
        const y = cy + ry * Math.sin(a) * tilt;
        const z = Math.sin(a);
        const scale = 0.75 + (0.35 * (1 - z)) / 2;
        const alpha = 0.45 + (0.55 * (1 - z)) / 2;
        return { ...d, x, y, z, scale, alpha };
      });

      // Draw Orbit Track Ring
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry * tilt, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.restore();

      // Draw Axis Line
      const gradOuter = ctx.createLinearGradient(cx - 30, 0, cx + 30, 0);
      gradOuter.addColorStop(0, "rgba(229, 37, 33, 0)");
      gradOuter.addColorStop(0.5, "rgba(229, 37, 33, 0.3)");
      gradOuter.addColorStop(1, "rgba(229, 37, 33, 0)");
      ctx.fillStyle = gradOuter;
      ctx.fillRect(cx - 30, 0, 60, h);

      const gradInner = ctx.createLinearGradient(cx - 8, 0, cx + 8, 0);
      gradInner.addColorStop(0, "rgba(56, 189, 248, 0)");
      gradInner.addColorStop(0.3, "rgba(56, 189, 248, 0.8)");
      gradInner.addColorStop(0.5, "#FFFFFF");
      gradInner.addColorStop(0.7, "rgba(254, 240, 138, 0.9)");
      gradInner.addColorStop(1, "rgba(254, 240, 138, 0)");
      ctx.fillStyle = gradInner;
      ctx.fillRect(cx - 6, 0, 12, h);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.restore();

      s.axisParticles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) p.y = h;
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.shadowColor = p.hue;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();
      });

      // Sort nodes back-to-front
      nodes.sort((a, b) => a.z - b.z);

      // Draw back nodes
      nodes.filter((n) => n.z > 0).forEach((n) => drawNode(ctx, n, cx, s));

      // Center reactor
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
      ctx.strokeStyle = "#FEF08A";
      ctx.lineWidth = 3;
      ctx.shadowColor = "rgba(254, 240, 138, 0.8)";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "#E52521";
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // Draw front nodes
      nodes.filter((n) => n.z <= 0).forEach((n) => drawNode(ctx, n, cx, s));

      animId = requestAnimationFrame(render);
    };

    const drawNode = (
      c: CanvasRenderingContext2D,
      n: any,
      cx: number,
      s: typeof stateRef.current
    ) => {
      const radius = 28 * n.scale;
      const isHovered = s.hoveredDomain && s.hoveredDomain.id === n.id;
      const isFocused = s.focusDomain === n.id;

      const orig = s.domains.find((d) => d.id === n.id);
      if (orig) {
        orig.renderX = n.x;
        orig.renderY = n.y;
        orig.renderRadius = radius;
      }

      c.save();
      c.globalAlpha = n.alpha;

      // Laser connector
      c.beginPath();
      c.moveTo(n.x, n.y);
      c.lineTo(cx, n.y);
      c.strokeStyle = isFocused || isHovered ? n.color : "rgba(255, 255, 255, 0.18)";
      c.lineWidth = isFocused || isHovered ? 2 : 1;
      c.stroke();

      // Outer glow
      c.beginPath();
      c.arc(n.x, n.y, radius + (isHovered ? 6 : 3), 0, Math.PI * 2);
      c.fillStyle = n.glow;
      c.fill();

      // Container circle
      c.beginPath();
      c.arc(n.x, n.y, radius, 0, Math.PI * 2);
      c.fillStyle = "#0F172A";
      c.strokeStyle = isFocused ? "#FEF08A" : n.color;
      c.lineWidth = isFocused ? 3.5 : 2.5;
      c.shadowColor = n.color;
      c.shadowBlur = isFocused || isHovered ? 18 : 10;
      c.fill();
      c.stroke();

      // Hero photo
      c.save();
      c.beginPath();
      c.arc(n.x, n.y, radius - 2, 0, Math.PI * 2);
      c.clip();

      if (n.loadedImg && n.loadedImg.complete && n.loadedImg.naturalWidth > 0) {
        c.drawImage(n.loadedImg, n.x - radius, n.y - radius, radius * 2, radius * 2);
      } else {
        c.fillStyle = n.color;
        c.fillRect(n.x - radius, n.y - radius, radius * 2, radius * 2);
      }
      c.restore();

      // Label badge below
      const labelText = `${n.icon} ${n.name}`;
      c.font = `bold ${Math.max(10, Math.floor(12 * n.scale))}px monospace`;
      const textWidth = c.measureText(labelText).width;
      const pillY = n.y + radius + 10;

      c.fillStyle = "rgba(15, 23, 42, 0.9)";
      c.strokeStyle = isFocused ? "#FEF08A" : n.color;
      c.lineWidth = 1;
      c.beginPath();
      c.roundRect(n.x - textWidth / 2 - 8, pillY - 12, textWidth + 16, 20, 6);
      c.fill();
      c.stroke();

      c.fillStyle = isFocused ? "#FEF08A" : "#FFFFFF";
      c.textAlign = "center";
      c.fillText(labelText, n.x, pillY + 2);

      c.restore();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  const handleLockUniverse = (id: string) => {
    setFocusDomain(id);
    const domain = INITIAL_ORBIT_DOMAINS.find((d) => d.id === id);
    if (domain) {
      setStatusText(`LOCKED: ${domain.hero.toUpperCase()} (${domain.name})`);
      showToast(`Quantum orbit focused on ${domain.hero}!`);
      const u = UNIVERSES[id];
      if (u) openUniverseModal(u);
    }
  };

  const handleCycleSpeed = () => {
    const speeds = [1.0, 1.5, 2.0, 0.5];
    const nextIdx = (speeds.indexOf(orbitSpeed) + 1) % speeds.length;
    setOrbitSpeed(speeds[nextIdx]);
  };

  const handleToggleStark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStarkTowerView((prev) => !prev);
    showToast(
      !isStarkTowerView
        ? "Switched to Stark Tower HQ view at sunset!"
        : "Switched to Iron Man suit view!"
    );
  };

  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cardIds = [
            "domainCard-web",
            "domainCard-ai",
            "domainCard-dsa",
            "domainCard-android",
            "domainCard-uiux",
          ];

          let foundIndex = 0;
          for (let i = cardIds.length - 1; i >= 1; i--) {
            const el = document.getElementById(cardIds[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              const stickyTarget = Math.max(86, window.innerHeight / 2 - 275);
              const triggerPoint = stickyTarget + 100;
              if (rect.top <= triggerPoint) {
                foundIndex = i;
                break;
              }
            }
          }

          setActiveDeckIndex(foundIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRedBg = activeDeckIndex % 2 === 1;

  const scrollToCard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="domains"
      className={`section-wrapper section-domains ${
        isRedBg ? "bg-theme-red" : "bg-theme-white"
      }`}
    >
      <div className="section-inner">
        <div className="section-header-block">
          <span className="section-category-tag">
            SCENE 03 // QUANTUM TIMELINE SIMULATION
          </span>
          <h2 className="section-main-title">
            THE <span>MULTIVERSE</span> TIMELINE
          </h2>
          <p className="section-lead-text">
            Watch the five core technical domains revolve in real-time around the
            Sacred Multiverse Axis. Click any revolving node or explore the hero
            domain dossiers below.
          </p>
        </div>

        {/* Cinematic Multiverse Orbital Canvas Deck */}
        <div className="multiverse-video-deck">
          <div className="mv-video-topbar">
            <div className="mv-rec-indicator">
              <span className="mv-rec-dot"></span>
              <span>● LIVE FEED // MULTIVERSE TIMELINE STREAM [60 FPS]</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span>FREQUENCY: 14,000,605 TIMELINES</span>
              <span style={{ color: "#FEF08A" }}>● CORE: STABLE AXIS</span>
            </div>
          </div>

          <div className="mv-video-viewport">
            {/* Cosmic Nebula Backdrop */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/real_images/multiverse_cosmos.jpg"
              alt="Multiverse Cosmos"
              className="mv-video-bg"
            />

            <canvas id="multiverseOrbitCanvas" ref={canvasRef}></canvas>

            <div className="mv-video-hud-overlay">
              <div className="mv-hud-title-wrap">
                <div className="mv-hud-watermark">MULTIVERSE</div>
                <div className="mv-hud-submark">QUANTUM TIMELINE DOMAIN ORBITS</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#94A3B8",
                    background: "rgba(15,23,42,0.85)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid #334155",
                  }}
                >
                  STATUS:{" "}
                  <span id="mvOrbitStatusText" style={{ color: "#38BDF8" }}>
                    {statusText}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#FCD34D",
                    background: "rgba(15,23,42,0.85)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid #334155",
                  }}
                  id="mvTimecodeDisplay"
                >
                  {timecode}
                </div>
              </div>
            </div>
          </div>

          <div className="mv-video-controls-bar">
            <div className="mv-ctrl-group">
              <button
                className="btn-mv-ctrl"
                id="btnMvPlayPause"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <span>{isPlaying ? "⏸" : "▶"}</span>
                <span>{isPlaying ? "PAUSE REEL" : "PLAY REEL"}</span>
              </button>
              <button
                className="btn-mv-ctrl"
                onClick={() => setOrbitDirection((prev) => prev * -1)}
              >
                <span>⟲</span>
                <span>REVERSE</span>
              </button>
              <button
                className="btn-mv-ctrl"
                id="btnMvSpeed"
                onClick={handleCycleSpeed}
              >
                <span>SPEED: {orbitSpeed.toFixed(1)}X</span>
              </button>
            </div>

            <div className="mv-ctrl-group">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10.5px",
                  color: "#94A3B8",
                  fontWeight: 700,
                }}
              >
                LOCK TIMELINE:
              </span>
              <button
                className="btn-mv-pill"
                onClick={() => handleLockUniverse("web")}
              >
                🕷️ WEB DEV
              </button>
              <button
                className="btn-mv-pill"
                onClick={() => handleLockUniverse("android")}
              >
                📱 ANDROID
              </button>
              <button
                className="btn-mv-pill"
                onClick={() => handleLockUniverse("ai")}
              >
                🤖 AI &amp; ML
              </button>
              <button
                className="btn-mv-pill"
                onClick={() => handleLockUniverse("uiux")}
              >
                🎨 UI/UX
              </button>
              <button
                className="btn-mv-pill"
                onClick={() => handleLockUniverse("dsa")}
              >
                🌀 DSA / CP
              </button>
            </div>
          </div>
        </div>

        {/* Sticky Scroll-Driven Multiverse Stack Deck */}
        <div className="stack-deck-header-hud mt-40">
          <div className="sdh-pill">
            <span
              className="sdh-dot"
              style={{
                backgroundColor: isRedBg ? "#FEF08A" : "#10B981",
                boxShadow: isRedBg ? "0 0 10px #FEF08A" : "0 0 10px #10B981",
              }}
            ></span>
            <span>
              MULTIVERSE DOSSIER ARCHIVES // {isRedBg ? "CRIMSON REALM" : "SANCTUARY REALM"} [0{activeDeckIndex + 1}/05]
            </span>
          </div>
          <div className="sdh-nav-pills">
            <button
              type="button"
              className={`sdh-chip ${activeDeckIndex === 0 ? "active" : ""}`}
              onClick={() => scrollToCard("domainCard-web")}
              title="Jump to Spider-Man (Web Development)"
            >
              01 WEB DEV
            </button>
            <button
              type="button"
              className={`sdh-chip ${activeDeckIndex === 1 ? "active" : ""}`}
              onClick={() => scrollToCard("domainCard-ai")}
              title="Jump to Iron Man (AI & ML)"
            >
              02 AI &amp; ML
            </button>
            <button
              type="button"
              className={`sdh-chip ${activeDeckIndex === 2 ? "active" : ""}`}
              onClick={() => scrollToCard("domainCard-dsa")}
              title="Jump to Doctor Strange (DSA / CP)"
            >
              03 DSA / CP
            </button>
            <button
              type="button"
              className={`sdh-chip ${activeDeckIndex === 3 ? "active" : ""}`}
              onClick={() => scrollToCard("domainCard-android")}
              title="Jump to Thor (Android Development)"
            >
              04 ANDROID DEV
            </button>
            <button
              type="button"
              className={`sdh-chip ${activeDeckIndex === 4 ? "active" : ""}`}
              onClick={() => scrollToCard("domainCard-uiux")}
              title="Jump to Captain America (UI/UX Design)"
            >
              05 UI/UX DESIGN
            </button>
          </div>
          <div className="sdh-sub">
            SCROLL DOWN TO REVEAL &amp; STACK EACH UNIVERSE
          </div>
        </div>

        <div className="hero-domains-stack-deck ">
          {/* 1. SPIDER-MAN (THE WEB) */}
          <div
            className="hero-domain-card"
            id="domainCard-web"
            style={{ "--domain-accent": "#E52521", "--stack-index": 0 } as React.CSSProperties}
            onClick={() => openUniverseModal(UNIVERSES.web)}
          >
            <div className="card-top-tagline"></div>
            <div className="hdc-img-wrapper">
              <span className="hdc-badge">UNIVERSE 001 // EARTH-616</span>
              <span className="hdc-live-badge">🕷️ NYC SECTOR</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/real_images/spiderman_2.jpg"
                alt="Spider-Man Real Photo"
                className="hdc-img"
                onError={(e) => {
                  e.currentTarget.src = "/assets/heroes/spiderman.svg";
                }}
              />
            </div>
            <div className="hdc-body">
              <div className="hdc-deck-num">DIMENSION 01 // 05 — SACRED TIMELINE</div>
              <h3 className="hdc-title">THE WEB ARCHITECT</h3>
              <div className="hdc-hero-role">
                SPIDER-MAN // FULL-STACK WEB ENGINEERING
              </div>
              <p className="hdc-quote">
                &ldquo;Build the web. Don&apos;t just browse it. With great code comes
                great scalability.&rdquo;
              </p>

              <div className="hdc-specs-grid">
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">DIMENSIONAL FOCUS</div>
                  <div className="hdc-spec-val">Next.js, React & APIs</div>
                </div>
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">LEARNING CURVE</div>
                  <div className="hdc-spec-val">Beginner Friendly (Zero XP)</div>
                </div>
              </div>

              <div className="hdc-skills-wrap">
                <span className="skill-badge-item">HTML5 & CSS3</span>
                <span className="skill-badge-item">JavaScript (ES6+)</span>
                <span className="skill-badge-item">React</span>
                <span className="skill-badge-item">REST APIs</span>
                <span className="skill-badge-item">Node.js</span>
                <span className="skill-badge-item">Tailwind CSS</span>
              </div>
              <button className="btn-card-explore">
                <span>EXPLORE SPIDER-VERSE DOSSIER</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 2. IRON MAN & STARK TOWER (STARK AI PROTOCOL) */}
          <div
            className="hero-domain-card"
            id="domainCard-ai"
            style={{ "--domain-accent": "#D97706", "--stack-index": 1 } as React.CSSProperties}
            onClick={() => openUniverseModal(UNIVERSES.ai)}
          >
            <div className="card-top-tagline"></div>
            <div className="hdc-img-wrapper">
              <span className="hdc-badge">UNIVERSE 002 // EARTH-199999</span>
              <span className="hdc-live-badge" id="starkBadgeText">
                {isStarkTowerView ? "🗼 STARK TOWER NYC" : "🤖 IRON MAN ARMOR"}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="ironmanCardImg"
                src={
                  isStarkTowerView
                    ? "/assets/real_images/stark_tower.jpg"
                    : "/assets/real_images/ironman.jpg"
                }
                alt="Iron Man / Stark Tower"
                className="hdc-img"
                onError={(e) => {
                  e.currentTarget.src = "/assets/heroes/ironman.svg";
                }}
              />
              <button
                className="hdc-img-toggle-btn"
                id="btnStarkToggle"
                onClick={handleToggleStark}
                title="Toggle Stark Tower View"
              >
                {isStarkTowerView ? "🦾 VIEW IRON MAN" : "🗼 VIEW STARK TOWER"}
              </button>
            </div>
            <div className="hdc-body">
              <div className="hdc-deck-num">DIMENSION 02 // 05 — STARK TECH PROTOCOL</div>
              <h3 className="hdc-title">STARK AI PROTOCOL</h3>
              <div className="hdc-hero-role">
                IRON MAN // ARTIFICIAL INTELLIGENCE & ML
              </div>
              <p className="hdc-quote">
                &ldquo;The future isn&apos;t built. It&apos;s engineered. Build
                autonomous neural systems.&rdquo;
              </p>

              <div className="hdc-specs-grid">
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">DIMENSIONAL FOCUS</div>
                  <div className="hdc-spec-val">Computer Vision & LLMs</div>
                </div>
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">INDUSTRY IMPACT</div>
                  <div className="hdc-spec-val">Stark Level Valuation</div>
                </div>
              </div>

              <div className="hdc-skills-wrap">
                <span className="skill-badge-item">Python</span>
                <span className="skill-badge-item">Machine Learning</span>
                <span className="skill-badge-item">Computer Vision</span>
                <span className="skill-badge-item">Neural Networks</span>
                <span className="skill-badge-item">OpenCV</span>
                <span className="skill-badge-item">Automation</span>
              </div>
              <button className="btn-card-explore">
                <span>EXPLORE STARK PROTOCOL</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 3. DOCTOR STRANGE (SORCERER'S CODE / DSA) */}
          <div
            className="hero-domain-card"
            id="domainCard-dsa"
            style={{ "--domain-accent": "#059669", "--stack-index": 2 } as React.CSSProperties}
            onClick={() => openUniverseModal(UNIVERSES.dsa)}
          >
            <div className="card-top-tagline"></div>
            <div className="hdc-img-wrapper">
              <span className="hdc-badge">UNIVERSE 003 // EARTH-838</span>
              <span className="hdc-live-badge">🌀 MULTIVERSE PORTAL</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/real_images/multiverse_cosmos.jpg"
                alt="Multiverse Cosmos Portal"
                className="hdc-img"
                onError={(e) => {
                  e.currentTarget.src = "/assets/heroes/doctor-strange.svg";
                }}
              />
            </div>
            <div className="hdc-body">
              <div className="hdc-deck-num">DIMENSION 03 // 05 — MYSTIC CODE MATRIX</div>
              <h3 className="hdc-title">SORCERER&apos;S CODE</h3>
              <div className="hdc-hero-role">
                DOCTOR STRANGE // DATA STRUCTURES & ALGORITHMS
              </div>
              <p className="hdc-quote">
                &ldquo;Every problem has another dimension. Unravel algorithmic
                complexity in O(1).&rdquo;
              </p>

              <div className="hdc-specs-grid">
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">DIMENSIONAL FOCUS</div>
                  <div className="hdc-spec-val">Competitive Programming</div>
                </div>
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">PRIMARY SUPERPOWER</div>
                  <div className="hdc-spec-val">Interview Logic Mastery</div>
                </div>
              </div>

              <div className="hdc-skills-wrap">
                <span className="skill-badge-item">Data Structures</span>
                <span className="skill-badge-item">Algorithms</span>
                <span className="skill-badge-item">C++ / Java</span>
                <span className="skill-badge-item">Dynamic Prog</span>
                <span className="skill-badge-item">Graph Theory</span>
                <span className="skill-badge-item">Recursion</span>
              </div>
              <button className="btn-card-explore">
                <span>EXPLORE SORCERER&apos;S CODE</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 4. THOR (ANDROID DEVELOPMENT) */}
          <div
            className="hero-domain-card"
            id="domainCard-android"
            style={{ "--domain-accent": "#10B981", "--stack-index": 3 } as React.CSSProperties}
            onClick={() => openUniverseModal(UNIVERSES.android)}
          >
            <div className="card-top-tagline"></div>
            <div className="hdc-img-wrapper">
              <span className="hdc-badge">UNIVERSE 004 // REALM-965</span>
              <span className="hdc-live-badge">📱 ASGARD MOBILE FOUNDRY</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/heroes/thor.svg"
                alt="Thor Android Mobile"
                className="hdc-img"
              />
            </div>
            <div className="hdc-body">
              <div className="hdc-deck-num">DIMENSION 04 // 05 — ASGARD ANDROID LABS</div>
              <h3 className="hdc-title">ANDROID FOUNDRY</h3>
              <div className="hdc-hero-role">
                THOR // NATIVE &amp; KOTLIN MOBILE ARCHITECTURE
              </div>
              <p className="hdc-quote">
                &ldquo;Wield lightning-fast native mobile apps across handheld dimensions.
                Buttery-smooth 120 FPS at your fingertips.&rdquo;
              </p>

              <div className="hdc-specs-grid">
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">DIMENSIONAL FOCUS</div>
                  <div className="hdc-spec-val">Kotlin &amp; Jetpack Compose</div>
                </div>
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">PERFORMANCE</div>
                  <div className="hdc-spec-val">120 FPS Native Smooth</div>
                </div>
              </div>

              <div className="hdc-skills-wrap">
                <span className="skill-badge-item">Kotlin</span>
                <span className="skill-badge-item">Jetpack Compose</span>
                <span className="skill-badge-item">Android Studio</span>
                <span className="skill-badge-item">Material Design 3</span>
                <span className="skill-badge-item">Room DB</span>
                <span className="skill-badge-item">Coroutines</span>
              </div>
              <button className="btn-card-explore">
                <span>EXPLORE ANDROID FOUNDRY</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 5. CAPTAIN AMERICA (UI/UX DESIGN MATRIX) */}
          <div
            className="hero-domain-card"
            id="domainCard-uiux"
            style={{ "--domain-accent": "#EC4899", "--stack-index": 4 } as React.CSSProperties}
            onClick={() => openUniverseModal(UNIVERSES.uiux)}
          >
            <div className="card-top-tagline"></div>
            <div className="hdc-img-wrapper">
              <span className="hdc-badge">UNIVERSE 005 // SECTOR-1941</span>
              <span className="hdc-live-badge">🎨 REALITY DESIGN MATRIX</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/heroes/captain-america.svg"
                alt="Captain America UI/UX Design"
                className="hdc-img"
              />
            </div>
            <div className="hdc-body">
              <div className="hdc-deck-num">DIMENSION 05 // 05 — THE DESIGN MATRIX</div>
              <h3 className="hdc-title">UI/UX DESIGN MATRIX</h3>
              <div className="hdc-hero-role">
                CAPTAIN AMERICA // PRODUCT DESIGN &amp; DESIGN SYSTEMS
              </div>
              <p className="hdc-quote">
                &ldquo;Where human psychology meets pixel-perfect artistry.
                Craft digital realities that users fall in love with at first touch.&rdquo;
              </p>

              <div className="hdc-specs-grid">
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">DIMENSIONAL FOCUS</div>
                  <div className="hdc-spec-val">Figma &amp; Design Systems</div>
                </div>
                <div className="hdc-spec-item">
                  <div className="hdc-spec-label">ACCESSIBILITY</div>
                  <div className="hdc-spec-val">AAA Contrast &amp; Motion</div>
                </div>
              </div>

              <div className="hdc-skills-wrap">
                <span className="skill-badge-item">Figma</span>
                <span className="skill-badge-item">Design Systems</span>
                <span className="skill-badge-item">Wireframing</span>
                <span className="skill-badge-item">User Research</span>
                <span className="skill-badge-item">Micro-Animations</span>
                <span className="skill-badge-item">Design Tokens</span>
              </div>
              <button className="btn-card-explore">
                <span>EXPLORE UI/UX MATRIX</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
