import { XCircle, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const problems = [
  { t: "Dağınık veri", d: "Veriniz farklı paneller ve tablolarda parçalanmış durumda." },
  { t: "Kaçan müşteriler", d: "Geç dönülen lead'ler sessizce rakibe gidiyor." },
  { t: "Verimsiz operasyonlar", d: "Süreçler birbirine bağlı değil, her şey kopuk ilerliyor." },
  { t: "Manuel işler", d: "Ekibiniz değer üretmek yerine veri girişiyle uğraşıyor." },
  { t: "Takip edilmeyen süreçler", d: "Hangi adımın tıkandığı kimse tarafından görülmüyor." },
  { t: "Satış kayıpları", d: "Hangi kanalın kâr getirdiği ölçülemiyor." },
];

const solutions = [
  { t: "Tek veri kaynağı", d: "Tüm verinizi tek bir sistemde toplar, görünür kılarız." },
  { t: "Otomatik takip", d: "Her lead'i yakalayan otomatik akışlar kurarız." },
  { t: "Bağlı operasyon", d: "Süreçleri uçtan uca birbirine bağlarız." },
  { t: "İşleri otomasyona devret", d: "Tekrar eden işleri kurallara bağlarız." },
  { t: "Canlı görünürlük", d: "Her adımı gerçek zamanlı izlenebilir hale getiririz." },
  { t: "Ölçülebilir satış", d: "Hangi kanalın kâr getirdiğini netleştiririz." },
];

export function ProblemSolution() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Veriniz var, ama sistem yok.
          </h2>
          <p className="mt-4 text-muted">
            Çoğu şirket veriye sahip; sorun onu kullanılabilir bir büyüme
            sistemine çevirememek. İşte fark.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card ring-line lg:grid-cols-2">
          <div className="bg-surface p-8 sm:p-10">
            <h3 className="text-sm font-medium tracking-wide text-muted">
              Şu an yaşadıklarınız
            </h3>
            <ul className="mt-6 grid gap-5">
              {problems.map((p, i) => (
                <Reveal as="li" key={p.t} delay={i * 40} className="flex gap-3.5">
                  <XCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-faint" />
                  <span>
                    <span className="block font-medium text-fg">{p.t}</span>
                    <span className="mt-0.5 block text-sm text-muted">{p.d}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="bg-surface-2 p-8 sm:p-10">
            <h3 className="text-sm font-medium tracking-wide text-accent">
              VertexStarter ile
            </h3>
            <ul className="mt-6 grid gap-5">
              {solutions.map((s, i) => (
                <Reveal as="li" key={s.t} delay={i * 40} className="flex gap-3.5">
                  <CheckCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-medium text-fg">{s.t}</span>
                    <span className="mt-0.5 block text-sm text-muted">{s.d}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
