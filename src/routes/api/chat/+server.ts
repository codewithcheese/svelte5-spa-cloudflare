import { createOpenAI } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText, type Message } from "ai";
import type { RequestHandler } from "./$types";

import { env } from "$env/dynamic/private";

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY ?? "",
});

export const POST = (async ({ request }) => {
  const { messages } = (await request.json()) as any;

  const result = await streamText({
    model: openai("gpt-4-turbo-preview"),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}) satisfies RequestHandler;
