"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

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
      <button
        onClick={() => scrollTo("iletisim")}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
      >
        {primary}
        <ArrowUpRight
          weight="bold"
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <button
        onClick={() => scrollTo("vakalar")}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-medium text-fg ring-line transition-colors hover:bg-surface-2"
      >
        {secondary}
      </button>
    </div>
  );
}
