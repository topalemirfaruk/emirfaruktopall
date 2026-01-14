import { prisma } from "@/lib/prisma"
import { ArticleCard } from "@/components/article-card"
import { FileText } from "lucide-react"

export default async function MakalelerPage() {
  const articles = await prisma.article.findMany({
    where: { category: "Makaleler" },
    orderBy: { createdAt: "desc" },
    include: { comments: true }
  })

  // Normalize data
  const filteredArticles = articles.map(a => ({
    ...a,
    tags: a.tags ? a.tags.split(',') : [],
  }))

  return (
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileText className="w-8 h-8 text-[#22c55e]" />
        <h1 className="text-3xl font-bold text-white">Makaleler</h1>
        <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
      </div>

      <p className="text-[#6b7280] mb-8 max-w-2xl">
        Linux dünyasından derinlemesine makaleler, analizler ve görüşler. Deneyimli yazarlarımızın kaleminden özgür
        yazılım ekosistemi hakkında bilgi edinin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#6b7280]">Henüz makale bulunmuyor.</p>
        </div>
      )}
    </div>
  )
}
