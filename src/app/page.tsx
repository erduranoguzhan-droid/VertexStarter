import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { ProblemSolution } from "@/components/problem-solution";
import { Services } from "@/components/services";
import { IndustriesSection } from "@/components/industries-section";
import { Process } from "@/components/process";
import { CaseStudies } from "@/components/case-studies";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";

const stats = [
  { k: "12", v: "Uçtan uca hizmet" },
  { k: "7", v: "Sektör çözümü" },
  { k: "7/24", v: "Çalışan AI sistemleri" },
];

function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {stats.map((s, i) => (
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
    <>
      <main>
        <Hero />
        <Stats />
        <Logos />
        <Services />
        <ProblemSolution />
        <IndustriesSection />
        <Process />
        <CaseStudies />
        <About />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
    </>
  );
}
