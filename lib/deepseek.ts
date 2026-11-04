// DeepSeek sohbet servisi (api.river.ai üzerinden)
// API anahtarı .env dosyasından okunur, asla koda gömülmez.

export type DeepSeekMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type DeepSeekChatResponse = {
  id?: string;
  choices?: Array<{
    message?: DeepSeekMessage;
    finish_reason?: string;
  }>;
  error?: { message?: string; type?: string; code?: number };
};

const getConfig = () => ({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseUrl: process.env.DEEPSEEK_BASE_URL ?? "https://api.river.ai/v1",
  model: process.env.DEEPSEEK_MODEL ?? "deepseek-v4.1-flash",
});

export async function deepseekChat(
  messages: DeepSeekMessage[],
  options: {
    temperature?: number;
    maxTokens?: number;
    model?: string;
  } = {}
): Promise<{ content: string; model: string }> {
  const { apiKey, baseUrl } = getConfig();
  const model = options.model ?? getConfig().model;

  if (!apiKey) {
    throw new Error("deepseek-api-key-missing");
  }

  const body = {
    model,
    messages,
    temperature: options.temperature ?? 0.7,
    max_tokens: options.maxTokens ?? 1024,
    stream: false,
  };

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`deepseek-api-${res.status}${errText ? `: ${errText}` : ""}`);
  }

  const json = (await res.json()) as DeepSeekChatResponse;

  if (json.error) {
    throw new Error(
      `deepseek-error:${json.error.code ?? "unknown"}${json.error.message ? `: ${json.error.message}` : ""}`
    );
  }

  const content = json.choices?.[0]?.message?.content ?? "";
  return { content, model };
}
