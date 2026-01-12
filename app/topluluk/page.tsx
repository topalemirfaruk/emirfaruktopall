import { Sidebar } from "@/components/sidebar"
import { CommunityFeed } from "@/components/community-feed"

export default function ToplulukPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0f0a]">
      <Sidebar />
      <main className="flex-1 h-screen overflow-hidden flex flex-col">
        <CommunityFeed />
      </main>
    </div>
  )
}
