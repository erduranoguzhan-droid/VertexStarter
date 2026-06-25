import Link from "next/link";
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
import { industries } from "@/lib/industries";

const icons: Record<string, Icon> = {
  "e-ticaret": ShoppingCart,
  saglik: Heartbeat,
  gayrimenkul: Buildings,
  restoran: ForkKnife,
  egitim: GraduationCap,
  uretim: Factory,
  lojistik: Truck,
};

export function IndustriesSection() {
  return (
    <section id="sektorler" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Her sektör için özel sistemler.
          </h2>
          <p className="mt-4 text-muted">
            Sektörünüzün diline ve operasyonuna göre kurulan veri ve otomasyon
            çözümleri.
          </p>
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
                    İncele
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
              <span className="font-semibold leading-snug">
                Sektörünüz listede yok mu?
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium">
                Size özel kuralım
                <ArrowUpRight weight="bold" className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
