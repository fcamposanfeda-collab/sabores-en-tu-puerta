import { buildLlms } from "@/lib/llms";

export function GET() {
  return new Response(buildLlms(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
