export const ALLOWED_BRANCHES = [
  "CS",
  "CSIT",
  "CSE",
  "CSE-AI",
  "CSE-AIML",
  "CSE-CS",
  "CSE-DS",
  "IT",
  "ECE",
  "ELCE",
  "EEE",
  "Mechanical",
] as const;

export type AllowedBranch = (typeof ALLOWED_BRANCHES)[number];

export interface RegistrationRecord {
  id: string; // e.g. DEVUP-2026-XXXX
  fullName: string;
  phone: string;
  email: string;
  branch: AllowedBranch;
  year: "1st Year";
  github?: string;
  domains: string[];
  createdAt: string;
  ip?: string;
}
