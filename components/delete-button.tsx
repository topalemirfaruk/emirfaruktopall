"use client"

import { Trash2 } from "lucide-react"
import { deleteArticle } from "@/actions/articles"
import { useTransition } from "react"

export function DeleteButton({ id }: { id: number }) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        if (confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
            startTransition(async () => {
                await deleteArticle(id)
            })
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            className="p-2 text-[#6b7280] hover:text-[#ef4444] transition-colors disabled:opacity-50"
            title="Sil"
        >
            <Trash2 className="w-4 h-4" />
        </button>
    )
}
