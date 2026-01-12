"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export function GiscusComments() {
    const { theme } = useTheme()

    return (
        <div className="mt-12 pt-8 border-t border-[#1a2e1a]">
            <Giscus
                id="comments"
                repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
                repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
                category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || ""}
                categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""}
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={theme === "dark" || !theme ? "dark" : "light"}
                lang="tr"
                loading="lazy"
            />
        </div>
    )
}
