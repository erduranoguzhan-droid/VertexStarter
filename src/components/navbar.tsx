"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Dict, Locale } from "@/i18n/messages";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
      <svg viewBox="0 0 24 24" className="size-6 text-accent" aria-hidden="true">
        <path
          d="M3 4 L12 20 L21 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        Vertex<span className="text-accent">Starter</span>
      </span>
    </Link>
  );
}

export function Navbar({ dict, locale }: { dict: Dict["nav"]; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-3 w-px"
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "glass border-b border-line" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-7 lg:flex">
            {dict.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher locale={locale} />
            <Link
              href="/#iletisim"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
            >
              {dict.cta}
              <ArrowUpRight
                weight="bold"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher locale={locale} />
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-input text-fg ring-line"
              aria-label={open ? dict.menuClose : dict.menuOpen}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <List className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass border-t border-line px-5 py-3 lg:hidden">
            <nav className="grid">
              {dict.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm text-muted last:border-0 hover:text-fg"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#iletisim"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-ink"
              >
                {dict.cta}
                <ArrowUpRight weight="bold" className="size-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
