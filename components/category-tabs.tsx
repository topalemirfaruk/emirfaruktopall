"use client"

import { cn } from "@/lib/utils"

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded transition-colors",
            activeCategory === category
              ? "bg-[#22c55e] text-black font-semibold"
              : "bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e] hover:bg-[#1a2e1a]",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
