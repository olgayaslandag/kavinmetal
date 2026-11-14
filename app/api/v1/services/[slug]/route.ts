import { NextRequest, NextResponse } from "next/server";
import { getService } from "@/lib/api/client";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { searchParams } = new URL(req.url);
  const locale = (searchParams.get('locale') || 'tr') as 'tr' | 'en';
  
  try {
    const service = await getService(params.slug);
    if (!service) {
      return NextResponse.json(
        { error: "not_found" },
        { status: 404 }
      );
    }
    return NextResponse.json(service);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}