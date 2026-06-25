import type { Locale } from "@/i18n/messages";

type L = { tr: string; en: string };
type LArr = { tr: string[]; en: string[] };
type Step = { step: string; desc: string };
type LSteps = { tr: Step[]; en: Step[] };

type RawIndustry = {
  slug: string;
  seed: string;
  name: L;
  tagline: L;
  intro: L;
  problems: LArr;
  solutions: LArr;
  useCases: LArr;
  automations: LArr;
  workflow: LSteps;
  advantages: LArr;
};

export type Industry = {
  slug: string;
  seed: string;
  name: string;
  tagline: string;
  intro: string;
  problems: string[];
  solutions: string[];
  useCases: string[];
  automations: string[];
  workflow: Step[];
  advantages: string[];
};

const raw: RawIndustry[] = [
  {
    slug: "e-ticaret",
    seed: "vertexstarter-ecommerce",
    name: { tr: "E-Ticaret", en: "E-Commerce" },
    tagline: {
      tr: "Siparişten stoğa, tüm operasyonu tek bir veri akışında birleştirin.",
      en: "Unite your whole operation, from orders to stock, in a single data flow.",
    },
    intro: {
      tr: "E-ticaret markaları büyürken sipariş, stok, reklam ve müşteri verisi farklı sistemlere dağılır. Bu dağınık veriyi tek bir büyüme sistemine bağlıyoruz.",
      en: "As e-commerce brands grow, order, stock, ad and customer data scatters across systems. We connect that scattered data into one growth system.",
    },
    problems: {
      tr: [
        "Sipariş ve stok verisinin farklı panellerde dağılması",
        "Reklam harcamasının gerçek kâra etkisinin görünmemesi",
        "Müşteri destek taleplerinin manuel ve yavaş yönetilmesi",
      ],
      en: [
        "Order and stock data scattered across different panels",
        "No visibility into how ad spend affects real profit",
        "Support requests handled manually and slowly",
      ],
    },
    solutions: {
      tr: [
        "Sipariş, stok ve kargo süreçlerini uçtan uca otomatikleştirme",
        "Reklam, satış ve finans verisini tek panelde birleştirme",
        "AI destek botları ile 7/24 müşteri yanıtlama",
      ],
      en: [
        "End-to-end automation of orders, stock and shipping",
        "Unifying ad, sales and finance data in one panel",
        "24/7 customer responses with AI support bots",
      ],
    },
    useCases: {
      tr: [
        "Sipariş onayından kargo bildirimine kadar otomatik akış",
        "Stok azaldığında tedarik ve reklam bütçesinin otomatik ayarlanması",
        "İade ve değişim taleplerinin otomatik sınıflandırılması",
      ],
      en: [
        "Automated flow from order confirmation to shipping notice",
        "Auto-adjusting procurement and ad budget when stock runs low",
        "Automatic classification of return and exchange requests",
      ],
    },
    automations: {
      tr: ["Sipariş otomasyonu", "Stok yönetimi", "Müşteri destek sistemleri", "Reklam veri analizi"],
      en: ["Order automation", "Stock management", "Customer support systems", "Ad data analysis"],
    },
    workflow: {
      tr: [
        { step: "Veri toplama", desc: "Mağaza, reklam ve kargo verisini tek yerde toplarız." },
        { step: "Otomasyon", desc: "Tekrar eden operasyonları kurallara bağlarız." },
        { step: "Raporlama", desc: "Kâr ve performansı gerçek zamanlı görünür kılarız." },
      ],
      en: [
        { step: "Data collection", desc: "We gather store, ad and shipping data in one place." },
        { step: "Automation", desc: "We turn repetitive operations into rules." },
        { step: "Reporting", desc: "We make profit and performance visible in real time." },
      ],
    },
    advantages: {
      tr: ["Daha düşük operasyon maliyeti", "Hızlı sipariş ve kargo süreci", "Reklam bütçesinde daha yüksek verim"],
      en: ["Lower operating cost", "Faster order and shipping process", "Higher efficiency on ad budget"],
    },
  },
  {
    slug: "saglik",
    seed: "vertexstarter-healthcare",
    name: { tr: "Sağlık", en: "Healthcare" },
    tagline: {
      tr: "Randevudan hasta takibine, kliniğinizin verisini düzene sokun.",
      en: "From scheduling to patient follow-up, bring order to your clinic's data.",
    },
    intro: {
      tr: "Sağlık kuruluşlarında randevu, hasta iletişimi ve operasyon raporları büyük zaman kaybına yol açar. Bu süreçleri güvenli ve otomatik hale getiriyoruz.",
      en: "In healthcare, scheduling, patient communication and operational reports cause major time loss. We make these processes secure and automatic.",
    },
    problems: {
      tr: ["Randevuların telefon ve manuel takvimle yönetilmesi", "Hasta hatırlatmalarının atlanması ve kaçan randevular", "Operasyon verisinin raporlanamaması"],
      en: ["Appointments managed by phone and manual calendars", "Missed reminders and no-show appointments", "Operational data that cannot be reported"],
    },
    solutions: {
      tr: ["Online randevu ve otomatik hatırlatma sistemleri", "Hasta yolculuğunu takip eden otomatik iletişim akışları", "Klinik performansını gösteren operasyon raporları"],
      en: ["Online booking and automated reminder systems", "Automated communication flows that track the patient journey", "Operational reports showing clinic performance"],
    },
    useCases: {
      tr: ["WhatsApp üzerinden otomatik randevu hatırlatma", "Kontrol zamanı gelen hastalara otomatik bildirim", "Doluluk ve gelir raporlarının otomatik üretimi"],
      en: ["Automatic appointment reminders over WhatsApp", "Automatic notices to patients due for a checkup", "Automated occupancy and revenue reports"],
    },
    automations: {
      tr: ["Randevu sistemleri", "Hasta takip süreçleri", "Operasyon raporları"],
      en: ["Scheduling systems", "Patient follow-up", "Operational reports"],
    },
    workflow: {
      tr: [
        { step: "Randevu", desc: "Online randevu ve hatırlatmayı otomatikleştiririz." },
        { step: "Takip", desc: "Hasta iletişimini yolculuğa göre kurarız." },
        { step: "Rapor", desc: "Operasyon ve doluluk verisini raporlarız." },
      ],
      en: [
        { step: "Booking", desc: "We automate online booking and reminders." },
        { step: "Follow-up", desc: "We build patient communication around the journey." },
        { step: "Report", desc: "We report operational and occupancy data." },
      ],
    },
    advantages: {
      tr: ["Daha az kaçan randevu", "Daha düzenli hasta iletişimi", "Veriye dayalı kapasite planlaması"],
      en: ["Fewer no-shows", "More consistent patient communication", "Data-driven capacity planning"],
    },
  },
  {
    slug: "gayrimenkul",
    seed: "vertexstarter-realestate",
    name: { tr: "Gayrimenkul", en: "Real Estate" },
    tagline: {
      tr: "Her lead'i takip eden, hiçbir fırsatı kaçırmayan bir satış sistemi.",
      en: "A sales system that tracks every lead and misses no opportunity.",
    },
    intro: {
      tr: "Gayrimenkulde lead'ler hızla soğur. Tüm potansiyel müşterileri tek CRM'de toplayıp otomatik takip akışlarıyla satışa yaklaştırıyoruz.",
      en: "In real estate, leads cool fast. We gather every prospect in one CRM and move them toward a sale with automated follow-up flows.",
    },
    problems: {
      tr: ["Lead'lerin farklı kanallardan gelip kaybolması", "Takip aramalarının ve mesajların atlanması", "Hangi ilanın gerçekten dönüştüğünün bilinmemesi"],
      en: ["Leads arriving from different channels and getting lost", "Missed follow-up calls and messages", "Not knowing which listing actually converts"],
    },
    solutions: {
      tr: ["Tüm lead'leri tek CRM'de toplama ve önceliklendirme", "Otomatik takip ve hatırlatma akışları", "İlan ve kanal performansının raporlanması"],
      en: ["Gathering and prioritizing all leads in one CRM", "Automated follow-up and reminder flows", "Reporting on listing and channel performance"],
    },
    useCases: {
      tr: ["Yeni lead geldiğinde danışmana otomatik atama", "İlgilenen müşteriye otomatik portföy önerisi", "Soğuyan lead'lere otomatik yeniden temas"],
      en: ["Auto-assigning a new lead to an agent", "Automatic portfolio suggestions to interested clients", "Automatic re-engagement of cooling leads"],
    },
    automations: {
      tr: ["Lead yönetimi", "CRM sistemleri", "Takip otomasyonları"],
      en: ["Lead management", "CRM systems", "Follow-up automation"],
    },
    workflow: {
      tr: [
        { step: "Toplama", desc: "Tüm kanallardan gelen lead'leri tek yerde toplarız." },
        { step: "Takip", desc: "Otomatik akışlarla lead'i satışa yaklaştırırız." },
        { step: "Rapor", desc: "Kanal ve danışman performansını ölçeriz." },
      ],
      en: [
        { step: "Capture", desc: "We gather leads from all channels in one place." },
        { step: "Follow-up", desc: "We move leads toward a sale with automated flows." },
        { step: "Report", desc: "We measure channel and agent performance." },
      ],
    },
    advantages: {
      tr: ["Daha az kaçan lead", "Daha hızlı geri dönüş", "Daha yüksek satış dönüşümü"],
      en: ["Fewer lost leads", "Faster response", "Higher sales conversion"],
    },
  },
  {
    slug: "restoran",
    seed: "vertexstarter-restaurant",
    name: { tr: "Restoran", en: "Restaurant" },
    tagline: {
      tr: "Rezervasyon, sipariş ve sadakati WhatsApp üzerinden otomatikleştirin.",
      en: "Automate reservations, orders and loyalty over WhatsApp.",
    },
    intro: {
      tr: "Restoranlar için rezervasyon, sipariş ve müşteri sadakati genelde dağınık yürür. Bunları otomatik ve ölçülebilir hale getiriyoruz.",
      en: "For restaurants, reservations, orders and loyalty usually run in a scattered way. We make them automatic and measurable.",
    },
    problems: {
      tr: ["Rezervasyonların telefonla ve dağınık yönetilmesi", "Müşteri verisinin toplanmaması", "Tekrar gelen müşteri oranının düşük olması"],
      en: ["Reservations managed by phone and scattered", "Customer data not being collected", "Low repeat-customer rate"],
    },
    solutions: {
      tr: ["Online ve WhatsApp üzerinden rezervasyon sistemi", "Sipariş ve kampanya otomasyonları", "Sadakat ve yeniden ziyaret akışları"],
      en: ["Online and WhatsApp reservation system", "Order and campaign automation", "Loyalty and repeat-visit flows"],
    },
    useCases: {
      tr: ["WhatsApp üzerinden otomatik rezervasyon onayı", "Doğum günü ve kampanya mesajlarının otomatik gönderimi", "Geri gelmeyen müşteriye otomatik hatırlatma"],
      en: ["Automatic reservation confirmation over WhatsApp", "Automatic birthday and campaign messages", "Automatic reminders to lapsed customers"],
    },
    automations: {
      tr: ["Rezervasyon sistemleri", "WhatsApp otomasyonları", "Sadakat sistemleri"],
      en: ["Reservation systems", "WhatsApp automation", "Loyalty systems"],
    },
    workflow: {
      tr: [
        { step: "Rezervasyon", desc: "Online ve WhatsApp rezervasyonu kurarız." },
        { step: "İletişim", desc: "Kampanya ve hatırlatmaları otomatikleştiririz." },
        { step: "Sadakat", desc: "Tekrar ziyaret akışlarıyla bağlılığı artırırız." },
      ],
      en: [
        { step: "Reservation", desc: "We set up online and WhatsApp reservations." },
        { step: "Communication", desc: "We automate campaigns and reminders." },
        { step: "Loyalty", desc: "We raise loyalty with repeat-visit flows." },
      ],
    },
    advantages: {
      tr: ["Daha dolu masalar", "Daha yüksek tekrar ziyaret", "Toplanan müşteri verisi"],
      en: ["Fuller tables", "Higher repeat visits", "Collected customer data"],
    },
  },
  {
    slug: "egitim",
    seed: "vertexstarter-education",
    name: { tr: "Eğitim", en: "Education" },
    tagline: {
      tr: "Kayıttan takibe, eğitim operasyonunu tek sistemde toplayın.",
      en: "From enrollment to follow-up, bring education operations into one system.",
    },
    intro: {
      tr: "Eğitim kurumlarında öğrenci kaydı, iletişim ve süreç takibi manuel yürüdüğünde büyüme yavaşlar. Bu süreçleri otomatikleştiriyoruz.",
      en: "When enrollment, communication and process tracking run manually, growth slows. We automate these processes.",
    },
    problems: {
      tr: ["Öğrenci kayıtlarının dağınık tutulması", "Aday öğrencilerle iletişimin kopması", "Süreçlerin manuel ve hataya açık olması"],
      en: ["Student records kept in a scattered way", "Communication with prospects breaking down", "Processes being manual and error-prone"],
    },
    solutions: {
      tr: ["Online kayıt ve otomatik onay sistemleri", "Aday öğrenci takip ve iletişim akışları", "İç süreçlerin otomatikleştirilmesi"],
      en: ["Online enrollment and automatic approval systems", "Prospect tracking and communication flows", "Automation of internal processes"],
    },
    useCases: {
      tr: ["Form dolduran adaya otomatik bilgilendirme", "Kayıt aşamalarının otomatik hatırlatılması", "Eğitim programı doluluk raporları"],
      en: ["Automatic info to prospects who fill the form", "Automatic reminders for enrollment steps", "Program occupancy reports"],
    },
    automations: {
      tr: ["Öğrenci kayıt sistemleri", "Eğitim yönetimi", "Süreç otomasyonları"],
      en: ["Enrollment systems", "Education management", "Process automation"],
    },
    workflow: {
      tr: [
        { step: "Kayıt", desc: "Online kayıt ve onayı otomatikleştiririz." },
        { step: "Takip", desc: "Aday ve öğrenci iletişimini kurarız." },
        { step: "Yönetim", desc: "İç süreçleri tek sistemde toplarız." },
      ],
      en: [
        { step: "Enrollment", desc: "We automate online enrollment and approval." },
        { step: "Follow-up", desc: "We build prospect and student communication." },
        { step: "Management", desc: "We bring internal processes into one system." },
      ],
    },
    advantages: {
      tr: ["Daha yüksek kayıt dönüşümü", "Daha az manuel iş", "Düzenli öğrenci iletişimi"],
      en: ["Higher enrollment conversion", "Less manual work", "Consistent student communication"],
    },
  },
  {
    slug: "uretim",
    seed: "vertexstarter-manufacturing",
    name: { tr: "Üretim", en: "Manufacturing" },
    tagline: {
      tr: "Üretim hattını ölçün, verimliliği veriyle yönetin.",
      en: "Measure the production line, manage efficiency with data.",
    },
    intro: {
      tr: "Üretimde operasyon ve verimlilik verisi çoğunlukla kâğıt ve elektronik tabloda kalır. Bunu canlı bir veri sistemine taşıyoruz.",
      en: "In manufacturing, operations and efficiency data often stays on paper and spreadsheets. We move it into a live data system.",
    },
    problems: {
      tr: ["Üretim verisinin elle tutulması", "Verimlilik kayıplarının fark edilmemesi", "Operasyon raporlarının geç üretilmesi"],
      en: ["Production data kept by hand", "Efficiency losses going unnoticed", "Operational reports produced too late"],
    },
    solutions: {
      tr: ["Üretim takibinin dijitalleştirilmesi", "Operasyon ve verimlilik panelleri", "Otomatik üretim ve duruş raporları"],
      en: ["Digitizing production tracking", "Operations and efficiency dashboards", "Automatic production and downtime reports"],
    },
    useCases: {
      tr: ["Hat bazında üretim ve fire takibi", "Duruş ve bakım uyarılarının otomatikleştirilmesi", "Vardiya verimlilik raporlarının otomatik üretimi"],
      en: ["Per-line production and scrap tracking", "Automated downtime and maintenance alerts", "Automatic shift efficiency reports"],
    },
    automations: {
      tr: ["Operasyon yönetimi", "Üretim takibi", "Verimlilik raporları"],
      en: ["Operations management", "Production tracking", "Efficiency reports"],
    },
    workflow: {
      tr: [
        { step: "Takip", desc: "Üretim verisini canlı toplarız." },
        { step: "Analiz", desc: "Verimlilik kayıplarını görünür kılarız." },
        { step: "Rapor", desc: "Operasyon raporlarını otomatikleştiririz." },
      ],
      en: [
        { step: "Tracking", desc: "We collect production data live." },
        { step: "Analysis", desc: "We make efficiency losses visible." },
        { step: "Report", desc: "We automate operational reports." },
      ],
    },
    advantages: {
      tr: ["Daha yüksek verimlilik", "Daha az duruş", "Veriye dayalı planlama"],
      en: ["Higher efficiency", "Less downtime", "Data-driven planning"],
    },
  },
  {
    slug: "lojistik",
    seed: "vertexstarter-logistics",
    name: { tr: "Lojistik", en: "Logistics" },
    tagline: {
      tr: "Sevkiyattan raporlamaya, operasyonu uçtan uca takip edin.",
      en: "From shipment to reporting, track operations end to end.",
    },
    intro: {
      tr: "Lojistikte sevkiyat ve operasyon takibi kritik. Tüm süreci tek panelde izlenebilir ve otomatik hale getiriyoruz.",
      en: "In logistics, shipment and operations tracking is critical. We make the whole process trackable and automatic in one panel.",
    },
    problems: {
      tr: ["Sevkiyat durumunun anlık görünmemesi", "Operasyon takibinin dağınık olması", "Raporlamanın manuel ve geç olması"],
      en: ["No real-time view of shipment status", "Scattered operations tracking", "Manual and late reporting"],
    },
    solutions: {
      tr: ["Sevkiyat yönetimi ve durum bildirimleri", "Operasyon takip paneli", "Otomatik raporlama altyapıları"],
      en: ["Shipment management and status notifications", "Operations tracking panel", "Automated reporting infrastructure"],
    },
    useCases: {
      tr: ["Sevkiyat durumunun otomatik müşteri bildirimi", "Gecikme riskinde otomatik uyarı", "Günlük operasyon raporlarının otomatik üretimi"],
      en: ["Automatic customer notice of shipment status", "Automatic alert on delay risk", "Automatic daily operations reports"],
    },
    automations: {
      tr: ["Sevkiyat yönetimi", "Operasyon takip sistemi", "Raporlama altyapıları"],
      en: ["Shipment management", "Operations tracking system", "Reporting infrastructure"],
    },
    workflow: {
      tr: [
        { step: "Sevkiyat", desc: "Sevkiyatı tek panelden yönetiriz." },
        { step: "Takip", desc: "Operasyonu canlı izleriz." },
        { step: "Rapor", desc: "Raporlamayı otomatikleştiririz." },
      ],
      en: [
        { step: "Shipment", desc: "We manage shipments from one panel." },
        { step: "Tracking", desc: "We monitor operations live." },
        { step: "Report", desc: "We automate reporting." },
      ],
    },
    advantages: {
      tr: ["Şeffaf sevkiyat süreci", "Daha az gecikme", "Veriye dayalı operasyon"],
      en: ["Transparent shipment process", "Fewer delays", "Data-driven operations"],
    },
  },
];

function resolve(r: RawIndustry, locale: Locale): Industry {
  return {
    slug: r.slug,
    seed: r.seed,
    name: r.name[locale],
    tagline: r.tagline[locale],
    intro: r.intro[locale],
    problems: r.problems[locale],
    solutions: r.solutions[locale],
    useCases: r.useCases[locale],
    automations: r.automations[locale],
    workflow: r.workflow[locale],
    advantages: r.advantages[locale],
  };
}

export const industrySlugs = raw.map((r) => r.slug);

export function getIndustries(locale: Locale): Industry[] {
  return raw.map((r) => resolve(r, locale));
}

export function getIndustry(slug: string, locale: Locale): Industry | undefined {
  const r = raw.find((i) => i.slug === slug);
  return r ? resolve(r, locale) : undefined;
}
