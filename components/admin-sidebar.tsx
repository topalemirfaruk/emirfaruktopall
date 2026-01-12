"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, PlusCircle, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { SignOutButton, useUser } from "@clerk/nextjs"

const menuItems = [
    { icon: LayoutDashboard, label: "Panel", href: "/admin" },
    { icon: FileText, label: "Makaleler", href: "/admin/articles" },
    { icon: LayoutDashboard, label: "Projeler", href: "/admin/projects" }, // Using Dashboard icon as placeholder or maybe Folder
    { icon: PlusCircle, label: "Yeni Yazı", href: "/admin/articles/new" },
    { icon: Settings, label: "Site Ayarları", href: "/admin/settings" },
]

export function AdminSidebar() {
    const pathname = usePathname()
    const { user } = useUser()

    return (
        <aside className="w-64 bg-[#0a0f0a] border-r border-[#1a2e1a] flex flex-col min-h-screen sticky top-0 h-screen">
            <div className="p-6 border-b border-[#1a2e1a]">
                <h1 className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
                    <span className="text-[#22c55e]">&gt;_</span> ADMIN
                </h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                            pathname === item.href
                                ? "bg-[#22c55e]/10 text-[#22c55e]"
                                : "text-[#b0b0b0] hover:text-white hover:bg-[#1a2e1a]"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-[#1a2e1a]">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <img src={user?.imageUrl} alt="User" className="w-8 h-8 rounded-full" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{user?.fullName}</p>
                        <p className="text-xs text-[#6b7280] truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                    </div>
                </div>
                <SignOutButton>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg text-sm font-medium transition-colors">
                        <LogOut className="w-4 h-4" />
                        Çıkış Yap
                    </button>
                </SignOutButton>
            </div>
        </aside>
    )
}
