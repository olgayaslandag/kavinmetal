import { NextResponse } from "next/server";
import { getSolution } from "@/lib/api/client";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const solution = await getSolution(params.slug);
    if (!solution) {
      return NextResponse.json(
        { error: "not_found" },
        { status: 404 }
      );
    }
    return NextResponse.json(solution);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}