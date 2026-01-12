"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createArticle(formData: FormData) {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const category = formData.get("category") as string
    const tags = formData.get("tags") as string
    const image = formData.get("image") as string // URL for now
    const githubUrl = formData.get("githubUrl") as string | null

    // Mock author for now (or get from session)
    const author = "Emir Faruk Topal" // Or get from Clerk user
    const date = new Date().toLocaleDateString("tr-TR", { day: 'numeric', month: 'long', year: 'numeric' })

    await prisma.article.create({
        data: {
            title,
            slug,
            content,
            excerpt,
            category,
            tags,
            author,
            date,
            readTime: "5 dk", // Calculate based on word count later
            image: image || null,
            githubUrl: githubUrl || null,
        }
    })

    revalidatePath("/admin/articles")
    revalidatePath("/makaleler")
    redirect("/admin/articles")
}

export async function updateArticle(id: number, formData: FormData) {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const category = formData.get("category") as string
    const tags = formData.get("tags") as string
    const image = formData.get("image") as string
    const githubUrl = formData.get("githubUrl") as string | null

    await prisma.article.update({
        where: { id },
        data: {
            title,
            slug,
            content,
            excerpt,
            category,
            tags,
            image,
            githubUrl,
        }
    })

    revalidatePath("/admin/articles")
    revalidatePath(`/makale/${slug}`)
    redirect("/admin/articles")
}

export async function deleteArticle(id: number) {
    await prisma.article.delete({ where: { id } })
    revalidatePath("/", "layout")
    revalidatePath("/admin/articles")
    revalidatePath("/admin/projects")
    revalidatePath("/makaleler")
    revalidatePath("/haberler")
    revalidatePath("/ogreticiler")
    revalidatePath("/dagitimlar")
    revalidatePath("/projelerim")
}
