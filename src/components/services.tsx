import {
  Storefront,
  Robot,
  Code,
  Megaphone,
  MagnifyingGlass,
  ChartLineUp,
  FilmSlate,
  UsersThree,
  ChatCircleDots,
  Strategy,
  Target,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";

type Service = { title: string; desc: string; icon: Icon };

// 12 hizmet birebir (kullanıcının verdiği metin korunmuştur)
const services: Service[] = [
  {
    title: "Shopify E-Ticaret Mağaza Kurulumu",
    desc: "Markanıza özel, yüksek dönüşüm odaklı Shopify mağazaları tasarlıyor; Tüm teknik altyapıyı, ödeme ve kargo entegrasyonlarını tamamlayarak mağazanızı birlikte çalıştırmayı ve kullanıma hazır hale getirmenizi sağlıyoruz.",
    icon: Storefront,
  },
  {
    title: "Yapay Zeka Otomasyon Sistemleri",
    desc: "İşinizi ayrıntılarıyla yapay zeka destekli otomasyonlarla dijitalleştiriyor, yükünüzü izliyoruz işlemlerinizi artırıyor.",
    icon: Robot,
  },
  {
    title: "Web Tasarımı ve Geliştirme",
    desc: "Modern, hızlı ve kullanıcı deneyimi odaklı web siteleri geliştirerek markanızın dijitalleştirilmiş prestijini güçlendiriyoruz.",
    icon: Code,
  },
  {
    title: "Meta Reklam Yönetimi",
    desc: "Facebook ve Instagram reklam kampanyalarınızı veri odaklı stratejilerle yönetiyor, daha düşük maliyetle daha yüksek dönüşüm elde edilebilir.",
    icon: Megaphone,
  },
  {
    title: "Google Ads Yönetimi",
    desc: "Google Arama, Alışveriş, YouTube ve Performance Max reklamlarını optimize ederek kaliteli müşteri politikaları oluşturuyoruz.",
    icon: MagnifyingGlass,
  },
  {
    title: "SEO ve İçerik Pazarlaması",
    desc: "Arama motorlarında görünürlüğü artırılıyor, organik trafik ve sürdürülebilir müşteri erişimi yapılabilir.",
    icon: ChartLineUp,
  },
  {
    title: "AI İçerik ve Video Üretimi",
    desc: "Yapay zekâ ile reklam kreatifleri, ürün görselleri, UGC videoları, sosyal medya içerikleri ve pazarlama faaliyetlerini üretiyoruz.",
    icon: FilmSlate,
  },
  {
    title: "CRM ve Satış Otomasyonu",
    desc: "Teklif, müşteri takibi, satış seçenekleri ve CRM altyapınızı otomatikleştirerek satış hizmetlerimizin kapsamını genişletiyoruz.",
    icon: UsersThree,
  },
  {
    title: "E-Posta ve WhatsApp Otomasyonları",
    desc: "Müşteri yolculuğunu otomatikleştiren e-posta, SMS ve WhatsApp senaryoları kurarak tekrar satış oranlarını yükseltiyoruz.",
    icon: ChatCircleDots,
  },
  {
    title: "Marka ve Büyüme Stratejisi",
    desc: "Markanızı rakiplerinizden farklı olacak, teklifler ve büyüme sistemi geliştiriyoruz.",
    icon: Strategy,
  },
  {
    title: "Dönüşüm Oranı Optimizasyonu (CRO)",
    desc: "Web sitenizi ve satış işlemlerinizi analiz ederek daha fazla ziyaretçiyi bir araya getirerek dönüşümler gerçekleştiriyoruz.",
    icon: Target,
  },
  {
    title: "Analitik & Performans Raporu",
    desc: "Tüm pazarlama faaliyetlerinizi gerçek zamanlı olarak analiz ediyor, veriye dayalı büyüme kararları sunuyor.",
    icon: ChartBar,
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl">
            Hizmet<span className="text-accent">lerimiz</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Veriyi büyümeye çeviren uçtan uca hizmetler. Yapay zeka, otomasyon ve
            performans pazarlamasını tek bir büyüme sisteminde birleştiriyoruz.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card ring-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Ic = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 70}
                className="group flex flex-col gap-4 bg-surface p-7 transition-colors hover:bg-surface-2"
              >
                <span className="grid size-11 place-items-center rounded-input bg-bg text-accent ring-line">
                  <Ic weight="duotone" className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug tracking-tight text-fg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
