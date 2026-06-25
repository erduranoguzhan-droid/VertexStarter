import type { Locale } from "@/i18n/messages";

type L = { tr: string; en: string };
type LArr = { tr: string[]; en: string[] };

type RawPost = {
  slug: string;
  seed: string;
  date: string;
  readingMinutes: number;
  author: L;
  category: L;
  title: L;
  excerpt: L;
  body: LArr;
};

export type Post = {
  slug: string;
  seed: string;
  date: string;
  readingMinutes: number;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
};

const raw: RawPost[] = [
  {
    slug: "veriyi-buyume-sistemine-donusturmek",
    seed: "vertexstarter-blog-data-systems",
    date: "2026-05-12",
    readingMinutes: 6,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "Veri Sistemleri", en: "Data Systems" },
    title: {
      tr: "Veriyi büyüme sistemine dönüştürmenin 4 adımı",
      en: "4 steps to turn data into a growth system",
    },
    excerpt: {
      tr: "Çoğu şirket veriye sahip ama onu kullanılabilir bir sisteme çeviremez. İşte dağınık veriyi ölçülebilir büyümeye taşıyan pratik bir çerçeve.",
      en: "Most companies have data but cannot turn it into a usable system. Here is a practical framework that moves scattered data into measurable growth.",
    },
    body: {
      tr: [
        "Şirketlerin çoğu veri toplar fakat bu veri farklı panellerde, tablolarda ve uygulamalarda dağılmış durumdadır. Veri tek başına değer üretmez; ancak doğru sisteme bağlandığında büyümeye dönüşür.",
        "İlk adım veriyi tek bir yerde toplamaktır. Reklam, satış, operasyon ve müşteri verisini ortak bir kaynağa bağladığınızda kararlar tahmine değil gerçeğe dayanır.",
        "İkinci adım tekrar eden işleri otomatikleştirmektir. Manuel raporlama, takip ve veri girişi hem zaman kaybıdır hem de hata üretir. Bu işleri kurallara bağladığınızda ekibiniz asıl işine odaklanır.",
        "Üçüncü adım sonuçları görünür kılmaktır. Canlı paneller, ekiplerin doğru metriğe bakmasını ve sorunları erken görmesini sağlar.",
        "Son adım ölçeklendirmedir. Kazanan sistemleri standartlaştırır ve şirketin tamamına yayarsınız. Veri böylece bir maliyet kalemi değil, büyüme motoru olur.",
      ],
      en: [
        "Most companies collect data, but that data is scattered across different panels, spreadsheets and apps. Data alone creates no value; it turns into growth only when connected to the right system.",
        "The first step is gathering data in one place. When you connect ad, sales, operations and customer data to a common source, decisions rest on reality, not guesswork.",
        "The second step is automating repetitive work. Manual reporting, follow-up and data entry waste time and create errors. Turning this work into rules lets your team focus on what matters.",
        "The third step is making results visible. Live dashboards help teams look at the right metric and catch problems early.",
        "The final step is scaling. You standardize the winning systems and roll them out across the company. Data then becomes a growth engine, not a cost line.",
      ],
    },
  },
  {
    slug: "kacan-musterileri-otomasyonla-yakalamak",
    seed: "vertexstarter-blog-lead-recovery",
    date: "2026-04-28",
    readingMinutes: 5,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "Otomasyon", en: "Automation" },
    title: {
      tr: "Kaçan müşterileri otomasyonla geri kazanmak",
      en: "Winning back lost customers with automation",
    },
    excerpt: {
      tr: "Geç dönülen lead'ler ve takip edilmeyen süreçler sessizce gelir kaybına yol açar. Otomatik takip akışları bu kaybı nasıl durdurur?",
      en: "Late-answered leads and untracked processes quietly cause revenue loss. How do automated follow-up flows stop it?",
    },
    body: {
      tr: [
        "Bir lead'e ilk dakikalarda dönmek, saatler sonra dönmeye göre çok daha yüksek dönüşüm getirir. Manuel süreçlerde bu hız çoğu zaman yakalanamaz.",
        "Otomatik takip akışları, yeni bir lead geldiğinde doğru kişiye anında atama yapar ve ilk teması otomatik başlatır. Böylece hiçbir fırsat soğumaya bırakılmaz.",
        "Soğuyan lead'ler için yeniden temas senaryoları kurarsınız. Belirli bir süre yanıt vermeyen müşterilere otomatik ve kişiselleştirilmiş hatırlatmalar gider.",
        "Tüm bu akışların sonunda hangi kanalın ve mesajın gerçekten dönüştürdüğünü ölçersiniz. Bu veri, bütçenizi en verimli yere yönlendirmenizi sağlar.",
      ],
      en: [
        "Responding to a lead within the first minutes converts far better than responding hours later. Manual processes rarely catch that speed.",
        "Automated follow-up flows instantly assign a new lead to the right person and start the first contact automatically. No opportunity is left to cool.",
        "For cooling leads you build re-engagement scenarios. Customers who do not reply within a set time receive automatic, personalized reminders.",
        "At the end of all these flows you measure which channel and message actually convert. That data lets you direct your budget where it works best.",
      ],
    },
  },
  {
    slug: "yapay-zeka-ajanlari-operasyonda",
    seed: "vertexstarter-blog-ai-agents",
    date: "2026-04-10",
    readingMinutes: 7,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "Yapay Zeka", en: "Artificial Intelligence" },
    title: {
      tr: "Yapay zeka ajanları operasyonda ne işe yarar?",
      en: "What are AI agents good for in operations?",
    },
    excerpt: {
      tr: "AI ajanları sadece sohbet botu değildir. Doğru kurulduğunda satış, destek ve operasyonu yürüten çalışan sistemlere dönüşürler.",
      en: "AI agents are more than chatbots. Built right, they become working systems that run sales, support and operations.",
    },
    body: {
      tr: [
        "Yapay zeka ajanı, belirli bir görevi baştan sona yürütebilen bir sistemdir. Müşteri sorularını yanıtlayabilir, randevu alabilir, veri girebilir veya raporları hazırlayabilir.",
        "Operasyonda en çok değer yaratan nokta, tekrar eden ve kural temelli işlerdir. Bu işleri bir AI ajanına devrettiğinizde ekibiniz daha stratejik konulara odaklanır.",
        "Önemli olan ajanı şirketinizin gerçek bilgisiyle beslemektir. Ürün, fiyat ve süreç bilgisine sahip bir ajan, genel bir bottan çok daha isabetli çalışır.",
        "AI ajanlarını mevcut sistemlerinize bağladığınızda 7/24 çalışan, ölçeklenen ve hata oranı düşük bir operasyon katmanı elde edersiniz.",
      ],
      en: [
        "An AI agent is a system that can carry a specific task from start to finish. It can answer customer questions, book appointments, enter data or prepare reports.",
        "The most value in operations comes from repetitive, rule-based work. Delegating that work to an AI agent lets your team focus on more strategic matters.",
        "What matters is feeding the agent your company's real knowledge. An agent with product, price and process knowledge performs far more accurately than a generic bot.",
        "Connecting AI agents to your existing systems gives you an operations layer that runs 24/7, scales and keeps error rates low.",
      ],
    },
  },
];

function resolve(r: RawPost, locale: Locale): Post {
  return {
    slug: r.slug,
    seed: r.seed,
    date: r.date,
    readingMinutes: r.readingMinutes,
    author: r.author[locale],
    category: r.category[locale],
    title: r.title[locale],
    excerpt: r.excerpt[locale],
    body: r.body[locale],
  };
}

export const postSlugs = raw.map((r) => r.slug);

export function getPosts(locale: Locale): Post[] {
  return raw.map((r) => resolve(r, locale));
}

export function getPost(slug: string, locale: Locale): Post | undefined {
  const r = raw.find((p) => p.slug === slug);
  return r ? resolve(r, locale) : undefined;
}

export function relatedPosts(slug: string, category: string, locale: Locale, limit = 2): Post[] {
  return getPosts(locale)
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit);
}
