"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroActions({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <LiquidButton
        size="xl"
        onClick={() => scrollTo("iletisim")}
        className="rounded-full border border-accent/40 text-fg"
      >
        {primary}
        <ArrowUpRight weight="bold" className="size-4" />
      </LiquidButton>

      <button
        onClick={() => scrollTo("hizmetler")}
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-fg ring-line transition-colors hover:bg-surface"
      >
        {secondary}
      </button>
    </div>
  );
}
