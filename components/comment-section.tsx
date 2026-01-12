"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Reply, Send, MoreHorizontal } from "lucide-react"
import type { Comment } from "@/lib/data"

interface CommentSectionProps {
  comments: Comment[]
  articleId: number
}

export function CommentSection({ comments: initialComments, articleId }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now(),
      author: "Misafir Kullanıcı",
      avatar: "/guest-user-avatar.jpg",
      content: newComment,
      date: "Şimdi",
      likes: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleSubmitReply = (parentId: number) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Date.now(),
      author: "Misafir Kullanıcı",
      avatar: "/guest-user-avatar.jpg",
      content: replyContent,
      date: "Şimdi",
      likes: 0,
    }

    setComments(
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply],
          }
        }
        return comment
      }),
    )

    setReplyingTo(null)
    setReplyContent("")
  }

  const handleLikeComment = (commentId: number, isReply?: boolean, parentId?: number) => {
    if (isReply && parentId) {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId && comment.replies) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === commentId ? { ...reply, likes: reply.likes + 1 } : reply,
              ),
            }
          }
          return comment
        }),
      )
    } else {
      setComments(
        comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
      )
    }
  }

  return (
    <div id="yorumlar" className="mt-12 pt-8 border-t border-[#1a2e1a]">
      <h3 className="text-xl font-bold text-white mb-6">
        Yorumlar ({comments.length + comments.reduce((acc, c) => acc + (c.replies?.length || 0), 0)})
      </h3>

      {/* New Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex gap-3">
          <img src="/guest-user-avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Yorumunuzu yazın..."
              rows={3}
              className="w-full bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-3 text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#22c55e] resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg text-sm hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                Gönder
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            {/* Main Comment */}
            <div className="flex gap-3">
              <img src={comment.avatar || "/placeholder.svg"} alt={comment.author} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">{comment.author}</span>
                      <span className="text-[#6b7280] text-xs">{comment.date}</span>
                    </div>
                    <button className="text-[#6b7280] hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[#b0b0b0] text-sm">{comment.content}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 px-2">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center gap-1 text-[#6b7280] hover:text-[#22c55e] text-xs transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 text-[#6b7280] hover:text-white text-xs transition-colors"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    <span>Yanıtla</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="flex gap-3 mt-4 ml-4">
                    <img src="/guest-user-avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Yanıtınızı yazın..."
                        rows={2}
                        className="w-full bg-[#060a06] border border-[#1a2e1a] rounded-lg p-3 text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#22c55e] resize-none text-sm"
                      />
                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          onClick={() => setReplyingTo(null)}
                          className="px-3 py-1.5 text-[#6b7280] hover:text-white text-xs transition-colors"
                        >
                          İptal
                        </button>
                        <button
                          onClick={() => handleSubmitReply(comment.id)}
                          disabled={!replyContent.trim()}
                          className="px-3 py-1.5 bg-[#22c55e] text-black font-semibold rounded text-xs hover:bg-[#16a34a] transition-colors disabled:opacity-50"
                        >
                          Yanıtla
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-3">
                    <img src={reply.avatar || "/placeholder.svg"} alt={reply.author} className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <div className="bg-[#060a06] border border-[#1a2e1a] rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-medium text-sm">{reply.author}</span>
                          <span className="text-[#6b7280] text-xs">{reply.date}</span>
                        </div>
                        <p className="text-[#b0b0b0] text-sm">{reply.content}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 px-2">
                        <button
                          onClick={() => handleLikeComment(reply.id, true, comment.id)}
                          className="flex items-center gap-1 text-[#6b7280] hover:text-[#22c55e] text-xs transition-colors"
                        >
                          <Heart className="w-3.5 h-3.5" />
                          <span>{reply.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
