"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    Home,
    FileText,
    BookOpen,
    Newspaper,
    Terminal,
    Download,
    Users,
    Info,
    Folder,
    Globe,
} from "lucide-react"

const menuItems = [
    { icon: Home, label: "Ana Sayfa", href: "/" },
    { icon: FileText, label: "Makaleler", href: "/makaleler" },
    { icon: BookOpen, label: "Öğreticiler", href: "/ogreticiler" },
    { icon: Newspaper, label: "Haberler", href: "/haberler" },
    { icon: Terminal, label: "Komut Rehberi", href: "/komutlar" },
    { icon: Download, label: "Dağıtımlar", href: "/dagitimlar" },
    { icon: Folder, label: "Projelerim", href: "/projelerim" },
    { icon: Globe, label: "Açık Kaynak Dünyası", href: "/acik-kaynak" },
    { icon: Info, label: "Hakkımızda", href: "/hakkimizda" },
]

export function SidebarNav() {
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <nav className="flex-1 px-3 py-2 space-y-1">
            {menuItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded text-left transition-colors",
                        isActive(item.href)
                            ? "bg-[#22c55e] text-black font-medium"
                            : "text-[#9ca3af] hover:text-[#22c55e] hover:bg-[#0d120d]",
                    )}
                >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                </Link>
            ))}
        </nav>
    )
}
