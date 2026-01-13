import { Newspaper, ArrowRight } from "lucide-react"

export function NewsletterCTA() {
    return (
        <div className="my-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1a2e1a] to-[#0d120d] border border-[#22c55e]/20 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#22c55e]/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="p-4 bg-[#22c55e]/10 rounded-xl border border-[#22c55e]/20 text-[#22c55e]">
                    <Newspaper className="w-8 h-8" />
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Yeni İçerikleri Kaçırmayın
                    </h3>
                    <p className="text-[#9ca3af] text-sm md:text-base mb-0">
                        En güncel Linux rehberleri, sistem yöneticiliği ipuçları ve teknoloji haberleri için Google News üzerinden takip edebilirsiniz.
                    </p>
                </div>

                <a
                    href="https://news.google.com/publications/CAAqLggKIihDQklTR0FnTWFoUUtFbVZ0YVhKbVlYSjFhM1J2Y0dGc0xtTnZiU2dBUAE?ceid=TR:tr&oc=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#4ade80] transition-colors whitespace-nowrap"
                >
                    <span>Google News'te Takip Et</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}
