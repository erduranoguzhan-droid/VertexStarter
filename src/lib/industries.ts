export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  seed: string;
  problems: string[];
  solutions: string[];
  useCases: string[];
  automations: string[];
  workflow: { step: string; desc: string }[];
  advantages: string[];
};

export const industries: Industry[] = [
  {
    slug: "e-ticaret",
    name: "E-Ticaret",
    tagline: "Siparişten stoğa, tüm operasyonu tek bir veri akışında birleştirin.",
    intro:
      "E-ticaret markaları büyürken sipariş, stok, reklam ve müşteri verisi farklı sistemlere dağılır. Bu dağınık veriyi tek bir büyüme sistemine bağlıyoruz.",
    seed: "vertexstarter-ecommerce",
    problems: [
      "Sipariş ve stok verisinin farklı panellerde dağılması",
      "Reklam harcamasının gerçek kâra etkisinin görünmemesi",
      "Müşteri destek taleplerinin manuel ve yavaş yönetilmesi",
    ],
    solutions: [
      "Sipariş, stok ve kargo süreçlerini uçtan uca otomatikleştirme",
      "Reklam, satış ve finans verisini tek panelde birleştirme",
      "AI destek botları ile 7/24 müşteri yanıtlama",
    ],
    useCases: [
      "Sipariş onayından kargo bildirimine kadar otomatik akış",
      "Stok azaldığında tedarik ve reklam bütçesinin otomatik ayarlanması",
      "İade ve değişim taleplerinin otomatik sınıflandırılması",
    ],
    automations: [
      "Sipariş otomasyonu",
      "Stok yönetimi",
      "Müşteri destek sistemleri",
      "Reklam veri analizi",
    ],
    workflow: [
      { step: "Veri toplama", desc: "Mağaza, reklam ve kargo verisini tek yerde toplarız." },
      { step: "Otomasyon", desc: "Tekrar eden operasyonları kurallara bağlarız." },
      { step: "Raporlama", desc: "Kâr ve performansı gerçek zamanlı görünür kılarız." },
    ],
    advantages: [
      "Daha düşük operasyon maliyeti",
      "Hızlı sipariş ve kargo süreci",
      "Reklam bütçesinde daha yüksek verim",
    ],
  },
  {
    slug: "saglik",
    name: "Sağlık",
    tagline: "Randevudan hasta takibine, kliniğinizin verisini düzene sokun.",
    intro:
      "Sağlık kuruluşlarında randevu, hasta iletişimi ve operasyon raporları büyük zaman kaybına yol açar. Bu süreçleri güvenli ve otomatik hale getiriyoruz.",
    seed: "vertexstarter-healthcare",
    problems: [
      "Randevuların telefon ve manuel takvimle yönetilmesi",
      "Hasta hatırlatmalarının atlanması ve kaçan randevular",
      "Operasyon verisinin raporlanamaması",
    ],
    solutions: [
      "Online randevu ve otomatik hatırlatma sistemleri",
      "Hasta yolculuğunu takip eden otomatik iletişim akışları",
      "Klinik performansını gösteren operasyon raporları",
    ],
    useCases: [
      "WhatsApp üzerinden otomatik randevu hatırlatma",
      "Kontrol zamanı gelen hastalara otomatik bildirim",
      "Doluluk ve gelir raporlarının otomatik üretimi",
    ],
    automations: [
      "Randevu sistemleri",
      "Hasta takip süreçleri",
      "Operasyon raporları",
    ],
    workflow: [
      { step: "Randevu", desc: "Online randevu ve hatırlatmayı otomatikleştiririz." },
      { step: "Takip", desc: "Hasta iletişimini yolculuğa göre kurarız." },
      { step: "Rapor", desc: "Operasyon ve doluluk verisini raporlarız." },
    ],
    advantages: [
      "Daha az kaçan randevu",
      "Daha düzenli hasta iletişimi",
      "Veriye dayalı kapasite planlaması",
    ],
  },
  {
    slug: "gayrimenkul",
    name: "Gayrimenkul",
    tagline: "Her lead'i takip eden, hiçbir fırsatı kaçırmayan bir satış sistemi.",
    intro:
      "Gayrimenkulde lead'ler hızla soğur. Tüm potansiyel müşterileri tek CRM'de toplayıp otomatik takip akışlarıyla satışa yaklaştırıyoruz.",
    seed: "vertexstarter-realestate",
    problems: [
      "Lead'lerin farklı kanallardan gelip kaybolması",
      "Takip aramalarının ve mesajların atlanması",
      "Hangi ilanın gerçekten dönüştüğünün bilinmemesi",
    ],
    solutions: [
      "Tüm lead'leri tek CRM'de toplama ve önceliklendirme",
      "Otomatik takip ve hatırlatma akışları",
      "İlan ve kanal performansının raporlanması",
    ],
    useCases: [
      "Yeni lead geldiğinde danışmana otomatik atama",
      "İlgilenen müşteriye otomatik portföy önerisi",
      "Soğuyan lead'lere otomatik yeniden temas",
    ],
    automations: ["Lead yönetimi", "CRM sistemleri", "Takip otomasyonları"],
    workflow: [
      { step: "Toplama", desc: "Tüm kanallardan gelen lead'leri tek yerde toplarız." },
      { step: "Takip", desc: "Otomatik akışlarla lead'i satışa yaklaştırırız." },
      { step: "Rapor", desc: "Kanal ve danışman performansını ölçeriz." },
    ],
    advantages: [
      "Daha az kaçan lead",
      "Daha hızlı geri dönüş",
      "Daha yüksek satış dönüşümü",
    ],
  },
  {
    slug: "restoran",
    name: "Restoran",
    tagline: "Rezervasyon, sipariş ve sadakati WhatsApp üzerinden otomatikleştirin.",
    intro:
      "Restoranlar için rezervasyon, sipariş ve müşteri sadakati genelde dağınık yürür. Bunları otomatik ve ölçülebilir hale getiriyoruz.",
    seed: "vertexstarter-restaurant",
    problems: [
      "Rezervasyonların telefonla ve dağınık yönetilmesi",
      "Müşteri verisinin toplanmaması",
      "Tekrar gelen müşteri oranının düşük olması",
    ],
    solutions: [
      "Online ve WhatsApp üzerinden rezervasyon sistemi",
      "Sipariş ve kampanya otomasyonları",
      "Sadakat ve yeniden ziyaret akışları",
    ],
    useCases: [
      "WhatsApp üzerinden otomatik rezervasyon onayı",
      "Doğum günü ve kampanya mesajlarının otomatik gönderimi",
      "Geri gelmeyen müşteriye otomatik hatırlatma",
    ],
    automations: [
      "Rezervasyon sistemleri",
      "WhatsApp otomasyonları",
      "Sadakat sistemleri",
    ],
    workflow: [
      { step: "Rezervasyon", desc: "Online ve WhatsApp rezervasyonu kurarız." },
      { step: "İletişim", desc: "Kampanya ve hatırlatmaları otomatikleştiririz." },
      { step: "Sadakat", desc: "Tekrar ziyaret akışlarıyla bağlılığı artırırız." },
    ],
    advantages: [
      "Daha dolu masalar",
      "Daha yüksek tekrar ziyaret",
      "Toplanan müşteri verisi",
    ],
  },
  {
    slug: "egitim",
    name: "Eğitim",
    tagline: "Kayıttan takibe, eğitim operasyonunu tek sistemde toplayın.",
    intro:
      "Eğitim kurumlarında öğrenci kaydı, iletişim ve süreç takibi manuel yürüdüğünde büyüme yavaşlar. Bu süreçleri otomatikleştiriyoruz.",
    seed: "vertexstarter-education",
    problems: [
      "Öğrenci kayıtlarının dağınık tutulması",
      "Aday öğrencilerle iletişimin kopması",
      "Süreçlerin manuel ve hataya açık olması",
    ],
    solutions: [
      "Online kayıt ve otomatik onay sistemleri",
      "Aday öğrenci takip ve iletişim akışları",
      "İç süreçlerin otomatikleştirilmesi",
    ],
    useCases: [
      "Form dolduran adaya otomatik bilgilendirme",
      "Kayıt aşamalarının otomatik hatırlatılması",
      "Eğitim programı doluluk raporları",
    ],
    automations: [
      "Öğrenci kayıt sistemleri",
      "Eğitim yönetimi",
      "Süreç otomasyonları",
    ],
    workflow: [
      { step: "Kayıt", desc: "Online kayıt ve onayı otomatikleştiririz." },
      { step: "Takip", desc: "Aday ve öğrenci iletişimini kurarız." },
      { step: "Yönetim", desc: "İç süreçleri tek sistemde toplarız." },
    ],
    advantages: [
      "Daha yüksek kayıt dönüşümü",
      "Daha az manuel iş",
      "Düzenli öğrenci iletişimi",
    ],
  },
  {
    slug: "uretim",
    name: "Üretim",
    tagline: "Üretim hattını ölçün, verimliliği veriyle yönetin.",
    intro:
      "Üretimde operasyon ve verimlilik verisi çoğunlukla kâğıt ve elektronik tabloda kalır. Bunu canlı bir veri sistemine taşıyoruz.",
    seed: "vertexstarter-manufacturing",
    problems: [
      "Üretim verisinin elle tutulması",
      "Verimlilik kayıplarının fark edilmemesi",
      "Operasyon raporlarının geç üretilmesi",
    ],
    solutions: [
      "Üretim takibinin dijitalleştirilmesi",
      "Operasyon ve verimlilik panelleri",
      "Otomatik üretim ve duruş raporları",
    ],
    useCases: [
      "Hat bazında üretim ve fire takibi",
      "Duruş ve bakım uyarılarının otomatikleştirilmesi",
      "Vardiya verimlilik raporlarının otomatik üretimi",
    ],
    automations: [
      "Operasyon yönetimi",
      "Üretim takibi",
      "Verimlilik raporları",
    ],
    workflow: [
      { step: "Takip", desc: "Üretim verisini canlı toplarız." },
      { step: "Analiz", desc: "Verimlilik kayıplarını görünür kılarız." },
      { step: "Rapor", desc: "Operasyon raporlarını otomatikleştiririz." },
    ],
    advantages: [
      "Daha yüksek verimlilik",
      "Daha az duruş",
      "Veriye dayalı planlama",
    ],
  },
  {
    slug: "lojistik",
    name: "Lojistik",
    tagline: "Sevkiyattan raporlamaya, operasyonu uçtan uca takip edin.",
    intro:
      "Lojistikte sevkiyat ve operasyon takibi kritik. Tüm süreci tek panelde izlenebilir ve otomatik hale getiriyoruz.",
    seed: "vertexstarter-logistics",
    problems: [
      "Sevkiyat durumunun anlık görünmemesi",
      "Operasyon takibinin dağınık olması",
      "Raporlamanın manuel ve geç olması",
    ],
    solutions: [
      "Sevkiyat yönetimi ve durum bildirimleri",
      "Operasyon takip paneli",
      "Otomatik raporlama altyapıları",
    ],
    useCases: [
      "Sevkiyat durumunun otomatik müşteri bildirimi",
      "Gecikme riskinde otomatik uyarı",
      "Günlük operasyon raporlarının otomatik üretimi",
    ],
    automations: [
      "Sevkiyat yönetimi",
      "Operasyon takip sistemi",
      "Raporlama altyapıları",
    ],
    workflow: [
      { step: "Sevkiyat", desc: "Sevkiyatı tek panelden yönetiriz." },
      { step: "Takip", desc: "Operasyonu canlı izleriz." },
      { step: "Rapor", desc: "Raporlamayı otomatikleştiririz." },
    ],
    advantages: [
      "Şeffaf sevkiyat süreci",
      "Daha az gecikme",
      "Veriye dayalı operasyon",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
