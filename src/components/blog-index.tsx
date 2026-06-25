"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MagnifyingGlass, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogIndex({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("Tümü");

  const cats = useMemo(
    () => ["Tümü", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = cat === "Tümü" || p.category === cat;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [posts, query, cat]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  cat === c
                    ? "bg-accent text-accent-ink"
                    : "text-muted ring-line hover:text-fg"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="relative w-full sm:w-64">
            <MagnifyingGlass className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Yazılarda ara"
              aria-label="Yazılarda ara"
              className="w-full rounded-full bg-surface py-2.5 pl-9 pr-4 text-sm text-fg ring-line outline-none transition-shadow focus:ring-2 focus:ring-accent"
            />
          </label>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-card bg-surface ring-line transition-colors hover:bg-surface-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/generated/${p.seed}.jpg`}
                alt={p.title}
                loading="lazy"
                className="h-48 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-faint">
                  <span className="font-mono tracking-wide text-accent">
                    {p.category}
                  </span>
                  <span>{formatDate(p.date)}</span>
                  <span>{p.readingMinutes} dk</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                  Oku
                  <ArrowUpRight
                    weight="bold"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted">
            Aramanıza uygun yazı bulunamadı.
          </p>
        )}
      </div>
    </section>
  );
}
