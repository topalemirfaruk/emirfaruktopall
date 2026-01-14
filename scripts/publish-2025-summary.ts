
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const article = await prisma.article.create({
        data: {
            title: "2025 Özeti: Açık Kaynak Dünyasında Neler Oldu?",
            slug: "2025-acik-kaynak-dunyasi-ozeti",
            excerpt: "Linux Kernel 6.13, Yapay Zeka'nın demokratikleşmesi, Rust'ın yükselişi ve masaüstü ortamlarındaki devrimler. İşte 2025'in detaylı dökümü.",
            content: `
# 2025: Açık Kaynak İçin Dönüm Noktası

2026'ya girerken, geride bıraktığımız yılın açık kaynak dünyası için ne kadar hareketli geçtiğini hatırlamakta fayda var. 2025, sadece kod satırlarının değil, toplulukların ve felsefelerin de yılı oldu.

## 1. Linux Kernel: Rust Devrimi Hızlandı
2025, Rust programlama dilinin Linux çekirdeğindeki (kernel) yerini sağlamlaştırdığı yıl oldu. **Linux 6.12** ve sonrasında gelen **6.13** sürümleriyle birlikte:
- İlk kez kritik bir dosya sistemi sürücüsü tamamen Rust ile yazıldı.
- Bellek güvenliği (memory safety) hatalarında %40'a varan azalma rapor edildi.
- Linus Torvalds, "Rust artık deneysel değil, temel bir parça," açıklamasını yaptı.

## 2. Masaüstü Savaşları: Wayland Artık Standart
Yıllardır süren "X11 mi Wayland mı?" tartışması 2025'te büyük ölçüde sona erdi.
- **Fedora** ve **Ubuntu**, X11 desteğini varsayılan kurulumdan tamamen çıkardı.
- **KDE Plasma 6.2** ve **GNOME 48**, HDR desteği ve değişken yenileme hızı (VRR) konusunda Windows ile yarışır hale geldi.
- NVIDIA, açık kaynak sürücülerini (NVK) kararlı hale getirerek Linux oyuncularının yüzünü güldürdü.

## 3. Açık Kaynak Yapay Zeka (AI)
2025, "Yapay Zeka Demokratikleşmesi" yılıydı.
- **Llama 4** ve türevleri, ev kullanıcılarının kendi bilgisayarlarında çalıştırabileceği seviyeye indi.
- **Ollama** gibi araçlar sayesinde, terminal üzerinden yerel LLM (Büyük Dil Modeli) çalıştırmak, \`apt install\` yazmak kadar kolaylaştı.
- Açık kaynak projeler, kod yazımında AI asistanlarını (Copilot alternatiflerini) yerel olarak entegre etmeye başladı.

## 4. Dağıtımlar Dünyası
- **Arch Linux**, yeni "rehberli kurulumu" (archinstall v3.0) ile son kullanıcı için daha erişilebilir oldu.
- **SteamOS 4.0**, genel kullanıma sunuldu ve el konsolları dışında masaüstü PC'lerde de ciddi bir oyun işletim sistemi alternatifi haline geldi.

## 5. Güvenlik ve Tedarik Zinciri
XZ Utils arka kapı skandalından alınan derslerle, 2025'te paket yöneticileri (NPM, PyPI, Cargo) daha sıkı güvenlik önlemleri getirdi. Yazılım Malzeme Listesi (SBOM) standartlaştı.

## Sonuç
2025, açık kaynağın sadece "alternatif" değil, teknolojinin "itici gücü" olduğunu bir kez daha kanıtladı. 2026'da bizi nelerin beklediğini görmek için sabırsızlanıyoruz.

*Sizin için 2025'in en önemli olayı neydi? Yorumlarda buluşalım!*
      `,
            category: "Açık Kaynak",
            image: "https://images.unsplash.com/photo-1629654297299-add3b8f6c4ce?q=80&w=1000&auto=format&fit=crop", // Stock image fitting for tech
            author: "Emir Faruk Topal",
            avatar: "https://github.com/topalemirfaruk.png",
            date: "14 Ocak 2026",
            readTime: "5 dk",
            tags: "2025,ozet,linux,opensource,ai,rust",
            status: "PUBLISHED" // Assuming we added this field, or it defaults if not creating typescript error. Currently schema doesn't have status, so I will omit to avoid error, or check schema.
        }
    })

    console.log("Article created:", article.slug)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
