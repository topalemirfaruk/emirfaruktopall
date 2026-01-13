import { Sidebar } from "@/components/sidebar"

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen bg-[#0a0f0a]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8 md:p-12">
                <h1 className="text-3xl font-bold text-white mb-6">Gizlilik Politikası</h1>
                <div className="prose prose-invert max-w-3xl text-[#b0b0b0]">
                    <p>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h3>1. Toplanan Veriler</h3>
                    <p>Sitemizi ziyaret ettiğinizde, deneyiminizi geliştirmek ve site trafiğini analiz etmek amacıyla çerezler (cookies) ve benzeri teknolojiler kullanabiliriz.</p>

                    <h3>2. Kullanım Amacı</h3>
                    <p>Toplanan bilgiler, yalnızca site performansını ölçmek ve içerik kalitesini artırmak için kullanılır. Kişisel verileriniz (yorum yaparken girdiğiniz ad/soyad hariç) üçüncü taraflarla paylaşılmaz.</p>

                    <h3>3. Dış Bağlantılar</h3>
                    <p>Bu site, başka web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz.</p>

                    <h3>4. İletişim</h3>
                    <p>Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.</p>
                </div>
            </main>
        </div>
    )
}
