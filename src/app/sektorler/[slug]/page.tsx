import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  XCircle,
  CheckCircle,
  Lightning,
  ArrowUpRight,
  ArrowRight,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { industrySlugs, getIndustries, getIndustry } from "@/lib/industries";
import { getDict, getLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const ind = getIndustry(slug, locale);
  if (!ind) return {};
  const title =
    locale === "en"
      ? `AI and Automation Solutions for ${ind.name}`
      : `${ind.name} için Yapay Zeka ve Otomasyon Çözümleri`;
  return {
    title,
    description: ind.intro,
    alternates: { canonical: `/sektorler/${ind.slug}` },
    openGraph: { title: `${title} | ${site.name}`, description: ind.intro },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale, t } = await getDict();
  const ind = getIndustry(slug, locale);
  if (!ind) notFound();
  const ip = t.industryPage;
  const others = getIndustries(locale).filter((i) => i.slug !== ind.slug);

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10">
          <Image
            src={`/generated/${ind.seed}.jpg`}
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
            <Link href="/#sektorler" className="font-mono text-xs tracking-[0.18em] text-accent">
              {ip.crumb} / {ind.name.toUpperCase()}
            </Link>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              {ind.name} {ip.headingSuffix}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {ind.tagline}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{ind.intro}</p>
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

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-px overflow-hidden rounded-card ring-line lg:grid-cols-2">
            <div className="bg-surface p-8 sm:p-10">
              <h2 className="text-sm font-medium tracking-wide text-muted">
                {ip.problems}
              </h2>
              <ul className="mt-6 grid gap-4">
                {ind.problems.map((p) => (
                  <li key={p} className="flex gap-3.5">
                    <XCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-faint" />
                    <span className="text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-2 p-8 sm:p-10">
              <h2 className="text-sm font-medium tracking-wide text-accent">
                {ip.solutions}
              </h2>
              <ul className="mt-6 grid gap-4">
                {ind.solutions.map((s) => (
                  <li key={s} className="flex gap-3.5">
                    <CheckCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-fg">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {ip.useCases}
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-card ring-line md:grid-cols-3">
            {ind.useCases.map((u, i) => (
              <Reveal key={u} delay={i * 60} className="bg-surface p-7">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 leading-relaxed text-fg">{u}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {ip.automations}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ind.automations.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-fg ring-line"
                >
                  <Lightning weight="fill" className="size-4 text-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {ip.workflow}
            </h2>
            <ol className="mt-8 grid gap-4">
              {ind.workflow.map((w, i) => (
                <li key={w.step} className="flex gap-4 rounded-card bg-surface p-5 ring-line">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-medium text-fg">{w.step}</span>
                    <span className="mt-1 block text-sm text-muted">{w.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {ip.advantages}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ind.advantages.map((a, i) => (
              <Reveal key={a} delay={i * 60} className="rounded-card bg-surface p-7 ring-line">
                <CheckCircle weight="duotone" className="size-7 text-accent" />
                <p className="mt-4 font-medium text-fg">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {ip.faqHeading}
          </h2>
          <div className="mt-10 divide-y divide-[color:var(--line)] border-y border-line">
            {ip.faq.map((f, i) => (
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

      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-card bg-accent px-6 py-16 text-center text-accent-ink sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {ind.name} {ip.ctaSuffix}
            </h2>
            <Link
              href="/#iletisim"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-bg px-7 py-3.5 text-sm font-medium text-fg transition-transform hover:scale-[1.02]"
            >
              {t.nav.cta}
              <ArrowUpRight weight="bold" className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {others.slice(0, 4).map((i) => (
              <Link
                key={i.slug}
                href={`/sektorler/${i.slug}`}
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                {i.name}
                <ArrowRight weight="bold" className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
