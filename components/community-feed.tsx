"use client"

import { useState } from "react"
import { Users, MessageCircle, Github, Twitter, Send, Heart, Flag } from "lucide-react"

const discussions = [
    {
        id: 1,
        title: "En iyi hafif Linux dağıtımı hangisi?",
        author: "LinuxFan42",
        avatar: "/linux-user-avatar.jpg",
        replies: 28,
        likes: 45,
        lastActivity: "2 saat önce",
        tags: ["dağıtım", "soru"],
    },
    {
        id: 2,
        title: "Wayland vs X11: 2026'da hangisi tercih edilmeli?",
        author: "DevOpsGuru",
        avatar: "/developer-avatar.png",
        replies: 56,
        likes: 89,
        lastActivity: "5 saat önce",
        tags: ["tartışma", "wayland"],
    },
    {
        id: 3,
        title: "Arch Linux kurulumunda bootloader sorunu",
        author: "ArchNewbie",
        avatar: "/newbie-avatar.png",
        replies: 12,
        likes: 8,
        lastActivity: "1 gün önce",
        tags: ["arch", "yardım"],
    },
]

export function CommunityFeed() {
    const [newPost, setNewPost] = useState("")

    return (
        <div className="flex-1 overflow-y-auto p-8">
            <div className="flex items-center gap-4 mb-8">
                <Users className="w-8 h-8 text-[#22c55e]" />
                <h1 className="text-3xl font-bold text-white">Topluluk</h1>
                <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* New Discussion - Updated colors */}
                    <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6">
                        <h3 className="text-white font-semibold mb-4">Yeni Tartışma Başlat</h3>
                        <textarea
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder="Düşüncelerinizi paylaşın veya soru sorun..."
                            rows={3}
                            className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded-lg p-3 text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#22c55e] resize-none mb-4"
                        />
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg text-sm hover:bg-[#16a34a] transition-colors">
                                <Send className="w-4 h-4" />
                                Paylaş
                            </button>
                        </div>
                    </div>

                    {/* Discussions List - Updated colors */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold">Son Tartışmalar</h3>
                        {discussions.map((disc) => (
                            <div
                                key={disc.id}
                                className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-4 hover:border-[#22c55e]/50 transition-colors cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-medium hover:text-[#22c55e] transition-colors">{disc.title}</h4>
                                        <div className="flex items-center gap-2 mt-1 text-sm text-[#6b7280]">
                                            <span>{disc.author}</span>
                                            <span>•</span>
                                            <span>{disc.lastActivity}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            {disc.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 bg-[#0a0f0a] text-[#6b7280] text-xs rounded border border-[#1a2e1a]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#6b7280] text-sm">
                                        <span className="flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                            {disc.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageCircle className="w-4 h-4" />
                                            {disc.replies}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar - Updated colors */}
                <div className="space-y-6">
                    {/* Stats */}
                    <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6">
                        <h3 className="text-white font-semibold mb-4">Topluluk İstatistikleri</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-[#6b7280]">Üye Sayısı</span>
                                <span className="text-[#22c55e] font-medium">12,458</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#6b7280]">Tartışma</span>
                                <span className="text-[#22c55e] font-medium">3,892</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#6b7280]">Yorum</span>
                                <span className="text-[#22c55e] font-medium">28,451</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6">
                        <h3 className="text-white font-semibold mb-4">Bizi Takip Edin</h3>
                        <div className="space-y-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                                <span>Twitter</span>
                            </a>
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>

                    {/* Rules */}
                    <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Flag className="w-4 h-4 text-[#22c55e]" />
                            Topluluk Kuralları
                        </h3>
                        <ul className="space-y-2 text-sm text-[#6b7280]">
                            <li>• Saygılı ve yapıcı olun</li>
                            <li>• Spam yapmayın</li>
                            <li>• Konuyla ilgili paylaşımlar yapın</li>
                            <li>• Kişisel bilgileri paylaşmayın</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
