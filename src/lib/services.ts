import type { Locale } from "@/i18n/messages";

type L = { tr: string; en: string };
type LArr = { tr: string[]; en: string[] };
type QA = { q: string; a: string };
type LFaq = { tr: QA[]; en: QA[] };

type RawService = {
  slug: string;
  seed: string;
  name: L;
  tagline: L;
  intro: L;
  benefits: LArr;
  features: LArr;
  faq: LFaq;
};

export type Service = {
  slug: string;
  seed: string;
  name: string;
  tagline: string;
  intro: string;
  benefits: string[];
  features: string[];
  faq: QA[];
};

const raw: RawService[] = [
  {
    slug: "musteri-bulma",
    seed: "nexora-b2b-outreach",
    name: { tr: "AI Müşteri Bulma Otomasyonu", en: "AI Lead Generation Automation" },
    tagline: {
      tr: "İdeal müşterinizi bulan, zenginleştiren ve iletişime geçen bir sistem.",
      en: "A system that finds, enriches and reaches out to your ideal customers.",
    },
    intro: {
      tr: "Doğru kişiyi bulmak için saatlerinizi harcamayın. Hedef kitlenizi tanımlıyor, listeleri her gün otomatik zenginleştiriyor ve kişiselleştirilmiş çok kanallı outreach ile pipeline'ınızı besliyoruz.",
      en: "Stop spending hours finding the right person. We define your target audience, enrich lists automatically every day and feed your pipeline with personalized multichannel outreach.",
    },
    benefits: {
      tr: ["Daha fazla nitelikli görüşme", "Sıfır manuel liste araştırması", "7/24 çalışan outreach", "Ölçülebilir pipeline"],
      en: ["More qualified meetings", "Zero manual list research", "24/7 outreach", "Measurable pipeline"],
    },
    features: {
      tr: ["İdeal müşteri profili (ICP) tanımı", "Otomatik lead zenginleştirme", "Kişiselleştirilmiş e-posta & LinkedIn dizileri", "CRM'e otomatik kayıt ve takip"],
      en: ["Ideal customer profile (ICP) definition", "Automatic lead enrichment", "Personalized email & LinkedIn sequences", "Automatic CRM logging and follow-up"],
    },
    faq: {
      tr: [
        { q: "Lead verileri nereden geliyor?", a: "Herkese açık kaynaklardan ve izinli veri sağlayıcılardan; hepsi KVKK/GDPR uyumlu akışlarda." },
        { q: "Spam riskim olur mu?", a: "Hayır. Hacim, ısınma ve kişiselleştirme kurallarıyla itibar korunur; mesajlar gerçek ve alakalı olur." },
        { q: "Ne kadar sürede sonuç görürüm?", a: "İlk kampanyalar birkaç hafta içinde canlıya çıkar; sonuçları haftalık ölçer ve iyileştiririz." },
      ],
      en: [
        { q: "Where does lead data come from?", a: "From public sources and permitted data providers, all in KVKK/GDPR-compliant flows." },
        { q: "Is there a spam risk?", a: "No. Volume, warm-up and personalization rules protect reputation; messages stay real and relevant." },
        { q: "How soon will I see results?", a: "First campaigns go live within a few weeks; we measure and improve weekly." },
      ],
    },
  },
  {
    slug: "eposta-otomasyonu",
    seed: "vertexstarter-blog-lead-recovery",
    name: { tr: "AI E-posta Otomasyonu", en: "AI Email Automation" },
    tagline: {
      tr: "Gelen kutunuzu yöneten, yanıtlayan ve takip eden bir AI çalışanı.",
      en: "An AI employee that manages, replies to and follows up your inbox.",
    },
    intro: {
      tr: "E-postalarınızı kategorilere ayırıyor, sık soruları yanıtlıyor, teklif ve takip e-postalarını otomatik gönderiyoruz. Hiçbir fırsat gelen kutusunda kaybolmuyor.",
      en: "We categorize your emails, answer common questions and send offers and follow-ups automatically. No opportunity gets lost in the inbox.",
    },
    benefits: {
      tr: ["Anında yanıt süresi", "Kaçmayan takipler", "Daha az manuel iş", "Tutarlı marka dili"],
      en: ["Instant response time", "No missed follow-ups", "Less manual work", "Consistent brand voice"],
    },
    features: {
      tr: ["Otomatik sınıflandırma ve önceliklendirme", "Bilgi tabanından yanıt üretimi", "Otomatik takip dizileri", "Gmail / Outlook entegrasyonu"],
      en: ["Automatic classification and prioritization", "Answers generated from your knowledge base", "Automated follow-up sequences", "Gmail / Outlook integration"],
    },
    faq: {
      tr: [
        { q: "Yanlış yanıt verir mi?", a: "Güven eşiği altında kalan konuları otomatik göndermez, size iletir. Kontrol sizde kalır." },
        { q: "Mevcut e-posta sağlayıcımla çalışır mı?", a: "Evet, Gmail ve Outlook başta olmak üzere yaygın sağlayıcılarla entegre oluruz." },
        { q: "Gönderim öncesi onay alabilir miyim?", a: "İsteğe bağlı; tam otomatik ya da onaylı taslak modunda çalıştırabiliriz." },
      ],
      en: [
        { q: "Can it reply incorrectly?", a: "It never auto-sends topics below the confidence threshold; it routes them to you. You stay in control." },
        { q: "Does it work with my email provider?", a: "Yes, we integrate with common providers, primarily Gmail and Outlook." },
        { q: "Can I approve before sending?", a: "Optional; we can run fully automatic or in approved-draft mode." },
      ],
    },
  },
  {
    slug: "musteri-destek",
    seed: "vertexstarter-blog-support-agent",
    name: { tr: "AI Müşteri Destek Agent", en: "AI Customer Support Agent" },
    tagline: {
      tr: "E-posta, chat ve WhatsApp'ta 7/24 çalışan bir destek ekibi.",
      en: "A support team working 24/7 across email, chat and WhatsApp.",
    },
    intro: {
      tr: "Müşteri sorularını saniyeler içinde yanıtlayan, talepleri sınıflandıran ve çözüme ulaştıran bir AI destek çalışanı kuruyoruz. Emin olmadığında konuşmayı bir insana devreder.",
      en: "We build an AI support employee that answers questions in seconds, classifies requests and drives them to resolution. When unsure, it hands the conversation to a human.",
    },
    benefits: {
      tr: ["Yanıt süresi saniyelere iner", "Yüksek otomatik çözüm oranı", "7/24 kesintisiz destek", "Artan müşteri memnuniyeti"],
      en: ["Response time drops to seconds", "High auto-resolution rate", "24/7 uninterrupted support", "Higher customer satisfaction"],
    },
    features: {
      tr: ["Çok kanallı (e-posta, chat, WhatsApp)", "Kendi bilgi tabanınıza bağlı yanıtlar", "İnsana güvenli devir", "Canlı performans panosu"],
      en: ["Multichannel (email, chat, WhatsApp)", "Answers connected to your knowledge base", "Safe handoff to a human", "Live performance dashboard"],
    },
    faq: {
      tr: [
        { q: "Çok dilli destek verir mi?", a: "Evet, başta Türkçe ve İngilizce olmak üzere onlarca dilde çalışır." },
        { q: "Karmaşık talepleri nasıl yönetir?", a: "Çözemediği veya emin olmadığı konuları bağlamıyla birlikte ekibinize aktarır." },
        { q: "Kurulum ne kadar sürer?", a: "Genelde 4-6 hafta; bilgi tabanınızın hazır olma durumuna göre değişir." },
      ],
      en: [
        { q: "Does it support multiple languages?", a: "Yes, it works in dozens of languages, primarily Turkish and English." },
        { q: "How does it handle complex requests?", a: "It hands topics it can't resolve or is unsure about to your team with full context." },
        { q: "How long does setup take?", a: "Usually 4-6 weeks, depending on how ready your knowledge base is." },
      ],
    },
  },
  {
    slug: "satis-agent",
    seed: "nexora-ads-performance",
    name: { tr: "AI Satış Agent", en: "AI Sales Agent" },
    tagline: {
      tr: "Lead'leri niteleyen, teklif sunan ve satışa kadar takip eden bir agent.",
      en: "An agent that qualifies leads, presents offers and follows up to the sale.",
    },
    intro: {
      tr: "Gelen her lead'i anında niteliyor, doğru teklifi sunuyor ve satışa dönene kadar takip ediyoruz. Ekibiniz yalnızca sıcak, satışa hazır görüşmelere giriyor.",
      en: "We qualify every incoming lead instantly, present the right offer and follow up until it converts. Your team only joins warm, sales-ready conversations.",
    },
    benefits: {
      tr: ["Daha yüksek dönüşüm oranı", "Anında lead niteleme", "Kaçmayan takip", "Ekip zamanının verimli kullanımı"],
      en: ["Higher conversion rate", "Instant lead qualification", "No missed follow-up", "Efficient use of team time"],
    },
    features: {
      tr: ["Otomatik lead skorlama", "Kişiselleştirilmiş teklif sunumu", "Randevu oluşturma", "CRM ve takvim entegrasyonu"],
      en: ["Automatic lead scoring", "Personalized offer delivery", "Appointment booking", "CRM and calendar integration"],
    },
    faq: {
      tr: [
        { q: "Satışı agent mı kapatıyor?", a: "Agent niteler, ısıtır ve randevu oluşturur; kapanışı isterseniz ekibiniz yapar." },
        { q: "Hangi kanallarda çalışır?", a: "E-posta, WhatsApp ve web chat başta olmak üzere lead'in geldiği kanalda." },
        { q: "Kendi teklif yapımı kullanır mı?", a: "Evet, teklif ve fiyat mantığınızı sisteme tanımlarız." },
      ],
      en: [
        { q: "Does the agent close the sale?", a: "The agent qualifies, warms up and books; your team closes if you prefer." },
        { q: "Which channels does it work on?", a: "On the channel the lead comes from, primarily email, WhatsApp and web chat." },
        { q: "Does it use my own offer structure?", a: "Yes, we configure your offer and pricing logic into the system." },
      ],
    },
  },
  {
    slug: "icerik-uretim",
    seed: "nexora-content-pipeline",
    name: { tr: "AI İçerik Üretim Agent", en: "AI Content Production Agent" },
    tagline: {
      tr: "Markanızın diline uygun içeriği ölçekte üreten bir hat.",
      en: "A pipeline that produces on-brand content at scale.",
    },
    intro: {
      tr: "Blog yazıları, sosyal medya gönderileri, e-posta kampanyaları ve video senaryolarını markanızın sesine uygun, uçtan uca bir hatla üretiyoruz.",
      en: "We produce blog posts, social media content, email campaigns and video scripts in your brand voice with an end-to-end pipeline.",
    },
    benefits: {
      tr: ["Katlanan üretim hızı", "Tutarlı marka sesi", "Sürekli içerik akışı", "Daha düşük üretim maliyeti"],
      en: ["Multiplied production speed", "Consistent brand voice", "Continuous content flow", "Lower production cost"],
    },
    features: {
      tr: ["Blog & SEO içeriği", "Sosyal medya gönderileri", "E-posta ve reklam metinleri", "Video senaryoları ve görsel briefler"],
      en: ["Blog & SEO content", "Social media posts", "Email and ad copy", "Video scripts and visual briefs"],
    },
    faq: {
      tr: [
        { q: "İçerik özgün mü?", a: "Evet; markanızın tonu, örnekleri ve kurallarıyla beslenmiş özgün içerik üretilir." },
        { q: "Onay süreci nasıl?", a: "Taslaklar size gelir; onayladıklarınız yayımlanır ya da otomatik akışa girer." },
        { q: "SEO'ya uygun mu?", a: "Evet, anahtar kelime ve yapı önerileriyle arama motoru dostu üretilir." },
      ],
      en: [
        { q: "Is the content original?", a: "Yes; original content is produced, informed by your brand's tone, examples and rules." },
        { q: "What is the approval process?", a: "Drafts come to you; approved ones are published or enter the automated flow." },
        { q: "Is it SEO-friendly?", a: "Yes, produced search-engine friendly with keyword and structure suggestions." },
      ],
    },
  },
  {
    slug: "workflow-otomasyon",
    seed: "nexora-automation-ops",
    name: { tr: "Workflow Otomasyonları", en: "Workflow Automation" },
    tagline: {
      tr: "Tekrar eden iş akışlarını uçtan uca otomatikleştirin.",
      en: "Automate repetitive workflows end to end.",
    },
    intro: {
      tr: "300+ araç arasında veriyi taşıyan, manuel adımları ortadan kaldıran otomasyonlar kuruyoruz. Ekibiniz veri girişiyle değil, değer üretmekle uğraşır.",
      en: "We build automations that move data across 300+ tools and remove manual steps. Your team focuses on creating value, not data entry.",
    },
    benefits: {
      tr: ["Haftalık saatlerce tasarruf", "Daha az insan hatası", "Bağlı, akan operasyon", "Ölçeklenebilir süreçler"],
      en: ["Hours saved weekly", "Fewer human errors", "Connected, flowing operations", "Scalable processes"],
    },
    features: {
      tr: ["n8n / Make / Zapier ile kurulum", "300+ araç entegrasyonu", "Belge ve veri işleme", "Hata izleme ve uyarılar"],
      en: ["Built with n8n / Make / Zapier", "300+ tool integrations", "Document and data processing", "Error monitoring and alerts"],
    },
    faq: {
      tr: [
        { q: "Hangi araçlarla çalışır?", a: "n8n, Make, Zapier ve 300+ uygulama; kullandığınız yığının üzerine kurarız." },
        { q: "Mevcut sistemimi bozar mı?", a: "Hayır, üzerine akıllı bir katman kurarız; mevcut araçlarınız çalışmaya devam eder." },
        { q: "Bakım sağlıyor musunuz?", a: "Evet, izleme, bakım ve iyileştirme için aylık destek paketlerimiz var." },
      ],
      en: [
        { q: "Which tools does it work with?", a: "n8n, Make, Zapier and 300+ apps; we build on top of your stack." },
        { q: "Will it break my current system?", a: "No, we add a smart layer; your existing tools keep working." },
        { q: "Do you provide maintenance?", a: "Yes, we have monthly packages for monitoring, maintenance and improvement." },
      ],
    },
  },
  {
    slug: "crm-otomasyon",
    seed: "vertexstarter-blog-data-systems",
    name: { tr: "CRM Otomasyonları", en: "CRM Automation" },
    tagline: {
      tr: "Satış verinizi tek bir görünür sistemde toplayın ve otomatikleştirin.",
      en: "Unify and automate your sales data in one visible system.",
    },
    intro: {
      tr: "Teklif, müşteri takibi, satış aşamaları ve raporlamayı otomatikleştirerek CRM'inizi gerçekten çalışan bir büyüme sistemine dönüştürüyoruz.",
      en: "We automate quotes, customer tracking, sales stages and reporting to turn your CRM into a growth system that actually works.",
    },
    benefits: {
      tr: ["Tek gerçek veri kaynağı", "Otomatik takip ve hatırlatma", "Canlı satış görünürlüğü", "Daha hızlı satış döngüsü"],
      en: ["Single source of truth", "Automatic follow-up and reminders", "Live sales visibility", "Faster sales cycle"],
    },
    features: {
      tr: ["Lead ve fırsat otomasyonu", "Otomatik veri girişi ve senkron", "Satış panoları ve raporlar", "HubSpot / Salesforce entegrasyonu"],
      en: ["Lead and deal automation", "Automatic data entry and sync", "Sales dashboards and reports", "HubSpot / Salesforce integration"],
    },
    faq: {
      tr: [
        { q: "Hangi CRM'lerle çalışıyorsunuz?", a: "HubSpot, Salesforce, Pipedrive ve daha fazlası; sıfırdan da kurabiliriz." },
        { q: "Mevcut verimi taşır mısınız?", a: "Evet, mevcut verinizi temizler, birleştirir ve yeni sisteme aktarırız." },
        { q: "Ekibim kullanmayı öğrenir mi?", a: "Evet, kurulum sonrası ekip eğitimi ve dokümantasyon sağlıyoruz." },
      ],
      en: [
        { q: "Which CRMs do you work with?", a: "HubSpot, Salesforce, Pipedrive and more; we can also build from scratch." },
        { q: "Do you migrate my existing data?", a: "Yes, we clean, merge and migrate your existing data to the new system." },
        { q: "Will my team learn to use it?", a: "Yes, we provide team training and documentation after setup." },
      ],
    },
  },
  {
    slug: "yapay-zeka-danismanligi",
    seed: "vertexstarter-studio-team",
    name: { tr: "Yapay Zeka Danışmanlığı", en: "AI Consulting" },
    tagline: {
      tr: "Nereden başlayacağınızı ve neyi otomatikleştireceğinizi netleştirin.",
      en: "Clarify where to start and what to automate.",
    },
    intro: {
      tr: "Trend peşinde koşmadan, işinizde gerçek etki yaratacak bir AI ve otomasyon yol haritası çıkarıyoruz. Sabit kapsam, ölçülebilir çıktılarla.",
      en: "Without chasing trends, we build an AI and automation roadmap that creates real impact in your business, with fixed scope and measurable outcomes.",
    },
    benefits: {
      tr: ["Net öncelikler", "ROI odaklı yol haritası", "Riski azaltılmış yatırım", "Ekip için ortak dil"],
      en: ["Clear priorities", "ROI-focused roadmap", "De-risked investment", "A shared language for the team"],
    },
    features: {
      tr: ["AI hazırlık analizi", "Süreç denetimi ve fırsat haritası", "Otomasyon yol haritası ve PRD'ler", "Ekip eğitimi"],
      en: ["AI readiness assessment", "Process audit and opportunity map", "Automation roadmap and PRDs", "Team training"],
    },
    faq: {
      tr: [
        { q: "Sonunda elimde ne olur?", a: "Uygulanabilir bir yol haritası, önceliklendirilmiş projeler, PRD'ler ve bütçe modeli." },
        { q: "Uygulamayı da yapıyor musunuz?", a: "Evet, strateji sonrası kurulumu Kurulum Sistemleri kapsamında üstlenebiliriz." },
        { q: "Ne kadar sürüyor?", a: "Kapsama göre 2-12 hafta; hızlı teşhisten kapsamlı yol haritasına." },
      ],
      en: [
        { q: "What do I get at the end?", a: "An actionable roadmap, prioritized projects, PRDs and a budget model." },
        { q: "Do you also do the implementation?", a: "Yes, after strategy we can take on the build under Build Systems." },
        { q: "How long does it take?", a: "2-12 weeks depending on scope, from rapid diagnosis to a full roadmap." },
      ],
    },
  },
  {
    slug: "ozel-yazilim",
    seed: "vertexstarter-blog-ai-agents",
    name: { tr: "Özel AI Yazılım Geliştirme", en: "Custom AI Software Development" },
    tagline: {
      tr: "Standart çözümün yetmediği yerde size özel sistemler kuruyoruz.",
      en: "Where off-the-shelf falls short, we build systems tailored to you.",
    },
    intro: {
      tr: "Sektörünüze özel AI ajanları, modeller, entegrasyonlar ve uygulamalar geliştiriyoruz. Fikirden üretime, ölçeklenebilir ve güvenli.",
      en: "We develop AI agents, models, integrations and apps tailored to your industry. From idea to production, scalable and secure.",
    },
    benefits: {
      tr: ["Tam size özel çözüm", "Rakiplerden farklılaşma", "Ölçeklenebilir mimari", "Sahiplik sizde"],
      en: ["Fully bespoke solution", "Differentiation from competitors", "Scalable architecture", "You own it"],
    },
    features: {
      tr: ["Özel AI ajanları ve modeller", "RAG ve bilgi tabanı sistemleri", "API ve sistem entegrasyonları", "Web ve uygulama geliştirme"],
      en: ["Custom AI agents and models", "RAG and knowledge-base systems", "API and system integrations", "Web and app development"],
    },
    faq: {
      tr: [
        { q: "Süreç nasıl ilerliyor?", a: "Keşif, PRD, prototip, geliştirme ve teslim; her adımda sizinle ilerleriz." },
        { q: "Verilerim güvende mi?", a: "Evet, verileriniz izinli, şifreli ve denetlenebilir akışlarda kalır; sahiplik sizde." },
        { q: "Teslim sonrası destek var mı?", a: "Evet, bakım, iyileştirme ve ölçekleme için sürekli destek sağlıyoruz." },
      ],
      en: [
        { q: "How does the process work?", a: "Discovery, PRD, prototype, development and delivery; we move with you at every step." },
        { q: "Is my data secure?", a: "Yes, your data stays in permitted, encrypted, auditable flows; you keep ownership." },
        { q: "Is there support after delivery?", a: "Yes, we provide ongoing support for maintenance, improvement and scaling." },
      ],
    },
  },
];

function resolve(r: RawService, locale: Locale): Service {
  return {
    slug: r.slug,
    seed: r.seed,
    name: r.name[locale],
    tagline: r.tagline[locale],
    intro: r.intro[locale],
    benefits: r.benefits[locale],
    features: r.features[locale],
    faq: r.faq[locale],
  };
}

export const serviceSlugs = raw.map((r) => r.slug);

export function getServices(locale: Locale): Service[] {
  return raw.map((r) => resolve(r, locale));
}

export function getService(slug: string, locale: Locale): Service | undefined {
  const r = raw.find((s) => s.slug === slug);
  return r ? resolve(r, locale) : undefined;
}
