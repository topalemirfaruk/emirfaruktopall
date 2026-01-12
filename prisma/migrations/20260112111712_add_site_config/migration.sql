-- CreateTable
CREATE TABLE "SiteConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerName" TEXT NOT NULL DEFAULT 'Emir Faruk Topal',
    "ownerTitle" TEXT NOT NULL DEFAULT 'LINUX SYSTEM ADMIN',
    "heroTitle" TEXT NOT NULL DEFAULT 'Linux Sistem Yönetimi ve Özgür Yazılım Dünyası',
    "heroDescription" TEXT NOT NULL DEFAULT 'Linux sistem yönetimi, sunucu optimizasyonu ve açık kaynak teknolojiler üzerine rehberler, ipuçları ve detaylı analizler.',
    "aboutContent" TEXT NOT NULL DEFAULT 'Hakkımda içeriği buraya gelecek.',
    "socialGithub" TEXT NOT NULL DEFAULT 'https://github.com',
    "socialTwitter" TEXT,
    "socialLinkedin" TEXT,
    "socialEmail" TEXT,
    "updatedAt" DATETIME NOT NULL
);
