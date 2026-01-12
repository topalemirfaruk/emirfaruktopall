import { ArticleForm } from "@/components/article-form"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

interface EditArticlePageProps {
    params: Promise<{ id: string }>
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
    const { id } = await params
    const article = await prisma.article.findUnique({
        where: { id: parseInt(id) }
    })

    if (!article) {
        notFound()
    }

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Yazıyı Düzenle</h1>
            <ArticleForm article={article} />
        </div>
    )
}
