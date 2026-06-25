import { Reveal } from "@/components/reveal";

type Case = {
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  seed: string;
  featured?: boolean;
};

const cases: Case[] = [
  {
    tag: "E-Ticaret",
    title: "Shopify mağazasında AI destekli dönüşüm optimizasyonu",
    metric: "+182%",
    metricLabel: "Dönüşüm oranı",
    seed: "nexora-shopify-store",
    featured: true,
  },
  {
    tag: "B2B SaaS",
    title: "Çok kanallı AI satış outreach",
    metric: "3.4×",
    metricLabel: "Nitelikli görüşme",
    seed: "nexora-b2b-outreach",
  },
  {
    tag: "Performans",
    title: "Meta ve Google Ads yeniden yapısı",
    metric: "-46%",
    metricLabel: "Edinme maliyeti",
    seed: "nexora-ads-performance",
  },
  {
    tag: "Otomasyon",
    title: "n8n ile operasyon otomasyonu",
    metric: "120s+",
    metricLabel: "Haftalık kazanç",
    seed: "nexora-automation-ops",
  },
  {
    tag: "Yapay Zeka",
    title: "7/24 AI sesli asistan",
    metric: "%92",
    metricLabel: "Otomatik çözüm",
    seed: "nexora-voice-agent",
  },
  {
    tag: "İçerik",
    title: "AI içerik üretim hattı",
    metric: "8×",
    metricLabel: "Üretim hızı",
    seed: "nexora-content-pipeline",
  },
];

function CaseCard({ c }: { c: Case }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-card bg-surface ring-line">
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/generated/${c.seed}.jpg`}
          alt={c.title}
          loading="lazy"
          className={`w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ${
            c.featured ? "h-64 sm:h-80" : "h-44"
          }`}
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

export function CaseStudies() {
  return (
    <section id="vakalar" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ölçülebilir sonuçlar.
          </h2>
          <p className="mt-4 text-muted">
            Her projeyi tek bir ölçütle değerlendiririz: gerçek iş etkisi.
            Aşağıdaki rakamlar örnek senaryolardır.
          </p>
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
