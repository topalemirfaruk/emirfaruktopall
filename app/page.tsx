import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ArticlesSection } from "@/components/articles-section"

import { prisma } from "@/lib/prisma"

export default async function Home() {
  const articles = await prisma.article.findMany({
    where: {
      category: { not: "Projeler" }
    },
    orderBy: { createdAt: "desc" },
    include: { comments: true }
  })

  // Normalize data if needed (e.g. tags split)
  const formattedArticles = articles.map((a: any) => ({
    ...a,
    tags: a.tags.split(','), // Convert string to array for UI
  }))

  return (
    <div className="flex min-h-screen bg-[#0a0f0a]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <HeroSection />
        <ArticlesSection articles={formattedArticles} />
      </main>
    </div>
  )
}
