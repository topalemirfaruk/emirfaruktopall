
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding new projects...")

    const projects = [
        {
            slug: "molebeat-music",
            title: "MoleBeat Music",
            excerpt: "Electron ve React ile geliştirilmiş masaüstü müzik çalar uygulaması.",
            content: `
# MoleBeat Music

MoleBeat Music – Electron ve React ile geliştirilmiş masaüstü müzik çalar uygulaması. TypeScript ve Vite kullanılarak modern UI/UX ile ses oynatma ve çalma listesi yönetimi özellikleri sunar.

## Özellikler

- **Masaüstü Deneyimi:** Electron ile yerel uygulama performansı.
- **Modern Arayüz:** React ve TailwindCSS ile şık tasarım.
- **Format Desteği:** MP3, FLAC, WAV desteği.
            `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "Aralık 2025",
            readTime: "3 dk",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop", // Music placeholder
            githubUrl: "https://github.com/topalemirfaruk/molebeatmusic",
            tags: "electron, react, typescript, vite, music",
        },
        {
            slug: "animasyonlu-giris-sayfasi",
            title: "Animasyonlu Giriş Sayfası",
            excerpt: "Gerçek zamanlı animasyonlarla oluşturulmuş, etkileyici bir giriş sayfası deneyimi.",
            content: `
# Animasyonlu Giriş Sayfası

Son zamanlarda birkaç kez rastladığım gerçek zamanlı animasyonlara ben de benzer bir şey yapmak istedim. Perspektif ve açıları gerçek zamanlı olarak canlandırmak zor olduğu için trigonometri bilgisi olması gerektiğini öğrendim hakkında neredeyse hiç bilgim olmamasına rağmen biraz araştırma yapmam gerekti. Ancak, bu yöntemi kullanarak oldukça etkileyici bir sonuç elde ettim.

## Teknolojiler

- HTML5 Canvas
- CSS3 Animations
- JavaScript (Trigonometry Magic)
            `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "Ocak 2026",
            readTime: "2 dk",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", // Cyberpunk/Tech placeholder
            githubUrl: "https://github.com/topalemirfaruk/Animasyonlu-Giris-Sayfasi",
            tags: "html, css, animation, javascript",
        },
        {
            slug: "kodneyapar",
            title: "KodNeYapar?",
            excerpt: "AI destekli kod analiz aracı. Kodları açıklar, güvenlik taraması yapar ve refactoring önerir.",
            content: `
# KodNeYapar?

KodNeYapar? AI destekli kod analiz aracı. Kodları açıklar, güvenlik taraması yapar ve refactoring önerir. Next.js, React, TypeScript ve Google Gemini AI kullanıldı.

## Özellikler

- **Kod Açıklama:** Karmaşık kod bloklarını basitçe anlatır.
- **Güvenlik Tarama:** Potansiyel açıkları tespit eder.
- **Refactoring:** Daha temiz kod için öneriler sunar.
            `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "Ocak 2026",
            readTime: "4 dk",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", // Code placeholder
            githubUrl: "https://github.com/topalemirfaruk/kodneyapar",
            tags: "next.js, react, typescript, ai, gemini",
        },
        {
            slug: "openwebservis-projesi",
            title: "OpenWebServis Projesi",
            excerpt: "Linux sistem yönetimi ve açık kaynak web servisleri üzerine kapsamlı bir proje.",
            content: `
# OpenWebServis Projesi

Linux sunucular üzerinde web servislerinin yönetimi, optimizasyonu ve dağıtımı üzerine çalışmalar.

## Kapsam

- **Linux Sistem Yönetimi:** Sunucu yapılandırması ve güvenliği.
- **Web Servisleri:** Nginx, Apache ve veritabanı optimizasyonları.
            `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "Ocak 2026",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop", // Server placeholder
            githubUrl: "https://github.com/topalemirfaruk/OpenWebServis-Projesi",
            tags: "linux, system-administration, devops, server",
        }
    ]

    for (const project of projects) {
        await prisma.article.upsert({
            where: { slug: project.slug },
            update: {
                githubUrl: project.githubUrl,
                content: project.content,
                image: project.image,
                excerpt: project.excerpt,
                title: project.title,
                tags: project.tags,
                date: project.date,
            },
            create: project,
        })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
