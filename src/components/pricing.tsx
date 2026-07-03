import Link from "next/link";
import { Check, Minus, ArrowUpRight, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function Pricing() {
  const { t } = await getDict();
  const s = t.pricing;

  return (
    <section id="paketler" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        {/* tier cards */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {s.tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <Reveal
                key={tier.name}
                delay={i * 80}
                className={cn(
                  "relative flex flex-col rounded-card p-8 ring-line",
                  featured
                    ? "bg-fg text-bg glow"
                    : "bg-surface"
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

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "pb-1.5 text-xs",
                      featured ? "text-bg/60" : "text-faint"
                    )}
                  >
                    {s.perProject}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    featured ? "text-bg/70" : "text-muted"
                  )}
                >
                  {tier.tagline}
                </p>

                <ul className="mt-7 grid gap-3.5">
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
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    featured
                      ? "bg-accent text-accent-ink hover:bg-accent-strong"
                      : "bg-fg text-bg hover:bg-fg/90"
                  )}
                >
                  {tier.cta}
                  <ArrowUpRight
                    weight="bold"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-faint">{s.note}</p>

        {/* comparison matrix */}
        <Reveal className="mt-20">
          <h3 className="text-center text-2xl tracking-tight sm:text-3xl">
            {s.compareHeading}
          </h3>
          <div className="mt-8 overflow-x-auto rounded-card ring-line">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface-2">
                  {s.matrixHeaders.map((h, i) => (
                    <th
                      key={h}
                      className={cn(
                        "px-5 py-4 text-left font-medium",
                        i === 0 ? "text-muted" : "text-fg",
                        i === 2 && "text-accent"
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.matrix.map((row) => (
                  <tr key={row.label} className="border-t border-line bg-surface">
                    <td className="px-5 py-4 text-muted">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={cn("px-5 py-4", j === 1 && "bg-surface-2/40")}
                      >
                        {v === "yes" ? (
                          <Check weight="bold" className="size-4 text-accent" />
                        ) : v === "no" ? (
                          <Minus className="size-4 text-faint" />
                        ) : (
                          <span className="font-medium">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
