import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_BRANCHES,
  AllowedBranch,
  isAlreadyRegistered,
  saveRegistration,
} from "@/lib/db";

export const dynamic = "force-dynamic";

// In-memory sliding rate limiter: max 15 attempts per IP per minute
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 15;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many registration attempts. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { fullName, phone, email, branch, year, github, domains } = body;

    // 1. Full Name Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // 2. Phone Validation (10-digit Indian Mobile Number)
    const cleanPhone = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
        },
        { status: 400 }
      );
    }

    // 3. KIET Email Validation (@kiet.edu)
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const kietEmailRegex = /^[a-zA-Z0-9._%+-]+@kiet\.edu$/i;
    if (!kietEmailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid KIET college email address ending with @kiet.edu.",
        },
        { status: 400 }
      );
    }

    // 4. Branch Validation
    if (!ALLOWED_BRANCHES.includes(branch as AllowedBranch)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid branch. Allowed branches: ${ALLOWED_BRANCHES.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // 5. Academic Year Validation (Only 1st Year allowed)
    if (year !== "1st Year") {
      return NextResponse.json(
        {
          success: false,
          error: "This orientation induction is exclusively for 1st Year (Freshman) students.",
        },
        { status: 400 }
      );
    }

    // 6. Optional GitHub Username Sanitization
    let cleanGithub = "";
    if (github && typeof github === "string" && github.trim().length > 0) {
      cleanGithub = github.trim().replace(/^https?:\/\/(www\.)?github\.com\//i, "").replace(/\/+$/, "");
      const githubRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
      if (!githubRegex.test(cleanGithub)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid GitHub username." },
          { status: 400 }
        );
      }
    }

    // 7. Domains / Tracks Selection
    if (!Array.isArray(domains) || domains.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select at least 1 track of interest." },
        { status: 400 }
      );
    }

    // 8. Deduplication Check
    const check = await isAlreadyRegistered(cleanEmail, cleanPhone);
    if (check.isRegistered) {
      const fieldMsg =
        check.field === "email"
          ? "This KIET email is already registered."
          : "This phone number is already registered.";
      return NextResponse.json(
        {
          success: false,
          error: `${fieldMsg} If you need assistance, contact DevUp coordinators.`,
        },
        { status: 409 }
      );
    }

    // 9. Atomic Save Record
    const record = await saveRegistration({
      fullName: fullName.trim(),
      phone: cleanPhone,
      email: cleanEmail,
      branch: branch as AllowedBranch,
      year: "1st Year",
      github: cleanGithub || undefined,
      domains,
      ip,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful! Your pass is confirmed.",
        ticket: record,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
