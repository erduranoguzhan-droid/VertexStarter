import { Link } from "@/components/link";
import { Check, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function Support() {
  const { t } = await getDict();
  const s = t.support;

  return (
    <section id="destek" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {s.tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <Reveal
                key={tier.name}
                delay={i * 80}
                className={cn(
                  "relative flex flex-col rounded-card p-8 ring-line",
                  featured ? "bg-fg text-bg glow" : "bg-surface"
                )}
              >
                {featured && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-ink">
                    <Star weight="fill" className="size-3" />
                    {s.popular}
                  </span>
                )}

                <h3
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.18em]",
                    featured ? "text-accent-2" : "text-accent"
                  )}
                >
                  {tier.name}
                </h3>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "pb-1.5 text-sm",
                      featured ? "text-bg/60" : "text-faint"
                    )}
                  >
                    {s.perMonth}
                  </span>
                </div>

                <ul className="mt-7 grid flex-1 gap-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check
                        weight="bold"
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          featured ? "text-accent-2" : "text-accent"
                        )}
                      />
                      <span className={featured ? "text-bg/90" : "text-fg"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#iletisim"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    featured
                      ? "bg-accent text-accent-ink hover:bg-accent-strong"
                      : "bg-fg text-bg hover:bg-fg/90"
                  )}
                >
                  {s.cta}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-faint">{s.note}</p>
      </div>
    </section>
  );
}
