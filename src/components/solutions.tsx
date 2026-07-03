import { GearSix, Compass, Code, Check } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [GearSix, Compass, Code];

export async function Solutions() {
  const { t } = await getDict();
  const s = t.solutions;

  return (
    <section id="cozumler" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {s.categories.map((cat, i) => {
            const Ic = icons[i] ?? GearSix;
            return (
              <Reveal
                key={cat.name}
                delay={i * 80}
                className="flex flex-col rounded-card bg-surface p-8 ring-line transition-all duration-300 hover:-translate-y-1 hover:glow"
              >
                <span className="grid size-11 place-items-center rounded-input accent-gradient text-accent-ink">
                  <Ic weight="fill" className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-medium tracking-tight">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cat.desc}</p>
                <ul className="mt-6 grid gap-3 border-t border-line pt-6">
                  {cat.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-fg">
                      <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
