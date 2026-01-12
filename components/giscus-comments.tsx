"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export function GiscusComments() {
    const { theme } = useTheme()

    return (
        <div className="mt-12 pt-8 border-t border-[#1a2e1a]">
            <section id="comments">
                <Giscus
                    id="comments"
                    repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
                    repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
                    category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || ""}
                    categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""}
                    mapping="pathname"
                    strict="0"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="dark" // Always dark for this site design, or use {theme === 'dark' ? 'dark' : 'light'} if light mode is supported
                    lang="tr"
                    loading="lazy"
                />
            </section>
        </div>
    )
}
