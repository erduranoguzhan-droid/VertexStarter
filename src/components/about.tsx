import { Brain, Target, Gauge, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [Brain, Target, Gauge, ArrowsClockwise];

export async function About() {
  const { t } = await getDict();
  const a = t.about;
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {a.heading}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">{a.p1}</p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{a.p2}</p>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-card ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/generated/vertexstarter-studio-team.jpg"
                alt={a.imgAlt}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card ring-line sm:grid-cols-2 lg:grid-cols-4">
          {a.pillars.map((p, i) => {
            const Ic = icons[i] ?? Brain;
            return (
              <Reveal key={p.title} delay={i * 60} className="bg-surface p-7">
                <Ic weight="duotone" className="size-6 text-accent" />
                <h3 className="mt-4 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
