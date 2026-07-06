import {
  Phone,
  MapPin,
  EnvelopeSimple,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ContactPanel } from "@/components/contact-panel";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

export async function Contact() {
  const { t } = await getDict();
  const c = t.contact;
  return (
    <section id="iletisim" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-muted">{c.sub}</p>
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
                  <span className="block text-xs text-faint">{c.hostRole}</span>
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
                <VideoCamera weight="duotone" className="size-4 text-accent" />
                {c.meet}
              </div>
            </div>
            <a
              href={site.phoneHref}
              className="group flex items-center gap-3 rounded-card bg-surface p-5 ring-line transition-colors hover:bg-surface-2"
            >
              <Phone weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">{c.phone}</span>
                <span className="font-medium">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 rounded-card bg-surface p-5 ring-line transition-colors hover:bg-surface-2"
            >
              <EnvelopeSimple weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">{c.email}</span>
                <span className="font-medium">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-card bg-surface p-5 ring-line">
              <MapPin weight="duotone" className="size-5 text-accent" />
              <span>
                <span className="block text-xs text-faint">{c.address}</span>
                <span className="font-medium">{site.address}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactPanel
              labels={{
                tabBook: c.tabBook,
                tabMessage: c.tabMessage,
                formName: c.formName,
                formCompany: c.formCompany,
                formEmail: c.formEmail,
                formMessage: c.formMessage,
                formSend: c.formSend,
                formWhatsapp: c.formWhatsapp,
                formNote: c.formNote,
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
