
import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://emirfaruktopal.com' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/hakkimizda',
        '/iletisim',
        '/projelerim',
        '/makaleler',
        '/haberler',
        '/ogreticiler',
        '/dagitimlar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    // Dynamic routes (Articles)
    const articles = await prisma.article.findMany({
        select: {
            slug: true,
            updatedAt: true,
        },
    })

    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/makale/${article.slug}`,
        lastModified: article.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic routes (Tags - optional, can be heavy if too many)
    // avoiding for now to keep it simple, or maybe just main categories

    return [...routes, ...articleRoutes]
}
