import {
  Lightning,
  ShieldCheck,
  TrendUp,
  Medal,
  StackSimple,
  Lifebuoy,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [Lightning, ShieldCheck, TrendUp, Medal, StackSimple, Lifebuoy];

export async function WhyChooseUs() {
  const { t } = await getDict();
  const s = t.whyChooseUs;

  return (
    <section id="neden-biz" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => {
            const Ic = icons[i] ?? Lightning;
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 70}
                className="group rounded-card bg-surface p-7 ring-line transition-all duration-300 hover:-translate-y-1 hover:glow"
              >
                <span className="grid size-11 place-items-center rounded-input accent-gradient text-accent-ink transition-transform duration-300 group-hover:scale-105">
                  <Ic weight="fill" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
