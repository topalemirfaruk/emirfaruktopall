import { prisma } from "@/lib/prisma"
import { ArticleCard } from "@/components/article-card"
import { Hash } from "lucide-react"

interface TagPageProps {
    params: Promise<{ tag: string }>
}

export async function generateMetadata({ params }: TagPageProps) {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag)

    return {
        title: `#${decodedTag} Etiketi | Emir Faruk Topal`,
        description: `'${decodedTag}' etiketiyle işaretlenmiş tüm makaleler ve içerikler.`,
    }
}

export default async function TagPage({ params }: TagPageProps) {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag)

    const articles = await prisma.article.findMany({
        where: {
            tags: {
                contains: decodedTag,
                mode: 'insensitive' // Requires PostgreSQL, if fails fallback to client filtering
            }
        },
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
                <Hash className="w-8 h-8 text-[#22c55e]" />
                <h1 className="text-3xl font-bold text-white">#{decodedTag}</h1>
                <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
            </div>

            <p className="text-[#6b7280] mb-8 max-w-2xl">
                Bu etiket altında toplanan tüm içerikler aşağıda listelenmiştir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-[#6b7280]">Bu etikete sahip içerik bulunamadı.</p>
                </div>
            )}
        </div>
    )
}
