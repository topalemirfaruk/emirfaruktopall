import { prisma } from "@/lib/prisma"
import { ArticleCard } from "@/components/article-card"
import { FileText } from "lucide-react"

export default async function HaberlerPage() {
  const articles = await prisma.article.findMany({
    where: { category: "Haberler" },
    orderBy: { createdAt: "desc" },
    include: { comments: true }
  })

  const filteredArticles = articles.map(a => ({
    ...a,
    tags: a.tags ? a.tags.split(',') : [],
  }))

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileText className="w-6 h-6 text-[#22c55e]" />
        <h1 className="text-2xl font-bold text-white tracking-wider">HABERLER</h1>
      </div>

      <p className="text-[#6b7280] mb-8 max-w-2xl">
        En son Linux ve açık kaynak dünyası haberleri, güncellemeler ve önemli gelişmeler.
        Teknoloji dünyasındaki son trendleri takip edin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#6b7280]">Henüz haber bulunmuyor.</p>
        </div>
      )}
    </div>
  )
}
