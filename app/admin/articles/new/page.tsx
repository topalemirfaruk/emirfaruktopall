import { ArticleForm } from "@/components/article-form"

export default function NewArticlePage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Yeni Yazı Ekle</h1>
            <ArticleForm />
        </div>
    )
}
