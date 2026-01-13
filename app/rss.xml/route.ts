import { prisma } from '@/lib/prisma'

export async function GET() {
    const baseUrl = 'https://emirfaruktopal.com'

    const articles = await prisma.article.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 50, // Limit feed size to recent 50 articles
        select: {
            title: true,
            slug: true,
            excerpt: true,
            createdAt: true,
            author: true,
            category: true,
        }
    })

    // XML Header
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Emir Faruk Topal - Linux ve Teknoloji</title>
    <link>${baseUrl}</link>
    <description>Linux sistem yönetimi, açık kaynak ve teknoloji haberleri.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${articles.map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/makale/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/makale/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.createdAt).toUTCString()}</pubDate>
      <author>info@emirfaruktopal.com (${article.author})</author>
      <category>${article.category}</category>
    </item>`).join('')}
  </channel>
</rss>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            // Cache for 1 hour
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    })
}
