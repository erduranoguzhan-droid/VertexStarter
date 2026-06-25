import {
  Phone,
  MapPin,
  EnvelopeSimple,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { CalBooking } from "@/components/cal-booking";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            İLETİŞİM
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Büyümeye hazır mısınız?
          </h2>
          <p className="mt-4 text-muted">
            Hedeflerinizi dinliyor, size en uygun büyüme sistemini birlikte
            belirliyoruz. Görüşme Google Meet üzerinden, ücretsiz ve bağlayıcı
            değildir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.6fr]">
          <Reveal className="grid content-start gap-3">
            <div className="rounded-card bg-surface p-5 ring-line">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/15 font-semibold text-accent">
                  OE
                </span>
                <span>
                  <span className="block font-medium">Oğuzhan Erduran</span>
                  <span className="block text-xs text-faint">VertexStarter</span>
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
                <VideoCamera weight="duotone" className="size-4 text-accent" />
                Google Meet · 30 dk · ücretsiz
              </div>
            </div>
            <a
              href={site.phoneHref}
              className="group flex items-center gap-3 rounded-card bg-surface p-5 ring-line transition-colors hover:bg-surface-2"
            >
              <Phone weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">Telefon</span>
                <span className="font-medium">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 rounded-card bg-surface p-5 ring-line transition-colors hover:bg-surface-2"
            >
              <EnvelopeSimple weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">E-posta</span>
                <span className="font-medium">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-card bg-surface p-5 ring-line">
              <MapPin weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">Adres</span>
                <span className="font-medium">{site.address}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <CalBooking />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
