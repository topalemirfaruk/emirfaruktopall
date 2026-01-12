import { Sidebar } from "@/components/sidebar"
import { CommandsList } from "@/components/commands-list"

export default function KomutlarPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0f0a]">
      <Sidebar />
      <main className="flex-1 h-screen overflow-hidden flex flex-col">
        <CommandsList />
      </main>
    </div>
  )
}
