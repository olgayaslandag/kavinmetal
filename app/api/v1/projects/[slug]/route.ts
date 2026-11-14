import { NextResponse } from "next/server";
import { getProject } from "@/lib/api/client";

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const project = await getProject(params.slug);
    if (!project) {
      return NextResponse.json(
        { error: "not_found" },
        { status: 404 }
      );
    }
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}