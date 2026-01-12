import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { Sidebar } from "@/components/sidebar"
import { ArticleInteractions } from "@/components/article-interactions"
import { CommentSection } from "@/components/comment-section"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  const article = await prisma.article.findUnique({
    where: { slug },
    include: { comments: { include: { replies: true } } }
  })

  if (!article) {
    notFound()
  }

  // Normalize tags
  const tags = article.tags ? article.tags.split(',') : []
  // Cast article to any for now to bypass type mismatch with client components until full refactor
  const uiArticle = { ...article, tags } as any

  return (
    <div className="flex min-h-screen bg-[#0a0f0a]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/50 to-transparent" />

          {/* Back Button */}
          <Link
            href="/"
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Geri</span>
          </Link>
        </div>

        {/* Article Content */}
        <div className="px-6 md:px-12 lg:px-24 py-8 -mt-24 relative z-10">
          {/* Category Badge - Updated to green */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-[#22c55e] text-black text-sm font-semibold rounded">{article.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{article.title}</h1>

          {/* Author & Meta - Updated border */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-[#1a2e1a]">
            <div className="flex items-center gap-3">
              <img
                src={article.avatar || "/placeholder.svg"}
                alt={article.author}
                className="w-12 h-12 rounded-full ring-2 ring-[#1a2e1a]"
              />
              <div>
                <p className="text-white font-medium">{article.author}</p>
                <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactions */}
            <ArticleInteractions article={uiArticle} />
          </div>

          {/* Article Body - Updated code highlight color */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-[#c0c0c0] leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-4">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mt-4 mb-2">$1</h3>')
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-[#0d120d] border border-[#1a2e1a] p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm text-[#4ade80]">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-[#0d120d] px-2 py-0.5 rounded text-[#22c55e]">$1</code>')
                  .replace(/^- (.*$)/gm, '<li class="ml-4 text-[#b0b0b0]">$1</li>')
                  .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 text-[#b0b0b0]">$1</li>')
                  .replace(/\n\n/g, '</p><p class="mb-4">'),
              }}
            />
          </article>

          {/* Tags - Updated colors */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-[#1a2e1a]">
            <Tag className="w-4 h-4 text-[#6b7280]" />
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/etiket/${tag}`}
                className="px-3 py-1 bg-[#0d120d] text-[#6b7280] text-sm rounded-full hover:bg-[#1a2e1a] hover:text-[#22c55e] transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Comments */}
          <CommentSection comments={uiArticle.comments} articleId={article.id} />
        </div>
      </main>
    </div>
  )
}
