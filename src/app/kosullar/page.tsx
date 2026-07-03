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
    title: en ? "Terms of Use" : "Kullanım Koşulları",
    description: en
      ? "The terms governing your use of the VertexStarter website and services."
      : "VertexStarter web sitesini ve hizmetlerini kullanımınızı düzenleyen koşullar.",
    alternates: { canonical: "/kosullar" },
  };
}

const content: Record<Locale, Content> = {
  tr: {
    title: "Kullanım Koşulları",
    updated: "Son güncelleme: 4 Temmuz 2026",
    intro: `Bu Kullanım Koşulları, ${site.domain} sitesini ve VertexStarter hizmetlerini kullanımınızı düzenler. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.`,
    sections: [
      { h: "Hizmetler", p: [
        "VertexStarter; yapay zeka, otomasyon ve veri sistemleri kurulum ve danışmanlık hizmetleri sunar. Hizmetlerin kapsamı, süresi ve fiyatı ayrı bir teklif ya da sözleşmede netleşir.",
      ] },
      { h: "Fikri mülkiyet", p: [
        "Sitedeki tasarım, metin, logo ve içerikler VertexStarter'a aittir ve izinsiz kopyalanamaz veya kullanılamaz.",
      ] },
      { h: "Fiyatlar ve teklifler", p: [
        "Sitede belirtilen fiyatlar başlangıç niteliğinde ve bilgilendirme amaçlıdır. Nihai fiyat, kapsam görüşmesi sonrası verilen teklifte belirlenir.",
      ] },
      { h: "Sorumluluğun sınırlandırılması", p: [
        "Site içeriği olduğu gibi sunulur. Yürürlükteki mevzuatın izin verdiği ölçüde, sitenin kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamayız.",
      ] },
      { h: "Üçüncü taraf bağlantılar", p: [
        "Site, üçüncü taraf hizmetlere (örneğin Cal.com) bağlantılar içerebilir. Bu hizmetlerin içeriğinden ve gizlilik uygulamalarından sorumlu değiliz.",
      ] },
      { h: "Değişiklikler", p: [
        "Bu koşulları zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayımlanır.",
      ] },
      { h: "Uygulanacak hukuk", p: [
        "Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Tekirdağ/Çorlu mahkemeleri ve icra daireleri yetkilidir.",
      ] },
      { h: "İletişim", p: [
        `Sorularınız için: ${site.email} · ${site.phone}.`,
      ] },
    ],
    note: "Bu metin genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez; yayına almadan önce bir hukuk danışmanıyla gözden geçirmeniz önerilir.",
  },
  en: {
    title: "Terms of Use",
    updated: "Last updated: 4 July 2026",
    intro: `These Terms of Use govern your use of the ${site.domain} website and VertexStarter services. By using the site, you agree to these terms.`,
    sections: [
      { h: "Services", p: [
        "VertexStarter provides AI, automation and data-system build and consulting services. The scope, duration and price of services are defined in a separate proposal or contract.",
      ] },
      { h: "Intellectual property", p: [
        "The design, text, logo and content on the site belong to VertexStarter and may not be copied or used without permission.",
      ] },
      { h: "Prices and proposals", p: [
        "Prices shown on the site are starting figures for information only. The final price is determined in the proposal provided after a scoping call.",
      ] },
      { h: "Limitation of liability", p: [
        "Site content is provided as is. To the extent permitted by applicable law, we cannot be held liable for indirect damages arising from use of the site.",
      ] },
      { h: "Third-party links", p: [
        "The site may contain links to third-party services (for example Cal.com). We are not responsible for the content or privacy practices of those services.",
      ] },
      { h: "Changes", p: [
        "We may update these terms from time to time. The current version is always published on this page.",
      ] },
      { h: "Governing law", p: [
        "These terms are governed by the laws of the Republic of Türkiye. The courts and enforcement offices of Tekirdağ/Çorlu have jurisdiction over disputes.",
      ] },
      { h: "Contact", p: [
        `For questions: ${site.email} · ${site.phone}.`,
      ] },
    ],
    note: "This text is for general information and does not constitute legal advice; we recommend reviewing it with legal counsel before going live.",
  },
};

export default async function TermsPage() {
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
