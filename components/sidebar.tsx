import { getSiteSettings } from "@/actions/settings"
import { SidebarContent } from "./sidebar-content"
import { MobileSidebar } from "./mobile-sidebar"

export async function Sidebar() {
  const settings = await getSiteSettings()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col min-h-screen sticky top-0 h-screen">
        <SidebarContent settings={settings} />
      </aside>

      {/* Mobile Sidebar */}
      <MobileSidebar settings={settings} />
    </>
  )
}
