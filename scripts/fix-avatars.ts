import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const avatarUrl = "https://github.com/topalemirfaruk.png"

    console.log("Starting comprehensive avatar update...")

    // Update ALL articles where author is Emir Faruk Topal
    const result1 = await prisma.article.updateMany({
        where: {
            author: "Emir Faruk Topal"
        },
        data: {
            avatar: avatarUrl,
        },
    })
    console.log(`Updated ${result1.count} articles matching exact author name.`)

    // Update any article with missing avatar (fallback)
    const result2 = await prisma.article.updateMany({
        where: {
            avatar: null
        },
        data: {
            avatar: avatarUrl,
        },
    })
    console.log(`Updated ${result2.count} articles with null avatar.`)

    // Also catch empty string if any
    const result3 = await prisma.article.updateMany({
        where: {
            avatar: ""
        },
        data: {
            avatar: avatarUrl,
        },
    })

    console.log(`Updated ${result3.count} articles with empty string avatar.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
