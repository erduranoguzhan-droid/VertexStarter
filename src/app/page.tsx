import { Hero } from "@/components/hero";
import { AiEmployees } from "@/components/ai-employees";
import { Integrations } from "@/components/integrations";
import { Solutions } from "@/components/solutions";
import { Programs } from "@/components/programs";
import { IndustriesSection } from "@/components/industries-section";
import { ProblemSolution } from "@/components/problem-solution";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Process } from "@/components/process";
import { AutomationFlow } from "@/components/automation-flow";
import { CaseStudies } from "@/components/case-studies";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
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
            <AnimatedCounter
              value={s.k}
              className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl"
            />
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
      <AiEmployees />
      <Integrations />
      <Solutions />
      <Programs />
      <IndustriesSection />
      <ProblemSolution />
      <WhyChooseUs />
      <Process />
      <AutomationFlow />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <About />
      <Faq />
      <Contact />
      <FinalCta />
    </main>
  );
}
