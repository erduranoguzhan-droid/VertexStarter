import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

export async function Testimonials() {
  const { t } = await getDict();
  const s = t.testimonials;

  return (
    <section id="referanslar" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal
              key={item.quote}
              delay={(i % 3) * 70}
              className="flex flex-col rounded-card bg-surface p-7 ring-line"
            >
              <Quotes weight="fill" className="size-7 text-accent/30" />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-fg">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid size-10 place-items-center rounded-full accent-gradient font-medium text-accent-ink">
                  {item.author.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-fg">{item.author}</span>
                  <span className="block text-xs text-muted">{item.role}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
