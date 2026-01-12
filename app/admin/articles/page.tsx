import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { PlusCircle, Pencil, Eye } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"

async function getArticles() {
    return await prisma.article.findMany({
        where: {
            category: { not: "Projeler" }
        },
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { comments: true } } }
    })
}

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">Makaleler</h1>
                <Link
                    href="/admin/articles/new"
                    className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded hover:bg-[#16a34a] transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Yeni Yazı Ekle
                </Link>
            </div>

            <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#0f160f] border-b border-[#1a2e1a]">
                        <tr>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">Başlık</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">Kategori</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">Tarih</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm">İstatistikler</th>
                            <th className="px-6 py-4 text-[#6b7280] font-medium text-sm text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1a2e1a]">
                        {articles.map((article: any) => (
                            <tr key={article.id} className="hover:bg-[#1a2e1a]/20 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="text-white font-medium">{article.title}</div>
                                    <div className="text-[#6b7280] text-xs mt-1 truncate max-w-xs">{article.slug}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-[#1a2e1a] text-[#22c55e] text-xs rounded border border-[#22c55e]/20">
                                        {article.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-[#b0b0b0] text-sm">{article.date}</td>
                                <td className="px-6 py-4">
                                    <div className="text-xs text-[#b0b0b0]">
                                        <div>{article.likes} Beğeni</div>
                                        <div>{article._count.comments} Yorum</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link
                                            href={`/makale/${article.slug}`}
                                            target="_blank"
                                            className="p-2 text-[#6b7280] hover:text-white transition-colors"
                                            title="Görüntüle"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={`/admin/articles/${article.id}`}
                                            className="p-2 text-[#6b7280] hover:text-[#22c55e] transition-colors"
                                            title="Düzenle"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <DeleteButton id={article.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {articles.length === 0 && (
                    <div className="p-8 text-center text-[#6b7280]">
                        Henüz hiç yazı eklenmemiş.
                    </div>
                )}
            </div>
        </div>
    )
}
