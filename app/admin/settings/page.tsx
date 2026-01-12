import { updateSiteSettings, getSiteSettings } from "@/actions/settings"
import { Save } from "lucide-react"

export default async function SettingsPage() {
    const settings = await getSiteSettings()

    return (
        <div className="text-white max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Site Ayarları</h1>

            <form action={updateSiteSettings} className="space-y-8">
                {/* Sidebar Settings */}
                <section className="bg-[#0d120d] p-6 rounded-lg border border-[#1a2e1a]">
                    <h2 className="text-xl font-semibold mb-6 text-[#22c55e]">Kenar Çubuğu (Sidebar)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">Ad Soyad</label>
                            <input
                                name="ownerName"
                                defaultValue={settings?.ownerName}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                        <div>
                            <div>
                                <label className="block text-sm text-[#a3a3a3] mb-2">Ünvan (Sol Köşe)</label>
                                <input
                                    name="sidebarTitle"
                                    defaultValue={settings?.sidebarTitle}
                                    className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-[#a3a3a3] mb-2">Ünvan (Ana Sayfa/Hero)</label>
                                <input
                                    name="ownerTitle"
                                    defaultValue={settings?.ownerTitle}
                                    className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="bg-[#0d120d] p-6 rounded-lg border border-[#1a2e1a]">
                    <h2 className="text-xl font-semibold mb-6 text-[#22c55e]">Ana Sayfa (Hero)</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">Başlık</label>
                            <input
                                name="heroTitle"
                                defaultValue={settings?.heroTitle}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">Açıklama</label>
                            <textarea
                                name="heroDescription"
                                defaultValue={settings?.heroDescription}
                                rows={3}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="bg-[#0d120d] p-6 rounded-lg border border-[#1a2e1a]">
                    <h2 className="text-xl font-semibold mb-6 text-[#22c55e]">Hakkımızda Sayfası</h2>
                    <div>
                        <label className="block text-sm text-[#a3a3a3] mb-2">İçerik</label>
                        <textarea
                            name="aboutContent"
                            defaultValue={settings?.aboutContent}
                            rows={10}
                            className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                        />
                    </div>
                </section>

                {/* Social Media */}
                <section className="bg-[#0d120d] p-6 rounded-lg border border-[#1a2e1a]">
                    <h2 className="text-xl font-semibold mb-6 text-[#22c55e]">Sosyal Medya Linkleri</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">GitHub</label>
                            <input
                                name="socialGithub"
                                defaultValue={settings?.socialGithub}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">Twitter / X</label>
                            <input
                                name="socialTwitter"
                                defaultValue={settings?.socialTwitter || ""}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">LinkedIn</label>
                            <input
                                name="socialLinkedin"
                                defaultValue={settings?.socialLinkedin || ""}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">Email</label>
                            <input
                                name="socialEmail"
                                defaultValue={settings?.socialEmail || ""}
                                className="w-full bg-[#0a0f0a] border border-[#1a2e1a] rounded p-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
                            />
                        </div>
                    </div>
                </section>

                <button
                    type="submit"
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                    <Save className="w-5 h-5" />
                    Ayarları Kaydet
                </button>
            </form>
        </div>
    )
}
