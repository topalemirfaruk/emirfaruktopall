import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin-sidebar"
import { RedirectToSignIn } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "Admin Paneli",
    description: "Yönetim Paneli",
}

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const user = await currentUser()

    if (!user) {
        return <RedirectToSignIn />
    }

    const adminEmail = process.env.ADMIN_EMAIL

    if (adminEmail) {
        const hasAccess = user.emailAddresses.some(email => email.emailAddress === adminEmail)
        if (!hasAccess) {
            redirect("/unauthorized")
        }
    }

    return (
        <div className="flex min-h-screen bg-black">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto h-screen bg-[#050505]">
                {children}
            </main>
        </div>
    )
}
