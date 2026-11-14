import { NextResponse } from "next/server";
import { getProjects } from "@/lib/api/client";

export async function GET(_req: Request) {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}