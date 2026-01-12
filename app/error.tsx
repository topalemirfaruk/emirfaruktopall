"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0a0f0a] text-white gap-4">
            <h2 className="text-2xl font-bold text-[#22c55e]">Bir şeyler ters gitti!</h2>
            <p className="text-[#a3a3a3] text-center max-w-md">
                Sunucu tarafında beklenmedik bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.
            </p>
            {error.digest && (
                <p className="text-xs text-gray-500 font-mono bg-black/20 p-1 rounded">
                    Hata Kodu: {error.digest}
                </p>
            )}
            <Button
                onClick={() => reset()}
                className="bg-[#22c55e] text-black hover:bg-[#16a34a]"
            >
                Tekrar Dene
            </Button>
        </div>
    )
}
