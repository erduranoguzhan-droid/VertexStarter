import { Link } from "@/components/link";
import {
  ShoppingCart,
  Heartbeat,
  Buildings,
  ForkKnife,
  GraduationCap,
  Factory,
  Truck,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getIndustries } from "@/lib/industries";
import { getDict } from "@/lib/i18n";

const icons: Record<string, Icon> = {
  "e-ticaret": ShoppingCart,
  saglik: Heartbeat,
  gayrimenkul: Buildings,
  restoran: ForkKnife,
  egitim: GraduationCap,
  uretim: Factory,
  lojistik: Truck,
};

export async function IndustriesSection() {
  const { locale, t } = await getDict();
  const s = t.industriesSection;
  const industries = getIndustries(locale);

  return (
    <section id="sektorler" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card ring-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Ic = icons[ind.slug] ?? ShoppingCart;
            return (
              <Reveal key={ind.slug} delay={(i % 4) * 50}>
                <Link
                  href={`/sektorler/${ind.slug}`}
                  className="group flex h-full flex-col gap-4 bg-surface p-7 transition-colors hover:bg-surface-2"
                >
                  <Ic weight="duotone" className="size-7 text-accent" />
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-tight">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {ind.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-accent">
                    {s.explore}
                    <ArrowUpRight
                      weight="bold"
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}

          <Reveal>
            <Link
              href="/#iletisim"
              className="group flex h-full flex-col justify-between gap-4 bg-accent p-7 text-accent-ink"
            >
              <span className="font-semibold leading-snug">{s.ctaTitle}</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium">
                {s.ctaAction}
                <ArrowUpRight weight="bold" className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
