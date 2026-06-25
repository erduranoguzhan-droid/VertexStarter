import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroActions } from "@/components/hero-actions";

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <WebGLShader />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-5 pt-24 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs tracking-[0.18em] text-accent ring-line">
            AI BÜYÜME STÜDYOSU
          </span>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl">
            AI ve Otomasyon Sistemleriyle Şirketinizi{" "}
            <span className="text-accent">Büyütüyoruz.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Şirketinizin verisini büyüme sistemlerine dönüştürüyoruz. Yapay zeka
            ve otomasyonla satış, operasyon ve müşteri kazanımını
            ölçeklendiriyoruz.
          </p>

          <div className="mt-9">
            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  );
}
