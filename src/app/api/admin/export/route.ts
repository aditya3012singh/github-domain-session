import { NextRequest, NextResponse } from "next/server";
import { getAllRegistrations } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format") || "csv";
    const secret = searchParams.get("key");

    // Optional environment variable security
    const expectedKey = process.env.ADMIN_SECRET;
    if (expectedKey && secret !== expectedKey) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const records = await getAllRegistrations();

    if (format === "json") {
      return NextResponse.json({
        total: records.length,
        timestamp: new Date().toISOString(),
        registrations: records,
      });
    }

    // CSV format
    const headers = [
      "Ticket ID",
      "Full Name",
      "Phone",
      "KIET Email",
      "Branch",
      "Year",
      "GitHub Username",
      "Selected Tracks",
      "Registration Date",
    ];

    const rows = records.map((r) => [
      `"${r.id}"`,
      `"${r.fullName.replace(/"/g, '""')}"`,
      `"${r.phone}"`,
      `"${r.email}"`,
      `"${r.branch}"`,
      `"${r.year}"`,
      `"${(r.github || "").replace(/"/g, '""')}"`,
      `"${r.domains.join(", ")}"`,
      `"${r.createdAt}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="devup_freshman_registrations_${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to export data" },
      { status: 500 }
    );
  }
}
