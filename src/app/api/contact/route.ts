import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Body = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot — must stay empty
};

export async function POST(req: Request) {
  let data: Body;
  try {
    data = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const company = (data.company ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  // Honeypot: real users never fill this. Pretend success, drop silently.
  if (data.website) return NextResponse.json({ ok: true, delivered: true });

  if (!email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || "VertexStarter <onboarding@resend.dev>";
  const subject = `VertexStarter — ${name || email}`;
  const text = `Ad Soyad: ${name}\nSirket: ${company}\nE-posta: ${email}\n\n${message}`;

  // 1) Resend (if configured)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to, subject, text, reply_to: email }),
      });
      if (res.ok) return NextResponse.json({ ok: true, delivered: true });
    } catch {
      /* fall through */
    }
  }

  // 2) Generic webhook (Zapier / Make / n8n / CRM) if configured
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message, source: "website" }),
      });
      if (res.ok) return NextResponse.json({ ok: true, delivered: true });
    } catch {
      /* fall through */
    }
  }

  // 3) No provider configured — ask the client to use its mailto/WhatsApp fallback
  return NextResponse.json({ ok: false, fallback: true }, { status: 200 });
}
