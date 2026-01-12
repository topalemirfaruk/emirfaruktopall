"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { SidebarContent } from "./sidebar-content"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface MobileSidebarProps {
    settings: any
}

export function MobileSidebar({ settings }: MobileSidebarProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    // Close sidebar when route changes
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden fixed top-4 left-4 z-50 text-[#fff] bg-[#060a06]/80 backdrop-blur-sm border border-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-[#22c55e]"
                >
                    <Menu className="w-5 h-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 border-r border-[#1a2e1a] bg-[#060a06] text-white">
                <SidebarContent settings={settings} />
            </SheetContent>
        </Sheet>
    )
}
