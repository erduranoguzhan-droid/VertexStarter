import {
  MagnifyingGlass,
  PenNib,
  Robot,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [MagnifyingGlass, PenNib, Robot, ChartLineUp];

export async function Process() {
  const { t } = await getDict();
  const p = t.process;
  return (
    <section id="surec" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {p.heading}
          </h2>
          <p className="mt-4 text-muted">{p.sub}</p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-card ring-line md:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => {
            const Ic = icons[i] ?? MagnifyingGlass;
            return (
              <Reveal
                key={s.name}
                as="li"
                delay={i * 70}
                className="flex flex-col gap-5 bg-surface p-7"
              >
                <Ic weight="duotone" className="size-7 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
