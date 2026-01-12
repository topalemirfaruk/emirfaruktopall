import Link from "next/link"
import { Github, Twitter, MessageCircle, Linkedin, Mail } from "lucide-react"
import { SidebarNav } from "./sidebar-nav"

interface SidebarContentProps {
    settings: any // Replace with proper type if available, using any for now to match current usage
}

export function SidebarContent({ settings }: SidebarContentProps) {
    return (
        <div className="flex flex-col h-full bg-[#060a06] border-r border-[#1a2e1a]">
            {/* Logo / Profile Picture */}
            <Link href="/" className="p-5 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 relative overflow-hidden rounded-full border border-[#22c55e]/30">
                    <img
                        src="https://github.com/topalemirfaruk.png"
                        alt={settings?.ownerName || "Emir Faruk Topal"}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="text-white font-bold text-sm leading-tight tracking-normal">
                        {settings?.ownerName || "Emir Faruk Topal"}
                    </div>
                    <div className="text-[#22c55e] text-[9px] tracking-wide font-mono mt-0.5">
                        {settings?.sidebarTitle || "LINUX SYSTEM ADMIN"}
                    </div>
                </div>
            </Link>

            {/* Navigation (Client Component) */}
            <SidebarNav />

            {/* Social Links */}
            <div className="p-5 border-t border-[#1a2e1a] flex gap-4 overflow-x-auto mt-auto">
                {settings?.socialGithub && (
                    <a
                        href={settings.socialGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                )}
                {settings?.socialTwitter && (
                    <a
                        href={settings.socialTwitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                        <Twitter className="w-4 h-4" />
                    </a>
                )}
                {settings?.socialLinkedin && (
                    <a
                        href={settings.socialLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
                {settings?.socialEmail && (
                    <a
                        href={`mailto:${settings.socialEmail}`}
                        className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                )}
            </div>
        </div>
    )
}
