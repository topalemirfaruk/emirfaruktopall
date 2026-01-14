import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const article = await prisma.article.findUnique({
            where: { slug },
            select: { image: true },
        })

        if (!article || !article.image) {
            // Return default OG image if no specific image found
            // You might want to redirect to your default placeholder
            return new NextResponse("Not Found", { status: 404 })
        }

        const { image } = article

        // Check if it's a Base64 string
        if (image.startsWith("data:image/")) {
            // Extract Base64 data
            // format: data:image/png;base64,iVBORw0KGgo...
            const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

            if (!matches || matches.length !== 3) {
                return new NextResponse("Invalid Base64 string", { status: 500 })
            }

            const contentType = matches[1]
            const buffer = Buffer.from(matches[2], "base64")

            return new NextResponse(buffer, {
                headers: {
                    "Content-Type": contentType,
                    "Cache-Control": "public, max-age=31536000, immutable",
                },
            })
        }

        // If it's a normal URL, redirect to it
        // This allows mixed usage (both external URLs and Base64 uploads)
        return NextResponse.redirect(image)
    } catch (error) {
        console.error("Error serving OG image:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
