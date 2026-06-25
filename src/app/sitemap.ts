import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { industrySlugs } from "@/lib/industries";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${site.url}/sektorler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = getPosts("tr").map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...postRoutes];
}
