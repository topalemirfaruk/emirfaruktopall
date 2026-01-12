"use client"

import { ReactCusdis } from "react-cusdis"

interface CusdisCommentsProps {
    pageId: string
    pageUrl: string
    pageTitle: string
}

export function CusdisComments({ pageId, pageUrl, pageTitle }: CusdisCommentsProps) {
    const appId = process.env.NEXT_PUBLIC_CUSDIS_APP_ID || ""

    return (
        <div className="mt-12 pt-8 border-t border-[#1a2e1a] max-w-4xl mx-auto">
            {appId ? (
                <div style={{ width: '100%' }}>
                    <ReactCusdis
                        attrs={{
                            host: 'https://cusdis.com',
                            appId: appId,
                            pageId: pageId,
                            pageTitle: pageTitle,
                            pageUrl: pageUrl,
                            theme: 'dark'
                        }}
                    />
                </div>
            ) : (
                <div className="bg-[#1a2e1a]/20 border border-[#1a2e1a] rounded-lg p-4 text-center text-[#6b7280]">
                    <p>Yorum sistemi yapılandırması eksik (App ID bulunamadı).</p>
                </div>
            )}
        </div>
    )
}
