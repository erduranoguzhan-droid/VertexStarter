import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Search + AI/answer-engine crawler policy. All bots may index the whole
 * site; the AI crawlers are listed explicitly so generative engines
 * (ChatGPT, Claude, Perplexity, Gemini, Apple) have a clear, intentional
 * allow signal for GEO.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
