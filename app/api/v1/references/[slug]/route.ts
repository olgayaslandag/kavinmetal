import { NextResponse } from "next/server";
import { getReference } from "@/lib/api/client";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const reference = await getReference(params.slug);
    if (!reference) {
      return NextResponse.json(
        { error: "not_found" },
        { status: 404 }
      );
    }
    return NextResponse.json(reference);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}