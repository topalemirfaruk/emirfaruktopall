import { getSiteSettings } from "@/actions/settings"
import { SidebarContent } from "./sidebar-content"
import { MobileSidebar } from "./mobile-sidebar"

export async function Sidebar() {
  let settings = await getSiteSettings()

  // Serialize dates if settings exist
  if (settings) {
    settings = {
      ...settings,
      updatedAt: (settings.updatedAt as Date).toISOString() as any // Cast to any to bypass type mismatch quickly
    }
  }

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
