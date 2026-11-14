import { NextResponse } from "next/server";
import { getReferenceLogos } from "@/lib/api/client";

export async function GET() {
  try {
    const logos = await getReferenceLogos();
    return NextResponse.json(logos);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}