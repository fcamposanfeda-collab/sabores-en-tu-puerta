import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  const origin = site.url.replace(/\/$/, "");
  return {
    rules: [
      // /contacto/gracias/ no se bloquea aquí: lleva noindex y Google necesita rastrearla para verlo.
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
