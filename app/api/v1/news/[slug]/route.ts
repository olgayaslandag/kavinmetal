import { NextResponse } from "next/server";
import { getNewsDetail } from "@/lib/api/client";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const article = await getNewsDetail(params.slug);
    if (!article) {
      return NextResponse.json(
        { error: "not_found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}