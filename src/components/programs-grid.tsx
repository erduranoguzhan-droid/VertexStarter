"use client";

import { useState } from "react";
import type { Dict } from "@/i18n/messages";
import { cn } from "@/lib/utils";
import { ProgramCard, ShopifyCard } from "@/components/program-cards";

export function ProgramsGrid({ data }: { data: Dict["programs"] }) {
  const [active, setActive] = useState<string>("all");

  const trackLabel = (k: string) =>
    data.tracks.find((t) => t.key === k)?.label ?? k;

  const trackCount = (k: string) => {
    const base = data.items.filter((i) => i.track === k).length;
    return k === "systems" ? base + 1 : base;
  };

  const filters = [
    { key: "all", label: data.filterAll, n: data.items.length + 1 },
    ...data.tracks.map((t) => ({ key: t.key, label: t.label, n: trackCount(t.key) })),
  ];

  const items = data.items.filter((i) => active === "all" || i.track === active);
  const shopifyVisible = active === "all" || active === "systems";

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-line transition-colors",
              active === f.key
                ? "bg-fg text-bg"
                : "bg-surface text-muted hover:text-fg"
            )}
          >
            {f.label}
            <span
              className={cn(
                "font-mono text-xs",
                active === f.key ? "text-bg/60" : "text-faint"
              )}
            >
              {f.n}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {shopifyVisible && <ShopifyCard data={data.shopify} />}

        {items.map((item) => (
          <ProgramCard
            key={item.title}
            item={item}
            trackLabel={trackLabel(item.track)}
            cta={data.cta}
          />
        ))}
      </div>
    </>
  );
}
