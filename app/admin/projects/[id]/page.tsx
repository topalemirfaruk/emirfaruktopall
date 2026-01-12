
import { ArticleForm } from "@/components/article-form"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

interface EditProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
    const { id } = await params
    const project = await prisma.article.findUnique({
        where: {
            id: parseInt(id),
        },
    })

    if (!project) {
        notFound()
    }

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Projeyi Düzenle</h1>
            <ArticleForm article={project} />
        </div>
    )
}
