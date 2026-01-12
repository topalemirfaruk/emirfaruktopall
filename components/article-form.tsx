"use client"

import { createArticle, updateArticle } from "@/actions/articles"
import { Button } from "@/components/ui/button" // Assuming we have these or use basic HTML
import type { Article } from "@prisma/client"
import { Save } from "lucide-react"

interface ArticleFormProps {
    article?: Article
    defaultCategory?: string
}

export function ArticleForm({ article, defaultCategory }: ArticleFormProps) {
    const isEditing = !!article

    // Wrapper to bind ID for update
    const action = isEditing
        ? updateArticle.bind(null, article.id)
        : createArticle

    return (
        <form action={action} className="space-y-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Başlık</label>
                    <input
                        name="title"
                        defaultValue={article?.title}
                        required
                        className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                        placeholder="Yazı başlığı..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Slug (URL)</label>
                    <input
                        name="slug"
                        defaultValue={article?.slug}
                        required
                        className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                        placeholder="yazi-basligi-url"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Kategori</label>
                    <select
                        name="category"
                        defaultValue={article?.category || defaultCategory || "Makaleler"}
                        className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                    >
                        <option value="Makaleler">Makaleler</option>
                        <option value="Projeler">Projeler</option>
                        <option value="Öğreticiler">Öğreticiler</option>
                        <option value="Haberler">Haberler</option>
                        <option value="Dağıtımlar">Dağıtımlar</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Görsel URL</label>
                    <input
                        name="image"
                        defaultValue={article?.image || ""}
                        className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                        placeholder="/placeholder.png"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white">GitHub Proje URL (Opsiyonel)</label>
                <div className="text-xs text-[#6b7280] mb-1">Eğer doldurulursa, proje kartına tıklandığında direkt bu adrese gider.</div>
                <input
                    name="githubUrl"
                    defaultValue={article?.githubUrl || ""}
                    className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                    placeholder="https://github.com/username/project"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white">Kısa Açıklama (Excerpt)</label>
                <textarea
                    name="excerpt"
                    defaultValue={article?.excerpt}
                    required
                    rows={3}
                    className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                    placeholder="Yazının kısa özeti..."
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white">Etiketler (Virgülle ayırın)</label>
                <input
                    name="tags"
                    defaultValue={article?.tags || ""}
                    className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e]"
                    placeholder="linux, ubuntu, terminal"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white">İçerik (Markdown)</label>
                <textarea
                    name="content"
                    defaultValue={article?.content}
                    required
                    rows={20}
                    className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-[#22c55e]"
                    placeholder="# Başlık&#10;&#10;İçerik buraya..."
                />
            </div>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-black font-bold rounded hover:bg-[#16a34a] transition-colors"
                >
                    <Save className="w-5 h-5" />
                    {isEditing ? "Güncelle" : "Yayınla"}
                </button>
            </div>
        </form>
    )
}
