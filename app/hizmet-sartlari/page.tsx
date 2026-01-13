import { Sidebar } from "@/components/sidebar"

export default function TermsOfService() {
    return (
        <div className="flex min-h-screen bg-[#0a0f0a]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8 md:p-12">
                <h1 className="text-3xl font-bold text-white mb-6">Hizmet Şartları</h1>
                <div className="prose prose-invert max-w-3xl text-[#b0b0b0]">
                    <p>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h3>1. Kabul</h3>
                    <p>Bu web sitesini (emirfaruktopal.com) kullanarak, bu hizmet şartlarını kabul etmiş sayılırsınız.</p>

                    <h3>2. İçerik Kullanımı</h3>
                    <p>Bu sitedeki tüm içerikler (makaleler, kodlar, görseller) bilgilendirme amaçlıdır. İzinsiz kopyalanamaz veya ticari amaçla kullanılamaz.</p>

                    <h3>3. Sorumluluk Reddi</h3>
                    <p>Bu sitede yer alan bilgilerin doğruluğu konusunda azami özen gösterilse de, oluşabilecek hatalardan veya bilgilerin kullanımından doğacak sonuçlardan site sahibi sorumlu tutulamaz. Özellikle sistem yönetimi ve komutlarla ilgili içerikleri uygularken kendi sorumluluğunuzdasınız.</p>

                    <h3>4. Değişiklikler</h3>
                    <p>Bu şartları dilediğimiz zaman değiştirme hakkını saklı tutarız.</p>
                </div>
            </main>
        </div>
    )
}
