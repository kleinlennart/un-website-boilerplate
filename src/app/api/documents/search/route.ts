import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

interface DocumentRow {
  symbol: string;
  title: string | null;
  body: string | null;
  year: number | null;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim();
  if (!q || q.length < 2) return NextResponse.json([]);

  const rows = await query<DocumentRow>(
    `SELECT symbol, title, body, year FROM documents
     WHERE symbol ILIKE $1 || '%' OR title ILIKE '%' || $1 || '%'
     ORDER BY CASE WHEN symbol ILIKE $1 || '%' THEN 0 ELSE 1 END, year DESC NULLS LAST
     LIMIT 20`,
    [q]
  );

  return NextResponse.json(rows.map((r) => ({ symbol: r.symbol, title: r.title, body: r.body, year: r.year })));
}
