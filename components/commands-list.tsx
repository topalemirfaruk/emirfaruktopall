"use client"

import { useState } from "react"
import { Search, Copy, Check, Terminal } from "lucide-react"
import { commands } from "@/lib/data"
import { cn } from "@/lib/utils"

export function CommandsList() {
    const [search, setSearch] = useState("")
    const [copiedId, setCopiedId] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState("Tümü")

    const categories = ["Tümü", ...new Set(commands.map((c) => c.category))]

    const filteredCommands = commands.filter((cmd) => {
        const matchesSearch =
            cmd.name.toLowerCase().includes(search.toLowerCase()) ||
            cmd.description.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = selectedCategory === "Tümü" || cmd.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handleCopy = async (text: string, id: number) => {
        await navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <div className="flex-1 overflow-y-auto p-8">
            <div className="flex items-center gap-4 mb-8">
                <Terminal className="w-8 h-8 text-[#22c55e]" />
                <h1 className="text-3xl font-bold text-white">Komut Rehberi</h1>
                <div className="flex-1 h-px bg-gradient-to-r from-[#22c55e] to-transparent" />
            </div>

            <p className="text-[#6b7280] mb-8 max-w-2xl">
                Linux terminal komutlarının kapsamlı rehberi. Arama yapın, örnekleri inceleyin ve komutları kopyalayın.
            </p>

            {/* Search & Filter - Updated colors */}
            <div className="flex flex-wrap gap-4 mb-8">
                <div className="relative flex-1 min-w-[200px] max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Komut ara..."
                        className="w-full pl-10 pr-4 py-3 bg-[#0d120d] border border-[#1a2e1a] rounded-lg text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#22c55e]"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                selectedCategory === cat
                                    ? "bg-[#22c55e] text-black font-semibold"
                                    : "bg-[#0d120d] text-[#6b7280] hover:text-[#22c55e] hover:bg-[#1a2e1a]",
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Commands Grid - Updated colors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCommands.map((cmd) => (
                    <div
                        key={cmd.id}
                        className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6 hover:border-[#22c55e]/50 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-mono font-bold text-[#22c55e]">{cmd.name}</h3>
                                <span className="text-xs text-[#6b7280] bg-[#0a0f0a] px-2 py-1 rounded mt-1 inline-block">
                                    {cmd.category}
                                </span>
                            </div>
                        </div>

                        <p className="text-[#b0b0b0] text-sm mb-4">{cmd.description}</p>

                        <div className="bg-[#060a06] border border-[#1a2e1a] rounded-lg p-3 mb-4">
                            <code className="text-[#4ade80] text-sm">{cmd.usage}</code>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#6b7280] text-xs uppercase tracking-wider">Örnekler:</p>
                            {cmd.examples.map((example, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between bg-[#060a06] border border-[#1a2e1a] rounded px-3 py-2 group"
                                >
                                    <code className="text-[#4ade80] text-sm font-mono">{example}</code>
                                    <button
                                        onClick={() => handleCopy(example, cmd.id * 100 + idx)}
                                        className="opacity-0 group-hover:opacity-100 text-[#6b7280] hover:text-[#22c55e] transition-all"
                                    >
                                        {copiedId === cmd.id * 100 + idx ? (
                                            <Check className="w-4 h-4 text-[#22c55e]" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
