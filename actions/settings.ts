"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateSiteSettings(formData: FormData) {
    const ownerName = formData.get("ownerName") as string
    const ownerTitle = formData.get("ownerTitle") as string
    const sidebarTitle = formData.get("sidebarTitle") as string
    const heroTitle = formData.get("heroTitle") as string
    const heroDescription = formData.get("heroDescription") as string
    const aboutContent = formData.get("aboutContent") as string
    const socialGithub = formData.get("socialGithub") as string
    const socialTwitter = formData.get("socialTwitter") as string
    const socialLinkedin = formData.get("socialLinkedin") as string
    const socialEmail = formData.get("socialEmail") as string

    await prisma.siteConfig.upsert({
        where: { id: 1 },
        update: {
            ownerName,
            ownerTitle,
            sidebarTitle,
            heroTitle,
            heroDescription,
            aboutContent,
            socialGithub,
            socialTwitter,
            socialLinkedin,
            socialEmail,
        },
        create: {
            ownerName,
            ownerTitle,
            sidebarTitle,
            heroTitle,
            heroDescription,
            aboutContent,
            socialGithub,
            socialTwitter,
            socialLinkedin,
            socialEmail,
        }
    })

    revalidatePath("/")
    revalidatePath("/admin/settings")
    revalidatePath("/hakkimizda")
}

export async function getSiteSettings() {
    const settings = await prisma.siteConfig.findUnique({
        where: { id: 1 },
    })
    return settings
}
