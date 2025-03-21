import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getUserDashboard } from "@/lib/data"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardArtworks } from "@/components/dashboard-artworks"
import { DashboardActivity } from "@/components/dashboard-activity"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default async function DashboardPage() {
  const dashboard = await getUserDashboard()

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">Artwork</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/explore">Explore</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/collections">Collections</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/upload">Upload</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <DashboardSidebar />

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            <DashboardStats stats={dashboard.stats} />

            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Your Artworks</h2>
                <Button asChild>
                  <Link href="/upload">Upload New</Link>
                </Button>
              </div>

              <DashboardArtworks artworks={dashboard.artworks} />
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <DashboardActivity activities={dashboard.activities} />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 md:px-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Artwork</span>
            <span className="text-sm text-muted-foreground">© 2025 All rights reserved</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

