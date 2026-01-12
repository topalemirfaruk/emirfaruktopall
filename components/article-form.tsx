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
                    <label className="text-sm font-medium text-white">Görsel</label>
                    <div className="flex flex-col gap-4">
                        {/* Hidden input for URL/Base64 submission */}
                        <input
                            name="image"
                            type="hidden"
                            defaultValue={article?.image || ""}
                            id="image-url-input"
                        />

                        {/* File Upload UI */}
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                className="text-sm text-[#6b7280] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1a2e1a] file:text-[#22c55e] hover:file:bg-[#22c55e]/20 cursor-pointer"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                        // Compress image logic
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                            const img = new Image();
                                            img.onload = () => {
                                                const canvas = document.createElement('canvas');
                                                const MAX_WIDTH = 800; // Resize to max 800px width
                                                let width = img.width;
                                                let height = img.height;

                                                if (width > MAX_WIDTH) {
                                                    height *= MAX_WIDTH / width;
                                                    width = MAX_WIDTH;
                                                }

                                                canvas.width = width;
                                                canvas.height = height;

                                                const ctx = canvas.getContext('2d');
                                                ctx?.drawImage(img, 0, 0, width, height);

                                                // Compress to JPEG with 0.7 quality
                                                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);

                                                // Update hidden input
                                                const hiddenInput = document.getElementById('image-url-input') as HTMLInputElement;
                                                if (hiddenInput) hiddenInput.value = compressedBase64;

                                                // Update preview
                                                const preview = document.getElementById('image-preview') as HTMLImageElement;
                                                if (preview) preview.src = compressedBase64;
                                            };
                                            img.src = event.target?.result as string;
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <span className="text-xs text-[#6b7280]">veya URL girin:</span>
                        </div>

                        {/* Text URL Fallback */}
                        <input
                            type="text"
                            placeholder="https://..."
                            className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded px-4 py-2 text-white focus:outline-none focus:border-[#22c55e] text-sm"
                            onChange={(e) => {
                                const hiddenInput = document.getElementById('image-url-input') as HTMLInputElement
                                if (hiddenInput) hiddenInput.value = e.target.value
                                const preview = document.getElementById('image-preview') as HTMLImageElement
                                if (preview) preview.src = e.target.value
                            }}
                            defaultValue={article?.image || ""}
                        />

                        {/* Preview */}
                        <div className="relative w-full h-48 bg-[#0a0f0a] border border-[#1a2e1a] rounded overflow-hidden flex items-center justify-center">
                            <img
                                id="image-preview"
                                src={article?.image || "/placeholder.svg"}
                                alt="Önizleme"
                                className="h-full w-auto object-contain"
                                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                            />
                        </div>
                    </div>
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
