import { NextResponse } from "next/server";
import { getReferences, getReferenceLogos } from "@/lib/api/client";

export async function GET() {
  try {
    const [references, logos] = await Promise.all([
      getReferences(),
      getReferenceLogos(),
    ]);
    return NextResponse.json({ references, logos });
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}