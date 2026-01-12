import { NextResponse } from "next/server";

// Override this to return actual entities from your database
export async function GET() {
  return NextResponse.json({ entities: [] });
}
