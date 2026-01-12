import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const rows = await query<{ name: string }>(`SELECT name FROM entities ORDER BY name`);
  return NextResponse.json({ entities: rows.map((r) => r.name) });
}
