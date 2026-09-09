"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section id="hero" className="section-hero spider-web-bg">
      <div className="section-inner" style={{ width: "100%", padding: "40px 24px" }}>
        <div className="hero-layout">
          <div>
            <div className="hero-banner-tag">
              <span>🕷️</span>
              <span>FIRST-YEAR FRESHER INITIATIVE · DEVUP CLUB</span>
            </div>

            <h1 className="hero-title-main">
              ENTER THE VERSE.<br />
              <span className="red-accent">FIND YOUR PATH.</span><br />
              BUILD YOUR FUTURE.
            </h1>

            <p className="hero-tagline-quote">
              <strong>DEVUP: INTO THE MULTIVERSE</strong> is a 2-day cinematic
              college developer festival. Explore Web, AI, Cybersecurity, Cloud,
              and Algorithms through the superpowers of iconic heroes.
            </p>

            <div className="hero-cta-group">
              <a href="#domains" className="btn-hero-primary">
                <span>EXPLORE THE UNIVERSES</span>
                <span>→</span>
              </a>
              <a href="#registration" className="btn-hero-secondary">
                <span>BECOME A RECRUIT</span>
              </a>
            </div>

            <div className="hero-feature-pills">
              <div className="hero-pill-item">
                <span className="pill-number">5+</span>
                <span className="pill-label">Hero Domains</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-number">2 DAYS</span>
                <span className="pill-label">Discover & Build</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-number">100%</span>
                <span className="pill-label">Fresher Friendly</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-number">FREE</span>
                <span className="pill-label">Open Registration</span>
              </div>
            </div>
          </div>

          <div>
            <div className="hero-character-box">
              <span className="hero-card-badge">UNIVERSE 001</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/heroes/spiderman.svg"
                alt="Spider-Man Hero"
                className="hero-img-element"
              />
              <div className="hero-card-meta">
                <div>
                  <div className="hero-char-title">SPIDER-MAN</div>
                  <div className="hero-char-domain">THE WEB // WEB DEVELOPMENT</div>
                </div>
                <span style={{ fontSize: "24px" }}>🕸️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
