import { prisma } from "@/lib/prisma"

async function checkArticle() {
    const slug = "mx-linux-25-1-beta-dual-init-destegi"
    const article = await prisma.article.findUnique({
        where: { slug }
    })

    if (!article) {
        console.log("Article not found!")
        return
    }

    console.log("SEO Data Check:")
    console.log(`Title: ${article.title}`)
    console.log(`Description (Excerpt): ${article.excerpt ? "Present" : "MISSING"}`)
    console.log(`Image: ${article.image ? "Present" : "MISSING"}`)
    console.log(`Date: ${article.date}`)
    console.log(`Tags: ${article.tags}`)

    if (!article.excerpt || article.excerpt.length < 50) {
        console.warn("WARNING: Excerpt is too short or missing (Bad for SEO)")
    }
    if (!article.image) {
        console.warn("WARNING: Image is missing (Bad for social sharing)")
    }
}

checkArticle()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
