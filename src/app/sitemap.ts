import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { industrySlugs } from "@/lib/industries";
import { serviceSlugs } from "@/lib/services";
import { getPosts } from "@/lib/blog";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
type Entry = { path: string; priority: number; freq: Freq; lastMod?: Date };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: Entry[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/hizmetler", priority: 0.9, freq: "monthly" },
    { path: "/blog", priority: 0.8, freq: "weekly" },
    { path: "/sistemler", priority: 0.8, freq: "monthly" },
    { path: "/danismanlik", priority: 0.8, freq: "monthly" },
    { path: "/kurum-ici", priority: 0.8, freq: "monthly" },
    { path: "/gizlilik", priority: 0.3, freq: "yearly" },
    { path: "/kosullar", priority: 0.3, freq: "yearly" },
    ...serviceSlugs.map((slug): Entry => ({
      path: `/hizmetler/${slug}`,
      priority: 0.8,
      freq: "monthly",
    })),
    ...industrySlugs.map((slug): Entry => ({
      path: `/sektorler/${slug}`,
      priority: 0.7,
      freq: "monthly",
    })),
    ...getPosts("tr").map((p): Entry => ({
      path: `/blog/${p.slug}`,
      priority: 0.6,
      freq: "monthly",
      lastMod: new Date(p.date),
    })),
  ];

  const en = (path: string) => `${site.url}/en${path === "/" ? "" : path}`;

  return entries.map(({ path, priority, freq, lastMod }) => ({
    url: `${site.url}${path}`,
    lastModified: lastMod ?? now,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: { tr: `${site.url}${path}`, en: en(path) },
    },
  }));
}
