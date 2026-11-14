import { NextRequest, NextResponse } from "next/server";
import { getSolutions, getSolution } from "@/lib/api/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = (searchParams.get('locale') || 'tr') as 'tr' | 'en';
  
  const slug = searchParams.get('slug');
  
  try {
    if (slug) {
      const solution = await getSolution(slug);
      if (!solution) {
        return NextResponse.json(
          { error: "not_found" },
          { status: 404 }
        );
      }
      return NextResponse.json(solution);
    }
    const solutions = await getSolutions();
    return NextResponse.json(solutions);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}