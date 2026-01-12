import { prisma } from "@/lib/prisma" // We will create this
import { FileText, Users, MessageCircle, Eye } from "lucide-react"

async function getStats() {
    const articleCount = await prisma.article.count()
    const commentCount = await prisma.comment.count()
    // Mock analytics
    const totalViews = 12500

    return { articleCount, commentCount, totalViews }
}

export default async function AdminPage() {
    const stats = await getStats()

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Panel Özeti</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0d120d] border border-[#1a2e1a] p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#6b7280]">Toplam Yazı</span>
                        <FileText className="w-5 h-5 text-[#22c55e]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stats.articleCount}</div>
                </div>

                <div className="bg-[#0d120d] border border-[#1a2e1a] p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#6b7280]">Toplam Yorum</span>
                        <MessageCircle className="w-5 h-5 text-[#22c55e]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stats.commentCount}</div>
                </div>

                <div className="bg-[#0d120d] border border-[#1a2e1a] p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#6b7280]">Görüntülenme</span>
                        <Eye className="w-5 h-5 text-[#22c55e]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stats.totalViews.toLocaleString()}</div>
                </div>
            </div>
        </div>
    )
}
