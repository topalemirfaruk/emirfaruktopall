
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const articles = [
    {
        slug: "ubuntu-24-04-lts-yeni-ozellikler",
        title: "Ubuntu 24.04 LTS: Yeni Özellikler ve Kurulum Rehberi",
        excerpt: "Ubuntu'nun en yeni uzun süreli destek sürümünü keşfedin. GNOME 46, geliştirilmiş güvenlik özellikleri ve daha fazlası.",
        content: `# Ubuntu 24.04 LTS: Noble Numbat...`, // Simplified for brevity in this logicalstep
        category: "Dağıtımlar",
        author: "Ahmet Yılmaz",
        date: "5 Ocak 2026",
        readTime: "8 dk",
        likes: 234,
        shares: 28,
    },
    // ... (I will add all articles here in the actual tool call)
]

async function main() {
    console.log('Start seeding ...')

    // Cleanup first
    await prisma.comment.deleteMany()
    await prisma.article.deleteMany()

    // Ubuntu Article
    await prisma.article.create({
        data: {
            slug: "ubuntu-24-04-lts-yeni-ozellikler",
            title: "Ubuntu 24.04 LTS: Yeni Özellikler ve Kurulum Rehberi",
            excerpt: "Ubuntu'nun en yeni uzun süreli destek sürümünü keşfedin. GNOME 46, geliştirilmiş güvenlik özellikleri ve daha fazlası.",
            content: `
# Ubuntu 24.04 LTS: Noble Numbat

Ubuntu 24.04 LTS, Canonical'ın en yeni uzun vadeli destek sürümüdür. Bu sürüm, 2029 yılına kadar güvenlik güncellemeleri alacak ve kurumsal kullanıcılar için ideal bir seçimdir.

## Yeni Özellikler

### GNOME 46
Ubuntu 24.04, GNOME 46 masaüstü ortamıyla birlikte gelir.Bu sürümde:
- Yeni dosya yöneticisi özellikleri
    - Geliştirilmiş arama fonksiyonu
        - Daha iyi çoklu monitör desteği

### Güvenlik İyileştirmeleri
    - AppArmor 4.0 entegrasyonu
        - Geliştirilmiş sandboxing
            - Otomatik güvenlik güncellemeleri

## Kurulum Adımları

1. ISO dosyasını indirin
2. USB belleğe yazdırın(balenaEtcher önerilir)
3. Bilgisayarı USB'den başlatın
4. Kurulum sihirbazını takip edin

\`\`\`bash
# Kurulum sonrası sistem güncelleme
sudo apt update && sudo apt upgrade -y

# Temel araçları yükleyin
sudo apt install build-essential git curl wget
\`\`\`

## Sonuç

Ubuntu 24.04 LTS, hem yeni başlayanlar hem de deneyimli kullanıcılar için mükemmel bir seçimdir.
            `,
            category: "Dağıtımlar",
            author: "Ahmet Yılmaz",
            avatar: "/male-developer-avatar.png",
            date: "5 Ocak 2026",
            readTime: "8 dk",
            likes: 234,
            shares: 28,
            tags: "ubuntu,linux,kurulum,lts",
            comments: {
                create: [
                    {
                        author: "Mehmet K.",
                        avatar: "/male-user-avatar.png",
                        content: "Harika bir rehber! Ubuntu 24.04'e geçiş yapmayı düşünüyordum, bu yazı çok yardımcı oldu.",
                        date: "5 Ocak 2026",
                        likes: 12
                    },
                    {
                        author: "Ayşe D.",
                        avatar: "/female-user-avatar.png",
                        content: "GNOME 46 gerçekten çok akıcı çalışıyor. Kesinlikle yükseltmeye değer!",
                        date: "4 Ocak 2026",
                        likes: 8
                    }
                ]
            }
        }
    })

    // Bash Script Article
    await prisma.article.create({
        data: {
            slug: "bash-script-yedekleme-otomasyonu",
            title: "Bash Script ile Sistem Yedekleme Otomasyonu",
            excerpt: "Kendi otomatik yedekleme sisteminizi oluşturun. Cron jobs, rsync ve şifreleme ile güvenli yedekleme.",
            content: `
# Bash ile Otomatik Yedekleme Sistemi

Verilerinizi güvende tutmak için otomatik yedekleme sistemi oluşturmak kritik öneme sahiptir.

## Gereksinimler

- rsync
- gpg (şifreleme için)
- cron

## Yedekleme Scripti

\`\`\`bash
#!/bin/bash

# Değişkenler
BACKUP_DIR="/backup"
SOURCE_DIR="/home"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="backup_$DATE.tar.gz"

# Yedekleme
echo "Yedekleme başlatılıyor..."
tar -czf "$BACKUP_DIR/$BACKUP_NAME" "$SOURCE_DIR"

# Eski yedekleri temizle (30 günden eski)
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +30 -delete

echo "Yedekleme tamamlandı: $BACKUP_NAME"
\`\`\`

## Cron ile Zamanlama

\`\`\`bash
# Her gün gece 2'de çalıştır
0 2 * * * /home/user/scripts/backup.sh >> /var/log/backup.log 2>&1
\`\`\`

## Şifreli Yedekleme

GPG ile yedeklerinizi şifreleyebilirsiniz:

\`\`\`bash
gpg --symmetric --cipher-algo AES256 backup.tar.gz
\`\`\`
            `,
            category: "Öğreticiler",
            author: "Elif Kaya",
            avatar: "/female-developer-avatar.png",
            date: "4 Ocak 2026",
            readTime: "12 dk",
            likes: 189,
            shares: 56,
            tags: "bash,script,yedekleme,otomasyon",
            comments: {
                create: [
                    {
                        author: "Ali R.",
                        avatar: "/male-tech-avatar.jpg",
                        content: "rsync kullanmak yerine tar tercih etmenizin özel bir sebebi var mı?",
                        date: "4 Ocak 2026",
                        likes: 3,
                    }
                ]
            }
        }
    })

    // Linux Kernel
    await prisma.article.create({
        data: {
            slug: "linux-kernel-6-8-performans",
            title: "Linux Kernel 6.8: Performans İyileştirmeleri",
            excerpt: "Yeni kernel sürümündeki önemli değişiklikler, sürücü güncellemeleri ve sistem performansı üzerindeki etkileri.",
            content: `
# Linux Kernel 6.8

Linus Torvalds, Linux Kernel 6.8'i resmi olarak yayınladı. Bu sürüm birçok önemli yenilik içeriyor.

## Öne Çıkan Özellikler

### Intel ve AMD Optimizasyonları
- Intel Arrow Lake desteği
- AMD Zen 5 iyileştirmeleri
- Geliştirilmiş güç yönetimi

### Yeni Sürücüler
- NVIDIA open-source sürücü güncellemeleri
- Yeni WiFi 7 desteği
- Geliştirilmiş Bluetooth stack

### Performans
Benchmarklara göre:
- %5-10 dosya sistemi performans artışı
- Daha düşük gecikme süreleri
- İyileştirilmiş bellek yönetimi

## Yükseltme

\`\`\`bash
# Ubuntu/Debian
sudo apt install linux-image-6.8.0-generic

# Fedora
sudo dnf upgrade kernel
\`\`\`
            `,
            category: "Haberler",
            author: "Mehmet Demir",
            avatar: "/male-journalist-avatar.jpg",
            date: "3 Ocak 2026",
            readTime: "6 dk",
            likes: 312,
            shares: 89,
            tags: "kernel,linux,performans,güncelleme",
            comments: {
                create: [
                    {
                        author: "Burak T.",
                        avatar: "/young-male-avatar.png",
                        content: "Zen 5 optimizasyonları harika! Ryzen 9 9950X ile test ettim, gerçekten fark edilir bir iyileşme var.",
                        date: "3 Ocak 2026",
                        likes: 15,
                    }
                ]
            }
        }
    })

    // Docker
    await prisma.article.create({
        data: {
            slug: "docker-gelistirme-ortami",
            title: "Docker ile Geliştirme Ortamı Kurulumu",
            excerpt: "Konteyner teknolojisi ile izole ve tekrarlanabilir geliştirme ortamları oluşturun. Docker Compose örnekleri.",
            content: `
# Docker ile Profesyonel Geliştirme Ortamı

Docker, geliştirme ortamlarınızı standartlaştırmanın en etkili yoludur.

## Docker Kurulumu

\`\`\`bash
# Docker Engine kurulumu
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Kullanıcıyı docker grubuna ekle
sudo usermod -aG docker $USER
\`\`\`

## Docker Compose Örneği

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## En İyi Pratikler

1. Her servis için ayrı konteyner
2. Volume kullanarak veri kalıcılığı
3. Multi-stage build ile küçük imajlar
4. .dockerignore dosyası kullanın
            `,
            category: "Öğreticiler",
            author: "Zeynep Arslan",
            avatar: "/female-tech-professional-avatar.jpg",
            date: "2 Ocak 2026",
            readTime: "15 dk",
            likes: 278,
            shares: 72,
            tags: "docker,konteyner,devops,geliştirme",
            comments: {}
        }
    })

    // Arch Linux
    await prisma.article.create({
        data: {
            slug: "arch-linux-kurulum-rehberi",
            title: "Arch Linux: Minimalist Sistem Kurulumu",
            excerpt: "Sıfırdan Arch Linux kurulumu. Partition, bootloader, masaüstü ortamı ve temel yapılandırmalar.",
            content: `
# Arch Linux Kurulum Rehberi

Arch Linux, minimalist ve özelleştirilebilir bir Linux dağıtımıdır.

## Ön Hazırlık

1. Arch Linux ISO'sunu indirin
2. Bootable USB oluşturun
3. BIOS/UEFI ayarlarını kontrol edin

## Kurulum Adımları

### Disk Bölümlendirme

\`\`\`bash
# Diskleri listele
lsblk

# fdisk ile bölümlendirme
fdisk /dev/sda

# Bölümler:
# /dev/sda1 - EFI (512MB)
# /dev/sda2 - root (kalan alan)
\`\`\`

### Temel Sistem

\`\`\`bash
# Dosya sistemlerini oluştur
mkfs.fat -F32 /dev/sda1
mkfs.ext4 /dev/sda2

# Mount et
mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot

# Temel paketleri yükle
pacstrap /mnt base linux linux-firmware vim

# fstab oluştur
genfstab -U /mnt >> /mnt/etc/fstab
\`\`\`

### Sistem Yapılandırması

\`\`\`bash
arch-chroot /mnt

# Zaman dilimi
ln -sf /usr/share/zoneinfo/Europe/Istanbul /etc/localtime

# Hostname
echo "archlinux" > /etc/hostname

# Root şifresi
passwd
\`\`\`
            `,
            category: "Dağıtımlar",
            author: "Can Özkan",
            avatar: "/male-geek-avatar-glasses.jpg",
            date: "1 Ocak 2026",
            readTime: "20 dk",
            likes: 421,
            shares: 134,
            tags: "arch,linux,kurulum,minimalist",
            comments: {
                create: [
                    {
                        author: "Serkan M.",
                        avatar: "/linux-enthusiast-avatar.jpg",
                        content: "Arch wiki'den sonra en iyi Türkçe Arch rehberi! Teşekkürler.",
                        date: "1 Ocak 2026",
                        likes: 22,
                    }
                ]
            }
        }
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
