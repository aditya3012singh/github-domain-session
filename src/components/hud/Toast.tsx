"use client";

import React from "react";
import { useRecruit } from "@/context/RecruitContext";

export default function Toast() {
  const { toastMessage } = useRecruit();

  if (!toastMessage) return null;

  return (
    <div
      className="toast-notification show"
      id="toastNotifier"
      style={{ display: "block" }}
    >
      {toastMessage}
    </div>
  );
}
