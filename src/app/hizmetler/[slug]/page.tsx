import type { Metadata } from "next";
import { Link } from "@/components/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  Lightning,
  ArrowUpRight,
  ArrowRight,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { serviceSlugs, getServices, getService } from "@/lib/services";
import { getDict, getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const s = getService(slug, locale);
  if (!s) return {};
  return {
    title: s.name,
    description: s.tagline,
    openGraph: { title: `${s.name} | ${site.name}`, description: s.tagline },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale, t } = await getDict();
  const s = getService(slug, locale);
  if (!s) notFound();
  const sp = t.servicePage;
  const others = getServices(locale).filter((x) => x.slug !== s.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.tagline,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "TR",
  };

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10">
          <Image
            src={`/generated/${s.seed}.jpg`}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-3xl">
            <Link href="/#ai-employees" className="font-mono text-xs tracking-[0.18em] text-accent">
              {sp.crumb} / {s.name.toUpperCase()}
            </Link>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              {s.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.tagline}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{s.intro}</p>
            <Link
              href="/#iletisim"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
            >
              {t.nav.cta}
              <ArrowUpRight
                weight="bold"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{sp.benefits}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 4) * 60} className="rounded-card bg-surface p-7 ring-line">
                <CheckCircle weight="duotone" className="size-7 text-accent" />
                <p className="mt-4 font-medium text-fg">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{sp.features}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-3.5 rounded-card bg-surface p-6 ring-line">
                <Lightning weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-fg">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{sp.faqHeading}</h2>
          <div className="mt-10 divide-y divide-[color:var(--line)] border-y border-line">
            {s.faq.map((f, i) => (
              <Reveal as="div" key={f.q} delay={i * 30}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="font-medium text-fg">{f.q}</span>
                    <Plus
                      weight="bold"
                      className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 pr-9 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta + other services */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-card bg-accent px-6 py-16 text-center text-accent-ink sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {s.name}
            </h2>
            <Link
              href="/#iletisim"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-bg px-7 py-3.5 text-sm font-medium text-fg transition-transform hover:scale-[1.02]"
            >
              {t.nav.cta}
              <ArrowUpRight weight="bold" className="size-4" />
            </Link>
          </div>

          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-faint">
            {sp.other}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {others.map((x) => (
              <Link
                key={x.slug}
                href={`/hizmetler/${x.slug}`}
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                {x.name}
                <ArrowRight weight="bold" className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}
