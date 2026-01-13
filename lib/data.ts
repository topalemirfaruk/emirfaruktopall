export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  avatar: string
  date: string
  readTime: string
  likes: number
  comments: Comment[]
  shares: number
  image: string
  githubUrl?: string
  tags: string[]
}

export interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  date: string
  likes: number
  replies?: Comment[]
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "ubuntu-24-04-lts-yeni-ozellikler",
    title: "Ubuntu 24.04 LTS: Yeni Özellikler ve Kurulum Rehberi",
    excerpt:
      "Ubuntu'nun en yeni uzun süreli destek sürümünü keşfedin. GNOME 46, geliştirilmiş güvenlik özellikleri ve daha fazlası.",
    content: `
# Ubuntu 24.04 LTS: Noble Numbat

Ubuntu 24.04 LTS, Canonical'ın en yeni uzun vadeli destek sürümüdür. Bu sürüm, 2029 yılına kadar güvenlik güncellemeleri alacak ve kurumsal kullanıcılar için ideal bir seçimdir.

## Yeni Özellikler

### GNOME 46
Ubuntu 24.04, GNOME 46 masaüstü ortamıyla birlikte gelir. Bu sürümde:
- Yeni dosya yöneticisi özellikleri
- Geliştirilmiş arama fonksiyonu
- Daha iyi çoklu monitör desteği

### Güvenlik İyileştirmeleri
- AppArmor 4.0 entegrasyonu
- Geliştirilmiş sandboxing
- Otomatik güvenlik güncellemeleri

## Kurulum Adımları

1. ISO dosyasını indirin
2. USB belleğe yazdırın (balenaEtcher önerilir)
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
    comments: [
      {
        id: 1,
        author: "Mehmet K.",
        avatar: "/male-user-avatar.png",
        content: "Harika bir rehber! Ubuntu 24.04'e geçiş yapmayı düşünüyordum, bu yazı çok yardımcı oldu.",
        date: "5 Ocak 2026",
        likes: 12,
        replies: [
          {
            id: 2,
            author: "Ahmet Yılmaz",
            avatar: "/male-developer-avatar.png",
            content: "Teşekkürler Mehmet! Geçiş sırasında sorun yaşarsan yardımcı olurum.",
            date: "5 Ocak 2026",
            likes: 5,
          },
        ],
      },
      {
        id: 3,
        author: "Ayşe D.",
        avatar: "/female-user-avatar.png",
        content: "GNOME 46 gerçekten çok akıcı çalışıyor. Kesinlikle yükseltmeye değer!",
        date: "4 Ocak 2026",
        likes: 8,
      },
    ],
    shares: 28,
    image: "/ubuntu-linux-desktop-screenshot.jpg",
    tags: ["ubuntu", "linux", "kurulum", "lts"],
  },
  {
    id: 2,
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
    comments: [
      {
        id: 4,
        author: "Ali R.",
        avatar: "/male-tech-avatar.jpg",
        content: "rsync kullanmak yerine tar tercih etmenizin özel bir sebebi var mı?",
        date: "4 Ocak 2026",
        likes: 3,
      },
    ],
    shares: 56,
    image: "/terminal-bash-script-code.jpg",
    tags: ["bash", "script", "yedekleme", "otomasyon"],
  },
  {
    id: 3,
    slug: "linux-kernel-6-8-performans",
    title: "Linux Kernel 6.8: Performans İyileştirmeleri",
    excerpt:
      "Yeni kernel sürümündeki önemli değişiklikler, sürücü güncellemeleri ve sistem performansı üzerindeki etkileri.",
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
    comments: [
      {
        id: 5,
        author: "Burak T.",
        avatar: "/young-male-avatar.png",
        content: "Zen 5 optimizasyonları harika! Ryzen 9 9950X ile test ettim, gerçekten fark edilir bir iyileşme var.",
        date: "3 Ocak 2026",
        likes: 15,
      },
    ],
    shares: 89,
    image: "/linux-kernel-tux-penguin.jpg",
    tags: ["kernel", "linux", "performans", "güncelleme"],
  },
  {
    id: 4,
    slug: "docker-gelistirme-ortami",
    title: "Docker ile Geliştirme Ortamı Kurulumu",
    excerpt:
      "Konteyner teknolojisi ile izole ve tekrarlanabilir geliştirme ortamları oluşturun. Docker Compose örnekleri.",
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
    comments: [],
    shares: 72,
    image: "/docker-containers-whale-logo.jpg",
    tags: ["docker", "konteyner", "devops", "geliştirme"],
  },
  {
    id: 5,
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
    comments: [
      {
        id: 6,
        author: "Serkan M.",
        avatar: "/linux-enthusiast-avatar.jpg",
        content: "Arch wiki'den sonra en iyi Türkçe Arch rehberi! Teşekkürler.",
        date: "1 Ocak 2026",
        likes: 22,
      },
    ],
    shares: 134,
    image: "/arch-linux-minimal-desktop.jpg",
    tags: ["arch", "linux", "kurulum", "minimalist"],
  },
  {
    id: 6,
    slug: "vim-vs-neovim-karsilastirma",
    title: "Vim vs Neovim: Hangisini Seçmeli?",
    excerpt: "İki popüler metin editörünün karşılaştırması. Özellikler, eklentiler ve performans analizi.",
    content: `
# Vim vs Neovim: Detaylı Karşılaştırma

Her iki editör de güçlü araçlardır, ancak farklı kullanım senaryoları için daha uygun olabilirler.

## Vim

### Avantajlar
- Her yerde mevcut
- Çok kararlı
- Geniş eklenti ekosistemi

### Dezavantajlar
- Vimscript sınırlamaları
- Async desteği sınırlı

