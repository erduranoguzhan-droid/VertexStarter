"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WhatsappLogo, CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

const waHref = `https://wa.me/${site.phoneHref.replace(/\D/g, "")}`;

export function FloatingCta({ cta, whatsapp }: { cta: string; whatsapp: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), 400);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-7 sm:right-7 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsapp}
        className="group grid size-13 place-items-center rounded-full bg-surface text-accent shadow-lg ring-line transition-transform hover:scale-105"
      >
        <WhatsappLogo weight="fill" className="size-6" />
      </a>

      <Link
        href="/#iletisim"
        className="group inline-flex items-center gap-2 rounded-full bg-accent py-3 pl-4 pr-5 text-sm font-medium text-accent-ink shadow-lg transition-colors hover:bg-accent-strong"
      >
        <CalendarCheck weight="fill" className="size-5" />
        <span className="hidden sm:inline">{cta}</span>
      </Link>
    </div>
  );
}
