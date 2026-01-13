import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { Sidebar } from "@/components/sidebar"
import { ArticleInteractions } from "@/components/article-interactions"
import { GiscusComments } from "@/components/giscus-comments"

import Script from "next/script"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css" // Keep this if it resolves, otherwise we might need next/font or global css, but let's try.
import "@/styles/highlight.css"


interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug },
    select: {
      title: true,
      excerpt: true,
      author: true,
      date: true,
      createdAt: true,
      slug: true,
      // Exclude 'image' (Base64) to prevent heavy payload/timeouts
    }
  })

  if (!article) {
    return {
      title: 'Bulunamadı | Emir Faruk Topal',
      description: 'Aradığınız makale bulunamadı.',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/makale/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `/makale/${slug}`,
      publishedTime: (() => {
        try {
          const date = new Date(article.date)
          // Check if date is valid
          if (isNaN(date.getTime())) {
            return article.createdAt.toISOString()
          }
          return date.toISOString()
        } catch {
          return article.createdAt.toISOString()
        }
      })(),
      authors: [article.author],
      images: [
        {
          url: `https://emirfaruktopal.com/api/og-image/${slug}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`/api/og-image/${slug}`],
    },
  }
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

  // Serialize article for client components to prevent crash relative to Date objects
  const uiArticle = {
    ...article,
    tags,
    createdAt: article.createdAt.toISOString(),
    updatedAt: article.updatedAt.toISOString(),
    comments: article.comments.map((c: any) => ({
      ...c,
      createdAt: c.createdAt.toISOString(),
      replies: c.replies?.map((r: any) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
      })) || []
    }))
  } as any

  return (
    <div className="flex min-h-screen bg-[#0a0f0a]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Header Image */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#0a0f0a] overflow-hidden group">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110"
            style={{ backgroundImage: `url(${article.image || "/placeholder.svg"})` }}
          />

          {/* Main Image - Contained */}
          <div className="relative h-full w-full flex items-center justify-center p-4">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="h-full w-auto object-contain shadow-2xl rounded-lg max-w-full"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-transparent to-transparent" />

          {/* Back Button */}
          <Link
            href="/"
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors z-20"
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
            {/* Structured Data (JSON-LD) for SEO */}
            <Script
              id="article-json-ld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "TechArticle",
                  headline: article.title,
                  description: article.excerpt,
                  image: [
                    `https://emirfaruktopal.com/api/og-image/${slug}`,
                  ],
                  datePublished: article.createdAt ? new Date(article.createdAt).toISOString() : new Date().toISOString(),
                  dateModified: article.updatedAt ? new Date(article.updatedAt).toISOString() : new Date().toISOString(),
                  author: [{
                    "@type": "Person",
                    name: article.author,
                    url: "https://emirfaruktopal.com"
                  }],
                  publisher: {
                    "@type": "Organization",
                    name: "Emir Faruk Topal",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://emirfaruktopal.com/icon.svg"
                    }
                  }
                })
              }}
            />
            {/* JSON-LD Structured Data */}
            <Script
              id="article-json-ld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: article.title,
                  description: article.excerpt,
                  image: article.image ? [article.image] : [],
                  datePublished: article.date, // Needs ISO format ideally
                  author: {
                    '@type': 'Person',
                    name: article.author,
                  },
                }),
              }}
            />

            {/* Interactions */}
            <ArticleInteractions article={uiArticle} />
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="text-[#c0c0c0] leading-relaxed space-y-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={{
                  h1: ({ node, ...props }: any) => <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
                  h2: ({ node, ...props }: any) => <h2 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
                  h3: ({ node, ...props }: any) => <h3 className="text-xl font-semibold text-white mt-4 mb-2" {...props} />,
                  h4: ({ node, ...props }: any) => <h4 className="text-lg font-semibold text-white mt-3 mb-2" {...props} />,
                  p: ({ node, ...props }: any) => <p className="mb-4 text-[#c0c0c0]" {...props} />,
                  strong: ({ node, ...props }: any) => <strong className="font-bold text-white" {...props} />,
                  ul: ({ node, ...props }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-[#b0b0b0]" {...props} />,
                  ol: ({ node, ...props }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-[#b0b0b0]" {...props} />,
                  li: ({ node, ...props }: any) => <li className="ml-4" {...props} />,
                  blockquote: ({ node, ...props }: any) => (
                    <blockquote className="border-l-4 border-[#22c55e] pl-4 py-2 my-4 bg-[#0d120d]/50 italic text-[#b0b0b0]" {...props} />
                  ),
                  code: ({ node, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || "")
                    const isInline = !match && !className
                    return isInline ? (
                      <code className="bg-[#0d120d] px-2 py-0.5 rounded text-[#22c55e] font-mono text-sm" {...props}>
                        {children}
                      </code>
                    ) : (
                      <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg overflow-hidden my-4">
                        {/* Structured Data (JSON-LD) for SEO */}


                        <div className="flex items-center px-4 py-2 bg-[#1a2e1a]/50 border-b border-[#1a2e1a]">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                          </div>
                          {match && <span className="ml-4 text-xs text-[#6b7280] font-mono">{match[1]}</span>}
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </div>
                      </div>
                    )
                  },
                  a: ({ node, ...props }: any) => (
                    <a className="text-[#22c55e] hover:underline hover:text-[#4ade80] transition-colors" {...props} />
                  ),
                  img: ({ node, ...props }: any) => (
                    <img className="rounded-lg border border-[#1a2e1a] my-6 max-w-full h-auto" {...props} />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Tags - Updated colors */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-[#1a2e1a]">
            <Tag className="w-4 h-4 text-[#6b7280]" />
            {tags.map((tag: string) => (
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
          {/* Comments */}
          <GiscusComments />
        </div>
      </main>
    </div>
  )
}
