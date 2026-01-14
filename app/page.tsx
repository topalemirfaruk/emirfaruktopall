import { HeroSection } from "@/components/hero-section"
import { ArticlesSection } from "@/components/articles-section"

import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function Home() {
  let formattedArticles: any[] = []

  try {
    const articles = await prisma.article.findMany({
      where: {
        category: { not: "Projeler" }
      },
      orderBy: { createdAt: "desc" },
      include: { comments: true }
    })

    // Normalize data if needed (e.g. tags split, dates serialized)
    formattedArticles = articles.map((a: any) => ({
      ...a,
      tags: a.tags.split(','), // Convert string to array for UI
      createdAt: a.createdAt?.toISOString(),
      updatedAt: a.updatedAt?.toISOString(),
      // comments are also included, ensure no Date objects there if passed to client
      comments: a.comments.map((c: any) => ({
        ...c,
        createdAt: c.createdAt?.toISOString(),
      }))
    }))
  } catch (error) {
    console.error("Failed to fetch articles:", error)
    // formattedArticles remains []
  }

  return (
    <>
      <HeroSection />
      <ArticlesSection articles={formattedArticles} />
    </>
  )
}
