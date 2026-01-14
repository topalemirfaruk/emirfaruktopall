
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Yardımcı fonksiyon: Resim URL'lerini otomatik optimize eder ve boyutlandırır
const optimizeImage = (url: string) => {
    // Eğer URL zaten bir parametre içeriyorsa (örneğin ?v=1), & ile ekle, yoksa ? ile başla
    const separator = url.includes('?') ? '&' : '?';
    // İstenen ideal boyut: w=1000, q=80, auto=format, fit=crop
    return `${url}${separator}auto=format&fit=crop&w=1000&q=80`;
}

async function main() {
    // Defines the new content structure
    const articleData = {
        title: "Aralık 2025: Açık Kaynak Dünyasında Yılın Son Büyük Gelişmeleri",
        slug: "2025-acik-kaynak-dunyasi-ozeti",
        excerpt: "2025'in finalinde Avrupa'nın dijital egemenlik hamleleri, Red Hat'in yapay zeka güvenliği yatırımı ve Linux dünyasındaki kritik LTS geçişleri gündeme damgasını vurdu.",
        content: `
2025 yılını geride bırakırken, Aralık ayı açık kaynak dünyası için sadece bir takvim yaprağı değil, stratejik kararların ve teknolojik sıçramaların ayı oldu. Özellikle Avrupa kamu kurumlarının **"Vendor Lock-in" (Tedarikçi Kilidi)** endişesiyle başlattığı devrim niteliğindeki geçiş planları ve yapay zeka güvenliğindeki açık kaynak hamleleri, 2026'nın nasıl geçeceğinin sinyallerini veriyor.

İşte editörün seçimiyle, Aralık ayının en çarpıcı gelişmeleri ve detaylı analizleri.


## Avrupa'dan Bulut Devlerine "Gizlilik" Uyarısı
**2 Aralık 2025 | İsviçre**

<img src="${optimizeImage("https://itsfoss.com/content/images/2025/12/swiss-data-protection-group-resolution.png")}" alt="Veri Gizliliği ve Bulut" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Veri gizliliği konusunda dünyanın en katı standartlarına sahip ülkelerinden biri olan **İsviçre**, veri koruma otoriteleri aracılığıyla kritik bir uyarı yayınladı. Kamu kurumlarının, hassas vatandaş verilerini uluslararası bulut sağlayıcılarına (Hyperscalers) emanet etmesinin **büyük risk** taşıdığı vurgulandı.

Raporda, özellikle **Microsoft 365** gibi yaygın SaaS çözümlerinin, İsviçre ve AB gizlilik standartlarını tam olarak karşılayamadığı belirtiliyor. Bu durum, kurumları **Nextcloud** veya **OwnCloud** gibi yerinde barındırılan (on-premise) açık kaynak alternatiflere yönelmeye zorluyor.

> *"Veri egemenliği, dijital çağın en kritik ulusal güvenlik meselesidir."*

🔗 [Kaynak Haberi İncele](https://lnkd.in/dDAjztMu)


<br>

## Almanya'dan Açık Kaynak ile Dev Tasarruf: 15 Milyon €
**8 Aralık 2025 | Schleswig-Holstein, Almanya**

<img src="${optimizeImage("https://itsfoss.com/content/images/2025/12/german-state-boots-microsoft.png")}" alt="Almanya Bayrağı ve Teknoloji" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Almanya'nın Schleswig-Holstein eyaleti, "Kamu Parası Kamu Koduna" (*Public Money, Public Code*) prensibini hayata geçiriyor. Eyalet yönetimi, 2026 mali yılı itibarıyla Microsoft lisanslarından tamamen çıkarak **LibreOffice** ve **Linux** tabanlı sistemlere geçiş sayesinde yıllık **15 Milyon Euro** tasarruf hedeflediklerini açıkladı.

Bu sadece bir mali tasarruf değil; aynı zamanda dijital bağımsızlık ilanı. Eyalet, bu bütçeyi yerel açık kaynak geliştiricilerini desteklemek için kullanmayı planlıyor.

🔗 [Detaylı Rapor](https://lnkd.in/dNs4nQ3x)


<br>

## Red Hat’ten Yapay Zeka Güvenliği Hamlesi: Chatterbox Labs
**16 Aralık 2025**

<img src="${optimizeImage("https://ittech-pulse.com/wp-content/uploads/2025/12/Red-Hat-Accelerates-AI-Trust-and-Security-with-Chatterbox-Labs-Acquisition.png")}" alt="Yapay Zeka ve Güvenlik" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Kurumsal Linux pazarının lideri **Red Hat**, yapay zeka güvenliği (AI Safety) alanında uzmanlaşmış **Chatterbox Labs**'i satın alarak portföyünü güçlendirdi.

Red Hat'in bu hamlesi, özellikle LLM (Büyük Dil Modelleri) kullanımı sırasında ortaya çıkabilecek "halüsinasyon" ve "veri sızıntısı" risklerini minimize etmeyi hedefliyor. En heyecan verici kısım ise Red Hat'in **Chatterbox teknolojilerini açık kaynaklı hale getirme** sözü vermesi. Bu, güvenli yapay zekanın demokratikleşmesi adına dev bir adım.

🔗 [Satın Alma Duyurusu](https://lnkd.in/dCf4pt2q)


<br>

## Danimarka Microsoft Bağımlılığına "Dur" Diyor
**18 Aralık 2025 | Kopenhag**

<img src="${optimizeImage("https://itsfoss.com/content/images/2025/12/denmark-road-transport-authority-ditches-microsoft.png")}" alt="Kopenhag Şehri" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Danimarka Karayolu Trafik Otoritesi (*Færdselsstyrelsen*), kamu bilişim altyapısında Microsoft ekosistemine olan bağımlılığı azaltmak için düğmeye bastı. **SIA Open** projesi kapsamında başlatılan pilot uygulama, kamu dairelerinin tescilli yazılımlar yerine, birlikte çalışabilirliği (interoperability) yüksek açık kaynak çözümlere geçişini test ediyor.

🔗 [Proje Detayları](https://lnkd.in/drR5T5JR)


<br>

## Çekirdek Güncellemesi: Linux 6.18 LTS Sahneye Çıktı
**18 Aralık 2025**

<img src="${optimizeImage("https://i0.wp.com/9to5linux.com/wp-content/uploads/2025/12/lk617e.webp?resize=1400%2C800&ssl=1")}" alt="Linux Kod Ekranı" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Linux sistem yöneticileri için değişim zamanı! Linux 6.17 serisi yaşam döngüsünü tamamlarken, **Linux 6.18** resmen **LTS (Uzun Süreli Destek)** statüsü kazandı.

**Neden 6.18'e Geçmelisiniz?**
*   **2 Yıllık Destek:** 2027 sonuna kadar güvenlik yamaları garanti.
*   **Performans:** Yeni nesil NVMe sürücüleri ve Rust tabanlı bellek yönetimi iyileştirmeleri.
*   **Donanım:** 2025 sonu çıkan tüm yeni işlemciler için tam destek.

🔗 [Kernel Sürüm Notları](https://lnkd.in/df24Qbyq)


<br>

## Docker: "Hardened" İmajlar Artık Herkese Açık
**19 Aralık 2025**

<img src="${optimizeImage("https://www.amazic.com/media/omnyfy/post/media/Unlimited_access_to_Docker_Hardened_Images_Because_security_should_be_affordable_always.jpg")}" alt="Konteyner ve Nakliye" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Konteyner dünyasında güvenlik standartları değişiyor. Docker, daha önce sadece ücretli kurumsal abonelerine sunduğu **"Güçlendirilmiş İmajlar" (Hardened Images)** kütüphanesini **Apache 2.0 Lisansı** ile herkesin kullanımına açtı.

Bu, artık bireysel geliştiricilerin ve küçük start-up'ların da bankacılık seviyesinde güvenliğe sahip konteyner altyapıları kurabileceği anlamına geliyor. DevSecOps süreçleri için büyük bir kazanım.

🔗 [Docker Blog](https://lnkd.in/dmF-y9DJ)


<br>

## PostgreSQL'de Yapay Zeka Devrimi: BM25 Algoritması
**22 Aralık 2025**

<img src="${optimizeImage("https://images.unsplash.com/photo-1558494949-efc5270f9c23")}" alt="Veritabanı Sunucuları" class="w-full h-64 object-cover rounded-xl shadow-md my-4 border border-[#22c55e]/20" />

Vektör veritabanı savaşlarında PostgreSQL vites artırıyor. Tiger Data (eski adıyla Timescale), **pg_textsearch** eklentisi ile **BM25 (Best Matching 25)** algoritmasını PostgreSQL'e entegre etti.

**Bu Ne Anlama Geliyor?**
Özellikle RAG (Retrieval-Augmented Generation) tabanlı yapay zeka uygulamaları geliştirenler için, veritabanı sorgularının alaka düzeyi (relevance) inanılmaz derecede artıyor. Artık ElasticSearch gibi ek katmanlara ihtiyaç duymadan, doğrudan PostgreSQL içinde yüksek kaliteli arama sonuçları almak mümkün.

🔗 [Teknik İnceleme](https://cdn.thenewstack.io/media/2025/12/11cf57b8-postgres-1024x576.jpg)


*2025, açık kaynağın "alternatif" olmaktan çıkıp "standart" haline geldiği yıl olarak tarihe geçti. 2026'da bu ivmenin artarak devam etmesini bekliyoruz. Açık kalın!*
`,
        category: "Açık Kaynak",
        image: optimizeImage("https://images.unsplash.com/photo-1550751827-4bd374c3f58b"),
        author: "Emir Faruk Topal",
        avatar: "https://github.com/topalemirfaruk.png",
        date: "14 Ocak 2026",
        readTime: "7 dk",
        tags: "aralik,2025,haberler,linux,almanya,microsoft,redhat,docker,postgresql",
    }

    const article = await prisma.article.upsert({
        where: { slug: "2025-acik-kaynak-dunyasi-ozeti" },
        update: {
            title: articleData.title,
            content: articleData.content,
            excerpt: articleData.excerpt,
            readTime: articleData.readTime,
            tags: articleData.tags,
            // update date to simulate modification? or keep static. User wants content update.
        },
        create: articleData
    })

    console.log("Article updated:", article.slug)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
