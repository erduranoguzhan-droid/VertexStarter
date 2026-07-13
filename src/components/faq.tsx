import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/schema";
import { getDict } from "@/lib/i18n";

export async function Faq() {
  const { locale, t } = await getDict();
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <JsonLd data={faqSchema(t.faq.items, locale)} />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[color:var(--line)] border-y border-line">
          {t.faq.items.map((f, i) => (
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
  );
}
