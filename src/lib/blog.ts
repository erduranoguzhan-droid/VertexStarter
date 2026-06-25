export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  seed: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "veriyi-buyume-sistemine-donusturmek",
    title: "Veriyi büyüme sistemine dönüştürmenin 4 adımı",
    excerpt:
      "Çoğu şirket veriye sahip ama onu kullanılabilir bir sisteme çeviremez. İşte dağınık veriyi ölçülebilir büyümeye taşıyan pratik bir çerçeve.",
    category: "Veri Sistemleri",
    author: "VertexStarter Ekibi",
    date: "2026-05-12",
    readingMinutes: 6,
    seed: "vertexstarter-blog-data-systems",
    body: [
      "Şirketlerin çoğu veri toplar fakat bu veri farklı panellerde, tablolarda ve uygulamalarda dağılmış durumdadır. Veri tek başına değer üretmez; ancak doğru sisteme bağlandığında büyümeye dönüşür.",
      "İlk adım veriyi tek bir yerde toplamaktır. Reklam, satış, operasyon ve müşteri verisini ortak bir kaynağa bağladığınızda kararlar tahmine değil gerçeğe dayanır.",
      "İkinci adım tekrar eden işleri otomatikleştirmektir. Manuel raporlama, takip ve veri girişi hem zaman kaybıdır hem de hata üretir. Bu işleri kurallara bağladığınızda ekibiniz asıl işine odaklanır.",
      "Üçüncü adım sonuçları görünür kılmaktır. Canlı paneller, ekiplerin doğru metriğe bakmasını ve sorunları erken görmesini sağlar.",
      "Son adım ölçeklendirmedir. Kazanan sistemleri standartlaştırır ve şirketin tamamına yayarsınız. Veri böylece bir maliyet kalemi değil, büyüme motoru olur.",
    ],
  },
  {
    slug: "kacan-musterileri-otomasyonla-yakalamak",
    title: "Kaçan müşterileri otomasyonla geri kazanmak",
    excerpt:
      "Geç dönülen lead'ler ve takip edilmeyen süreçler sessizce gelir kaybına yol açar. Otomatik takip akışları bu kaybı nasıl durdurur?",
    category: "Otomasyon",
    author: "VertexStarter Ekibi",
    date: "2026-04-28",
    readingMinutes: 5,
    seed: "vertexstarter-blog-lead-recovery",
    body: [
      "Bir lead'e ilk dakikalarda dönmek, saatler sonra dönmeye göre çok daha yüksek dönüşüm getirir. Manuel süreçlerde bu hız çoğu zaman yakalanamaz.",
      "Otomatik takip akışları, yeni bir lead geldiğinde doğru kişiye anında atama yapar ve ilk teması otomatik başlatır. Böylece hiçbir fırsat soğumaya bırakılmaz.",
      "Soğuyan lead'ler için yeniden temas senaryoları kurarsınız. Belirli bir süre yanıt vermeyen müşterilere otomatik ve kişiselleştirilmiş hatırlatmalar gider.",
      "Tüm bu akışların sonunda hangi kanalın ve mesajın gerçekten dönüştürdüğünü ölçersiniz. Bu veri, bütçenizi en verimli yere yönlendirmenizi sağlar.",
    ],
  },
  {
    slug: "yapay-zeka-ajanlari-operasyonda",
    title: "Yapay zeka ajanları operasyonda ne işe yarar?",
    excerpt:
      "AI ajanları sadece sohbet botu değildir. Doğru kurulduğunda satış, destek ve operasyonu yürüten çalışan sistemlere dönüşürler.",
    category: "Yapay Zeka",
    author: "VertexStarter Ekibi",
    date: "2026-04-10",
    readingMinutes: 7,
    seed: "vertexstarter-blog-ai-agents",
    body: [
      "Yapay zeka ajanı, belirli bir görevi baştan sona yürütebilen bir sistemdir. Müşteri sorularını yanıtlayabilir, randevu alabilir, veri girebilir veya raporları hazırlayabilir.",
      "Operasyonda en çok değer yaratan nokta, tekrar eden ve kural temelli işlerdir. Bu işleri bir AI ajanına devrettiğinizde ekibiniz daha stratejik konulara odaklanır.",
      "Önemli olan ajanı şirketinizin gerçek bilgisiyle beslemektir. Ürün, fiyat ve süreç bilgisine sahip bir ajan, genel bir bottan çok daha isabetli çalışır.",
      "AI ajanlarını mevcut sistemlerinize bağladığınızda 7/24 çalışan, ölçeklenen ve hata oranı düşük bir operasyon katmanı elde edersiniz.",
    ],
  },
];

export const categories = Array.from(new Set(posts.map((p) => p.category)));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, category: string, limit = 2) {
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit);
}
