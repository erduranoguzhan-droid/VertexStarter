import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const faqs = [
  {
    q: "Veri sistemleri kurmak için hazır bir altyapıya ihtiyacım var mı?",
    a: "Hayır. Mevcut araçlarınız ne olursa olsun veriyi tek bir sistemde toplayıp kullanılabilir hale getiririz. Sıfırdan da kurabiliriz.",
  },
  {
    q: "Süreç ne kadar sürüyor?",
    a: "Kapsamı görüşmede netleştiririz. İlk otomasyonları genelde birkaç hafta içinde devreye alır, ardından adım adım ölçeklendiririz.",
  },
  {
    q: "Hangi sektörlerle çalışıyorsunuz?",
    a: "E-ticaret, sağlık, gayrimenkul, restoran, eğitim, üretim ve lojistik başta olmak üzere veriyle büyüyebilen her sektörle çalışırız.",
  },
  {
    q: "Kurduğunuz sistemleri biz mi yöneteceğiz?",
    a: "İsteğinize bağlı. Ekibinizi eğitip yönetimi devredebilir ya da sürekli destekle sistemleri biz işletebiliriz.",
  },
  {
    q: "Yapay zeka çözümleri güvenli mi?",
    a: "Verinizi izinli ve kontrollü akışlarda kullanırız. Sistemleri şeffaf, denetlenebilir ve sizin sahipliğinizde kurarız.",
  },
  {
    q: "Sonuçları nasıl ölçüyorsunuz?",
    a: "Her projeyi net KPI'larla başlatır, canlı panellerle gerçek iş etkisini sürekli ölçeriz.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Sık sorulan sorular.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[color:var(--line)] border-y border-line">
          {faqs.map((f, i) => (
            <Reveal as="div" key={f.q} delay={i * 30}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-medium text-fg">{f.q}</span>
                  <Plus
                    weight="bold"
                    className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="pb-5 pr-9 text-sm leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
