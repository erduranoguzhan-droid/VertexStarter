import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";
import { ProgramsGrid } from "@/components/programs-grid";

export async function Programs() {
  const { t } = await getDict();
  const s = t.programs;

  return (
    <section id="programlar" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <ProgramsGrid data={s} />
      </div>
    </section>
  );
}
