import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Helper to optimize image URLs (generic)
const optimizeImage = (url: string, w: number = 1000, h?: number) => {
  const separator = url.includes('?') ? '&' : '?';
  const heightParam = h ? `&h=${h}` : '';
  return `${url}${separator}auto=format&fit=crop&w=${w}${heightParam}&q=80`;
}

async function main() {
  const title = "Linux Mint 22.3 \"Zena\" Resmen Yayınlandı! İşte İki Yeni Uygulama ve Yenilikler"
  const slug = "linux-mint-22-3-zena-yayinlandi-yenilikler-inceleme"

  const excerpt = "Cinnamon 6.6 masaüstü ortamı, yenilenen menü tasarımı ve gelişmiş sistem yönetim araçlarıyla gelen Linux Mint 22.3 \"Zena\" sürümü, 2029'a kadar uzun süreli destek (LTS) sunuyor."

  const content = `
<div class="space-y-6">
  <p class="lead text-xl text-gray-300">
    Birkaç ay önce Linux çekirdeği 6.14, XDG Desktop Portal XApp üzerinde vurgu rengi desteği ve giriş ekranında bulanıklık efektleri gibi birçok yenilikle gelen Linux Mint 22.2 "Zara" tanıtılmıştı.
  </p>

  <p>
    Şimdi ise serinin bir sonraki halkası olan <strong>Linux Mint 22.3 "Zena"</strong>, Cinnamon masaüstü ortamına getirdiği incelikli dokunuşlar ve yeni sistem yönetim araçlarıyla bir ara sürüm olarak karşımızda.
  </p>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Linux Mint 22.3 "Zena": Neleri Farklı Yapıyor?</h2>
  
  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/size/w1000/2025/12/linux-mint-22-3-fastfetch-output.png", 1200, 740)}" 
        alt="Linux Mint 22.3 Zena Fastfetch Ekran Görüntüsü" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
    <p class="text-sm text-center text-gray-500 mt-2 italic w-full">
      Linux Mint 22.3 "Zena" sürümünün Fastfetch çıktısı.
    </p>

  <p>
    Linux Mint 22.3, masaüstü odaklı önemli değişiklikler getiren <strong>Cinnamon 6.6</strong> ile birlikte geliyor. Uygulama menüsü, yeni bir kenar çubuğu düzeniyle tamamen yeniden tasarlandı. Artık avatarınız, favori uygulamalarınız ve sık kullanılan yerler, hızlı erişim için bu kenar çubuğunda yaşıyor.
  </p>

  <p>
    Kategoriler, uygulamaların kendilerini listelemeye odaklanacak şekilde sadeleştirildi. Belgeler ve İndirilenler gibi özel dizinler, normal yer imlerinden ayrılarak fark edilmeleri daha kolay hale getirildi.
  </p>

  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/size/w1000/2026/01/linux-mint-22-3-menu-customization.png", 1200, 740)}" 
        alt="Linux Mint Menü Özelleştirme" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
    <p class="text-sm text-center text-gray-500 mt-2 italic w-full">
      Menü artık çok daha özelleştirilebilir bir yapıda.
    </p>

  <p>
    Ayrıca menü artık çok daha özelleştirilebilir. Arama çubuğunu üste veya alta konumlandırabilir, sistem düğmelerini kenar çubuğuna veya aramanın yanına yerleştirebilir, sembolik ve tam renkli kategori simgeleri arasında geçiş yapabilirsiniz.
  </p>

  <h3 class="text-xl font-bold text-gray-200 mt-6 mb-3">Klavye ve Dosya Yöneticisi İyileştirmeleri</h3>
  <p>
    Klavye yönetimi, daha iyi düzenler ve giriş yöntemi desteği ile büyük bir güncelleme aldı. Klavye artık daha iyi dil girişi yönetimi için hem geleneksel XKB düzenini hem de IBus giriş yöntemini gösteriyor.
  </p>

  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/size/w1000/2026/01/linux-mint-22-3-nemo-file-templates.png", 1200, 740)}" 
        alt="Nemo Dosya Yöneticisi Şablonları" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>

  <p>
    <strong>Nemo dosya yöneticisi</strong> de pratik iyileştirmelerden nasibini aldı. Bir şablon yöneticisi artık 'Yeni Belge Oluştur' menüsü için kullanışlı dosya şablonlarını gösteriyor. Dosya işlemleri duraklatılıp devam ettirilebiliyor, arama doğruluğu artırıldı ve küçük resim desteği güncellendi.
  </p>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Sistem Yönetimi İçin İki Yeni Araç</h2>
  <p>
    Araçlar cephesinde iki yeni ekleme sunuluyor:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-gray-300 marker:text-green-500">
    <li>
      <strong>Sistem Yönetim Aracı:</strong> Önyükleme menüsü yapılandırmasını yönetici ayrıcalıklarıyla halleder. GRUB dosyalarını düzenlemeden önyükleme menüsünü gösterebilir veya gizleyebilir, zaman aşımı değerlerini ayarlayabilir ve önyükleme parametreleri ekleyebilirsiniz.
    </li>
    <li>
      <strong>Sistem Bilgisi Aracı:</strong> (Eski adıyla Sistem Raporları) Bu araç; USB cihazları, GPU detayları, PCI bileşenleri ve BIOS bilgileri için dört yeni tanı sayfası kazandı. Cihaz kimliklerini, sürücü bilgilerini ve bağlantı detaylarını tek bir portalda göstererek donanım sorunlarını gidermeyi çok daha kolay hale getiriyor.
    </li>
  </ul>

  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/2026/01/linux-mint-22-3-system-information-tool.png", 1200, 740)}" 
        alt="Yeni Sistem Bilgisi Aracı" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Yüklemeye Değer mi?</h2>
  <p>
    Linux Mint 22.3'ü test etmek, bu sürümün uzun süreli destek statüsüne (Nisan 2029'a kadar destekleniyor) layık olduğunu gösterdi. Kurulumdan sonraki ilk açılıştan itibaren sistem, herhangi bir gecikme veya arayüz hatası olmadan gayet seri hissettirdi.
  </p>
  <p>
    Yeni Gece Işığı uygulaması da gayet iyi çalışıyor ve sistem açılışında otomatik olarak devreye girecek şekilde zamanlanabiliyor.
  </p>

  <div class="flex justify-center my-8">
    <div class="w-full max-w-[1200px] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
      <iframe 
        src="https://player.vimeo.com/video/1148885165" 
        class="w-full h-full" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Linux Mint 22.3 "Zena" Nasıl İndirilir?</h2>
  <p>
    Bu sürümü Cinnamon, MATE ve Xfce olmak üzere üç farklı sürüm halinde edinebilirsiniz. Kurulum imajlarının hepsi resmi web sitesinde mevcut.
  </p>

  <div class="flex justify-center my-8">
    <a href="https://www.linuxmint.com/download.php?ref=itsfoss.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Linux Mint 22.3 İndir
    </a>
  </div>

  <h3 class="text-xl font-bold text-gray-200 mt-6 mb-3">Mevcut Kullanıcılar İçin Yükseltme</h3>
  <p>
    Eğer eski Linux Mint 22.2 "Zara" sürümünü kullanıyorsanız, "Güncelleme Yöneticisi"ni başlatın ve "Düzenle" menüsüne bakın. Burada "Linux Mint 22.3 Zena'ya Yükselt" seçeneğini görmelisiniz; tıklayın ve yönergeleri takip edin.
  </p>

  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/2026/01/shadow_mintupgrade1.png", 1200, 740)}" 
        alt="Yükseltme Aracı Adım 1" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </div>
  
  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[1200px] h-auto aspect-[1200/740] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/2026/01/shadow_mintupgrade2.png", 1200, 740)}" 
        alt="Yükseltme Aracı Adım 2" 
        class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </div>

  <p>
    İnternet bağlantınıza ve disk hızınıza bağlı olarak, yükseltici gerekli paketleri sisteminize kuracaktır. İşlem sonunda sürüm yükseltmesini uygulamak için bilgisayarınızı yeniden başlatın.
  </p>
</div>
`

  const articleData = {
    title,
    slug,
    excerpt,
    content,
    image: optimizeImage("https://itsfoss.com/content/images/size/w1000/2025/12/linux-mint-22-3-fastfetch-output.png", 1200, 740),
    category: "Dağıtımlar",
    author: "Emir Faruk Topal",
    avatar: "https://github.com/topalemirfaruk.png",
    date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "6 dk",
    tags: "linux,mint,zena,cinnamon,guncelleme,haberler,dagitimlar",
  }

  const article = await prisma.article.upsert({
    where: { slug: articleData.slug },
    update: {
      title: articleData.title,
      content: articleData.content,
      excerpt: articleData.excerpt,
      image: articleData.image,
      readTime: articleData.readTime,
      tags: articleData.tags,
      author: articleData.author,
      avatar: articleData.avatar,
      date: articleData.date,
      category: articleData.category,
    },
    create: articleData
  })

  console.log(`Makale başarıyla oluşturuldu/güncellendi: ${article.title} (${article.slug})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
