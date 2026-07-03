import { HeroContent } from "@/components/hero-content";
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
        <HeroContent
          eyebrow={h.eyebrow}
          titleA={h.titleA}
          titleAccent={h.titleAccent}
          subtitle={h.subtitle}
          primary={h.primary}
          secondary={h.secondary}
        />
      </div>
    </section>
  );
}
