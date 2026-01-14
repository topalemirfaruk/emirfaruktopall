import { prisma } from "@/lib/prisma"

async function main() {
    const articles = await prisma.article.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
            title: true,
            slug: true,
            image: true
        }
    })

    console.log("Recent Article Images:")
    articles.forEach(a => {
        const imgPreview = a.image
            ? (a.image.startsWith("data:") ? `Base64 (${a.image.length} chars): ${a.image.substring(0, 100)}...` : a.image)
            : "NULL"
        console.log(`[${a.title}] (${a.slug}): ${imgPreview}`)
    })
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
