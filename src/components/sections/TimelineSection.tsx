"use client";

import React, { useState } from "react";

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  return (
    <section id="timeline" className="section-wrapper section-timeline">
      <div className="section-inner">
        <div className="section-header-block">
          <span className="section-category-tag">SCENE 05 // 2-DAY EVENT SCHEDULE</span>
          <h2 className="section-main-title">
            EVENT <span>TIMELINE</span>
          </h2>
          <p className="section-lead-text">
            Day 1 is for discovering your power. Day 2 is for building and shipping
            projects.
          </p>
        </div>

        <div className="timeline-tab-bar">
          <button
            className={`t-tab-button ${activeDay === 1 ? "active" : ""}`}
            id="tabDay1Btn"
            onClick={() => setActiveDay(1)}
          >
            DAY 01 — DISCOVER YOUR UNIVERSE
          </button>
          <button
            className={`t-tab-button ${activeDay === 2 ? "active" : ""}`}
            id="tabDay2Btn"
            onClick={() => setActiveDay(2)}
          >
            DAY 02 — BUILD YOUR UNIVERSE
          </button>
        </div>

        {/* DAY 1 MISSIONS */}
        {activeDay === 1 && (
          <div className="missions-card-list" id="day1List">
            <div className="mission-row-card">
              <div className="mission-order-badge">01</div>
              <div>
                <h4 className="mission-title-h4">WELCOME TO DEVUP & KEYNOTE</h4>
                <p className="mission-desc-p">
                  Initiation sequence. Introduction to club mentors, roadmap
                  opportunities, and the multiverse theme.
                </p>
              </div>
              <div className="mission-time-tag">09:00 AM · AUDITORIUM</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">02</div>
              <div>
                <h4 className="mission-title-h4">DOMAIN IMMERSION SHOWCASE</h4>
                <p className="mission-desc-p">
                  Deep-dive live demos in Web, AI, Cybersecurity, Cloud, and
                  Competitive Programming.
                </p>
              </div>
              <div className="mission-time-tag">11:00 AM · LABS 1-4</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">03</div>
              <div>
                <h4 className="mission-title-h4">MEET YOUR HEROES & TECH LEADS</h4>
                <p className="mission-desc-p">
                  Domain leads and senior developers unveil their real-world
                  projects and discuss roadmap paths.
                </p>
              </div>
              <div className="mission-time-tag">02:00 PM · MAIN STAGE</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">04</div>
              <div>
                <h4 className="mission-title-h4">CHOOSE YOUR PATHFINDER SQUAD</h4>
                <p className="mission-desc-p">
                  Interactive guided session to align with your first universe
                  and form your Day 2 hack squad.
                </p>
              </div>
              <div className="mission-time-tag">04:00 PM · SQUAD HUB</div>
            </div>
          </div>
        )}

        {/* DAY 2 MISSIONS */}
        {activeDay === 2 && (
          <div className="missions-card-list" id="day2List">
            <div className="mission-row-card">
              <div className="mission-order-badge">01</div>
              <div>
                <h4 className="mission-title-h4">THE BUILD PROTOCOL: GIT & GITHUB</h4>
                <p className="mission-desc-p">
                  Master repositories, commits, branches, pull requests, and the
                  global open-source workflow.
                </p>
              </div>
              <div className="mission-time-tag">09:30 AM · TERMINAL LAB</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">02</div>
              <div>
                <h4 className="mission-title-h4">YOUR FIRST COMMIT WORKSHOP</h4>
                <p className="mission-desc-p">
                  Hands-on practical session. Every recruit initializes a
                  repository, writes code, and pushes to GitHub.
                </p>
              </div>
              <div className="mission-time-tag">11:00 AM · HANDS-ON</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">03</div>
              <div>
                <h4 className="mission-title-h4">ASSEMBLE THE SQUAD & MINI-HACK</h4>
                <p className="mission-desc-p">
                  Multi-disciplinary teams build an interactive web app or
                  intelligent bot prototype in 3 hours.
                </p>
              </div>
              <div className="mission-time-tag">02:00 PM · HACK ARENA</div>
            </div>

            <div className="mission-row-card">
              <div className="mission-order-badge">04</div>
              <div>
                <h4 className="mission-title-h4">PUSH TO THE MULTIVERSE & AWARDS</h4>
                <p className="mission-desc-p">
                  Live project showcases, code reviews by leads, official recruit
                  certification, and prizes.
                </p>
              </div>
              <div className="mission-time-tag">05:00 PM · STAGE</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