## Neovim

### Avantajlar
- Lua ile yapılandırma
- Native LSP desteği
- Modern async mimarisi
- Daha aktif geliştirme

### Dezavantajlar
- Bazı eski eklentilerle uyumsuzluk

## Yapılandırma Karşılaştırması

### Vim (.vimrc)
\`\`\`vim
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set expandtab
\`\`\`

### Neovim (init.lua)
\`\`\`lua
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
\`\`\`

## Sonuç

Yeni başlıyorsanız Neovim, mevcut Vim kurulumunuz varsa Vim'de kalabilirsiniz.
    `,
    category: "Makaleler",
    author: "Deniz Yıldız",
    avatar: "/developer-neutral-avatar.jpg",
    date: "31 Aralık 2025",
    readTime: "10 dk",
    likes: 156,
    comments: [],
    shares: 45,
    image: "/vim-neovim-text-editor-code.jpg",
    tags: ["vim", "neovim", "editör", "karşılaştırma"],
  },
]

export const commands = [
  {
    id: 1,
    name: "ls",
    description: "Dizin içeriğini listeler",
    usage: "ls [SEÇENEKLER] [DOSYA]",
    examples: ["ls -la", "ls -lh /var/log", "ls --color=auto"],
    category: "Dosya İşlemleri",
    output: "total 48\ndrwxr-xr-x 8 user user 4096 Jan 12 14:30 .\ndrwxr-xr-x 3 user user 4096 Jan 12 14:30 ..\n-rw-r--r-- 1 user user  220 Jan 12 14:30 .bash_logout\n-rw-r--r-- 1 user user 3771 Jan 12 14:30 .bashrc\n-rw-r--r-- 1 user user  807 Jan 12 14:30 .profile\n-rw-r--r-- 1 user user    0 Jan 13 18:00 notlar.txt\ndrwxr-xr-x 2 user user 4096 Jan 13 18:00 .config\ndrwxr-xr-x 2 user user 4096 Jan 13 18:00 Desktop",
  },
  {
    id: 2,
    name: "grep",
    description: "Dosyalarda metin arar",
    usage: "grep [SEÇENEKLER] DESEN [DOSYA]",
    examples: ['grep -r "error" /var/log', "grep -i pattern file.txt", "grep -n search file.txt"],
    category: "Metin İşleme",
  },
  {
    id: 3,
    name: "chmod",
    description: "Dosya izinlerini değiştirir",
    usage: "chmod [SEÇENEKLER] MOD DOSYA",
    examples: ["chmod 755 script.sh", "chmod +x file", "chmod -R 644 directory/"],
    category: "İzinler",
  },
  {
    id: 4,
    name: "find",
    description: "Dosya ve dizin arar",
    usage: "find [YOL] [İFADE]",
    examples: ['find / -name "*.log"', "find . -type f -mtime -7", "find /home -size +100M"],
    category: "Dosya İşlemleri",
  },
  {
    id: 5,
    name: "systemctl",
    description: "Systemd servislerini yönetir",
    usage: "systemctl [KOMUT] [BİRİM]",
    examples: ["systemctl status nginx", "systemctl restart apache2", "systemctl enable docker"],
    category: "Sistem",
  },
  {
    id: 6,
    name: "awk",
    description: "Metin işleme ve raporlama aracı",
    usage: "awk [SEÇENEKLER] 'program' [DOSYA]",
    examples: ["awk '{print $1}' file.txt", "awk -F: '{print $1}' /etc/passwd", "awk 'NR>1' data.csv"],
    category: "Metin İşleme",
  },
]

export const distros = [
  {
    id: 1,
    name: "Ubuntu",
    description: "Kullanıcı dostu, geniş topluluk desteği",
    logo: "/ubuntu-logo.png",
    website: "https://ubuntu.com",
    basedOn: "Debian",
    desktop: "GNOME",
    packageManager: "APT",
    difficulty: "Kolay",
  },
  {
    id: 2,
    name: "Fedora",
    description: "En güncel yazılımlar, GNOME deneyimi",
    logo: "/fedora-logo.png",
    website: "https://fedoraproject.org",
    basedOn: "Independent",
    desktop: "GNOME",
    packageManager: "DNF",
    difficulty: "Orta",
  },
  {
    id: 3,
    name: "Arch Linux",
    description: "Minimalist, rolling release, tam kontrol",
    logo: "/arch-linux-logo.png",
    website: "https://archlinux.org",
    basedOn: "Independent",
    desktop: "Yok (Seçilebilir)",
    packageManager: "Pacman",
    difficulty: "Zor",
  },
  {
    id: 4,
    name: "Linux Mint",
    description: "Windows'tan geçenler için ideal",
    logo: "/linux-mint-logo.jpg",
    website: "https://linuxmint.com",
    basedOn: "Ubuntu",
    desktop: "Cinnamon",
    packageManager: "APT",
    difficulty: "Kolay",
  },
  {
    id: 5,
    name: "Debian",
    description: "Kararlı, güvenilir, sunucular için ideal",
    logo: "/debian-logo.jpg",
    website: "https://debian.org",
    basedOn: "Independent",
    desktop: "Çeşitli",
    packageManager: "APT",
    difficulty: "Orta",
  },
  {
    id: 6,
    name: "openSUSE",
    description: "YaST ile kolay yönetim, kurumsal güç",
    logo: "/opensuse-logo.png",
    website: "https://opensuse.org",
    basedOn: "Independent",
    desktop: "KDE/GNOME",
    packageManager: "Zypper",
    difficulty: "Orta",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "Tümü") return articles
  return articles.filter((article) => article.category === category)
}
