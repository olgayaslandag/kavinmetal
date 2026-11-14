import { NextRequest, NextResponse } from "next/server";
import { getServices } from "@/lib/api/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = (searchParams.get('locale') || 'tr') as 'tr' | 'en';
  
  try {
    const services = await getServices();
    return NextResponse.json(services);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}