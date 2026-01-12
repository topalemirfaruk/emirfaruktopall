"use client"

import { DiscussionEmbed } from "disqus-react"

interface DisqusCommentsProps {
    url: string
    identifier: string
    title: string
}

export function DisqusComments({ url, identifier, title }: DisqusCommentsProps) {
    const disqusShortname = "emirfaruktopal" // Update this with your actual shortname

    const disqusConfig = {
        url,
        identifier,
        title,
        language: "tr",
    }

    return (
        <div className="mt-12 pt-8 border-t border-[#1a2e1a]">
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
    )
}
