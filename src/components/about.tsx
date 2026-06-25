import {
  Brain,
  Target,
  Gauge,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";

const pillars: { title: string; desc: string; icon: Icon }[] = [
  {
    title: "Davranışsal psikoloji",
    desc: "İnsan kararını anlayan, daha ikna edici deneyimler kurarız.",
    icon: Brain,
  },
  {
    title: "Ölçülebilir sonuç",
    desc: "Her sistemi net KPI'larla kurar, tahminle değil veriyle ilerleriz.",
    icon: Target,
  },
  {
    title: "Gömülü yapay zeka",
    desc: "AI'ı süs değil, süreçlerinizde çalışan bir katman yaparız.",
    icon: Gauge,
  },
  {
    title: "Uçtan uca süreç",
    desc: "Stratejiden kuruluma ve eğitime tüm yolculuğu üstleniriz.",
    icon: ArrowsClockwise,
  },
];

export function About() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Teknolojiyi büyümeye çeviren ekip.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              VertexStarter, yapay zeka, otomasyon ve veri sistemlerini
              birleştirerek şirketlerin verisini kullanılabilir büyüme
              sistemlerine dönüştürür. Trend peşinde koşmak yerine işinizde
              gerçek etki yaratan sistemler kurarız.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Amacımız net: süreçlerinizi otomatikleştirmek, maliyeti düşürmek ve
              geliri sürdürülebilir biçimde artırmak.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-card ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/generated/vertexstarter-studio-team.jpg"
                alt="VertexStarter ekibinden bir çalışma anı"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card ring-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Ic = p.icon;
            return (
              <Reveal key={p.title} delay={i * 60} className="bg-surface p-7">
                <Ic weight="duotone" className="size-6 text-accent" />
                <h3 className="mt-4 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
