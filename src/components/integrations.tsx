import { DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const tools: { slug: string; name: string }[] = [
  { slug: "n8n", name: "n8n" },
  { slug: "make", name: "Make" },
  { slug: "zapier", name: "Zapier" },
  { slug: "hubspot", name: "HubSpot" },
  { slug: "salesforce", name: "Salesforce" },
  { slug: "slack", name: "Slack" },
  { slug: "whatsapp", name: "WhatsApp" },
  { slug: "meta", name: "Meta" },
  { slug: "google", name: "Google" },
  { slug: "supabase", name: "Supabase" },
  { slug: "openai", name: "OpenAI" },
  { slug: "anthropic", name: "Claude" },
  { slug: "shopify", name: "Shopify" },
  { slug: "woocommerce", name: "WooCommerce" },
  { slug: "stripe", name: "Stripe" },
  { slug: "notion", name: "Notion" },
  { slug: "clickup", name: "ClickUp" },
  { slug: "airtable", name: "Airtable" },
  { slug: "discord", name: "Discord" },
  { slug: "telegram", name: "Telegram" },
  { slug: "trello", name: "Trello" },
  { slug: "zoom", name: "Zoom" },
  { slug: "gmail", name: "Gmail" },
];

export async function Integrations() {
  const { t } = await getDict();
  const s = t.integrations;

  return (
    <section id="entegrasyonlar" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {tools.map((tool, i) => (
            <Reveal
              key={tool.slug}
              delay={(i % 8) * 30}
              className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-card bg-surface ring-line transition-colors hover:bg-surface-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/a1a1aa`}
                alt={tool.name}
                loading="lazy"
                className="size-7 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              />
              <span className="text-[11px] text-faint transition-colors group-hover:text-muted">
                {tool.name}
              </span>
            </Reveal>
          ))}

          <Reveal
            delay={30}
            className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-card ring-line grad-border"
          >
            <DotsThreeOutline weight="fill" className="size-6 text-accent" />
            <span className="px-2 text-center text-[11px] leading-tight text-muted">
              {s.more}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
