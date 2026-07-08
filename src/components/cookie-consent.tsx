"use client";

import { useEffect, useState } from "react";
import { Link } from "@/components/link";

const KEY = "vx-cookie-consent";

export function CookieConsent({
  text,
  accept,
  reject,
  more,
}: {
  text: string;
  accept: string;
  reject: string;
  more: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const choose = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-5">
      <div className="glass mx-auto flex max-w-3xl flex-col gap-4 rounded-card p-5 ring-line sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted">
          {text}{" "}
          <Link href="/gizlilik" className="text-accent hover:underline">
            {more}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => choose("rejected")}
            className="rounded-full px-4 py-2 text-sm font-medium text-fg ring-line transition-colors hover:bg-surface-2"
          >
            {reject}
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
