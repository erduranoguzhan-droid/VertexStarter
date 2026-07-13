import { site } from "@/lib/site";
import { getPosts } from "@/lib/blog";

/**
 * /feed.xml — RSS 2.0 feed for the blog. Improves content discovery for
 * aggregators and generative engines that ingest feeds.
 */
export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const posts = getPosts("tr");
  const self = `${site.url}/feed.xml`;
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return [
        "    <item>",
        `      <title>${esc(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
        `      <category>${esc(p.category)}</category>`,
        `      <description>${esc(p.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} Blog</title>
    <link>${site.url}/blog</link>
    <description>${esc(site.description)}</description>
    <language>tr</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
