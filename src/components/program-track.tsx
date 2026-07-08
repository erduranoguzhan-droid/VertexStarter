import { Link } from "@/components/link";
import { ArrowUpRight, ArrowLeft, Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ProgramCard, ShopifyCard } from "@/components/program-cards";
import { getDict } from "@/lib/i18n";

type TrackKey = "systems" | "advisory" | "inhouse";

export async function ProgramTrack({ track }: { track: TrackKey }) {
  const { t } = await getDict();
  const s = t.programs;
  const page = s.pages[track];
  const items = s.items.filter((i) => i.track === track);
  const trackLabel =
    s.tracks.find((x) => x.key === track)?.label ?? page.title;

  return (
    <main className="mx-auto max-w-7xl px-5 pt-32 pb-24 sm:px-8">
      <Reveal className="max-w-3xl">
        <Link
          href="/#programlar"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-accent"
        >
          <ArrowLeft weight="bold" className="size-3.5" />
          {s.backHome}
        </Link>
        <span className="mt-6 block font-mono text-xs tracking-[0.18em] text-accent">
          {s.crumb}
        </span>
        <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          {page.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{page.sub}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{page.intro}</p>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {track === "systems" && <ShopifyCard data={s.shopify} />}
        {items.map((item) => (
          <ProgramCard
            key={item.title}
            item={item}
            trackLabel={trackLabel}
            cta={s.cta}
          />
        ))}
      </div>

      {/* how we deliver */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-3xl tracking-tight sm:text-4xl">{s.stepsHeading}</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.steps.map((step, i) => (
            <Reveal
              key={step.t}
              delay={(i % 4) * 70}
              className="rounded-card bg-surface p-6 ring-line"
            >
              <span className="font-mono text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-medium tracking-tight">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-3xl tracking-tight sm:text-4xl">{s.faqHeading}</h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[color:var(--line)] border-y border-line">
          {page.faq.map((f, i) => (
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
      </section>

      <Reveal className="mt-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-fg p-8 text-bg sm:flex-row sm:items-center sm:p-10">
          <h2 className="max-w-xl text-2xl tracking-tight sm:text-3xl">
            {s.pageCtaTitle}
          </h2>
          <Link
            href="/#iletisim"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
          >
            {s.pageCtaButton}
            <ArrowUpRight
              weight="bold"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
