"use client"

import { useState, useTransition } from "react"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShareModal } from "./share-modal"
import type { Article } from "@/lib/data"
import { incrementLike, incrementShare } from "@/actions/articles"

export function ArticleInteractions({ article }: { article: Article }) {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likesCount, setLikesCount] = useState(article.likes)
  const [sharesCount, setSharesCount] = useState(article.shares)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleLike = () => {
    if (liked) return

    setLiked(true)
    setLikesCount(prev => prev + 1)

    startTransition(async () => {
      await incrementLike(article.slug)
    })
  }

  const handleShare = () => {
    setShowShareModal(true)
    if (!showShareModal) { // Only increment on first open
      setSharesCount(prev => prev + 1)
      startTransition(async () => {
        await incrementShare(article.slug)
      })
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={handleLike}
          disabled={liked || isPending}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
            liked ? "bg-[#22c55e]/20 text-[#22c55e]" : "bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e]",
            isPending && "opacity-70 cursor-not-allowed"
          )}
        >
          <Heart className={cn("w-5 h-5", liked && "fill-current")} />
          <span className="text-sm font-medium">{likesCount}</span>
        </button>

        <a
          href="#yorumlar"
          className="flex items-center gap-2 px-3 py-2 bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e] rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Yorumlar</span>
        </a>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-3 py-2 bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e] rounded-lg transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">{sharesCount}</span>
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={cn(
            "p-2 rounded-lg transition-colors",
            bookmarked ? "bg-[#22c55e]/20 text-[#22c55e]" : "bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e]",
          )}
        >
          <Bookmark className={cn("w-5 h-5", bookmarked && "fill-current")} />
        </button>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={article.title}
        url={`/makale/${article.slug}`}
      />
    </>
  )
}

