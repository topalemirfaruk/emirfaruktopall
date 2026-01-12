
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding projects...")

    const projects = [
        {
            slug: "linux-server-monitoring-tool",
            title: "Linux Sunucu İzleme Aracı",
            excerpt: "Python ve React kullanılarak geliştirilmiş, gerçek zamanlı sistem kaynaklarını izleyen açık kaynaklı bir panel.",
            content: `
# Linux Sunucu İzleme Aracı

Bu proje, Linux sunucularınızın CPU, RAM, Disk ve Ağ kullanımlarını gerçek zamanlı olarak izlemenizi sağlar.

## Özellikler

- **Gerçek Zamanlı İzleme:** WebSocket üzerinden anlık veri akışı.
- **Geçmiş Veriler:** InfluxDB ile zaman serisi verilerinin saklanması.
- **Uyarı Sistemi:** Discord ve Slack entegrasyonu ile kritik seviyelerde bildirim.
- **Docker Desteği:** Tek komutla kurulum.

## Teknolojiler

- **Backend:** Python (FastAPI), Psutil
- **Frontend:** React, TailwindCSS, Recharts
- **Veritabanı:** InfluxDB
- **Deployment:** Docker & Docker Compose

## Kurulum

\`\`\`bash
git clone https://github.com/emirfaruktopal/server-monitor
cd server-monitor
docker-compose up -d
\`\`\`

## Ekran Görüntüleri

![Dashboard](/dashboard-screenshot.jpg)
      `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg", // You might want to update this if you have a real avatar path
            date: "10 Ocak 2026",
            readTime: "5 dk",
            likes: 42,
            shares: 15,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Placeholder
            githubUrl: "https://github.com/emirfaruktopal/server-monitor",
            tags: "python, react, monitoring, devops",
        },
        {
            slug: "otomatik-yedekleme-scripti",
            title: "Gelişmiş Yedekleme Otomasyonu",
            excerpt: "Büyük ölçekli sunucular için incremental yedekleme yapan, şifreleme destekli Bash scripti.",
            content: `
# Gelişmiş Yedekleme Otomasyonu

Sistem yöneticileri için hayat kurtarıcı bir yedekleme çözümü. Rclone entegrasyonu ile buluta güvenli yedekleme yapın.

## Neden Bu Script?

Standart backup toollarının aksine, bu script:
1. Dosyaları GPG ile şifreler.
2. Sadece değişen dosyaları yedekler (Incremental).
3. Yedekleme bitince Telegram'dan rapor gönderir.

## Kullanım

\`\`\`bash
./backup.sh --source /var/www --dest remote:backups --encrypt
\`\`\`

## Yapılandırma

\`config.env\` dosyasını düzenleyerek rclone ayarlarını ve şifreleme anahtarlarını girebilirsiniz.
      `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "5 Ocak 2026",
            readTime: "3 dk",
            likes: 28,
            shares: 8,
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
            githubUrl: "https://github.com/emirfaruktopal/backup-script",
            tags: "bash, backup, security, automation",
        },
        {
            slug: "firewall-yonetim-arayuzu",
            title: "Kolay Firewall Yönetimi",
            excerpt: "Iptables ve UFW kurallarını yönetmek için geliştirilmiş, Go tabanlı CLI ve TUI aracı.",
            content: `
# Firewall Manager (FWM)

Karmaşık iptables komutları ile uğraşmaktan sıkıldınız mı? FWM, terminal üzerinden grafiksel bir arayüzle firewall kurallarını yönetmenizi sağlar.

## Özellikler

- **TUI (Text User Interface):** Mouse desteği olan terminal arayüzü.
- **Kural Şablonları:** Web sunucusu, veritabanı sunucusu gibi hazır şablonlar.
- **Log İzleme:** Engellenen paketleri canlı izleme.

## Kurulum

\`\`\`bash
go install github.com/emirfaruktopal/fwm@latest
\`\`\`

## Kullanım

\`\`\`bash
sudo fwm
\`\`\`
      `,
            category: "Projeler",
            author: "Emir Faruk Topal",
            avatar: "/user-avatar.jpg",
            date: "1 Ocak 2026",
            readTime: "4 dk",
            likes: 65,
            shares: 20,
            image: "https://images.unsplash.com/photo-1558494949-efc025793ad0?q=80&w=1000&auto=format&fit=crop",
            githubUrl: "https://github.com/emirfaruktopal/firewall-manager",
            tags: "go, firewall, security, tui",
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
