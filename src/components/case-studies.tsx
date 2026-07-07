import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

type Meta = { seed: string; featured?: boolean };

// Sıra, sözlükteki cases.items ile birebir aynı.
const meta: Meta[] = [
  { seed: "nexora-shopify-store", featured: true },
  { seed: "nexora-b2b-outreach" },
  { seed: "nexora-ads-performance" },
  { seed: "nexora-automation-ops" },
  { seed: "nexora-voice-agent" },
  { seed: "nexora-content-pipeline" },
];

type Card = {
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  seed: string;
  featured?: boolean;
};

function CaseCard({ c }: { c: Card }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-card bg-surface ring-line">
      <div
        className={`relative overflow-hidden ${
          c.featured ? "h-64 sm:h-80" : "h-44"
        }`}
      >
        <Image
          src={`/generated/${c.seed}.jpg`}
          alt={c.title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div>
          <span className="font-mono text-[11px] tracking-wide text-accent">
            {c.tag}
          </span>
          <h3
            className={`mt-2 font-semibold leading-snug tracking-tight ${
              c.featured ? "text-2xl" : "text-lg"
            }`}
          >
            {c.title}
          </h3>
        </div>
        <div className="flex items-end gap-3 border-t border-line pt-4">
          <span
            className={`font-semibold text-accent ${
              c.featured ? "text-5xl" : "text-3xl"
            }`}
          >
            {c.metric}
          </span>
          <span className="pb-1 text-xs text-muted">{c.metricLabel}</span>
        </div>
      </div>
    </div>
  );
}

export async function CaseStudies() {
  const { t } = await getDict();
  const cases: Card[] = t.cases.items.map((c, i) => ({ ...c, ...meta[i] }));
  return (
    <section id="vakalar" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.cases.heading}
          </h2>
          <p className="mt-4 text-muted">{t.cases.sub}</p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:auto-rows-fr lg:grid-cols-6">
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <CaseCard c={cases[0]} />
          </Reveal>
          {cases.slice(1).map((c, i) => (
            <Reveal key={c.seed} delay={(i % 3) * 60} className="lg:col-span-2">
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
