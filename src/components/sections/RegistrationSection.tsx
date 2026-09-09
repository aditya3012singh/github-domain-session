"use client";

import React, { useState, useRef } from "react";
import { useRecruit } from "@/context/RecruitContext";

const AVAILABLE_DOMAINS = [
  { label: "🌐 Web Development", value: "Web Development" },
  { label: "📱 Android Development", value: "Android Development" },
  { label: "🤖 AI & ML", value: "AI & ML" },
  { label: "🎨 UI/UX", value: "UI/UX" },
  { label: "🌀 DSA / CP", value: "DSA / CP" },
];

export default function RegistrationSection() {
  const { recruitState, updateRecruitField, toggleDomain, completeRegistration, showToast } =
    useRecruit();

  const [formData, setFormData] = useState({
    name: recruitState.name || "PETER PARKER",
    email: recruitState.email || "",
    phone: recruitState.phone || "",
    branch: recruitState.branch || "Computer Science / AI / IT",
    year: recruitState.year || "1st Year",
    github: recruitState.github || "",
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, keyof typeof formData> = {
      regName: "name",
      regEmail: "email",
      regPhone: "phone",
      regBranch: "branch",
      regYear: "year",
      regGithub: "github",
    };
    const field = fieldMap[id];
    if (field) {
      setFormData((prev) => ({ ...prev, [field]: value }));
      updateRecruitField(field, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeRegistration();
    showToast("🎉 Registration confirmed! Commissioned to DevUp Multiverse!");
  };

  const downloadPassPNG = () => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    const W = 640;
    const H = 400;
    cvs.width = W;
    cvs.height = H;

    // Background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, W, H);

    // Top Red Header bar
    ctx.fillStyle = "#E52521";
    ctx.fillRect(0, 0, W, 10);

    // Border
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, W - 4, H - 4);

    // Agency Title & Status
    ctx.fillStyle = "#E52521";
    ctx.font = "bold 15px monospace";
    ctx.fillText("DEVUP RECRUIT COMMISSION PASS", 40, 50);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 15px monospace";
    ctx.fillText(recruitState.rank || "COMMISSIONED", W - 200, 50);

    // Recruit Name
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 32px sans-serif";
    ctx.fillText((formData.name || "PETER PARKER").toUpperCase(), 40, 115);

    // Recruit ID
    ctx.fillStyle = "#64748B";
    ctx.font = "600 16px monospace";
    ctx.fillText(`ID: ${recruitState.id}`, 40, 150);

    // Divider
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 180);
    ctx.lineTo(W - 40, 180);
    ctx.stroke();

    // Domains
    ctx.fillStyle = "#64748B";
    ctx.font = "bold 13px monospace";
    ctx.fillText("ASSIGNED MULTIVERSE DOMAINS:", 40, 215);

    let tagX = 40;
    const tagY = 245;
    const domains = recruitState.domains.length > 0 ? recruitState.domains : ["The Web"];
    domains.forEach((dom) => {
      ctx.font = "12px monospace";
      const tW = ctx.measureText(dom).width + 24;

      ctx.fillStyle = "#FEE2E2";
      ctx.fillRect(tagX, tagY - 18, tW, 26);
      ctx.strokeStyle = "#FCA5A5";
      ctx.strokeRect(tagX, tagY - 18, tW, 26);

      ctx.fillStyle = "#B91C1C";
      ctx.fillText(dom, tagX + 12, tagY);
      tagX += tW + 12;
    });

    // Date
    ctx.fillStyle = "#64748B";
    ctx.font = "bold 13px monospace";
    ctx.fillText("EVENT DATES:", 40, 310);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("SEPTEMBER 19–20, 2026 // CAMPUS AUDITORIUM", 40, 335);

    // Footer
    ctx.fillStyle = "#94A3B8";
    ctx.font = "11px monospace";
    ctx.fillText("DEVUP CLUB · INTO THE MULTIVERSE · PRESENT THIS AT ENTRY", 40, 375);

    // Download trigger
    const link = document.createElement("a");
    link.download = `devup-pass-${recruitState.id}.png`;
    link.href = cvs.toDataURL("image/png");
    link.click();
    showToast("Recruit Pass PNG Downloaded!");
  };

  const downloadCalendarICS = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DevUp Club//Into The Multiverse//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:devup-multiverse-2026@college.edu",
      "SUMMARY:DEVUP: INTO THE MULTIVERSE",
      "DESCRIPTION:2-Day Fresher Developer Event. Domains in Web, AI, Cybersecurity, Cloud, and DSA with Git workshops.",
      "LOCATION:Campus Auditorium & Computer Labs",
      "DTSTART:20260919T090000",
      "DTEND:20260920T170000",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "devup-multiverse-2026.ics";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Event added to calendar (.ics)!");
  };

  const sharePass = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `I just claimed my recruit pass for DEVUP: INTO THE MULTIVERSE! My Recruit ID: ${recruitState.id}. Join me: ${window.location.origin}`
      );
      showToast("Share link copied to clipboard!");
    }
  };

  return (
    <section id="registration" className="section-wrapper section-register">
      <div className="section-inner">
        <div className="section-header-block">
          <span className="section-category-tag">
            SCENE 07 // OFFICIAL ONBOARDING
          </span>
          <h2 className="section-main-title">
            JOIN THE <span>MULTIVERSE</span>
          </h2>
          <p className="section-lead-text">
            &ldquo;Every universe needs a new hero.&rdquo; Register below to claim
            your official DevUp recruit credentials and download your pass.
          </p>
        </div>

        {!recruitState.registered ? (
          <div className="register-split-card" id="regCardContainer">
            {/* Registration Form */}
            <form id="recruitRegisterForm" onSubmit={handleSubmit}>
              <div className="form-row-group">
                <label className="form-label-txt" htmlFor="regName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="regName"
                  className="form-input-field"
                  placeholder="e.g. Peter Parker"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div className="form-row-group">
                  <label className="form-label-txt" htmlFor="regEmail">
                    College Email *
                  </label>
                  <input
                    type="email"
                    id="regEmail"
                    className="form-input-field"
                    placeholder="recruit@college.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row-group">
                  <label className="form-label-txt" htmlFor="regPhone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="regPhone"
                    className="form-input-field"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "16px",
                }}
              >
                <div className="form-row-group">
                  <label className="form-label-txt" htmlFor="regBranch">
                    Department / Branch *
                  </label>
                  <input
                    type="text"
                    id="regBranch"
                    className="form-input-field"
                    placeholder="e.g. Computer Science / AI / IT"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row-group">
                  <label className="form-label-txt" htmlFor="regYear">
                    Academic Year *
                  </label>
                  <select
                    id="regYear"
                    className="form-select-field"
                    value={formData.year}
                    onChange={handleInputChange}
                  >
                    <option value="1st Year">1st Year (Fresher - Recommended!)</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>

              <div className="form-row-group">
                <label className="form-label-txt" htmlFor="regGithub">
                  GitHub Profile Handle (Optional)
                </label>
                <input
                  type="text"
                  id="regGithub"
                  className="form-input-field"
                  placeholder="github.com/yourhandle"
                  value={formData.github}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row-group">
                <label className="form-label-txt">
                  Domains You Wish to Explore
                </label>
                <div className="domain-chips-grid">
                  {AVAILABLE_DOMAINS.map((d) => (
                    <label key={d.value}>
                      <input
                        type="checkbox"
                        className="domain-chip-input"
                        value={d.value}
                        checked={recruitState.domains.includes(d.value)}
                        onChange={() => toggleDomain(d.value)}
                      />
                      <div className="domain-chip-label-card">{d.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-submit-recruit">
                CONFIRM REGISTRATION & GET PASS →
              </button>
            </form>

            {/* Live Collectible Card Preview */}
            <div className="preview-pass-column">
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                  letterSpacing: "1px",
                }}
              >
                LIVE RECRUIT ID PASS PREVIEW
              </div>

              <div className="collectible-recruit-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="card-agency-badge">DEVUP RECRUIT PASS</span>
                  <span className="card-status-badge">
                    {recruitState.rank || "ROOKIE"}
                  </span>
                </div>

                <div className="card-recruit-name-val" id="liveCardNameDisplay">
                  {(formData.name || "PETER PARKER").toUpperCase()}
                </div>
                <div className="card-recruit-id-val" id="liveCardIdDisplay">
                  ID: {recruitState.id}
                </div>

                <div className="card-h-divider"></div>

                <div className="card-meta-label">ASSIGNED DOMAINS</div>
                <div className="card-pills-list" id="liveCardPillsDisplay">
                  {recruitState.domains.length > 0 ? (
                    recruitState.domains.map((dom) => (
                      <span key={dom} className="pass-tag-badge">
                        {dom}
                      </span>
                    ))
                  ) : (
                    <span className="pass-tag-badge">THE WEB</span>
                  )}
                </div>

                <div className="card-meta-label">EVENT DATES</div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--text-heading)",
                  }}
                >
                  SEPTEMBER 19–20, 2026
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SUCCESS RESULT CARD */
          <div id="recruitSuccessBox" style={{ display: "block" }}>
            <div style={{ fontSize: "48px", marginBottom: "8px" }}>🎉</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--text-heading)",
              }}
            >
              REGISTRATION CONFIRMED!
            </h3>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--spidey-red)",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              WELCOME TO DEVUP. YOUR MULTIVERSE SQUAD IS WAITING.
            </p>
            <div
              id="finalRecruitBadgeText"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--text-heading)",
                margin: "18px 0",
              }}
            >
              RECRUIT ID: {recruitState.id}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <button className="pass-btn-download" onClick={downloadPassPNG}>
                DOWNLOAD RECRUIT PASS (PNG)
              </button>
              <button
                className="pass-btn-secondary"
                onClick={downloadCalendarICS}
              >
                ADD TO CALENDAR (.ICS)
              </button>
              <button className="pass-btn-secondary" onClick={sharePass}>
                SHARE PASS LINK
              </button>
            </div>
          </div>
        )}

        {/* Hidden Canvas for PNG Generation */}
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </div>
    </section>
  );
}
