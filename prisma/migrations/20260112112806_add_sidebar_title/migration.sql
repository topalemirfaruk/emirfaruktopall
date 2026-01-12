-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SiteConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerName" TEXT NOT NULL DEFAULT 'Emir Faruk Topal',
    "ownerTitle" TEXT NOT NULL DEFAULT 'LINUX SYSTEM ADMIN',
    "sidebarTitle" TEXT NOT NULL DEFAULT 'LINUX SYSTEM ADMIN',
    "heroTitle" TEXT NOT NULL DEFAULT 'Linux Sistem Yönetimi ve Özgür Yazılım Dünyası',
    "heroDescription" TEXT NOT NULL DEFAULT 'Linux sistem yönetimi, sunucu optimizasyonu ve açık kaynak teknolojiler üzerine rehberler, ipuçları ve detaylı analizler.',
    "aboutContent" TEXT NOT NULL DEFAULT 'Hakkımda içeriği buraya gelecek.',
    "socialGithub" TEXT NOT NULL DEFAULT 'https://github.com',
    "socialTwitter" TEXT,
    "socialLinkedin" TEXT,
    "socialEmail" TEXT,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SiteConfig" ("aboutContent", "heroDescription", "heroTitle", "id", "ownerName", "ownerTitle", "socialEmail", "socialGithub", "socialLinkedin", "socialTwitter", "updatedAt") SELECT "aboutContent", "heroDescription", "heroTitle", "id", "ownerName", "ownerTitle", "socialEmail", "socialGithub", "socialLinkedin", "socialTwitter", "updatedAt" FROM "SiteConfig";
DROP TABLE "SiteConfig";
ALTER TABLE "new_SiteConfig" RENAME TO "SiteConfig";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
