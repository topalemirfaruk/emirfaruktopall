import Link from "next/link"
import { ShieldAlert } from "lucide-react"

export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0f0a] text-white p-4">
            <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Erişim Reddedildi</h1>
            <p className="text-[#6b7280] mb-8 text-center max-w-md">
                Bu sayfaya erişim yetkiniz bulunmamaktadır. Admin paneli sadece yetkili yöneticiler içindir.
            </p>
            <Link
                href="/"
                className="px-6 py-2 bg-[#1a2e1a] text-[#22c55e] rounded border border-[#22c55e] hover:bg-[#22c55e] hover:text-black transition-colors"
            >
                Ana Sayfaya Dön
            </Link>
        </div>
    )
}
