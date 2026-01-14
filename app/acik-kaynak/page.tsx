import { prisma } from "@/lib/prisma"
import { Sidebar } from "@/components/sidebar"
import { ArticleCard } from "@/components/article-card"
import { Globe } from "lucide-react"

export const dynamic = 'force-dynamic'

export const metadata = {
    title: "Açık Kaynak Dünyası | Emir Faruk Topal",
    description: "Açık kaynak dünyasında yaşanan son gelişmeler, önemli haberler ve trendler.",
}

export default async function OpenSourcePage() {
    const articles = await prisma.article.findMany({
        where: { category: "Açık Kaynak" }, // Category name to filter by
        orderBy: { createdAt: "desc" },
        include: { comments: true }
    })

    // Normalize data
    // Normalize data
    const filteredArticles = articles.map(a => ({
        ...a,
        tags: a.tags ? a.tags.split(',') : [],
        image: a.image || "/placeholder.svg", // Fallback for image
        githubUrl: a.githubUrl || undefined, // Convert null to undefined
        avatar: a.avatar || "", // Fallback to empty string for article author
        comments: a.comments.map(c => ({
            ...c,
            avatar: c.avatar || "" // Fallback to empty string for comment author
        }))
    }))

    return (
        <div className="flex min-h-screen bg-[#0a0f0a]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                <div className="flex items-center gap-4 mb-8">
                    <Globe className="w-8 h-8 text-[#22c55e]" />
                    <h1 className="text-3xl font-bold text-white">Açık Kaynak Dünyası</h1>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
                </div>

                <p className="text-[#6b7280] mb-8 max-w-2xl">
                    Açık kaynak yazılım ekosistemindeki en son gelişmeler, büyük projelerden haberler ve topluluk etkinlikleri.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-[#6b7280]">Bu kategoride henüz içerik bulunmuyor.</p>
                    </div>
                )}
            </main>
        </div>
    )
}
