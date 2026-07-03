import type { Metadata } from "next";
import type { Locale } from "@/i18n/messages";
import { getDict } from "@/lib/i18n";
import { site } from "@/lib/site";

type Section = { h: string; p: string[] };
type Content = { title: string; updated: string; intro: string; sections: Section[]; note: string };

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getDict();
  const en = locale === "en";
  return {
    title: en ? "Privacy & KVKK" : "Gizlilik ve KVKK",
    description: en
      ? "How VertexStarter processes your personal data in line with KVKK and applicable law."
      : "VertexStarter olarak kişisel verilerinizi KVKK ve ilgili mevzuata uygun nasıl işlediğimiz.",
    alternates: { canonical: "/gizlilik" },
  };
}

const content: Record<Locale, Content> = {
  tr: {
    title: "Gizlilik ve KVKK Politikası",
    updated: "Son güncelleme: 4 Temmuz 2026",
    intro: `Bu Gizlilik Politikası, VertexStarter olarak kişisel verilerinizi 6698 sayılı KVKK ve ilgili mevzuata uygun şekilde nasıl işlediğimizi açıklar. Veri sorumlusu VertexStarter'dır.`,
    sections: [
      { h: "Topladığımız veriler", p: [
        "İletişim ve randevu talepleriniz sırasında paylaştığınız ad, e-posta, telefon ve mesaj içeriği.",
        "Siteyi kullanırken oluşan teknik veriler: IP adresi, tarayıcı bilgisi ve çerezler aracılığıyla toplanan kullanım istatistikleri.",
      ] },
      { h: "Verileri işleme amaçlarımız", p: [
        "Taleplerinizi yanıtlamak, randevu oluşturmak ve size hizmet sunmak.",
        "Hizmetlerimizi geliştirmek, güvenliği sağlamak ve yasal yükümlülükleri yerine getirmek.",
      ] },
      { h: "Hukuki dayanak", p: [
        "Verilerinizi; açık rızanıza, bir sözleşmenin kurulması ya da ifası ve meşru menfaat gibi KVKK md.5'te sayılan hukuki sebeplere dayanarak işleriz.",
      ] },
      { h: "Üçüncü taraflarla paylaşım", p: [
        "Verilerinizi satmayız. Yalnızca hizmetin sunulması için gerekli olduğunda; randevu (Cal.com), barındırma ve e-posta gibi hizmet sağlayıcılarla, gerekli güvenlik önlemleriyle paylaşırız.",
      ] },
      { h: "Saklama süresi", p: [
        "Kişisel verilerinizi, işleme amacının gerektirdiği ve ilgili mevzuatın öngördüğü süre boyunca saklar; süre dolduğunda sileriz veya anonim hale getiririz.",
      ] },
      { h: "Çerezler", p: [
        "Site, temel işlevsellik ve kullanım analizi için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya reddedebilirsiniz.",
      ] },
      { h: "Haklarınız", p: [
        `KVKK md.11 kapsamında; verilerinize erişme, düzeltilmesini veya silinmesini isteme, işlemeye itiraz ve veri taşınabilirliği haklarına sahipsiniz. Talebinizi ${site.email} adresine iletebilirsiniz.`,
      ] },
      { h: "İletişim", p: [
        `Gizlilikle ilgili sorularınız için: ${site.email} · ${site.phone} · ${site.address}.`,
      ] },
    ],
    note: "Bu metin genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez; yayına almadan önce bir hukuk danışmanıyla gözden geçirmeniz önerilir.",
  },
  en: {
    title: "Privacy & KVKK Policy",
    updated: "Last updated: 4 July 2026",
    intro: `This Privacy Policy explains how VertexStarter processes your personal data in line with Turkish Law No. 6698 (KVKK) and applicable regulations. The data controller is VertexStarter.`,
    sections: [
      { h: "Data we collect", p: [
        "The name, email, phone and message content you share during contact and booking requests.",
        "Technical data generated as you use the site: IP address, browser information and usage statistics collected via cookies.",
      ] },
      { h: "Purposes of processing", p: [
        "To respond to your requests, create appointments and provide our services.",
        "To improve our services, ensure security and meet legal obligations.",
      ] },
      { h: "Legal basis", p: [
        "We process your data based on legal grounds set out in KVKK art. 5, such as your explicit consent, the establishment or performance of a contract, and legitimate interest.",
      ] },
      { h: "Sharing with third parties", p: [
        "We do not sell your data. We share it only when necessary to deliver the service, with providers such as booking (Cal.com), hosting and email, under appropriate security measures.",
      ] },
      { h: "Retention", p: [
        "We keep your personal data for as long as the purpose of processing requires and the relevant regulations prescribe; when the period ends we delete or anonymize it.",
      ] },
      { h: "Cookies", p: [
        "The site may use cookies for core functionality and usage analytics. You can manage or reject cookies from your browser settings.",
      ] },
      { h: "Your rights", p: [
        `Under KVKK art. 11 you have the rights to access, correct or delete your data, object to processing and request data portability. You can send your request to ${site.email}.`,
      ] },
      { h: "Contact", p: [
        `For privacy questions: ${site.email} · ${site.phone} · ${site.address}.`,
      ] },
    ],
    note: "This text is for general information and does not constitute legal advice; we recommend reviewing it with legal counsel before going live.",
  },
};

export default async function PrivacyPage() {
  const { locale } = await getDict();
  const c = content[locale];
  return (
    <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8">
      <h1 className="text-4xl tracking-tight sm:text-5xl">{c.title}</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-faint">
        {c.updated}
      </p>
      <p className="mt-8 leading-relaxed text-muted">{c.intro}</p>

      <div className="mt-10 space-y-9">
        {c.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-medium tracking-tight">{s.h}</h2>
            <div className="mt-3 space-y-3">
              {s.p.map((para, i) => (
                <p key={i} className="leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 rounded-card bg-surface p-5 text-sm leading-relaxed text-faint ring-line">
        {c.note}
      </p>
    </main>
  );
}
