import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Helper to slugify text
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
}

// Helper to optimize image URLs
const optimizeImage = (url: string) => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}auto=format&fit=crop&w=1000&q=80`;
}

async function main() {
  const title = "Raspberry Pi ve ARM Cihazlar İçin ONLYOFFICE Desteği Geldi"
  const slug = "raspberry-pi-arm-onlyoffice-destegi" // Manual slug for safety

  const excerpt = "Açık kaynak ofis paketi ONLYOFFICE, Linux için yerel ARM64 desteğini duyurdu. Raspberry Pi ve diğer ARM tabanlı cihazlarda artık tam performanslı ofis deneyimi mümkün."

  const content = `
<div class="space-y-6">
  <p class="lead text-xl text-gray-300">
    Açık kaynaklı ofis yazılımı <strong>ONLYOFFICE</strong>, Linux için yerel <strong>ARM64</strong> sürümlerini resmen yayınladı. Artık Ubuntu, Fedora, OpenSUSE, Arch Linux ve diğer dağıtımları ARM donanım üzerinde (örneğin Raspberry Pi) kullananlar, emülatörlere veya kısıtlı web sürümlerine mahkum kalmadan tam özellikli bir ofis paketine sahip olabilecekler.
  </p>

  <div class="flex justify-center my-8">
    <div class="relative w-full max-w-[460px] overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
      <img 
        src="${optimizeImage("https://itsfoss.com/content/images/2026/01/onlyoffice-desktop-editors-on-fedora-workstation.png")}" 
        alt="Fedora Workstation üzerinde çalışan ONLYOFFICE Masaüstü Editörü" 
        class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
    <p class="text-sm text-center text-gray-500 mt-2 italic w-full">
      ONLYOFFICE Masaüstü Editörleri artık ARM mimarisinde de yerel olarak çalışıyor.
    </p>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Neden Önemli?</h2>
  <p>
    Eğer ONLYOFFICE masaüstü düzenleyicilerini daha önce kullanmadıysanız, neler sunduğuna kısaca değinelim:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-gray-300 marker:text-green-500">
    <li><strong>Tamamen Ücretsiz ve Açık Kaynak:</strong> Şeffaf ve güvenilir.</li>
    <li><strong>Geniş Format Desteği:</strong> Metin belgeleri (DOCX, ODT), tablolar (XLSX, CSV), sunumlar (PPTX, ODP) ve PDF formları ile tam uyumluluk.</li>
    <li><strong>Çevrimdışı Çalışma:</strong> İnternet bağlantısına ihtiyaç duymadan, tamamen yerel olarak çalışır.</li>
    <li><strong>Yapay Zeka (İsteğe Bağlı):</strong> Varsayılan olarak hiçbir "AI eklentisi" yüklü gelmez, ancak iş akışınızda isterseniz kolayca ekleyebilirsiniz.</li>
  </ul>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">ARM Mimarisine Geçişin Sebebi</h2>
  <p>
    ARM tabanlı Linux cihazların—örneğin Apple Silicon Mac'lerde Asahi Linux veya güçlü Raspberry Pi 5 sistemleri—yaygınlaşmasıyla birlikte, enerji verimliliği ve performans ihtiyacı arttı. ONLYOFFICE ekibi bu hamleyi şöyle açıklıyor:
  </p>
  
  <blockquote class="border-l-4 border-green-500 pl-4 py-2 italic bg-white/5 rounded-r-lg my-6">
    "ARM tabanlı Linux cihazların artan benimsenmesiyle birlikte, kullanıcılar artık ONLYOFFICE Masaüstü Editörlerini yerel olarak kurabilir; kararlı performansın, tam işlevselliğin ve çevrimdışı belge düzenlemenin keyfini çıkarabilirler."
  </blockquote>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Nasıl İndirilir?</h2>
  <p>
    Debian, Ubuntu, Fedora, OpenSUSE, Arch Linux ve diğer birçok dağıtım için kurulum paketleri hazır durumda. Cihazınızın mimarisine uygun (aarch64 / arm64) paketi seçtiğinizden emin olun.
  </p>

  <div class="flex justify-center my-8">
    <a href="https://www.onlyoffice.com/desktop?ref=itsfoss.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      ARM için ONLYOFFICE İndir
    </a>
  </div>

  <p class="text-sm text-gray-500 text-center">
    İndirme konusunda sorun yaşarsanız, projenin <a href="https://github.com/ONLYOFFICE/DesktopEditors/releases" class="text-green-400 hover:underline">GitHub releases</a> sayfasından kaynak kodlara ve diğer binary dosyalarına ulaşabilirsiniz.
  </p>
</div>
`

  const articleData = {
    title,
    slug,
    excerpt,
    content,
    image: optimizeImage("https://itsfoss.com/content/images/2026/01/onlyoffice-desktop-editors-on-fedora-workstation.png"),
    category: "Haberler",
    author: "Emir Faruk Topal",
    avatar: "https://github.com/topalemirfaruk.png",
    date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "3 dk",
    tags: "haberler,linux,acik-kaynak,arm,raspberry-pi,onlyoffice,ofis-yazilimlari",
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
