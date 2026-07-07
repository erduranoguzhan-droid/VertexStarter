"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ChatText,
  PaperPlaneTilt,
  WhatsappLogo,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
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
  formSending: string;
  formSuccessTitle: string;
  formSuccessText: string;
  formAnother: string;
};

const waHref = `https://wa.me/${site.phoneHref.replace(/\D/g, "")}`;

export function ContactPanel({ labels }: { labels: Labels }) {
  // Cal.com etkinligi yayina alinana kadar varsayilan sekme "message".
  const [tab, setTab] = useState<"book" | "message">("message");
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const body = () =>
    `${labels.formName}: ${form.name}\n${labels.formCompany}: ${form.company}\n${labels.formEmail}: ${form.email}\n\n${form.message}`;

  const mailtoFallback = () => {
    const subject = `VertexStarter — ${form.name || form.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body())}`;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!json?.delivered) mailtoFallback();
    } catch {
      mailtoFallback();
    }
    setStatus("success");
  };

  const sendWhatsapp = () => {
    window.open(`${waHref}?text=${encodeURIComponent(body())}`, "_blank", "noopener,noreferrer");
  };

  const reset = () => {
    setForm({ name: "", company: "", email: "", message: "", website: "" });
    setStatus("idle");
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
      ) : status === "success" ? (
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center sm:p-14">
          <span className="grid size-14 place-items-center rounded-full bg-accent/15 text-accent">
            <CheckCircle weight="fill" className="size-8" />
          </span>
          <h3 className="text-2xl tracking-tight">{labels.formSuccessTitle}</h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{labels.formSuccessText}</p>
          <button
            onClick={reset}
            className="mt-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
          >
            {labels.formAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-3 p-5 sm:p-6">
          {/* honeypot — hidden from users, catches bots */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={set("website")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input required value={form.name} onChange={set("name")} placeholder={labels.formName} className={inputCls} aria-label={labels.formName} />
            <input value={form.company} onChange={set("company")} placeholder={labels.formCompany} className={inputCls} aria-label={labels.formCompany} />
          </div>
          <input required type="email" value={form.email} onChange={set("email")} placeholder={labels.formEmail} className={inputCls} aria-label={labels.formEmail} />
          <textarea required value={form.message} onChange={set("message")} placeholder={labels.formMessage} rows={5} className={cn(inputCls, "resize-y")} aria-label={labels.formMessage} />
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong disabled:opacity-60"
            >
              <PaperPlaneTilt weight="fill" className="size-4" />
              {status === "sending" ? labels.formSending : labels.formSend}
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
