"use client";

import React from "react";
import { useRecruit } from "@/context/RecruitContext";

export default function UniverseModal() {
  const {
    selectedUniverseModal,
    closeUniverseModal,
    toggleDomain,
    showToast,
  } = useRecruit();

  if (!selectedUniverseModal) return null;

  const u = selectedUniverseModal;

  const handleAlign = () => {
    toggleDomain(u.name);
    showToast(`Aligned with ${u.hero} (${u.name})!`);
    closeUniverseModal();
  };

  return (
    <div
      id="universeModalView"
      className="active"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeUniverseModal();
      }}
    >
      <div className="modal-dialog-box" id="modalDialogBox">
        <button
          className="modal-close-icon"
          onClick={closeUniverseModal}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-left-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="modalArtGraphic"
            src={u.img}
            alt={u.hero}
            className="modal-hero-graphic"
            onError={(e) => {
              e.currentTarget.src = u.fallbackImg;
            }}
          />
        </div>

        <div className="modal-right-info">
          <div className="modal-universe-tag" id="modalUniverseTag">
            {u.num}
          </div>
          <h3 className="modal-domain-heading" id="modalDomainHeading">
            {u.name}
          </h3>
          <div className="modal-quote-box" id="modalQuoteBox">
            &ldquo;{u.quote}&rdquo;
          </div>
          <p className="modal-desc-text" id="modalDescText">
            {u.desc}
          </p>

          <div className="modal-arsenal-title">TECHNOLOGY ARSENAL</div>
          <div className="modal-tech-pills" id="modalTechPills">
            {u.stack.map((item) => (
              <span key={item} className="modal-tech-pill-item">
                {item}
              </span>
            ))}
          </div>

          <button
            className="btn-modal-align"
            id="btnModalAlign"
            onClick={handleAlign}
          >
            ALIGN WITH THIS UNIVERSE →
          </button>
        </div>
      </div>
    </div>
  );
}
