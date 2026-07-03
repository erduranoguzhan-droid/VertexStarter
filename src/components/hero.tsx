import { HeroActions } from "@/components/hero-actions";
import { getDict } from "@/lib/i18n";

export async function Hero() {
  const { t } = await getDict();
  const h = t.hero;
  return (
    <section className="relative w-full overflow-hidden">
      {/* soft editorial backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-40 -top-40 size-[42rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-32 top-40 size-[30rem] rounded-full bg-accent/[0.06] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(10,10,10,0.05) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-24 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 font-mono text-xs tracking-[0.18em] text-accent ring-line">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            {h.eyebrow}
          </span>

          <h1 className="mt-7 text-5xl leading-[1.02] tracking-tight sm:text-7xl">
            {h.titleA} <span className="italic text-accent">{h.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {h.subtitle}
          </p>

          <div className="mt-9">
            <HeroActions primary={h.primary} secondary={h.secondary} />
          </div>
        </div>
      </div>
    </section>
  );
}
