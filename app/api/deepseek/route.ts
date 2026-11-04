import { NextResponse } from "next/server";
import { deepseekChat, type DeepSeekMessage } from "@/lib/deepseek";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages?: DeepSeekMessage[];
      temperature?: number;
      maxTokens?: number;
      model?: string;
    };

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: "messages-gerekli" }, { status: 400 });
    }

    const { content, model } = await deepseekChat(body.messages, {
      temperature: body.temperature,
      maxTokens: body.maxTokens,
      model: body.model,
    });

    return NextResponse.json({ content, model });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "deepseek-hata";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
