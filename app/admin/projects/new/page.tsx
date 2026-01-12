
import { ArticleForm } from "@/components/article-form"

export default function NewProjectPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Yeni Proje Ekle</h1>
            {/* We can pass a prop to ArticleForm to lock category to "Projeler" if we want, 
                or just let the user select it. For now, we'll trust the user or update ArticleForm later 
                to accept a default category. Since I didn't add that prop yet, I'll update ArticleForm first 
                or just let it be. Actually, I can pass a dummy article object with category pre-filled. */}
            <ArticleForm defaultCategory="Projeler" />
        </div>
    )
}
