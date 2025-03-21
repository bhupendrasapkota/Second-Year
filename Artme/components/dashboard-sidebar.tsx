"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Image, Heart, Bookmark, Settings, HelpCircle, LogOut } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/artworks", label: "My Artworks", icon: Image },
    { href: "/dashboard/likes", label: "Likes", icon: Heart },
    { href: "/dashboard/saved", label: "Saved", icon: Bookmark },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help", icon: HelpCircle },
  ]

  return (
    <div className="w-full md:w-64 shrink-0">
      <div className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
              isActive(link.href)
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/auth/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Link>
      </div>
    </div>
  )
}

