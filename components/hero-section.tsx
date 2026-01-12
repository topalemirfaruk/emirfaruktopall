import Link from "next/link"
import { Terminal } from "lucide-react"
import { getSiteSettings } from "@/actions/settings"

export async function HeroSection() {
  const settings = await getSiteSettings()

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0a] via-[#0d1a0d] to-[#0a0f0a]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-[#22c55e] text-[200px] font-mono opacity-20">&gt;_</div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#22c55e] to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#22c55e] to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#22c55e] to-transparent" />
      </div>

      <div className="relative z-10 px-8 py-16 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-8 h-8 text-[#22c55e]" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight uppercase">
          {settings?.ownerName || "EMİR FARUK TOPAL"}
        </h1>
        <h2 className="text-xl md:text-2xl text-[#22c55e] tracking-wide mt-2 mb-6 font-mono uppercase">
          {settings?.ownerTitle || "JUNIOR LINUX SYSTEM ADMINISTRATOR"}
        </h2>

        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-[#6b7280] text-sm md:text-base tracking-[0.2em] uppercase">SİSTEM • OTOMASYON • GÜVENLİK</span>
          <div className="w-1 h-5 bg-[#22c55e]" />
        </div>

        <p className="max-w-2xl text-[#a3a3a3] mb-8 leading-relaxed">
          {settings?.heroDescription}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/hakkimizda"
            className="px-6 py-3 bg-[#22c55e] text-black text-sm font-semibold tracking-wider hover:bg-[#16a34a] transition-colors rounded"
          >
            İLETİŞİME GEÇ
          </Link>
          <Link
            href="/makaleler"
            className="px-6 py-3 bg-transparent border border-[#22c55e]/30 text-[#22c55e] text-sm font-medium tracking-wider hover:bg-[#22c55e]/10 transition-colors rounded"
          >
            BLOG YAZILARI
          </Link>
          <Link
            href="/projelerim"
            className="px-6 py-3 bg-[#0d120d] border border-[#1a2e1a] text-white text-sm font-medium tracking-wider hover:border-[#22c55e]/50 transition-colors rounded"
          >
            PROJELERİM
          </Link>
        </div>
      </div>
    </div>
  )
}
