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
  {
    slug: "ai-musteri-destegi-nasil-kurulur",
    seed: "vertexstarter-blog-support-agent",
    date: "2026-06-02",
    readingMinutes: 6,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "AI Çalışanlar", en: "AI Employees" },
    title: {
      tr: "7/24 AI müşteri desteği nasıl kurulur?",
      en: "How to build 24/7 AI customer support",
    },
    excerpt: {
      tr: "Müşteri sorularını saniyeler içinde yanıtlayan bir AI destek çalışanı, hem memnuniyeti hem de dönüşümü artırır. Doğru kurulumun adımları.",
      en: "An AI support employee that answers questions in seconds lifts both satisfaction and conversion. The steps of a proper setup.",
    },
    body: {
      tr: [
        "Müşteri desteğinde en kritik metrik yanıt süresidir. Saatler süren yanıtlar müşteriyi kaybettirir; saniyeler içinde gelen yanıt ise güven ve satış üretir.",
        "AI destek çalışanının temeli sağlam bir bilgi tabanıdır. Ürün, fiyat, iade ve süreç bilginizi bir araya getirip ajanı bu bilgiyle beslediğinizde, yanıtlar genel değil size özgü olur.",
        "İkinci adım kanalları birleştirmektir. E-posta, canlı chat ve WhatsApp'tan gelen mesajlar tek bir sistemde toplanır; müşteri hangi kanaldan yazarsa yazsın tutarlı bir deneyim yaşar.",
        "Güven eşikleri belirlemek şarttır. Ajan emin olduğu konuları otomatik yanıtlar, emin olmadığında konuşmayı bir insana devreder. Böylece hız ve doğruluk birlikte korunur.",
        "Son olarak sonuçları ölçersiniz: otomatik çözüm oranı, ortalama yanıt süresi ve memnuniyet. Bu veriyle ajanı her ay biraz daha iyileştirirsiniz.",
      ],
      en: [
        "The most critical metric in customer support is response time. Answers that take hours lose the customer; a reply within seconds builds trust and drives sales.",
        "The foundation of an AI support employee is a solid knowledge base. When you gather your product, price, returns and process knowledge and feed the agent with it, answers become specific to you, not generic.",
        "The second step is unifying channels. Messages from email, live chat and WhatsApp are collected in a single system, so the customer gets a consistent experience whichever channel they use.",
        "Setting confidence thresholds is essential. The agent answers what it is sure of automatically and hands the conversation to a human when unsure. This keeps speed and accuracy together.",
        "Finally you measure results: auto-resolution rate, average response time and satisfaction. With this data you improve the agent a little more every month.",
      ],
    },
  },
  {
    slug: "whatsapp-otomasyonu-ile-satis",
    seed: "vertexstarter-blog-whatsapp",
    date: "2026-05-22",
    readingMinutes: 5,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "Otomasyon", en: "Automation" },
    title: {
      tr: "WhatsApp otomasyonuyla satışları artırmak",
      en: "Boosting sales with WhatsApp automation",
    },
    excerpt: {
      tr: "WhatsApp, Türkiye'de en çok kullanılan mesajlaşma kanalı. Doğru otomasyonla sipariş, randevu ve tekrar satışları buradan yönetebilirsiniz.",
      en: "WhatsApp is the most used messaging channel in Turkey. With the right automation you can run orders, appointments and repeat sales from there.",
    },
    body: {
      tr: [
        "Müşteriler artık e-posta yerine mesajlaşmayı tercih ediyor. WhatsApp üzerinden gelen bir soruya dakikalar içinde yanıt vermek, satışı kapatmanın en hızlı yollarından biri.",
        "Resmi WhatsApp Business API ile kurulan bir otomasyon; sıkça sorulan soruları yanıtlar, sipariş ve randevu alır, ödeme linki gönderir. Tüm bunları hesabınızı riske atmadan yapar.",
        "Terk edilen sepetler ve yanıtsız kalan sorular için otomatik hatırlatma akışları kurarsınız. Belirli süre sessiz kalan müşteriye kişiselleştirilmiş bir mesaj gider ve çoğu zaman satışı geri kazandırır.",
        "WhatsApp'ı CRM'inize bağladığınızda her konuşma kayıt altına alınır; hangi mesajın sattığını ölçer ve akışları sürekli iyileştirirsiniz.",
      ],
      en: [
        "Customers now prefer messaging over email. Replying to a WhatsApp question within minutes is one of the fastest ways to close a sale.",
        "An automation built on the official WhatsApp Business API answers frequently asked questions, takes orders and appointments and sends payment links, all without putting your account at risk.",
        "For abandoned carts and unanswered questions you build automatic reminder flows. A customer who stays silent for a set time receives a personalized message, which often wins the sale back.",
        "When you connect WhatsApp to your CRM, every conversation is recorded; you measure which message sells and continuously improve the flows.",
      ],
    },
  },
  {
    slug: "shopify-donusum-oranini-artirmak",
    seed: "vertexstarter-blog-shopify-cro",
    date: "2026-05-05",
    readingMinutes: 6,
    author: { tr: "VertexStarter Ekibi", en: "VertexStarter Team" },
    category: { tr: "E-Ticaret", en: "E-Commerce" },
    title: {
      tr: "Shopify'da dönüşüm oranını artırmanın yolları",
      en: "Ways to increase conversion rate on Shopify",
    },
    excerpt: {
      tr: "Mağazanıza trafik çekmek yetmez; asıl mesele ziyaretçiyi müşteriye çevirmek. Shopify'da dönüşümü artıran pratik dokunuşlar.",
      en: "Driving traffic to your store is not enough; the real work is turning visitors into customers. Practical touches that lift conversion on Shopify.",
    },
    body: {
      tr: [
        "Dönüşüm oranı, e-ticaretin en değerli metriğidir. Aynı trafikle dönüşümü ikiye katlamak, reklam bütçesini ikiye katlamaktan çok daha kârlıdır.",
        "İlk kazanım hızdır. Yavaş açılan sayfalar ziyaretçiyi kaçırır; görselleri optimize edip temayı hafiflettiğinizde hem kullanıcı hem de Google memnun olur.",
        "Ürün sayfası ikna eder ya da kaybettirir. Net faydalar, güçlü görseller, sosyal kanıt (yorumlar) ve şeffaf kargo bilgisi kararı hızlandırır.",
        "Sepet ve ödeme adımını kısaltmak şarttır. Gereksiz alanları kaldırmak, kapıda ödeme ve hızlı ödeme seçenekleri terk oranını düşürür.",
        "Upsell ve paket teklifleriyle sepet tutarını büyütürsünüz. Doğru anda sunulan tamamlayıcı ürün, hem müşteriye değer katar hem geliri artırır.",
      ],
      en: [
        "Conversion rate is the most valuable metric in e-commerce. Doubling conversion on the same traffic is far more profitable than doubling the ad budget.",
        "The first win is speed. Slow pages lose visitors; when you optimize images and lighten the theme, both users and Google are happy.",
        "The product page persuades or loses. Clear benefits, strong visuals, social proof (reviews) and transparent shipping info speed up the decision.",
        "Shortening the cart and checkout is a must. Removing unnecessary fields and offering cash-on-delivery and express checkout lowers the abandonment rate.",
        "With upsells and bundle offers you grow the cart value. A complementary product offered at the right moment adds value for the customer and lifts revenue.",
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
