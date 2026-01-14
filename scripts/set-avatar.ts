import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const avatarUrl = "https://github.com/topalemirfaruk.png"
    const authorName = "Emir Faruk Topal"

    console.log(`Updating avatar for author: ${authorName}...`)

    const result = await prisma.article.updateMany({
        where: {
            author: {
                contains: "Emir", // Matches "Emir Faruk Topal"
                mode: "insensitive",
            },
        },
        data: {
            avatar: avatarUrl,
        },
    })

    console.log(`Updated ${result.count} articles with new avatar.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
