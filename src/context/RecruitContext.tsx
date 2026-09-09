"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { RecruitState, Universe } from "@/types/multiverse";

interface RecruitContextType {
    recruitState: RecruitState;
    updateRecruitField: (field: keyof RecruitState, value: any) => void;
    toggleDomain: (domain: string) => void;
    completeRegistration: () => void;
    markUniverseDiscovered: (id: string) => void;
    selectedUniverseModal: Universe | null;
    openUniverseModal: (u: Universe) => void;
    closeUniverseModal: () => void;
    isPosterModalOpen: boolean;
    openPosterModal: () => void;
    closePosterModal: () => void;
    toastMessage: string | null;
    showToast: (msg: string) => void;
}

const defaultRecruitState: RecruitState = {
    id: "DV-2026-????",
    name: "PETER PARKER",
    email: "",
    phone: "",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    github: "",
    domains: ["The Web"],
    rank: "ROOKIE",
    registered: false,
    discoveredUniverses: ["web"]
};

const RecruitContext = createContext<RecruitContextType | undefined>(undefined);

export function RecruitProvider({ children }: { children: ReactNode }) {
    const [recruitState, setRecruitState] = useState<RecruitState>(defaultRecruitState);
    const [selectedUniverseModal, setSelectedUniverseModal] = useState<Universe | null>(null);
    const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Generate random Recruit ID on initial client load
    useEffect(() => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const stored = localStorage.getItem("devup_recruit_state");
        if (stored) {
            try {
                setRecruitState(JSON.parse(stored));
            } catch {
                setRecruitState(prev => ({ ...prev, id: `DV-2026-${randomNum}` }));
            }
        } else {
            setRecruitState(prev => ({ ...prev, id: `DV-2026-${randomNum}` }));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (recruitState.id !== "DV-2026-????") {
            localStorage.setItem("devup_recruit_state", JSON.stringify(recruitState));
        }
    }, [recruitState]);

    const updateRecruitField = (field: keyof RecruitState, value: any) => {
        setRecruitState(prev => ({ ...prev, [field]: value }));
    };

    const toggleDomain = (domain: string) => {
        setRecruitState(prev => {
            const exists = prev.domains.includes(domain);
            const domains = exists
                ? prev.domains.filter(d => d !== domain)
                : [...prev.domains, domain];
            return { ...prev, domains };
        });
    };

    const markUniverseDiscovered = (id: string) => {
        setRecruitState(prev => {
            if (prev.discoveredUniverses.includes(id)) return prev;
            const updated = [...prev.discoveredUniverses, id];
            let rank = prev.rank;
            if (updated.length >= 5) rank = "MULTIVERSE AGENT";
            else if (updated.length >= 3) rank = "SCOUT";
            if (prev.registered) rank = "COMMISSIONED";
            return { ...prev, discoveredUniverses: updated, rank };
        });
    };

    const completeRegistration = () => {
        setRecruitState(prev => ({
            ...prev,
            registered: true,
            rank: "COMMISSIONED"
        }));
    };

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage(null);
        }, 3200);
    };

    return (
        <RecruitContext.Provider
            value={{
                recruitState,
                updateRecruitField,
                toggleDomain,
                completeRegistration,
                markUniverseDiscovered,
                selectedUniverseModal,
                openUniverseModal: (u) => {
                    setSelectedUniverseModal(u);
                    markUniverseDiscovered(u.id);
                },
                closeUniverseModal: () => setSelectedUniverseModal(null),
                isPosterModalOpen,
                openPosterModal: () => setIsPosterModalOpen(true),
                closePosterModal: () => setIsPosterModalOpen(false),
                toastMessage,
                showToast
            }}
        >
            {children}
        </RecruitContext.Provider>
    );
}

export function useRecruit() {
    const context = useContext(RecruitContext);
    if (!context) {
        throw new Error("useRecruit must be used within a RecruitProvider");
    }
    return context;
}
