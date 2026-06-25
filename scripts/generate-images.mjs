/**
 * Fal.ai görsel üretimi (Nano Banana).
 *
 * Çalıştırma (Fal hesabınızda bakiye olmalı):
 *   FAL_KEY="anahtar:gizli" node scripts/generate-images.mjs
 *
 * Üretilen görseller public/generated/ altına iner. Bileşenlerdeki
 * picsum URL'lerini /generated/<isim>.jpg ile değiştirebilirsiniz.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("FAL_KEY ortam değişkeni gerekli.");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "generated");

const STYLE =
  "premium cinematic tech aesthetic, near-black background #0a0b0d, emerald-teal #2dd4a7 accent lighting, soft volumetric glow, high detail, photorealistic, no text, 8k";

const jobs = [
  { name: "hero", prompt: `abstract data network with glowing teal nodes and flowing lines, ${STYLE}` },
  { name: "about-team", prompt: `modern minimalist tech studio workspace, screens with data dashboards, ${STYLE}` },
  { name: "case-ecommerce", prompt: `e-commerce analytics dashboard hologram, shopping and revenue charts, ${STYLE}` },
  { name: "case-outreach", prompt: `automated sales pipeline visualization, connected message bubbles, ${STYLE}` },
  { name: "case-ads", prompt: `performance marketing funnel, descending cost curve, ${STYLE}` },
  { name: "case-automation", prompt: `workflow automation nodes connecting business apps, ${STYLE}` },
  { name: "case-voice", prompt: `AI voice assistant soundwave interface, ${STYLE}` },
  { name: "case-content", prompt: `AI content generation pipeline, grid of media frames, ${STYLE}` },
  { name: "industry-e-ticaret", prompt: `e-commerce order and stock automation, warehouse data overlay, ${STYLE}` },
  { name: "industry-saglik", prompt: `healthcare appointment scheduling system, calm clinical data, ${STYLE}` },
  { name: "industry-gayrimenkul", prompt: `real estate CRM lead pipeline, city skyline data overlay, ${STYLE}` },
  { name: "industry-restoran", prompt: `restaurant reservation and whatsapp automation, ${STYLE}` },
  { name: "industry-egitim", prompt: `education enrollment management dashboard, ${STYLE}` },
  { name: "industry-uretim", prompt: `manufacturing production line monitoring, efficiency data, ${STYLE}` },
  { name: "industry-lojistik", prompt: `logistics shipment tracking map with live routes, ${STYLE}` },
  { name: "blog-data-systems", prompt: `clean data system architecture diagram glowing teal, ${STYLE}` },
  { name: "blog-lead-recovery", prompt: `lead recovery automation flow, reconnecting customers, ${STYLE}` },
  { name: "blog-ai-agents", prompt: `autonomous AI agent operating multiple tasks, ${STYLE}` },
];

async function generate(job) {
  const res = await fetch("https://fal.run/fal-ai/nano-banana", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: job.prompt,
      num_images: 1,
      output_format: "jpeg",
    }),
  });
  if (!res.ok) {
    throw new Error(`${job.name}: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error(`${job.name}: görsel URL'i yok`);
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  await writeFile(join(OUT, `${job.name}.jpg`), buf);
  console.log(`✓ ${job.name}.jpg`);
}

await mkdir(OUT, { recursive: true });
for (const job of jobs) {
  try {
    await generate(job);
  } catch (e) {
    console.error(`✗ ${e.message}`);
  }
}
console.log("Bitti. Görseller public/generated/ altında.");
