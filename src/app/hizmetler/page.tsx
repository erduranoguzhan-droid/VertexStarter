import type { Metadata } from "next";
import { Link } from "@/components/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getServices } from "@/lib/services";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: t.footer.services,
    description: t.servicePage.indexSub,
  };
}

export default async function ServicesIndex() {
  const { locale, t } = await getDict();
  const sp = t.servicePage;
  const services = getServices(locale);

  return (
    <main className="mx-auto max-w-7xl px-5 pt-32 pb-24 sm:px-8">
      <Reveal className="max-w-3xl">
        <span className="font-mono text-xs tracking-[0.18em] text-accent">{sp.crumb}</span>
        <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          {sp.indexHeading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{sp.indexSub}</p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 60}>
            <Link
              href={`/hizmetler/${s.slug}`}
              className="group flex h-full flex-col justify-between gap-6 rounded-card bg-surface p-7 ring-line transition-all duration-300 hover:-translate-y-1 hover:glow"
            >
              <div>
                <h2 className="text-lg font-medium tracking-tight">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.tagline}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent">
                {sp.explore}
                <ArrowUpRight
                  weight="bold"
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
