"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/messages";

const options: { code: Locale; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
];

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function set(code: Locale) {
    if (code === locale) return;
    document.cookie = `locale=${code}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  }

  return (
    <div
      className="inline-flex items-center rounded-full p-0.5 ring-line"
      role="group"
      aria-label="Dil / Language"
      data-pending={pending ? "" : undefined}
    >
      {options.map((o) => (
        <button
          key={o.code}
          onClick={() => set(o.code)}
          aria-pressed={locale === o.code}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            locale === o.code
              ? "bg-accent text-accent-ink"
              : "text-muted hover:text-fg"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
