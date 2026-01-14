import { Terminal, Users, BookOpen, Heart } from "lucide-react"
import { getSiteSettings } from "@/actions/settings"

export default async function HakkimizdaPage() {
  const settings = await getSiteSettings()

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Terminal className="w-8 h-8 text-[#22c55e]" />
          <h1 className="text-3xl font-bold text-white">Hakkımızda</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 whitespace-pre-wrap">
            {settings?.aboutContent || "Hakkımda içeriği henüz eklenmedi."}
          </p>

          {/* Stats - Updated colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6 text-center">
              <Users className="w-10 h-10 text-[#22c55e] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Juniour</div>
              <div className="text-[#6b7280]">Seviye</div>
            </div>
            <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6 text-center">
              <BookOpen className="w-10 h-10 text-[#22c55e] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Linux</div>
              <div className="text-[#6b7280]">Uzmanlık</div>
            </div>
            <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6 text-center">
              <Heart className="w-10 h-10 text-[#22c55e] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">SysAdmin</div>
              <div className="text-[#6b7280]">Rol</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Hedeflerim</h2>
          <p className="text-[#b0b0b0] mb-6">
            Linux sistem mimarisi, bulut teknolojileri ve DevOps süreçlerinde derinlemesine uzmanlaşmak.
            Edindiğim bilgileri toplulukla paylaşarak açık kaynak ekosistemine katkıda bulunmak.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Yetkinliklerim</h2>
          <p className="text-[#b0b0b0] mb-8">
            Linux Sunucu Yönetimi, Bash Scripting, Docker, Sistem Güvenliği ve Ağ Yönetimi konularında deneyim sahibiyim.
            Sürekli öğrenme ve gelişime odaklıyım.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">Deneyim</h2>
          <div className="space-y-8 mb-12">
            <div className="relative border-l border-[#22c55e]/30 pl-8 ml-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <h3 className="text-xl font-bold text-white">Linux Sistem Yöneticisi</h3>
              <div className="text-[#22c55e] text-sm mb-1">Ahi Evran Üniversitesi • Yarı zamanlı</div>
              <div className="text-[#6b7280] text-sm mb-3">May 2024 - Haz 2025 • Kırşehir, Türkiye</div>
              <p className="text-[#b0b0b0]">
                Sunucu Yönetimi, Linux sistem yönetimi konularında aktif rol aldım.
              </p>
            </div>

            <div className="relative border-l border-[#22c55e]/30 pl-8 ml-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <h3 className="text-xl font-bold text-white">Takım Üyesi</h3>
              <div className="text-[#22c55e] text-sm mb-1">AHİHA • Dönemsel</div>
              <div className="text-[#6b7280] text-sm mb-3">Şub 2024 - Eyl 2024 • Kırşehir, Türkiye</div>
              <p className="text-[#b0b0b0]">
                Teknofest 2024 Sürü İHA kategorisinde katıldığımız yarışmada 4.lük derecesi elde ettik.
              </p>
            </div>

            <div className="relative border-l border-[#22c55e]/30 pl-8 ml-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <h3 className="text-xl font-bold text-white">Stajyer</h3>
              <div className="text-[#22c55e] text-sm mb-1">KCTEK</div>
              <div className="text-[#6b7280] text-sm mb-3">Eyl 2022 - Tem 2023 • Kayseri, Türkiye</div>
              <p className="text-[#b0b0b0]">
                HTML, JavaScript ve web teknolojileri üzerine staj deneyimi.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Eğitim</h2>
          <div className="space-y-8 mb-8">
            <div className="relative border-l border-[#22c55e]/30 pl-8 ml-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <h3 className="text-xl font-bold text-white">Ahi Evran Üniversitesi</h3>
              <div className="text-[#22c55e] text-sm mb-1">Önlisans, Bilgisayar Teknolojisi</div>
              <div className="text-[#6b7280] text-sm mb-2">Eyl 2023 – Haz 2025</div>
              <div className="text-[#b0b0b0] text-sm">Not Ortalaması: 2.95</div>
              <div className="text-[#6b7280] text-sm mt-1">Algoritmalar, C# ve ilgili teknolojiler</div>
            </div>

            <div className="relative border-l border-[#22c55e]/30 pl-8 ml-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              <h3 className="text-xl font-bold text-white">Kayseri Mesleki ve Teknik Anadolu Lisesi</h3>
              <div className="text-[#22c55e] text-sm mb-1">Lise, Bilişim Teknolojileri</div>
              <div className="text-[#6b7280] text-sm mb-2">Eyl 2019 – Haz 2023</div>
              <div className="text-[#6b7280] text-sm mt-1">CSS, MySQL ve web teknolojileri</div>
            </div>
          </div>

          {/* Contact - Updated to dynamic */}
          <div className="bg-[#0d120d] border border-[#1a2e1a] rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
            <div className="space-y-2 text-[#6b7280]">
              {settings?.socialEmail && (
                <p>E-posta: <span className="text-[#22c55e]">{settings.socialEmail}</span></p>
              )}
              {settings?.socialLinkedin && (
                <p>LinkedIn: <span className="text-[#22c55e]">{settings.socialLinkedin}</span></p>
              )}
              {settings?.socialGithub && (
                <p>GitHub: <span className="text-[#22c55e]">{settings.socialGithub}</span></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
