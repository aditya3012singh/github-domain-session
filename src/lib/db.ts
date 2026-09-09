import { neon } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";
import {
  ALLOWED_BRANCHES,
  AllowedBranch,
  RegistrationRecord,
} from "./types";

export { ALLOWED_BRANCHES };
export type { AllowedBranch, RegistrationRecord };

const DATA_DIR = path.join(process.cwd(), "data");
const BACKUP_FILE = path.join(DATA_DIR, "registrations.jsonl");

// Neon Database Client
function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set.");
  }
  return neon(connectionString);
}

let isDbInitialized = false;

export async function ensureDbSchema() {
  if (isDbInitialized) return;
  const sql = getSql();

  await sql`
    CREATE TABLE IF NOT EXISTS registrations (
      id VARCHAR(64) PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone VARCHAR(20) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      branch VARCHAR(32) NOT NULL,
      year VARCHAR(32) NOT NULL DEFAULT '1st Year',
      github TEXT,
      domains JSONB NOT NULL DEFAULT '[]'::jsonb,
      ip VARCHAR(64),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations (LOWER(email));
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_registrations_phone ON registrations (phone);
  `;

  isDbInitialized = true;
}

export async function isAlreadyRegistered(
  email: string,
  phone: string
): Promise<{ isRegistered: boolean; field?: "email" | "phone" }> {
  await ensureDbSchema();
  const sql = getSql();

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPhone = phone.replace(/\D/g, "");

  const existing = (await sql`
    SELECT email, phone FROM registrations 
    WHERE LOWER(email) = ${normalizedEmail} OR phone = ${normalizedPhone}
    LIMIT 1
  `) as Array<{ email: string; phone: string }>;

  if (existing.length > 0) {
    const matched = existing[0];
    if (matched.email.toLowerCase() === normalizedEmail) {
      return { isRegistered: true, field: "email" };
    }
    return { isRegistered: true, field: "phone" };
  }

  return { isRegistered: false };
}

export async function saveRegistration(
  data: Omit<RegistrationRecord, "id" | "createdAt">
): Promise<RegistrationRecord> {
  await ensureDbSchema();
  const sql = getSql();

  const normalizedEmail = data.email.trim().toLowerCase();
  const normalizedPhone = data.phone.replace(/\D/g, "");

  // Pre-check duplicate
  const check = await isAlreadyRegistered(normalizedEmail, normalizedPhone);
  if (check.isRegistered) {
    if (check.field === "email") {
      throw new Error("This KIET email is already registered.");
    } else {
      throw new Error("This phone number is already registered.");
    }
  }

  // Generate unique Ticket ID
  const randomPin = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `DEVUP-2026-${randomPin}`;

  try {
    const inserted = (await sql`
      INSERT INTO registrations (
        id, full_name, phone, email, branch, year, github, domains, ip, created_at
      ) VALUES (
        ${ticketId},
        ${data.fullName.trim()},
        ${normalizedPhone},
        ${normalizedEmail},
        ${data.branch},
        '1st Year',
        ${data.github || null},
        ${JSON.stringify(data.domains)},
        ${data.ip || null},
        NOW()
      )
      RETURNING 
        id,
        full_name as "fullName",
        phone,
        email,
        branch,
        year,
        github,
        domains,
        ip,
        created_at as "createdAt"
    `) as Array<any>;

    const record = inserted[0];
    const newRecord: RegistrationRecord = {
      id: record.id,
      fullName: record.fullName,
      phone: record.phone,
      email: record.email,
      branch: record.branch as AllowedBranch,
      year: "1st Year",
      github: record.github || undefined,
      domains: Array.isArray(record.domains) ? record.domains : JSON.parse(record.domains || "[]"),
      createdAt: typeof record.createdAt === "string" ? record.createdAt : new Date(record.createdAt).toISOString(),
      ip: record.ip || undefined,
    };

    // Dual-persistence fallback file log
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.appendFileSync(BACKUP_FILE, JSON.stringify(newRecord) + "\n", "utf-8");
    } catch (fsErr) {
      console.warn("Backup file append notice:", fsErr);
    }

    // Webhook forwarder if configured
    const webhookUrl = process.env.REGISTRATION_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecord),
      }).catch((err) => console.error("Webhook notification error:", err));
    }

    return newRecord;
  } catch (err: any) {
    if (err.code === "23505" || err.message?.includes("duplicate key") || err.message?.includes("unique constraint")) {
      const msg = err.message || "";
      const detail = err.detail || "";
      if (msg.includes("email") || detail.includes("email")) {
        throw new Error("This KIET email is already registered.");
      }
      if (msg.includes("phone") || detail.includes("phone")) {
        throw new Error("This phone number is already registered.");
      }
      throw new Error("You are already registered.");
    }
    throw err;
  }
}

export async function getAllRegistrations(): Promise<RegistrationRecord[]> {
  await ensureDbSchema();
  const sql = getSql();

  const rows = (await sql`
    SELECT 
      id,
      full_name as "fullName",
      phone,
      email,
      branch,
      year,
      github,
      domains,
      ip,
      created_at as "createdAt"
    FROM registrations
    ORDER BY created_at DESC
  `) as Array<any>;

  return rows.map((r) => ({
    id: r.id,
    fullName: r.fullName,
    phone: r.phone,
    email: r.email,
    branch: r.branch as AllowedBranch,
    year: "1st Year",
    github: r.github || undefined,
    domains: Array.isArray(r.domains) ? r.domains : (typeof r.domains === "string" ? JSON.parse(r.domains) : []),
    createdAt: typeof r.createdAt === "string" ? r.createdAt : new Date(r.createdAt).toISOString(),
    ip: r.ip || undefined,
  }));
}

export async function getRegistrationCount(): Promise<number> {
  await ensureDbSchema();
  const sql = getSql();

  const rows = (await sql`
    SELECT COUNT(*)::int as count FROM registrations
  `) as Array<{ count: number }>;

  return rows[0]?.count || 0;
}
