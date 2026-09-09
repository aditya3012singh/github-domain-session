"use client";

import React, { useState } from "react";
import { NAVIGATOR_DATA, UNIVERSES } from "@/data/multiverseData";
import { useRecruit } from "@/context/RecruitContext";

export default function MultiverseMap() {
  const [activeStationKey, setActiveStationKey] = useState<string>("web");
  const { openUniverseModal, toggleDomain, showToast } = useRecruit();

  const station = NAVIGATOR_DATA[activeStationKey] || NAVIGATOR_DATA.web;

  const handleAssignToPass = () => {
    toggleDomain(station.role);
    showToast(`Assigned ${station.hero} (${station.role}) to your recruit pass!`);
  };

  const handleOpenModal = () => {
    const u = UNIVERSES[activeStationKey];
    if (u) {
      openUniverseModal(u);
    }
  };

  return (
    <section id="multiverse-map" className="section-wrapper section-map">
      <div className="section-inner">
        <div className="section-header-block">
          <span className="section-category-tag">
            SCENE 02 // MULTIVERSE COMMAND NEXUS
          </span>
          <h2 className="section-main-title">
            THE <span>MULTIVERSE</span> NAVIGATOR
          </h2>
          <p className="section-lead-text">
            Five dimensions. Five legendary mentors. Zero prerequisites. Select a
            station below to lock onto its universe and discover your technical
            powers.
          </p>
        </div>

        {/* Top Universe Station Tabs */}
        <div className="multiverse-station-tabs">
          <button
            className={`mv-station-btn ${activeStationKey === "web" ? "active" : ""}`}
            style={{ "--tab-color": "#E52521" } as React.CSSProperties}
            onClick={() => setActiveStationKey("web")}
          >
            <span className="mv-tab-icon">🕷️</span>
            <span>WEB DEV</span>
            <span className="mv-tab-tag">EARTH-616</span>
          </button>
          <button
            className={`mv-station-btn ${activeStationKey === "android" ? "active" : ""}`}
            style={{ "--tab-color": "#10B981" } as React.CSSProperties}
            onClick={() => setActiveStationKey("android")}
          >
            <span className="mv-tab-icon">📱</span>
            <span>ANDROID DEV</span>
            <span className="mv-tab-tag">REALM-965</span>
          </button>
          <button
            className={`mv-station-btn ${activeStationKey === "ai" ? "active" : ""}`}
            style={{ "--tab-color": "#D97706" } as React.CSSProperties}
            onClick={() => setActiveStationKey("ai")}
          >
            <span className="mv-tab-icon">🤖</span>
            <span>AI &amp; ML</span>
            <span className="mv-tab-tag">EARTH-199999</span>
          </button>
          <button
            className={`mv-station-btn ${activeStationKey === "uiux" ? "active" : ""}`}
            style={{ "--tab-color": "#EC4899" } as React.CSSProperties}
            onClick={() => setActiveStationKey("uiux")}
          >
            <span className="mv-tab-icon">🎨</span>
            <span>UI/UX DESIGN</span>
            <span className="mv-tab-tag">SECTOR-1941</span>
          </button>
          <button
            className={`mv-station-btn ${activeStationKey === "dsa" ? "active" : ""}`}
            style={{ "--tab-color": "#0284C7" } as React.CSSProperties}
            onClick={() => setActiveStationKey("dsa")}
          >
            <span className="mv-tab-icon">🌀</span>
            <span>DSA / CP</span>
            <span className="mv-tab-tag">EARTH-838</span>
          </button>
        </div>

        {/* Central Multiverse Control Deck */}
        <div
          className="multiverse-control-deck"
          id="mvControlDeck"
          style={
            {
              "--deck-accent": station.theme,
              "--deck-border": station.border,
            } as React.CSSProperties
          }
        >
          {/* Left: Live Dimensional Portal Viewport */}
          <div className="portal-viewport-frame">
            <div className="portal-ring-animation"></div>
            <div className="portal-hud-bracket-tl"></div>
            <div className="portal-hud-bracket-br"></div>
            <span className="portal-frequency-tag" id="portalFreqBadge">
              DIMENSION: {station.dimension} // LOCKED
            </span>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="portalDeckImg"
              src={station.img}
              alt={station.hero}
              className="portal-hero-artwork"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = station.fallbackImg;
              }}
            />

            <div className="portal-overlay-action">
              <div>
                <div className="portal-action-label">{station.hero}</div>
                <div className="portal-action-sub">{station.role}</div>
              </div>
              <button
                className="btn-portal-jump"
                onClick={handleOpenModal}
              >
                JUMP TO UNIVERSE →
              </button>
            </div>
          </div>

          {/* Right: Intel Matrix & Technical Telemetry */}
          <div className="intel-matrix-content">
            <div className="intel-universe-id">
              <span>🌀</span>
              <span>{station.num}</span>
            </div>

            <h3 className="intel-hero-heading">
              {station.headingMain}
              <br />
              <span style={{ color: station.theme }}>{station.headingSub}</span>
            </h3>

            <div
              className="intel-quote-box"
              style={{ borderColor: station.theme }}
            >
              &ldquo;{station.quote}&rdquo;
            </div>

            <div className="intel-breakdown-box">
              <div className="intel-fact-card">
                <div className="ifc-label">PRIMARY SUPERPOWER</div>
                <div className="ifc-val">{station.power}</div>
              </div>
              <div className="intel-fact-card">
                <div className="ifc-label">FRESHER ADVANTAGE</div>
                <div className="ifc-val">{station.fresher}</div>
              </div>
            </div>

            <div>
              <div className="ifc-label" style={{ marginBottom: "8px" }}>
                CORE TECHNICAL ARSENAL
              </div>
              <div className="intel-skills-list">
                {station.skills.map((skill) => (
                  <span key={skill} className="intel-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="intel-actions-row">
              <button
                className="btn-intel-primary"
                onClick={handleOpenModal}
              >
                <span>⚡ EXPLORE COMPLETE CURRICULUM</span>
                <span>→</span>
              </button>
              <button
                className="btn-intel-secondary"
                onClick={handleAssignToPass}
              >
                <span>🎯 ASSIGN TO MY RECRUIT PASS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Constellation Track Grid */}
        <div className="constellation-track-grid">
          <div
            className={`constellation-node-card ${
              activeStationKey === "web" ? "active" : ""
            }`}
            style={{ "--card-theme": "#E52521" } as React.CSSProperties}
            onClick={() => setActiveStationKey("web")}
          >
            <div className="cnc-icon-box">🕷️</div>
            <div>
              <div className="cnc-name">The Web</div>
              <div className="cnc-status">● 12ms Latency · ONLINE</div>
            </div>
          </div>

          <div
            className={`constellation-node-card ${
              activeStationKey === "ai" ? "active" : ""
            }`}
            style={{ "--card-theme": "#D97706" } as React.CSSProperties}
            onClick={() => setActiveStationKey("ai")}
          >
            <div className="cnc-icon-box">🤖</div>
            <div>
              <div className="cnc-name">Stark AI</div>
              <div className="cnc-status">● 99.4% Acc · ONLINE</div>
            </div>
          </div>

          <div
            className={`constellation-node-card ${
              activeStationKey === "dsa" ? "active" : ""
            }`}
            style={{ "--card-theme": "#059669" } as React.CSSProperties}
            onClick={() => setActiveStationKey("dsa")}
          >
            <div className="cnc-icon-box">🌀</div>
            <div>
              <div className="cnc-name">Sorcerer</div>
              <div className="cnc-status">● O(1) Logic · ONLINE</div>
            </div>
          </div>

          <div
            className={`constellation-node-card ${
              activeStationKey === "cloud" ? "active" : ""
            }`}
            style={{ "--card-theme": "#0284C7" } as React.CSSProperties}
            onClick={() => setActiveStationKey("cloud")}
          >
            <div className="cnc-icon-box">⚡</div>
            <div>
              <div className="cnc-name">Asgard Cloud</div>
              <div className="cnc-status">● 99.99% Up · ONLINE</div>
            </div>
          </div>

          <div
            className={`constellation-node-card ${
              activeStationKey === "cyber" ? "active" : ""
            }`}
            style={{ "--card-theme": "#4338CA" } as React.CSSProperties}
            onClick={() => setActiveStationKey("cyber")}
          >
            <div className="cnc-icon-box">🛡️</div>
            <div>
              <div className="cnc-name">Shield Cyber</div>
              <div className="cnc-status">● 0 Breaches · SECURE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
