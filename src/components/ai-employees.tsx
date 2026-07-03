import Link from "next/link";
import {
  Headset,
  Handshake,
  WhatsappLogo,
  EnvelopeSimple,
  PhoneCall,
  CalendarCheck,
  UserCircle,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [
  Headset,
  Handshake,
  WhatsappLogo,
  EnvelopeSimple,
  PhoneCall,
  CalendarCheck,
  UserCircle,
];

export async function AiEmployees() {
  const { t } = await getDict();
  const s = t.aiEmployees;

  return (
    <section id="ai-employees" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => {
            const Ic = icons[i] ?? Headset;
            return (
              <Reveal
                key={item.name}
                delay={(i % 4) * 60}
                className="group relative overflow-hidden rounded-card bg-surface p-6 ring-line transition-all duration-300 hover:-translate-y-1 hover:glow grad-border"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-input accent-gradient text-white">
                    <Ic weight="fill" className="size-5" />
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                    </span>
                    7/24
                  </span>
                </div>
                <h3 className="font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Reveal>
            );
          })}

          <Reveal delay={60}>
            <Link
              href="/#iletisim"
              className="group flex h-full flex-col justify-between gap-6 rounded-card accent-gradient p-6 text-white"
            >
              <span className="text-lg font-semibold leading-snug">
                {t.industriesSection.ctaTitle}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium">
                {t.nav.cta}
                <ArrowUpRight weight="bold" className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
