
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://emirfaruktopal.com' // Replace with actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
