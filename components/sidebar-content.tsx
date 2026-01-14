import Link from "next/link"
import { Github, Twitter, MessageCircle, Linkedin, Mail, Newspaper } from "lucide-react"
import { SidebarNav } from "./sidebar-nav"
import { MusicPlayer } from "./music-player"

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


            {/* Music Player */}
            <div className="mt-auto">
                <MusicPlayer variant="sidebar" />
            </div>

            {/* Social Links */}
            <div className="p-5 border-t border-[#1a2e1a] flex gap-4 overflow-x-auto">
                {settings?.socialGithub && (
                    <a
                        href={settings.socialGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profilim"
                        className="text-[#9ca3af] hover:text-[#22c55e] transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                )}
                {settings?.socialTwitter && (
                    <a
                        href={settings.socialTwitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter) Profilim"
                        className="text-[#9ca3af] hover:text-[#22c55e] transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                )}
                {settings?.socialLinkedin && (
                    <a
                        href={settings.socialLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profilim"
                        className="text-[#9ca3af] hover:text-[#22c55e] transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {settings?.socialEmail && (
                    <a
                        href={`mailto:${settings.socialEmail}`}
                        aria-label="E-posta Gönder"
                        className="text-[#9ca3af] hover:text-[#22c55e] transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                )}
                {/* Google News - Hardcoded */}
                <a
                    href="https://news.google.com/publications/CAAqLggKIihDQklTR0FnTWFoUUtFbVZ0YVhKbVlYSjFhM1J2Y0dGc0xtTnZiU2dBUAE?ceid=TR:tr&oc=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google News"
                    className="text-[#9ca3af] hover:text-[#22c55e] transition-colors"
                >
                    <Newspaper className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}
