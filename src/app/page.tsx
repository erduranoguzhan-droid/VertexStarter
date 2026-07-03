import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { AiEmployees } from "@/components/ai-employees";
import { Integrations } from "@/components/integrations";
import { ProblemSolution } from "@/components/problem-solution";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Process } from "@/components/process";
import { CaseStudies } from "@/components/case-studies";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { getDict } from "@/lib/i18n";

async function Stats() {
  const { t } = await getDict();
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {t.stats.map((s, i) => (
          <Reveal
            key={s.v}
            delay={i * 70}
            className="flex flex-col gap-1 px-2 py-10 text-center sm:px-8"
          >
            <span className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
              {s.k}
            </span>
            <span className="text-sm text-muted">{s.v}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Logos />
      <AiEmployees />
      <Integrations />
      <ProblemSolution />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Pricing />
      <About />
      <Faq />
      <Contact />
      <FinalCta />
    </main>
  );
}
