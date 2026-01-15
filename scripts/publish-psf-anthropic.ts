import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Helper to optimize image URLs (Unsplash specific)
const optimizeImage = (url: string, w: number = 1000, h?: number) => {
  const separator = url.includes('?') ? '&' : '?';
  const heightParam = h ? `&h=${h}` : '';
  return `${url}${separator}auto=format&fit=crop&w=${w}${heightParam}&q=80`;
}

async function main() {
  const title = "Python Vakfı, ABD Hükümetini Reddettikten Sonra Claude AI'dan 1.5 Milyon Dolar Fon Aldı"
  const slug = "python-vakfi-claude-ai-anthropic-fon-yatirim"

  const excerpt = "Python Software Foundation (PSF), DEI anlaşmazlığı nedeniyle ABD hükümetinin fonunu reddettikten sonra Claude AI'ın geliştiricisi Anthropic'ten 1.5 milyon dolarlık güvenlik yatırımı aldı."

  const content = `
<div class="space-y-6">
  <p class="lead text-xl text-gray-300">
    Python ve PyPI ekosisteminin güvenliğini artırmayı amaçlayan iki yıllık dev bir ortaklık duyuruldu. 
    Son yıllarda Python'un, modern yapay zeka geliştirmelerinin omurgası haline geldiğine şahit olduk. 
    TensorFlow ve PyTorch dahil olmak üzere çoğu makine öğrenimi çatısı (framework), büyük ölçüde Python'a dayanıyor.
  </p>

  <p>
    Dilin erişilebilir doğası ve geniş kütüphane ekosistemi, onu dünya çapındaki veri bilimcileri ve yapay zeka araştırmacıları için varsayılan tercih haline getirdi.
    Şimdi ise bu programlama dilinin koruyucusu olan <strong>Python Software Foundation (PSF)</strong>, Claude'un arkasındaki şirket <strong>Anthropic</strong>'in vakfa önümüzdeki iki yıl içinde <strong>1.5 milyon dolar</strong> yatırım yapacağını duyurdu.
  </p>



  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Python Vakfı, ABD Hükümeti Fonunu Neden Reddetti?</h2>
  <p>
    Geçtiğimiz yıl Python Software Foundation (PSF), Ulusal Bilim Vakfı'ndan (NSF) gelecek olan 1.5 milyon dolarlık bir devlet hibesini geri çevirdi. Anlaşmazlığın temel sebebi, ABD hükümetinin dayattığı <strong>anti-DEI (Çeşitlilik, Eşitlik ve Kapsayıcılık karşıtı)</strong> şartlarıydı. Eğer PSF'nin bu kuralları ihlal ettiği tespit edilirse, NSF daha önce ödenen fonları geri alma hakkını saklı tutuyordu.
  </p>

  <p>PSF'den Loren Crary, bu durumu şöyle açıkladı:</p>
  <blockquote class="border-l-4 border-green-500 pl-4 py-2 italic bg-white/5 rounded-r-lg my-6">
    "Bu şartlar, 'Federal ayrımcılık karşıtı yasaları ihlal edecek şekilde DEI [çeşitlilik, eşitlik ve kapsayıcılık] veya ayrımcı eşitlik ideolojisini ilerleten veya teşvik eden herhangi bir program yürütmemeyi ve yürütmeyeceğimizi' teyit etmeyi içeriyordu."
  </blockquote>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Claude AI'ın Yaratıcısı Anthropic Devreye Girdi</h2>
  <p>
    Bu aşamalı fonlamanın temel amacı, Python ekosisteminde güvenliği artırmak. Öncelikli hedef ise <strong>Python Package Index (PyPI)</strong> deposunu tedarik zinciri saldırılarına karşı korumak.
  </p>
  <p>
    Bilmiyorsanız hatırlatalım; PyPI yüz binlerce pakete ev sahipliği yapıyor ve dünya genelinde milyonlarca geliştiriciye hizmet veriyor. Ancak ne yazık ki, kötü amaçlı açık kaynak paketlerinin akınına uğramaya oldukça müsait.
  </p>

  <p>
    Python ekibi bu nakit girişiyle, platforma yüklenen paketlerin otomatik incelenmesi için yeni araçlar geliştirmeyi hedefliyor. Mevcut "sorun bulunduğunda tepki verme" yaklaşımından, proaktif bir yaklaşıma geçiş yapılıyor.
  </p>

  <h3 class="text-xl font-bold text-gray-200 mt-6 mb-3">Yeni Güvenlik Araçları Geliyor</h3>
  <p>
    Bunu başarmak için, bilinen zararlı yazılımları kataloglayan yeni bir veri seti oluşturacaklar. Bu veri seti, şüpheli kalıpları ve davranışları otomatik olarak tanımlayabilen tespit araçları tasarlamalarına yardımcı olacak. PSF, buradaki yaklaşımlarının diğer açık kaynak paket depolarına da (npm, Maven vb.) fayda sağlayabileceğini belirtiyor.
  </p>

  <div class="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
    <p class="text-gray-300">
      <strong>Bilgi:</strong> Diğer popüler paket depoları arasında npm, Crates.io ve Maven Central gibi isimler yer alıyor.
    </p>
  </div>

  <p>
    Bu 1.5 milyon dolar sadece güvenlik çalışmalarına gitmeyecek. Aynı zamanda PyPI'nin işletilmesi, CPython katkıları için "Developers in Residence" programının desteklenmesi ve hibe yoluyla topluluk girişimlerinin fonlanması gibi PSF'nin günlük operasyonlarına da katkı sağlayacak.
  </p>

  <h2 class="text-2xl font-bold text-green-400 mt-8 mb-4">Sonuç</h2>
  <p>
    Anthropic gibi bir organizasyonun böyle bir bağış yapması oldukça mantıklı. Altyapıyı kullanan bu "yüksek hacimli" kullanıcıların çoğu, işleri bittikten sonra geriye dönüp bakmıyor. Genellikle açık kaynak projelerden değer elde edip, anlamlı bir şekilde geri katkıda bulunmuyorlar.
  </p>
  <p>
    Anthropic'in bu çabası, en azından BT altyapısının bu kadar kritik bir parçasının refahını sağlamak için para ayırmayı önemsediklerini gösteriyor. Sistemlerinin Python'a ne kadar bağımlı olduğu düşünüldüğünde, bu yatırım topluluğu desteklemek kadar kendi operasyonlarını korumakla da ilgili.
  </p>
</div>
`

  const articleData = {
    title,
    slug,
    excerpt,
    content,
    category: "Haberler",
    image: "https://cdn.mos.cms.futurecdn.net/YREz6Cn4vWeQcSEYAhsr96-650-80.png.webp",
    author: "Emir Faruk Topal",
    avatar: "https://github.com/topalemirfaruk.png",
    date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "4 dk",
    tags: "python,yapay-zeka,anthropic,claude,acik-kaynak,guvenlik,pypi",
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
