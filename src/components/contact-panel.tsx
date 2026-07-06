"use client";

import { useState } from "react";
import { CalendarCheck, ChatText, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { CalBooking } from "@/components/cal-booking";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Labels = {
  tabBook: string;
  tabMessage: string;
  formName: string;
  formCompany: string;
  formEmail: string;
  formMessage: string;
  formSend: string;
  formWhatsapp: string;
  formNote: string;
};

const waHref = `https://wa.me/${site.phoneHref.replace(/\D/g, "")}`;

export function ContactPanel({ labels }: { labels: Labels }) {
  const [tab, setTab] = useState<"book" | "message">("book");
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const body = () =>
    `${labels.formName}: ${form.name}\n${labels.formCompany}: ${form.company}\n${labels.formEmail}: ${form.email}\n\n${form.message}`;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `VertexStarter — ${form.name || form.email || "İletişim"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body())}`;
  };

  const sendWhatsapp = () => {
    window.open(`${waHref}?text=${encodeURIComponent(body())}`, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-input bg-surface px-4 py-3 text-sm text-fg ring-line outline-none transition-shadow placeholder:text-faint focus:ring-2 focus:ring-accent/40";

  return (
    <div className="overflow-hidden rounded-card bg-surface ring-line">
      <div className="flex gap-1 border-b border-line p-1.5">
        <button
          onClick={() => setTab("book")}
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-2 rounded-input px-4 py-2.5 text-sm font-medium transition-colors",
            tab === "book" ? "bg-accent text-accent-ink" : "text-muted hover:text-fg"
          )}
        >
          <CalendarCheck weight="fill" className="size-4" />
          {labels.tabBook}
        </button>
        <button
          onClick={() => setTab("message")}
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-2 rounded-input px-4 py-2.5 text-sm font-medium transition-colors",
            tab === "message" ? "bg-accent text-accent-ink" : "text-muted hover:text-fg"
          )}
        >
          <ChatText weight="fill" className="size-4" />
          {labels.tabMessage}
        </button>
      </div>

      {tab === "book" ? (
        <div className="p-1.5">
          <CalBooking />
        </div>
      ) : (
        <form onSubmit={sendEmail} className="grid gap-3 p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder={labels.formName}
              className={inputCls}
              aria-label={labels.formName}
            />
            <input
              value={form.company}
              onChange={set("company")}
              placeholder={labels.formCompany}
              className={inputCls}
              aria-label={labels.formCompany}
            />
          </div>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder={labels.formEmail}
            className={inputCls}
            aria-label={labels.formEmail}
          />
          <textarea
            required
            value={form.message}
            onChange={set("message")}
            placeholder={labels.formMessage}
            rows={5}
            className={cn(inputCls, "resize-y")}
            aria-label={labels.formMessage}
          />
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
            >
              <EnvelopeSimple weight="fill" className="size-4" />
              {labels.formSend}
            </button>
            <button
              type="button"
              onClick={sendWhatsapp}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-surface-2 px-6 py-3 text-sm font-medium text-fg ring-line transition-colors hover:bg-surface"
            >
              <WhatsappLogo weight="fill" className="size-4 text-accent" />
              {labels.formWhatsapp}
            </button>
          </div>
          <p className="text-xs text-faint">{labels.formNote}</p>
        </form>
      )}
    </div>
  );
}
