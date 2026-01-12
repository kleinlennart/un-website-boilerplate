import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const rows = await query<{ body: string }>(`SELECT DISTINCT body FROM documents WHERE body IS NOT NULL ORDER BY body`);
  return NextResponse.json(rows.map((r) => r.body));
}
