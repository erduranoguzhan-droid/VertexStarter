import { site } from "@/lib/site";
import { getServices } from "@/lib/services";
import { getIndustries } from "@/lib/industries";
import { getPosts } from "@/lib/blog";

/**
 * /llms.txt — a concise, machine-readable map of the site for large language
 * models and generative search engines (the emerging llms.txt convention).
 * Generated from the same content sources as the site so it never drifts.
 */
export const dynamic = "force-static";

export function GET() {
  const services = getServices("tr");
  const industries = getIndustries("tr");
  const posts = getPosts("tr");

  const lines: string[] = [];
  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    "VertexStarter, şirketlerin verisini yapay zeka, otomasyon ve veri sistemleriyle " +
      "büyüme sistemlerine dönüştüren, Tekirdağ Çorlu merkezli bir teknoloji stüdyosudur. " +
      "İngilizce sürüm için her sayfanın /en önekli hâline bakın."
  );
  lines.push("");

  lines.push("## Ana Sayfalar");
  lines.push(`- [${site.name}](${site.url}): Ana sayfa`);
  lines.push(`- [Hizmetler](${site.url}/hizmetler): Tüm AI ve otomasyon hizmetleri`);
  lines.push(`- [Blog](${site.url}/blog): Veri, yapay zeka ve otomasyon üzerine yazılar`);
  lines.push(`- [Kurulum Sistemleri](${site.url}/sistemler)`);
  lines.push(`- [Danışmanlık](${site.url}/danismanlik)`);
  lines.push(`- [Kurum İçi Eğitim](${site.url}/kurum-ici)`);
  lines.push("");

  lines.push("## Hizmetler");
  for (const s of services) {
    lines.push(`- [${s.name}](${site.url}/hizmetler/${s.slug}): ${s.tagline}`);
  }
  lines.push("");

  lines.push("## Sektörler");
  for (const i of industries) {
    lines.push(`- [${i.name}](${site.url}/sektorler/${i.slug}): ${i.tagline}`);
  }
  lines.push("");

  lines.push("## Blog Yazıları");
  for (const p of posts) {
    lines.push(`- [${p.title}](${site.url}/blog/${p.slug}): ${p.excerpt}`);
  }
  lines.push("");

  lines.push("## İletişim");
  lines.push(`- E-posta: ${site.email}`);
  lines.push(`- Telefon: ${site.phone}`);
  lines.push(`- Adres: ${site.address}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
