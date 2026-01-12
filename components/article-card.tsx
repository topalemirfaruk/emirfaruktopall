"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageCircle, Share2, Bookmark, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShareModal } from "./share-modal"
import type { Article } from "@/lib/data"

export function ArticleCard({ article }: { article: Article }) {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likesCount, setLikesCount] = useState(article.likes)
  const [showShareModal, setShowShareModal] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setBookmarked(!bookmarked)
  }

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowShareModal(true)
  }


  const linkHref = article.githubUrl || `/makale/${article.slug}`
  const linkTarget = article.githubUrl ? "_blank" : undefined

  return (
    <>
      <article className="bg-[#0d120d] rounded-lg overflow-hidden border border-[#1a2e1a] hover:border-[#22c55e]/50 transition-colors group">
        {/* Image - Clickable */}
        <Link href={linkHref} target={linkTarget}>
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-1 bg-[#22c55e] text-black text-xs font-semibold rounded">
                {article.category}
              </span>
            </div>
            <button
              onClick={handleBookmark}
              className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <Bookmark className={cn("w-4 h-4", bookmarked ? "fill-[#22c55e] text-[#22c55e]" : "text-white")} />
            </button>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link href={linkHref} target={linkTarget}>
            <h3 className="text-white font-semibold text-base mb-2 line-clamp-2 group-hover:text-[#22c55e] transition-colors cursor-pointer">
              {article.title}
            </h3>
          </Link>
          <p className="text-[#6b7280] text-sm line-clamp-2 mb-4">{article.excerpt}</p>

          {/* Author & Meta */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={article.avatar || "/placeholder.svg"}
              alt={article.author}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#1a2e1a]"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{article.author}</p>
              <div className="flex items-center gap-2 text-[#6b7280] text-xs">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div className="flex items-center justify-between pt-3 border-t border-[#1a2e1a]">
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors",
                liked ? "text-[#22c55e]" : "text-[#6b7280] hover:text-[#22c55e]",
              )}
            >
              <Heart className={cn("w-4 h-4", liked && "fill-current")} />
              <span>{likesCount}</span>
            </button>

            {/* <Link // Commented out until Disqus count integration
              href={`/makale/${article.slug}#yorumlar`}
              className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#22c55e] text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Yorum Yap</span>
            </Link> */}
            <Link
              href={`/makale/${article.slug}#yorumlar`}
              className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#22c55e] text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Yorumlar</span>
            </Link>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#22c55e] text-sm transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{article.shares}</span>
            </button>
          </div>
        </div>
      </article>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={article.title}
        url={`/makale/${article.slug}`}
      />
    </>
  )
}
