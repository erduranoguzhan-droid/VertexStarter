import { XCircle, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

export async function ProblemSolution() {
  const { t } = await getDict();
  const p = t.problem;
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {p.heading}
          </h2>
          <p className="mt-4 text-muted">{p.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card ring-line lg:grid-cols-2">
          <div className="bg-surface p-8 sm:p-10">
            <h3 className="text-sm font-medium tracking-wide text-muted">
              {p.nowTitle}
            </h3>
            <ul className="mt-6 grid gap-5">
              {p.problems.map((item, i) => (
                <Reveal as="li" key={item.t} delay={i * 40} className="flex gap-3.5">
                  <XCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-faint" />
                  <span>
                    <span className="block font-medium text-fg">{item.t}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.d}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="bg-surface-2 p-8 sm:p-10">
            <h3 className="text-sm font-medium tracking-wide text-accent">
              {p.withTitle}
            </h3>
            <ul className="mt-6 grid gap-5">
              {p.solutions.map((item, i) => (
                <Reveal as="li" key={item.t} delay={i * 40} className="flex gap-3.5">
                  <CheckCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-medium text-fg">{item.t}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.d}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
