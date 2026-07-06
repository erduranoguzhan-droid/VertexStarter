import Link from "next/link";
import { ArrowRight, Star, Check } from "@phosphor-icons/react/dist/ssr";
import type { Dict } from "@/i18n/messages";

type Item = Dict["programs"]["items"][number];
type Shopify = Dict["programs"]["shopify"];

export function ProgramCard({
  item,
  trackLabel,
  cta,
}: {
  item: Item;
  trackLabel: string;
  cta: string;
}) {
  return (
    <div className="group flex flex-col rounded-card bg-surface p-7 ring-line transition-all duration-300 hover:-translate-y-1 hover:glow">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
          {trackLabel}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
          {item.duration}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-medium tracking-tight">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.desc}</p>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="text-sm font-semibold text-fg">{item.price}</span>
        <Link
          href="/#iletisim"
          className="group/cta inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:text-accent"
        >
          {cta}
          <ArrowRight
            weight="bold"
            className="size-3.5 transition-transform group-hover/cta:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}

export function ShopifyCard({ data }: { data: Shopify }) {
  return (
    <div className="relative flex flex-col rounded-card bg-fg p-8 text-bg lg:col-span-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-ink">
          <Star weight="fill" className="size-3" />
          {data.badge}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-bg/50">
          {data.duration}
        </span>
      </div>
      <h3 className="mt-5 text-2xl tracking-tight sm:text-3xl">{data.title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bg/70">{data.desc}</p>

      <div className="mt-7 border-t border-bg/15 pt-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
          {data.scopeHeading}
        </span>
        <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {data.scope.map((it) => (
            <li key={it} className="flex gap-2.5 text-sm text-bg/85">
              <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-accent-2" />
              {it}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bg/15 pt-6">
        <span className="text-2xl font-semibold">{data.price}</span>
        <Link
          href="/#iletisim"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
        >
          {data.cta}
          <ArrowRight
            weight="bold"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
