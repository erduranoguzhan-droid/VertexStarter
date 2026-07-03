import {
  Lightning,
  Cpu,
  PlugsConnected,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

const icons: Icon[] = [Lightning, Cpu, PlugsConnected, CheckCircle];

export async function AutomationFlow() {
  const { t } = await getDict();
  const s = t.flow;

  return (
    <section id="nasil-calisir" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {s.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">{s.heading}</h2>
          <p className="mt-4 text-muted">{s.sub}</p>
        </Reveal>

        <div className="relative mt-16">
          {/* animated connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[12%] top-7 hidden h-px overflow-hidden lg:block"
          >
            <div className="flow-line h-full w-full" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.nodes.map((node, i) => {
              const Ic = icons[i] ?? Lightning;
              return (
                <Reveal key={node.t} delay={i * 90} className="relative text-center">
                  <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full bg-surface text-accent ring-line">
                    <Ic weight="fill" className="size-6" />
                    <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full accent-gradient font-mono text-[10px] font-medium text-accent-ink">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 font-medium tracking-tight">{node.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{node.d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
