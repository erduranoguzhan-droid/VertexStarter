import {
  Storefront,
  Robot,
  Code,
  Megaphone,
  MagnifyingGlass,
  ChartLineUp,
  FilmSlate,
  UsersThree,
  ChatCircleDots,
  Strategy,
  Target,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

// Sıra, sözlükteki 12 hizmetle birebir aynı.
const icons: Icon[] = [
  Storefront,
  Robot,
  Code,
  Megaphone,
  MagnifyingGlass,
  ChartLineUp,
  FilmSlate,
  UsersThree,
  ChatCircleDots,
  Strategy,
  Target,
  ChartBar,
];

export async function Services() {
  const { t } = await getDict();
  const s = t.services;
  return (
    <section id="hizmetler" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl">
            {s.headA}
            <span className="text-accent">{s.headAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card ring-line sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => {
            const Ic = icons[i] ?? Storefront;
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 70}
                className="group flex flex-col gap-4 bg-surface p-7 transition-colors hover:bg-surface-2"
              >
                <span className="grid size-11 place-items-center rounded-input bg-bg text-accent ring-line">
                  <Ic weight="duotone" className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
