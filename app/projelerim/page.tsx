import { Folder } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { ArticleCard } from "@/components/article-card"

export default async function ProjelerimPage() {
    const projects = await prisma.article.findMany({
        where: {
            category: "Projeler",
        },
        include: {
            comments: true,
        },
        orderBy: {
            date: "desc",
        },
    })

    // Normalize tags for ArticleCard
    const formattedProjects = projects.map(p => ({
        ...p,
        tags: p.tags.split(",").map(t => t.trim())
    }))

    return (
        <div className="p-8">
            <div className="flex items-center gap-4 mb-8">
                <Folder className="w-8 h-8 text-[#22c55e]" />
                <h1 className="text-3xl font-bold text-white">Projelerim</h1>
                <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
            </div>

            <p className="text-[#6b7280] mb-8 max-w-2xl">
                Geliştirdiğim açık kaynak projeler, scriptler ve sistem araçları.
            </p>

            {formattedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formattedProjects.map((project) => (
                        <ArticleCard key={project.id} article={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-[#0d120d] border border-[#1a2e1a] rounded-lg">
                    <div className="flex justify-center mb-4">
                        <Folder className="w-12 h-12 text-[#22c55e]/50" />
                    </div>
                    <p className="text-[#b0b0b0] text-lg">Henüz proje eklenmedi.</p>
                    <p className="text-[#6b7280] text-sm mt-2">Admin panelinden "Projeler" kategorisinde içerik ekleyebilirsiniz.</p>
                </div>
            )}
        </div>
    )
}
