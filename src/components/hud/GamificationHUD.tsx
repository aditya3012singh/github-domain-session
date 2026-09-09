"use client";

import React from "react";
import { useRecruit } from "@/context/RecruitContext";

export default function GamificationHUD() {
  const { recruitState } = useRecruit();

  const discoveredCount = recruitState.discoveredUniverses.length;
  const progressPercent = Math.min(100, Math.round((discoveredCount / 5) * 100));

  return (
    <div id="gamificationPillHud">
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 700,
            color: "var(--spidey-red)",
          }}
          id="hudRankDisplay"
        >
          {recruitState.rank}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--text-heading)",
          }}
          id="hudRecruitIdDisplay"
        >
          {recruitState.id}
        </div>
      </div>

      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9.5px",
            fontWeight: 700,
            color: "var(--text-muted)",
          }}
        >
          EXPLORED:{" "}
          <span id="hudDiscoveredNum" style={{ color: "var(--spidey-red)" }}>
            {discoveredCount}
          </span>{" "}
          / 5
        </div>
        <div className="hud-progress-meter">
          <div
            className="hud-meter-fill"
            id="hudMeterFill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
