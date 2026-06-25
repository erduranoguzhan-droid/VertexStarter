import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-card bg-accent px-6 py-16 text-center text-accent-ink sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Verinizi büyümeye çevirmeye hazır mısınız?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base/relaxed opacity-80">
            Yapay zeka ve otomasyon sistemlerini şirketinize kuralım. İlk görüşme
            ücretsiz.
          </p>
          <Link
            href="#iletisim"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-bg px-7 py-3.5 text-sm font-medium text-fg transition-transform hover:scale-[1.02]"
          >
            Görüşme planla
            <ArrowUpRight
              weight="bold"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
