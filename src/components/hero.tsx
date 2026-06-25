import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroActions } from "@/components/hero-actions";
import { getDict } from "@/lib/i18n";

export async function Hero() {
  const { t } = await getDict();
  const h = t.hero;
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <WebGLShader />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-5 pt-24 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs tracking-[0.18em] text-accent ring-line">
            {h.eyebrow}
          </span>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl">
            {h.titleA} <span className="text-accent">{h.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
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
