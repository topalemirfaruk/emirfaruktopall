"use client"

import { useState } from "react"
import { ArticleCard } from "./article-card"
import { CategoryTabs } from "./category-tabs"


const categories = ["Tümü", "Makaleler", "Öğreticiler", "Haberler", "Dağıtımlar"]

interface ArticlesSectionProps {
  articles: any[] // We will fix type later or use Prisma type
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü")

  const filteredArticles =
    activeCategory === "Tümü" ? articles : articles.filter((article) => article.category === activeCategory)

  return (
    <div className="px-8 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-white tracking-wider">SON İÇERİKLER</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
      </div>

      {/* Category Tabs */}
      <CategoryTabs categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
